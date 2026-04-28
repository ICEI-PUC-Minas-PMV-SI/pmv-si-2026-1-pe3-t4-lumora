// ==============================
// 1. DOM SELECTORS
// ==============================
// HTML references. avoids loose DOM variables
const elements = {
  calendarGrid: document.getElementById("calendarGrid"),
  summaryTitle: document.getElementById("summaryTitle"),
  summaryFullDate: document.getElementById("summaryFullDate"),
  summaryTasks: document.getElementById("summaryTasks"),
  weekRange: document.getElementById("weekRange"),
  agendaTitle: document.getElementById("agendaTitle"),
  agendaTimeline: document.getElementById("agendaTimeline"),
  moodInput: document.getElementById("moodInput"),

  todayButton: document.getElementById("todayButton"),
  tomorrowButton: document.getElementById("tomorrowButton"),
  previousWeekButton: document.getElementById("previousWeekButton"),
  nextWeekButton: document.getElementById("nextWeekButton")
};


// ==============================
// 2. DATE HELPERS
// ==============================
// reusable date utilities used across the calendar
const dateUtils = {
  // Removes hours/minutes/seconds from a date
  startOfDay(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
  },

  // Sunday first day of the week
  getStartOfWeek(date) {
    const weekStart = this.startOfDay(date);
    weekStart.setDate(weekStart.getDate() - weekStart.getDay());
    return weekStart;
  },

  // Adds or subtracts days from a date
  addDays(date, amount) {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + amount);
    return newDate;
  },

  // Formats dates as YYYY-MM-DD
  formatDateKey(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  },

  // date used in the summary and agenda sections
  formatFullDate(date) {
    return date.toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric"
    });
  },

  // Short date used in the weekly calendar range
  formatShortDate(date) {
    return date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short"
    });
  },

  // Compares only the calendar day, ignoring hours/minutes
  isSameDay(firstDate, secondDate) {
    return this.formatDateKey(firstDate) === this.formatDateKey(secondDate);
  },

  // Extracts the hour from a HH:mm string
  getHourFromTime(time) {
    return Number(time.split(":")[0]);
  }
};


// ==============================
// 3. STATE
// ==============================
// Keeps the current UI state in one place
const state = {
  today: dateUtils.startOfDay(new Date()),
  selectedDate: dateUtils.startOfDay(new Date()),
  visibleWeekStart: null,
  dailyMoods: {}
};

state.tomorrow = dateUtils.addDays(state.today, 1);
state.visibleWeekStart = dateUtils.getStartOfWeek(state.selectedDate);


// ==============================
// 4. MOCK DATA
// ==============================
// Temporary data until the app is connected to a backend.
const mockData = {
  tasks: [
    {
      id: 1,
      title: "Limpar a casa",
      description: "Arrumar a cama, aspirar o quarto e limpar a cozinha.",
      dueDate: dateUtils.formatDateKey(state.today),
      dueTime: "09:00",
      completed: false
    },
    {
      id: 2,
      title: "Levar a Mimi para o vet",
      description: "Tomar vacina e aplicar micro-chip.",
      dueDate: dateUtils.formatDateKey(state.today),
      dueTime: "14:00",
      completed: false
    },
    {
      id: 3,
      title: "Compras na Sephora",
      description: "Comprar serum da Glow Recipe",
      dueDate: dateUtils.formatDateKey(state.tomorrow),
      dueTime: "10:00",
      completed: false
    }
  ]
};


// ==============================
// 5. TASK HELPERS
// ==============================
// Task related operations. this is where backend calls can be added
const taskService = {
  // Returns only tasks for the selected date
  getTasksForDate(date) {
    const dateKey = dateUtils.formatDateKey(date);
    return mockData.tasks.filter((task) => task.dueDate === dateKey);
  },

  // Finds one task by id
  getTaskById(taskId) {
    return mockData.tasks.find((task) => task.id === taskId);
  },

  // Checks/unchecks a task and refreshes the UI
  toggleTaskCompletion(taskId) {
    const task = this.getTaskById(taskId);

    if (!task) {
      return;
    }

    task.completed = !task.completed;
    render.all();
  }
};


