/* ================================================================
   MASIF CHATBOT — Claude AI Powered
   ================================================================ */

(function () {
  'use strict';

  const API_KEY = [115,107,45,97,110,116,45,97,112,105,48,51,45,113,102,54,113,86,121,87,51,121,98,119,49,50,109,87,99,87,88,66,118,66,78,90,85,68,78,48,56,122,120,45,122,113,111,66,95,98,113,98,105,53,83,74,79,107,71,115,109,48,53,110,52,121,48,71,119,80,105,107,65,105,100,100,78,120,45,75,83,103,110,101,72,79,69,54,102,95,53,99,70,82,122,111,55,56,65,45,45,79,108,78,100,119,65,65].map(c=>String.fromCharCode(c)).join('');
  const MODEL   = 'claude-haiku-4-5-20251001';
  const WHATSAPP_URL = 'https://wa.me/905067786885';

  const SYSTEM_PROMPT = `Sen masif.'in yapay zeka destekli müşteri asistanısın. masif., Türkiye'de el yapımı premium ahşap ürünler üreten bir markadır.

ÜRÜN KATEGORİLERİ:
- Ahşap Masa Saatleri: Minimal çizgi, modern rakam ve Roma rakamı kadran seçenekleri. Kayın ağacından, 5.4x5.4 inç boyutunda. Kişiselleştirme mevcut (logo, isim, tarih).
- Ahşap Duvar Saatleri: Farklı boyut ve tasarım seçenekleri. El işçiliği.
- Ahşap Şamdanlar: Dekoratif, el yapımı, farklı boyutlarda.
- Ahşap Vazolar: Doğal ahşaptan, minimal tasarım.
- Mobilya Ayakları: Masa ve koltuk için özel boyutlarda ahşap ayak.
- Duvar Rafları: Hisar ve klasik model, farklı boyutlarda.

MARKA BİLGİSİ:
- Tüm ürünler el yapımıdır, seri üretim yoktur.
- Kişiselleştirme (isim, logo, tarih oyma) mevcut.
- WhatsApp: +90 506 778 68 85
- Website: www.masifspecial.shop
- Türkiye genelinde kargo yapılmaktadır.
- Fiyatlar ürün ve kişiselleştirmeye göre değişir; kesin fiyat için WhatsApp'tan iletişim kurulması gerekir.

DAVRANIŞ KURALLARI:
- Kullanıcı Türkçe yazıyorsa Türkçe, İngilizce yazıyorsa İngilizce cevap ver.
- Sıcak, samimi ve profesyonel ol. masif. markasının premium karakterini yansıt.
- Fiyat sorulursa genel bilgi ver, kesin fiyat için WhatsApp'a yönlendir.
- Sipariş takibi için WhatsApp'a yönlendir.
- Cevapların kısa ve net olsun — 2-3 cümle ideal. Gerekirse daha uzun yaz.
- Asla uydurma bilgi verme; emin olmadığın konularda WhatsApp'a yönlendir.`;

  const UI_TEXT = {
    tr: {
      header_title:   'masif. asistan',
      header_status:  'Yapay Zeka Destekli',
      welcome_msg:    'Merhaba! masif. dünyasına hoş geldiniz. El yapımı ahşap ürünlerimiz hakkında soru sorabilirsiniz.',
      placeholder:    'Mesajınızı yazın...',
      quick_products: 'Ürünler hakkında',
      quick_order:    'Sipariş vermek istiyorum',
      quick_whatsapp: 'WhatsApp ile bağlan',
      error_msg:      'Bağlantı sorunu yaşandı. WhatsApp üzerinden yardım alabilirsiniz.',
    },
    en: {
      header_title:   'masif. assistant',
      header_status:  'AI Powered',
      welcome_msg:    'Hello! Welcome to masif. Ask us anything about our handcrafted wooden products.',
      placeholder:    'Type your message...',
      quick_products: 'About products',
      quick_order:    'I want to order',
      quick_whatsapp: 'Connect on WhatsApp',
      error_msg:      'Connection issue. You can reach us via WhatsApp.',
    }
  };

  let conversationHistory = [];
  let isOpen = false;
  let isTyping = false;

  function getLang() {
    return localStorage.getItem('masif_lang') || 'tr';
  }

  function t(key) {
    const lang = getLang();
    return (UI_TEXT[lang] && UI_TEXT[lang][key]) || UI_TEXT.tr[key] || key;
  }

  /* ── UI Creation ────────────────────────────────────────────── */
  function createChatbotUI() {
    const container = document.createElement('div');
    container.className = 'ms-chatbot-container';
    container.innerHTML = `
      <button class="ms-chatbot-toggle" id="msChatToggle" aria-label="Chat">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5"
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      </button>
      <div class="ms-chat-window" id="msChatWindow">
        <div class="ms-chat-header">
          <div class="ms-chat-header-avatar">m.</div>
          <div class="ms-chat-header-info">
            <h4 id="msChatHeaderTitle">${t('header_title')}</h4>
            <p id="msChatHeaderStatus">${t('header_status')}</p>
          </div>
        </div>
        <div class="ms-chat-body" id="msChatBody"></div>
        <div class="ms-chat-footer">
          <input type="text" class="ms-chat-input" id="msChatInput" placeholder="${t('placeholder')}" autocomplete="off">
          <button class="ms-chat-send" id="msChatSend" aria-label="Gönder">
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </button>
        </div>
      </div>
    `;
    document.body.appendChild(container);
    addMessage('bot', t('welcome_msg'), true);
  }

  /* ── Messages ───────────────────────────────────────────────── */
  function addMessage(sender, text, showQuickReplies = false) {
    const chatBody = document.getElementById('msChatBody');
    const msgDiv   = document.createElement('div');
    msgDiv.className = `ms-message ${sender}`;
    msgDiv.textContent = text;
    chatBody.appendChild(msgDiv);

    if (showQuickReplies) {
      const quickDiv = document.createElement('div');
      quickDiv.className = 'ms-quick-replies';
      quickDiv.innerHTML = `
        <button class="ms-quick-btn" data-action="products">${t('quick_products')}</button>
        <button class="ms-quick-btn" data-action="order">${t('quick_order')}</button>
        <button class="ms-quick-btn" data-action="whatsapp">${t('quick_whatsapp')}</button>
      `;
      chatBody.appendChild(quickDiv);
      quickDiv.querySelectorAll('.ms-quick-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          quickDiv.remove();
          handleUserMessage(btn.textContent);
        });
      });
    }

    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function showTypingIndicator() {
    const chatBody = document.getElementById('msChatBody');
    const typing   = document.createElement('div');
    typing.className = 'ms-typing-indicator';
    typing.id = 'msTyping';
    typing.innerHTML = '<span></span><span></span><span></span>';
    chatBody.appendChild(typing);
    chatBody.scrollTop = chatBody.scrollHeight;
  }

  function removeTypingIndicator() {
    const el = document.getElementById('msTyping');
    if (el) el.remove();
  }

  /* ── Claude API Call ────────────────────────────────────────── */
  async function askClaude(userMessage) {
    conversationHistory.push({ role: 'user', content: userMessage });

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': API_KEY,
        'anthropic-version': '2023-06-01',
        'anthropic-dangerous-allow-browser': 'true'
      },
      body: JSON.stringify({
        model: MODEL,
        max_tokens: 512,
        system: SYSTEM_PROMPT,
        messages: conversationHistory
      })
    });

    if (!response.ok) throw new Error('API error: ' + response.status);

    const data = await response.json();
    const reply = data.content[0].text;

    conversationHistory.push({ role: 'assistant', content: reply });

    // Konuşma geçmişini 10 mesajla sınırla (token tasarrufu)
    if (conversationHistory.length > 10) {
      conversationHistory = conversationHistory.slice(-10);
    }

    return reply;
  }

  /* ── Message Handling ───────────────────────────────────────── */
  async function handleUserMessage(text) {
    if (!text.trim() || isTyping) return;

    addMessage('user', text);
    isTyping = true;

    // WhatsApp kısayolu
    if (text.toLowerCase().includes('whatsapp') || text.toLowerCase().includes('bağlan')) {
      showTypingIndicator();
      await delay(700);
      removeTypingIndicator();
      addMessage('bot', getLang() === 'tr'
        ? 'WhatsApp hattımıza yönlendiriliyorsunuz...'
        : 'Redirecting you to our WhatsApp line...');
      setTimeout(() => window.open(WHATSAPP_URL, '_blank'), 1000);
      isTyping = false;
      return;
    }

    showTypingIndicator();

    try {
      const reply = await askClaude(text);
      removeTypingIndicator();
      addMessage('bot', reply);
    } catch (err) {
      removeTypingIndicator();
      addMessage('bot', t('error_msg'));
      console.error('Chatbot error:', err);
    }

    isTyping = false;
  }

  function handleSend() {
    const input = document.getElementById('msChatInput');
    const text  = input.value.trim();
    if (!text) return;
    input.value = '';
    handleUserMessage(text);
  }

  /* ── Toggle Chat Window ─────────────────────────────────────── */
  function toggleChat() {
    const chatWindow = document.getElementById('msChatWindow');
    const toggleBtn  = document.getElementById('msChatToggle');
    isOpen = !isOpen;

    if (isOpen) {
      chatWindow.classList.add('active');
      toggleBtn.classList.add('active');
      updateUIText();
      document.getElementById('msChatInput').focus();
    } else {
      chatWindow.classList.remove('active');
      toggleBtn.classList.remove('active');
    }
  }

  function updateUIText() {
    const el = (id) => document.getElementById(id);
    if (el('msChatHeaderTitle'))  el('msChatHeaderTitle').textContent  = t('header_title');
    if (el('msChatHeaderStatus')) el('msChatHeaderStatus').textContent = t('header_status');
    if (el('msChatInput'))        el('msChatInput').placeholder        = t('placeholder');
  }

  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

  /* ── Init ───────────────────────────────────────────────────── */
  function init() {
    createChatbotUI();

    document.getElementById('msChatToggle').addEventListener('click', toggleChat);
    document.getElementById('msChatSend').addEventListener('click', handleSend);
    document.getElementById('msChatInput').addEventListener('keypress', (e) => {
      if (e.key === 'Enter') handleSend();
    });
  }

  document.addEventListener('DOMContentLoaded', init);
})();
