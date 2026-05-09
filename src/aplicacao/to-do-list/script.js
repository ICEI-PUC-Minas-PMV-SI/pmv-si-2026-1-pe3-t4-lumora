// ====================== ESTADO DA APLICAÇÃO ======================
let tasks = JSON.parse(localStorage.getItem('lumora-tasks') || '[]');
let streak = parseInt(localStorage.getItem('lumora-streak') || '0');
let trophy = parseInt(localStorage.getItem('lumora-trophy') || '5');
let lastStreakDate = localStorage.getItem('lumora-last-streak-date') || null;
let currentDate = new Date();

// ====================== SELETORES ======================
const taskList = document.getElementById('task-list');
const streakCount = document.getElementById('streak-count');
const trophyCount = document.getElementById('trophy-count');
const progressBar = document.getElementById('progress-bar');
const taskBadge = document.getElementById('task-badge');
const selectedDayName = document.getElementById('selected-day-name');
const btnPrevDay = document.getElementById('btn-prev-day');
const btnNextDay = document.getElementById('btn-next-day');
const daySwitcher = document.getElementById('day-switcher');
const mainHeader = document.querySelector('.main-header');
const timelineContent = document.querySelector('.timeline-content');

const btnOpenModal = document.getElementById('btn-open-modal');
const modal = document.getElementById('modal');
const btnCloseModal = document.getElementById('btn-close-modal');
const btnCancel = document.getElementById('btn-cancel');
const btnSave = document.getElementById('btn-save');

const inputTitle = document.getElementById('task-input-title');
const inputTime = document.getElementById('task-input-time');
const inputCategory = document.getElementById('task-input-category');

// ====================== FUNÇÕES AUXILIARES DE STREAK ======================
function getDayString(date) {
    return date.toDateString();
}

function getYesterday(date) {
    const yesterday = new Date(date);
    yesterday.setDate(yesterday.getDate() - 1);
    return yesterday;
}

function updateStreakIfNeeded(dateToCheck = currentDate) {
    const dayTasks = tasks.filter(t => t.date === getDayString(dateToCheck));
    
    if (dayTasks.length === 0) return;
    
    const allCompleted = dayTasks.every(t => t.completed);
    const dayString = getDayString(dateToCheck);
    
    if (allCompleted && lastStreakDate !== dayString) {
        if (lastStreakDate === null) {
            // Primeira vez que completa um dia
            streak = 1;
            lastStreakDate = dayString;
        } else {
            const yesterday = getYesterday(dateToCheck);
            if (lastStreakDate === getDayString(yesterday)) {
                // É um dia consecutivo, incrementa
                streak++;
                lastStreakDate = dayString;
            } else {
                // Dias não consecutivos, reinicia
                streak = 1;
                lastStreakDate = dayString;
            }
        }
        saveState();
    }
}

function validateStreakForDay(dateToCheck) {
    // Verifica se um dia específico está incompleto e reseta streak se necessário
    if (lastStreakDate === null) return;
    
    const dayString = getDayString(dateToCheck);
    const dayTasks = tasks.filter(t => t.date === dayString);
    
    // Se o dia tem tarefas e não está completo
    if (dayTasks.length > 0 && !dayTasks.every(t => t.completed)) {
        // E esse era o dia da streak
        if (lastStreakDate === dayString) {
            streak = 0;
            lastStreakDate = null;
            saveState();
        }
    }
}

function checkStreakBreak() {
    // Verifica se algum dia anterior a hoje está incompleto
    // Se estava contando streak e quebrou, volta para 0
    if (lastStreakDate === null) return;
    
    const yesterday = getYesterday(new Date());
    const yesterdayTasks = tasks.filter(t => t.date === getDayString(yesterday));
    
    // Se ontem não foi completado e era quando a streak deveria estar
    if (yesterdayTasks.length > 0 && !yesterdayTasks.every(t => t.completed)) {
        if (lastStreakDate === getDayString(yesterday)) {
            streak = 0;
            lastStreakDate = null;
            saveState();
        }
    }
}

// ====================== FUNÇÃO PARA DEFINIR PERÍODO AUTOMATICAMENTE ======================
function getCategoryFromTime(time) {
    if (!time) return 'morning';

    const [hour] = time.split(':').map(Number);

    if (hour <= 12) return 'morning';      // Manhã: até 12:00
    if (hour <= 17) return 'afternoon';    // Tarde: 12:01 até 17:00
    return 'night';                        // Noite: após 17:00
}