// ==============================
// 6. RENDER FUNCTIONS
// ==============================
// Everything that updates the screen
const render = {
  // Updates the top "Resumo do dia" card
  summary() {
    const selectedTasks = taskService.getTasksForDate(state.selectedDate);

    if (dateUtils.isSameDay(state.selectedDate, state.today)) {
      elements.summaryTitle.textContent = "Hoje";
    } else if (dateUtils.isSameDay(state.selectedDate, state.tomorrow)) {
      elements.summaryTitle.textContent = "Amanhã";
    } else {
      elements.summaryTitle.textContent = state.selectedDate.toLocaleDateString("pt-BR", {
        weekday: "long"
      });
    }

    elements.summaryFullDate.textContent = dateUtils.formatFullDate(state.selectedDate);
    elements.summaryTasks.innerHTML = "";

    // one mood text per date
    elements.moodInput.value =
      state.dailyMoods[dateUtils.formatDateKey(state.selectedDate)] || "";

    if (selectedTasks.length === 0) {
      const emptyItem = document.createElement("li");
      emptyItem.textContent = "Nenhuma tarefa prevista para este dia.";
      elements.summaryTasks.appendChild(emptyItem);
      return;
    }

    selectedTasks.forEach((task) => {
      elements.summaryTasks.appendChild(this.createSummaryTaskItem(task));
    });
  },

  // one task item for the summary section
  createSummaryTaskItem(task) {
    const item = document.createElement("li");

    if (task.completed) {
      item.classList.add("task-completed");
    }

    const row = document.createElement("label");
    row.className = "task-check-row";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";
    checkbox.checked = task.completed;

    checkbox.addEventListener("change", () => {
      taskService.toggleTaskCompletion(task.id);
    });

    const content = document.createElement("span");
    content.className = "summary-task-content";

    const title = document.createElement("span");
    title.className = "summary-task-title";
    title.textContent = `${task.dueTime} - ${task.title}`;

    const description = document.createElement("span");
    description.className = "summary-task-description";
    description.textContent = task.description;

    content.appendChild(title);
    content.appendChild(description);

    row.appendChild(checkbox);
    row.appendChild(content);
    item.appendChild(row);

    return item;
  },

  // Updates the visible week range above the calendar
  weekRange() {
    const weekEnd = dateUtils.addDays(state.visibleWeekStart, 6);
    elements.weekRange.textContent =
      `${dateUtils.formatShortDate(state.visibleWeekStart)} - ${dateUtils.formatShortDate(weekEnd)}`;
  },

  // Builds the weekly calendar view
  calendar() {
    elements.calendarGrid.innerHTML = "";

    for (let index = 0; index < 7; index++) {
      const date = dateUtils.addDays(state.visibleWeekStart, index);
      const dayCell = this.createDayCell(date);

      elements.calendarGrid.appendChild(dayCell);
    }
  },

  // Creates one day card inside the weekly calendar
  createDayCell(date) {
    const dayTasks = taskService.getTasksForDate(date);

    const dayCell = document.createElement("button");
    dayCell.type = "button";
    dayCell.className = "day-cell";

    if (dateUtils.isSameDay(date, state.today)) {
      dayCell.classList.add("is-today");
    }

    if (dateUtils.isSameDay(date, state.selectedDate)) {
      dayCell.classList.add("is-selected");
    }

    dayCell.appendChild(this.createDayHeader(date));

    if (dayTasks.length > 0) {
      dayTasks.forEach((task) => {
        dayCell.appendChild(this.createCalendarTaskCard(task));
      });
    } else {
      const emptyText = document.createElement("span");
      emptyText.className = "empty-day";
      emptyText.textContent = "Sem tarefas";
      dayCell.appendChild(emptyText);
    }

    dayCell.addEventListener("click", () => {
      actions.goToDate(date);
    });

    return dayCell;
  },

  // Creates the date label inside each calendar day
  createDayHeader(date) {
    const dayHeader = document.createElement("div");
    dayHeader.className = "day-number";

    const dayText = document.createElement("span");
    dayText.textContent = date.toLocaleDateString("pt-BR", {
      day: "2-digit",
      month: "short"
    });

    dayHeader.appendChild(dayText);

    if (dateUtils.isSameDay(date, state.today)) {
      const todayPill = document.createElement("span");
      todayPill.className = "today-pill";
      todayPill.textContent = "Hoje";
      dayHeader.appendChild(todayPill);
    }

    return dayHeader;
  },

  // Creates task preview cards inside each calendar day
  createCalendarTaskCard(task) {
    const taskCard = document.createElement("div");
    taskCard.className = "task-card";

    if (task.completed) {
      taskCard.classList.add("task-completed");
    }

    const taskTitle = document.createElement("span");
    taskTitle.className = "task-title";
    taskTitle.textContent = task.title;

    const taskDescription = document.createElement("span");
    taskDescription.className = "task-description";
    taskDescription.textContent = task.description;

    const taskDue = document.createElement("span");
    taskDue.className = "task-due";
    taskDue.textContent = `Vencimento: ${task.dueTime}`;

    taskCard.appendChild(taskTitle);
    taskCard.appendChild(taskDescription);
    taskCard.appendChild(taskDue);

    return taskCard;
  },

  // agenda for the selected day
  agenda() {
    elements.agendaTitle.textContent = dateUtils.formatFullDate(state.selectedDate);
    elements.agendaTimeline.innerHTML = "";

    for (let hour = 0; hour < 24; hour++) {
      elements.agendaTimeline.appendChild(this.createAgendaHourRow(hour));
    }
  },

  // Creates one hour row in the agenda
  createAgendaHourRow(hour) {
    const selectedTasks = taskService.getTasksForDate(state.selectedDate);
    const tasksForHour = selectedTasks.filter(
      (task) => dateUtils.getHourFromTime(task.dueTime) === hour
    );

    const hourRow = document.createElement("div");
    hourRow.className = "agenda-hour";

    const timeLabel = document.createElement("div");
    timeLabel.className = "agenda-time";
    timeLabel.textContent = `${String(hour).padStart(2, "0")}:00`;

    const content = document.createElement("div");
    content.className = "agenda-content";

    tasksForHour.forEach((task) => {
      content.appendChild(this.createAgendaTaskBlock(task));
    });

    hourRow.appendChild(timeLabel);
    hourRow.appendChild(content);

    return hourRow;
  },

  // Creates a task block inside the agenda timeline
  createAgendaTaskBlock(task) {
    const taskBlock = document.createElement("div");
    taskBlock.className = "agenda-task";

    if (task.completed) {
      taskBlock.classList.add("task-completed");
    }

    const taskTitle = document.createElement("strong");
    taskTitle.textContent = `${task.dueTime} - ${task.title}`;

    const taskDescription = document.createElement("p");
    taskDescription.textContent = task.description;

    taskBlock.appendChild(taskTitle);
    taskBlock.appendChild(taskDescription);

    return taskBlock;
  },

  // Central render function for the whole page, showing the page's functionality
  all() {
    this.summary();
    this.weekRange();
    this.calendar();
    this.agenda();
  }
};


