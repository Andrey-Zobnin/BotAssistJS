function openExplorer() {
  alert('Проводник можно открыть вручную в вашей операционной системе. Веб-страницы не могут напрямую открывать файловый менеджер по соображениям безопасности.');
}
function openNeuroSites() {
  const sites = [
    { name: "ChatGPT", url: "https://chat.openai.com/" },
    { name: "YandexGPT", url: "https://ya.ru/gpt" },
    { name: "Midjourney (через Discord)", url: "https://midjourney.com/" },
    { name: "Suno (музыка)", url: "https://app.suno.ai/" },
    { name: "Stable Diffusion", url: "https://stablediffusionweb.com/" },
    { name: "Google Gemini", url: "https://gemini.google.com/" }
  ];
  let list = sites.map(s => `<a href="${s.url}" target="_blank" style="color:#185a9d;text-decoration:none;display:block;margin:8px 0;">${s.name}</a>`).join('');
  let win = window.open("", "_blank", "width=400,height=520");
  win.document.write(`
    <title>Сайты нейронок</title>
    <body style="font-family:Montserrat,sans-serif;background:#f8fafc;color:#243b55;padding:28px;">
      <h2>Популярные сайты нейронок</h2>
      ${list}
      <div style="margin-top:18px;font-size:0.95em;color:#aaa;">Закройте это окно после перехода.</div>
    </body>
  `);
}
function openVSCode() {
  const vsLinks = [
    { name: "vscode.dev", url: "https://vscode.dev/" },
    { name: "GitHub Codespaces", url: "https://github.com/codespaces" },
    { name: "Replit", url: "https://replit.com/" }
  ];
  let list = vsLinks.map(s => `<a href="${s.url}" target="_blank" style="color:#43cea2;text-decoration:none;display:block;margin:8px 0;">${s.name}</a>`).join('');
  let win = window.open("", "_blank", "width=400,height=320");
  win.document.write(`
    <title>VS Code Online</title>
    <body style="font-family:Montserrat,sans-serif;background:#f8fafc;color:#243b55;padding:28px;">
      <h2>VS Code Online и аналоги</h2>
      ${list}
      <div style="margin-top:18px;font-size:0.95em;color:#aaa;">Закройте это окно после перехода.</div>
    </body>
  `);
}

function openTranslator() {
  window.open("https://translate.google.com/", "_blank");
}

function getUsefulLinks() {
  const links = [
      { name: "Stack Overflow", url: "https://stackoverflow.com/" },
      { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/" },
      { name: "GitHub", url: "https://github.com/" },
      { name: "Dev.to", url: "https://dev.to/" },
      { name: "FreeCodeCamp", url: "https://www.freecodecamp.org/" }
  ];
  let list = links.map(s => `<a href="${s.url}" target="_blank" style="color:#185a9d;text-decoration:none;display:block;margin:8px 0;">${s.name}</a>`).join('');
  let win = window.open("", "_blank", "width=400,height=420");
  win.document.write(`
      <title>Полезные ссылки для разработчика</title>
      <body style="font-family:Montserrat,sans-serif;background:#f8fafc;color:#243b55;padding:28px;">
          <h2>Полезные ресурсы</h2>
          ${list}
          <div style="margin-top:18px;font-size:0.95em;color:#aaa;">Закройте это окно после перехода.</div>
      </body>
  `);
}


// --- ЧАТ-БОТ ЛОГИКА ---
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');

function sendMessage() {
  const messageText = messageInput.value.trim();
  if (messageText !== '') {
    addMessage('user', messageText);
    const botResponse = getBotResponse(messageText);
    setTimeout(() => {
      addMessage('bot', botResponse);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 450);
    messageInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

function addMessage(sender, message) {
  const msgDiv = document.createElement('div');
  msgDiv.className = 'chat-message ' + sender;
  const bubbleDiv = document.createElement('div');
  bubbleDiv.className = 'bubble';
  bubbleDiv.textContent = message;
  msgDiv.appendChild(bubbleDiv);
  chatMessages.appendChild(msgDiv);
}
function openMessengers() {
  const messengers = [
    { name: "Telegram Web", url: "https://web.telegram.org/" },
    { name: "WhatsApp Web", url: "https://web.whatsapp.com/" }
  ];
  let list = messengers.map(s => `<a href="${s.url}" target="_blank" style="color:#0088cc;text-decoration:none;display:block;margin:8px 0;padding:8px 12px;border-radius:8px;background:#f0f8ff;transition:background 0.2s;">${s.name}</a>`).join('');
  let win = window.open("", "_blank", "width=400,height=220");
  win.document.write(`
    <title>Веб-мессенджеры</title>
    <body style="font-family:Montserrat,sans-serif;background:#f8fafc;color:#243b55;padding:28px;">
      <h2 style="margin-top:0;color:#0088cc;">Веб-версии мессенджеров</h2>
      ${list}
      <div style="margin-top:18px;font-size:0.95em;color:#aaa;">Закройте это окно после перехода.</div>
    </body>
  `);
}

// Обновим функцию getBotResponse для обработки запросов о мессенджерах
function getBotResponse(userMessage) {
  const text = userMessage.toLowerCase();
  if (text.includes('привет') || text.includes('здравствуй')) {
    return 'Здравствуйте! Чем могу помочь?';
  }
  if (text.includes('проводник')) {
    return 'Чтобы открыть проводник, воспользуйтесь первой кнопкой слева.';
  }
  if (text.includes('нейро') || text.includes('чатгпт') || text.includes('gpt')) {
    return 'Нажмите кнопку "Сайты нейронок" для списка популярных сервисов с ИИ.';
  }
  if (text.includes('vscode') || text.includes('код') || text.includes('онлайн')) {
    return 'Кнопка "VS Code Online" открывает облачные редакторы. Попробуйте!';
  }
  if (text.includes('переводчик')) {
    return 'Кнопка "Переводчик" откроет Google Translate в новой вкладке.';
  }
  if (text.includes('ссылки') || text.includes('полезные ресурсы')) {
    return 'Кнопка "Полезные ссылки" содержит подборку ресурсов для разработчиков.';
  }
  if (text.includes('телеграм') || text.includes('whatsapp') || text.includes('ватсап') || text.includes('мессенджер')) {
    return 'Нажмите кнопку "Мессенджеры" для доступа к веб-версиям Telegram и WhatsApp.';
  }
  if (text.includes('спасибо')) {
    return 'Пожалуйста! Если нужны ещё инструменты — спрашивайте!';
  }
  if (text.match(/(как|help|помоги|что делать)/)) {
    return 'Я подскажу, какие инструменты доступны — выберите действие или задайте вопрос!';
  }
  return 'Извините, я пока понимаю только простые команды и вопросы о доступных инструментах.';
}