// ====================== FUNÇÕES ======================
function saveState() {
    localStorage.setItem('lumora-tasks', JSON.stringify(tasks));
    localStorage.setItem('lumora-streak', streak.toString());
    localStorage.setItem('lumora-trophy', trophy.toString());
    localStorage.setItem('lumora-last-streak-date', lastStreakDate);
}

function formatDateHeader(date) {
    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    return date.toLocaleDateString('pt-BR', options).replace(/^./, str => str.toUpperCase());
}

function formatDayName(date) {
    const today = new Date();
    const tomorrow = new Date();
    tomorrow.setDate(today.getDate() + 1);
    const yesterday = new Date();
    yesterday.setDate(today.getDate() - 1);

    if (date.toDateString() === today.toDateString()) return 'Hoje';
    if (date.toDateString() === tomorrow.toDateString()) return 'Amanhã';
    if (date.toDateString() === yesterday.toDateString()) return 'Ontem';

    return date.toLocaleDateString('pt-BR', { weekday: 'long' }).replace(/^./, str => str.toUpperCase());
}

function updateStats() {
    const dayTasks = tasks.filter(t => t.date === currentDate.toDateString());
    const completed = dayTasks.filter(t => t.completed).length;
    const total = dayTasks.length;
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;

    if (streakCount) streakCount.textContent = streak;
    if (trophyCount) trophyCount.textContent = trophy;
    if (progressBar) progressBar.style.width = percent + '%';
    if (taskBadge) taskBadge.textContent = `${completed}/${total}`;

    const streakStat = document.querySelector('.stat-item.streak');
    const trophyStat = document.querySelector('.stat-item.trophy');

    if (streakStat) {
        streakStat.classList.toggle('filled', streak > 0);
        streakStat.classList.toggle('empty', streak === 0);
    }
    if (trophyStat) {
        trophyStat.classList.toggle('filled', trophy > 0);
        trophyStat.classList.toggle('empty', trophy === 0);
    }
}

function updateDayHeader() {
    if (!selectedDayName || !currentDate) return;

    selectedDayName.textContent = formatDayName(currentDate);
    document.getElementById('current-date').textContent = formatDateHeader(currentDate);
}

function animateDayChange(action) {
    if (!mainHeader || !timelineContent) {
        action();
        return;
    }

    mainHeader.classList.add('transitioning');
    timelineContent.classList.add('transitioning');

    window.requestAnimationFrame(() => {
        setTimeout(() => {
            action();
            mainHeader.classList.remove('transitioning');
            timelineContent.classList.remove('transitioning');
        }, 160);
    });
}

function changeDay(offset) {
    animateDayChange(() => {
        currentDate.setDate(currentDate.getDate() + offset);
        
        // Verifica se a streak deveria quebrar
        checkStreakBreak();
        
        updateDayHeader();
        renderTasks();
        updateStats();
        if (typeof lucide !== 'undefined') lucide.createIcons();
    });
}

function renderTasks() {
    if (!taskList) return;
    taskList.innerHTML = '';

    const currentStr = currentDate.toDateString();

    let todayTasks = tasks.filter(task => task.date === currentStr || (!task.date && currentStr === new Date().toDateString()));

    todayTasks.sort((a, b) => a.time.localeCompare(b.time));

    if (todayTasks.length === 0) {
        taskList.innerHTML = `
            <div class="empty-state">
                <p style="font-size: 3.5rem; margin-bottom: 12px;">🌟</p>
                <h3>Nenhuma missão neste dia</h3>
                <p>Clique no botão abaixo para adicionar uma tarefa para este dia</p>
            </div>
        `;
        lucide.createIcons();
        return;
    }

    todayTasks.forEach(task => {
        const taskEl = document.createElement('div');
        taskEl.className = `task-item ${task.completed ? 'completed' : ''}`;
        
        taskEl.innerHTML = `
            <div class="task-node ${task.completed ? 'done' : 'active'}" data-id="${task.id}">
                <i data-lucide="${task.completed ? 'check-circle' : 'star'}" style="width: 500px; height: 34px;"></i>
            </div>
            
            <div class="task-content">
                <div class="task-time">${task.time}</div>
                <div class="task-title">${task.title}</div>
            </div>

            <button class="delete-btn" data-id="${task.id}" title="Excluir">
                <i data-lucide="trash-2" style="width: 20px; height: 20px;"></i>
            </button>
        `;

        taskEl.querySelector('.task-node').addEventListener('click', () => toggleTask(task.id));
        taskEl.querySelector('.delete-btn').addEventListener('click', (e) => {
            e.stopPropagation();
            deleteTask(task.id);
        });

        taskList.appendChild(taskEl);
    });

    lucide.createIcons();
}