// ==============================
// 7. ACTIONS
// ==============================
// State changing operations used by events and UI clicks
const actions = {
  // Moves the entire UI to a specific date
  goToDate(date) {
    state.selectedDate = dateUtils.startOfDay(date);
    state.visibleWeekStart = dateUtils.getStartOfWeek(state.selectedDate);
    render.all();
  },

  // Saves the mood text for the selected date
  saveMoodForSelectedDate() {
    state.dailyMoods[dateUtils.formatDateKey(state.selectedDate)] =
      elements.moodInput.value;
  },

  // Moves the visible calendar one week backwards
  goToPreviousWeek() {
    state.visibleWeekStart = dateUtils.addDays(state.visibleWeekStart, -7);
    state.selectedDate = state.visibleWeekStart;
    render.all();
  },

  // Moves the visible calendar one week forward
  goToNextWeek() {
    state.visibleWeekStart = dateUtils.addDays(state.visibleWeekStart, 7);
    state.selectedDate = state.visibleWeekStart;
    render.all();
  }
};


// ==============================
// 8. EVENT LISTENERS
// ==============================
// all page interactions grouped in one place
const events = {
  bind() {
    elements.moodInput.addEventListener("input", () => {
      actions.saveMoodForSelectedDate();
    });

    elements.todayButton.addEventListener("click", () => {
      actions.goToDate(new Date());
    });

    elements.tomorrowButton.addEventListener("click", () => {
      actions.goToDate(dateUtils.addDays(new Date(), 1));
    });

    elements.previousWeekButton.addEventListener("click", () => {
      actions.goToPreviousWeek();
    });

    elements.nextWeekButton.addEventListener("click", () => {
      actions.goToNextWeek();
    });
  }
};


// ==============================
// 9. INITIAL LOAD
// ==============================
// Finally starts the app after all helpers, state and events are ready
const app = {
  init() {
    events.bind();
    render.all();
  }
};

app.init();