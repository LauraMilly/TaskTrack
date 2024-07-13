document.getElementById('open_btn').addEventListener('click', function () {
    document.getElementById('sidebar').classList.toggle('open-sidebar');
});

document.addEventListener('DOMContentLoaded', function() {
  const daysContainer = document.getElementById('days-container');
  const monthYearDisplay = document.getElementById('month-year');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');


  const monthNames = [
    "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
    "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
  ];

  
  let currentDate = new Date();
  let currentMonth = currentDate.getMonth();
  let currentYear = currentDate.getFullYear();

  function updateCalendar(month, year) {
 
    daysContainer.innerHTML = '';


    monthYearDisplay.textContent = `${monthNames[month]} ${year}`;

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfWeek = new Date(year, month, 1).getDay();


    for (let i = 0; i < firstDayOfWeek; i++) {
      const emptyDayDiv = document.createElement('div');
      emptyDayDiv.classList.add('day', 'empty');
      daysContainer.appendChild(emptyDayDiv);
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const dayDiv = document.createElement('div');
      dayDiv.classList.add('day');
      dayDiv.textContent = day;

      dayDiv.addEventListener('click', function() {
        alert(`Você clicou no dia ${day} de ${monthNames[month]} de ${year}`);
      });

      daysContainer.appendChild(dayDiv);
    }
  }
  updateCalendar(currentMonth, currentYear);

  prevBtn.addEventListener('click', function() {
    currentMonth--;
    if (currentMonth < 0) {
      currentMonth = 11;
      currentYear--;
    }
    updateCalendar(currentMonth, currentYear);
  });

  nextBtn.addEventListener('click', function() {
    currentMonth++;
    if (currentMonth > 11) {
      currentMonth = 0;
      currentYear++;
    }
    updateCalendar(currentMonth, currentYear);
  });
});

$(document).ready(function() {
  const todoForm = $('#todo-form');
  const taskInput = $('#task-input');
  const taskList = $('#task-list');

  todoForm.submit(function(event) {
    event.preventDefault(); 

    const taskName = taskInput.val().trim();

    if (taskName !== '') {
      const newTask = $('<li>').addClass('task-item');
      const checkbox = $('<input>').attr({
        type: 'checkbox',
        class: 'task-checkbox' 
      });
      const label = $('<label>').text(taskName);

      newTask.append(checkbox);
      newTask.append(label);
      taskList.append(newTask);

      taskInput.val('');
    }
  });

  $(document).on('change', '.task-checkbox', function() {
    $(this).closest('li').toggleClass('completed', this.checked);
  });
});

document.addEventListener('DOMContentLoaded', function() {
  var verButton = document.getElementById('verButton');
  var modal = document.getElementById('modal');

  verButton.addEventListener('click', function() {
    modal.style.display = 'block';
  });
});

function closeModal() {
  var modal = document.getElementById('modal');
  modal.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  const chatMain = document.querySelector('.chat-main');
  if (!chatMain) return;

  const messageInput = chatMain.querySelector('#messageInput');
  const sendButton = chatMain.querySelector('#sendButton');
  const messageList = chatMain.querySelector('.message-list');

  sendButton.addEventListener('click', function() {
    sendMessage();
  });

  messageInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault(); 
      sendMessage();
    }
  });

  function sendMessage() {
    const messageText = messageInput.value.trim();
    if (messageText !== '') {
      const messageSent = document.createElement('div');
      messageSent.classList.add('message', 'sent', 'my-message');
      messageSent.innerHTML = `<p>${messageText}</p>`;
      messageList.appendChild(messageSent);
      messageInput.value = '';
      messageList.scrollTop = messageList.scrollHeight;

      adjustMessageInputPosition(); 
    }
  }

  function adjustMessageInputPosition() {
    messageInput.style.top = `${messageList.clientHeight}px`;
  }

  function simulateReceivedMessage(messageText) {
    const messageReceived = document.createElement('div');
    messageReceived.classList.add('message', 'received');
    messageReceived.innerHTML = `<p>${messageText}</p>`;
    messageList.appendChild(messageReceived);
    messageList.scrollTop = messageList.scrollHeight;

    adjustMessageInputPosition(); 
  }

  simulateReceivedMessage('Oii, já está me seguindo no Github?');
});