function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (!task) return;

    task.completed = !task.completed;

    // Verifica streak apenas para o dia da tarefa
    const taskDate = new Date(task.date);
    updateStreakIfNeeded(taskDate);
    
    // Se desmarcou uma tarefa, valida a streak daquele dia
    if (!task.completed) {
        validateStreakForDay(taskDate);
    }

    saveState();
    updateStats();
    renderTasks();
}

function deleteTask(id) {
    if (!confirm('Excluir esta tarefa?')) return;
    
    const task = tasks.find(t => t.id === id);
    const taskDate = task ? new Date(task.date) : currentDate;
    
    tasks = tasks.filter(t => t.id !== id);
    
    // Se deletar uma tarefa deixa o dia incompleto, valida a streak
    validateStreakForDay(taskDate);

    saveState();
    updateStats();
    renderTasks();
}

function addTask() {
    const title = inputTitle.value.trim();
    if (!title) {
        alert("Digite o nome da tarefa");
        return;
    }

    const selectedTime = inputTime.value || '9:00';
    const autoCategory = getCategoryFromTime(selectedTime);

    const newTask = {
        id: 'task-' + Date.now(),
        title: title,
        time: selectedTime,
        category: autoCategory,           // ← Definido automaticamente
        completed: false,
        date: currentDate.toDateString()
    };

    tasks.push(newTask);

    // Se adicionar uma tarefa deixa o dia incompleto, valida a streak
    validateStreakForDay(currentDate);

    saveState();
    updateStats();
    renderTasks();
    closeModal();

    inputTitle.value = '';
    inputTime.value = '';
}

// ====================== MODAL ======================
let swipeStartX = null;
const swipeThreshold = 50;

function startSwipe(event) {
    swipeStartX = event.touches ? event.touches[0].clientX : event.clientX;
}

function endSwipe(event) {
    if (swipeStartX === null) return;
    const endX = event.changedTouches ? event.changedTouches[0].clientX : event.clientX;
    const diffX = endX - swipeStartX;
    swipeStartX = null;

    if (Math.abs(diffX) < swipeThreshold) return;
    if (diffX < 0) changeDay(-1);
    else changeDay(1);
}

function openModal() {
    modal.classList.add('active');
    inputTitle.focus();
    
    // Define horário atual como padrão
    const now = new Date();
    const currentTime = now.getHours().toString().padStart(2, '0') + ':' + 
                       now.getMinutes().toString().padStart(2, '0');
    inputTime.value = currentTime;
}

function closeModal() {
    modal.classList.remove('active');
}

// ====================== EVENT LISTENERS ======================
btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);
btnCancel.addEventListener('click', closeModal);
btnSave.addEventListener('click', addTask);
btnPrevDay.addEventListener('click', () => changeDay(-1));
btnNextDay.addEventListener('click', () => changeDay(1));

document.getElementById('modal-overlay-bg').addEventListener('click', closeModal);

daySwitcher?.addEventListener('touchstart', startSwipe, { passive: true });
daySwitcher?.addEventListener('touchend', endSwipe, { passive: true });
daySwitcher?.addEventListener('mousedown', startSwipe);
daySwitcher?.addEventListener('mouseup', endSwipe);

// ====================== INICIALIZAÇÃO ======================
function init() {
    if (tasks.length === 0) {
        tasks = [{
            id: 'task-1',
            title: 'Estudar JavaScript hoje',
            time: '08:30',
            category: 'morning',
            completed: false,
            date: new Date().toDateString()
        }];
        saveState();
    }

    // Verifica se a streak deveria ser resetada
    checkStreakBreak();

    if (typeof lucide !== 'undefined') lucide.createIcons();

    updateDayHeader();
    updateStats();
    renderTasks();
}

init();