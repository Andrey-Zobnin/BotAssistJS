// Функция открытия проводника
function openExplorer() {
  alert('Для открытия проводника воспользуйтесь сочетанием Win+E (Windows) или Finder (Mac). Веб-страницы не могут напрямую открывать системный проводник.');
}

// Функция открытия сайтов нейросетей
function openNeuroSites() {
  const sites = [
    { name: "ChatGPT", url: "https://chat.openai.com/" },
    { name: "YandexGPT", url: "https://ya.ru/gpt" },
    { name: "Midjourney", url: "https://midjourney.com/" },
    { name: "Suno (музыка)", url: "https://app.suno.ai/" },
    { name: "Stable Diffusion", url: "https://stablediffusionweb.com/" },
    { name: "Google Gemini", url: "https://gemini.google.com/" }
  ];
  
  let list = sites.map(s => `
    <a href="${s.url}" target="_blank" 
       style="display:block; padding:12px; margin:10px 0; 
              background:#f8fafc; border-radius:10px; 
              text-decoration:none; color:#185a9d;
              box-shadow:0 2px 8px rgba(0,0,0,0.05);
              transition:all 0.3s;">
      <i class="fas fa-external-link-alt" style="margin-right:10px"></i>${s.name}
    </a>
  `).join('');
  
  let win = window.open("", "_blank", "width=450,height=500");
  win.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Нейросети</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
      <style>
        body { 
          font-family: 'Montserrat', sans-serif; 
          background: linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%);
          padding: 25px;
          color: #243b55;
        }
        h2 { 
          color: #43cea2; 
          text-align: center;
          margin-top: 0;
        }
        a:hover { 
          transform: translateX(5px); 
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          background: #fff;
        }
      </style>
    </head>
    <body>
      <h2><i class="fas fa-brain"></i> Популярные нейросети</h2>
      <div style="margin-top:20px">${list}</div>
      <div style="margin-top:25px; text-align:center; color:#888; font-size:0.9em;">
        Закройте окно после использования
      </div>
    </body>
    </html>
  `);
}

// Функция открытия VS Code онлайн
function openVSCode() {
  const vsLinks = [
    { name: "vscode.dev", url: "https://vscode.dev/" },
    { name: "GitHub Codespaces", url: "https://github.com/codespaces" },
    { name: "Replit", url: "https://replit.com/" }
  ];
  
  let list = vsLinks.map(s => `
    <a href="${s.url}" target="_blank" 
       style="display:block; padding:12px; margin:10px 0; 
              background:#f8fafc; border-radius:10px; 
              text-decoration:none; color:#43cea2;
              box-shadow:0 2px 8px rgba(0,0,0,0.05);
              transition:all 0.3s;">
      <i class="fas fa-code" style="margin-right:10px"></i>${s.name}
    </a>
  `).join('');
  
  let win = window.open("", "_blank", "width=450,height=350");
  win.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Онлайн редакторы</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
      <style>
        body { 
          font-family: 'Montserrat', sans-serif; 
          background: linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%);
          padding: 25px;
          color: #243b55;
        }
        h2 { 
          color: #43cea2; 
          text-align: center;
          margin-top: 0;
        }
        a:hover { 
          transform: translateX(5px); 
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          background: #fff;
        }
      </style>
    </head>
    <body>
      <h2><i class="fas fa-laptop-code"></i> Онлайн редакторы кода</h2>
      <div style="margin-top:20px">${list}</div>
    </body>
    </html>
  `);
}

// Функция открытия переводчика
function openTranslator() {
  window.open("https://translate.google.com/", "_blank", "noopener,noreferrer");
}

// Функция получения полезных ссылок
function getUsefulLinks() {
  const links = [
    { name: "Stack Overflow", url: "https://stackoverflow.com/" },
    { name: "MDN Web Docs", url: "https://developer.mozilla.org/en-US/" },
    { name: "GitHub", url: "https://github.com/" },
    { name: "Dev.to", url: "https://dev.to/" },
    { name: "FreeCodeCamp", url: "https://www.freecodecamp.org/" }
  ];
  
  let list = links.map(s => `
    <a href="${s.url}" target="_blank" 
       style="display:block; padding:12px; margin:10px 0; 
              background:#f8fafc; border-radius:10px; 
              text-decoration:none; color:#185a9d;
              box-shadow:0 2px 8px rgba(0,0,0,0.05);
              transition:all 0.3s;">
      <i class="fas fa-external-link-alt" style="margin-right:10px"></i>${s.name}
    </a>
  `).join('');
  
  let win = window.open("", "_blank", "width=450,height=400");
  win.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Ресурсы для разработчиков</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
      <style>
        body { 
          font-family: 'Montserrat', sans-serif; 
          background: linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%);
          padding: 25px;
          color: #243b55;
        }
        h2 { 
          color: #185a9d; 
          text-align: center;
          margin-top: 0;
        }
        a:hover { 
          transform: translateX(5px); 
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          background: #fff;
        }
      </style>
    </head>
    <body>
      <h2><i class="fas fa-book-open"></i> Ресурсы для разработчиков</h2>
      <div style="margin-top:20px">${list}</div>
    </body>
    </html>
  `);
}

// Функция открытия мессенджеров (НОВОЕ)
function openMessengers() {
  const messengers = [
    { name: "Telegram Web", url: "https://web.telegram.org/" },
    { name: "WhatsApp Web", url: "https://web.whatsapp.com/" },
    { name: "Discord", url: "https://discord.com/app" },
    { name: "Viber", url: "https://account.viber.com/ru/login" }
  ];
  
  let list = messengers.map(s => `
    <a href="${s.url}" target="_blank" 
       style="display:block; padding:12px; margin:10px 0; 
              background:#f8fafc; border-radius:10px; 
              text-decoration:none; color:#0088cc;
              box-shadow:0 2px 8px rgba(0,0,0,0.05);
              transition:all 0.3s;">
      <i class="fas fa-comments" style="margin-right:10px"></i>${s.name}
    </a>
  `).join('');
  
  let win = window.open("", "_blank", "width=450,height=350");
  win.document.write(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Веб-мессенджеры</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
      <style>
        body { 
          font-family: 'Montserrat', sans-serif; 
          background: linear-gradient(135deg, #f5f7fa 0%, #e4edf5 100%);
          padding: 25px;
          color: #243b55;
        }
        h2 { 
          color: #0088cc; 
          text-align: center;
          margin-top: 0;
        }
        a:hover { 
          transform: translateX(5px); 
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
          background: #fff;
        }
      </style>
    </head>
    <body>
      <h2><i class="fas fa-comment-dots"></i> Веб-мессенджеры</h2>
      <div style="margin-top:20px">${list}</div>
    </body>
    </html>
  `);
}

// --- Логика чат-бота ---
const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');

// Отправка сообщения
function sendMessage() {
  const messageText = messageInput.value.trim();
  if (messageText !== '') {
    addMessage('user', messageText);
    const botResponse = getBotResponse(messageText);
    
    // Имитация задержки ответа
    setTimeout(() => {
      addMessage('bot', botResponse);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }, 600);
    
    messageInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }
}

// Добавление сообщения в чат
function addMessage(sender, message) {
  const msgDiv = document.createElement('div');
  msgDiv.className = `chat-message ${sender}`;
  
  const bubbleDiv = document.createElement('div');
  bubbleDiv.className = 'bubble';
  bubbleDiv.textContent = message;
  
  // Добавляем иконку для бота
  if (sender === 'bot') {
    const icon = document.createElement('i');
    icon.className = 'fas fa-robot';
    icon.style.marginRight = '10px';
    bubbleDiv.prepend(icon);
  }
  
  msgDiv.appendChild(bubbleDiv);
  chatMessages.appendChild(msgDiv);
}

// Генерация ответа бота
function getBotResponse(userMessage) {
  const text = userMessage.toLowerCase();
  
  if (text.includes('привет') || text.includes('здравствуй')) {
    return 'Привет! Чем могу помочь?';
  }
  if (text.includes('проводник')) {
    return 'Чтобы открыть проводник, нажмите первую кнопку слева.';
  }
  if (text.includes('нейро') || text.includes('gpt') || text.includes('ии')) {
    return 'Нажмите кнопку "Нейросети" для доступа к популярным ИИ-сервисам.';
  }
  if (text.includes('vscode') || text.includes('код') || text.includes('редактор')) {
    return 'Используйте кнопку "VS Code" для онлайн-редакторов кода.';
  }
  if (text.includes('перевод') || text.includes('translate')) {
    return 'Кнопка "Переводчик" открывает Google Translate.';
  }
  if (text.includes('ресурс') || text.includes('материал')) {
    return 'Кнопка "Ресурсы" содержит полезные ссылки для разработчиков.';
  }
  if (text.includes('телеграм') || text.includes('whatsapp') || text.includes('мессенджер')) {
    return 'Нажмите кнопку "Мессенджеры" для доступа к веб-версиям.';
  }
  if (text.includes('спасибо') || text.includes('благодарю')) {
    return 'Всегда рад помочь! Обращайтесь ещё! 😊';
  }
  if (text.includes('помощь') || text.includes('help')) {
    return 'Я могу помочь с доступом к инструментам: проводник, нейросети, редакторы кода, мессенджеры. Просто спросите!';
  }
  
  return 'Извините, я пока понимаю только базовые команды. Попробуйте спросить о доступных инструментах.';
}

// Инициализация чата
addMessage('bot', 'Привет! Я ваш цифровой помощник. Чем могу помочь?');