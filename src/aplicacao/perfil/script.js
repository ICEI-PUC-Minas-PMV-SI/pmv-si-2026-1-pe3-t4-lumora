const profileNameEl = document.getElementById('profile-name');
const miniStreakCountEl = document.getElementById('mini-streak-count');
const miniTrophyCountEl = document.getElementById('mini-trophy-count');
const streakGoalTextEl = document.getElementById('streak-goal-text');
const trophyGoalTextEl = document.getElementById('trophy-goal-text');
const streakGoalBarEl = document.getElementById('streak-goal-bar');
const trophyGoalBarEl = document.getElementById('trophy-goal-bar');
const btnEditName = document.getElementById('btn-edit-name');
const btnEditPhoto = document.getElementById('btn-edit-photo');
const profilePhotoInput = document.getElementById('profile-photo-input');
const profilePhotoPreview = document.getElementById('profile-photo-preview');
const profilePhotoBox = document.getElementById('profile-photo-box');

const PROFILE_NAME_KEY = 'lumora-profile-name';
const PROFILE_PHOTO_KEY = 'lumora-profile-photo';
const STREAK_KEY = 'lumora-streak';
const TROPHY_KEY = 'lumora-trophy';
const TASKS_KEY = 'lumora-tasks';

function getSafeNumber(value) {
    const num = parseInt(value || '0', 10);
    return Number.isFinite(num) ? Math.max(num, 0) : 0;
}

function getTodayProgressFromTasks() {
    let tasks = [];
    try {
        tasks = JSON.parse(localStorage.getItem(TASKS_KEY) || '[]');
    } catch {
        tasks = [];
    }
    const today = new Date().toDateString();
    const todayTasks = tasks.filter((task) => task.date === today);
    const completed = todayTasks.filter((task) => task.completed).length;
    const total = todayTasks.length;
    return { completed, total };
}

function updateProfileStats() {
    const streak = getSafeNumber(localStorage.getItem(STREAK_KEY));
    const trophy = getSafeNumber(localStorage.getItem(TROPHY_KEY));
    const todayProgress = getTodayProgressFromTasks();

    miniStreakCountEl.textContent = `${streak}`;
    miniTrophyCountEl.textContent = `${trophy}`;

    const streakGoal = 30;
    const trophyGoal = 100;
    const streakClamped = Math.min(streak, streakGoal);
    const trophyClamped = Math.min(trophy, trophyGoal);

    streakGoalTextEl.textContent = `${streakClamped}/${streakGoal}`;
    trophyGoalTextEl.textContent = `${trophyClamped}/${trophyGoal}`;

    streakGoalBarEl.style.width = `${(streakClamped / streakGoal) * 100}%`;
    trophyGoalBarEl.style.width = `${(trophyClamped / trophyGoal) * 100}%`;

    streakGoalBarEl.title = `Sequência: ${streakClamped}/${streakGoal}`;
    trophyGoalBarEl.title = `Pontos: ${trophyClamped}/${trophyGoal}`;

    // Mantém os dados do dia em atributo para futura expansão da tela de perfil.
    document.body.dataset.todayProgress = `${todayProgress.completed}/${todayProgress.total}`;
}

function loadProfileName() {
    const storedName = localStorage.getItem(PROFILE_NAME_KEY);
    profileNameEl.textContent = storedName && storedName.trim() ? storedName : 'Seu nome';
}

function saveProfileName(name) {
    localStorage.setItem(PROFILE_NAME_KEY, name);
    profileNameEl.textContent = name;
}

function updatePhotoPreview(imageDataUrl) {
    if (!imageDataUrl) {
        profilePhotoPreview.removeAttribute('src');
        profilePhotoPreview.style.display = 'none';
        profilePhotoBox.classList.remove('has-photo');
        return;
    }

    profilePhotoPreview.src = imageDataUrl;
    profilePhotoPreview.style.display = 'block';
    profilePhotoBox.classList.add('has-photo');
}

function loadProfilePhoto() {
    const storedPhoto = localStorage.getItem(PROFILE_PHOTO_KEY);
    updatePhotoPreview(storedPhoto);
}

function handleEditName() {
    const current = profileNameEl.textContent.trim() || '';
    const newName = prompt('Digite seu nome:', current);
    if (newName === null) return;

    const cleaned = newName.trim();
    if (!cleaned) {
        alert('O nome não pode ficar vazio.');
        return;
    }

    saveProfileName(cleaned);
}

function handlePhotoSelection(event) {
    const file = event.target.files && event.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
        const result = typeof reader.result === 'string' ? reader.result : '';
        if (!result) return;
        localStorage.setItem(PROFILE_PHOTO_KEY, result);
        updatePhotoPreview(result);
    };
    reader.readAsDataURL(file);
}

function init() {
    loadProfileName();
    loadProfilePhoto();
    updateProfileStats();

    btnEditName.addEventListener('click', handleEditName);
    btnEditPhoto.addEventListener('click', () => profilePhotoInput.click());
    profilePhotoInput.addEventListener('change', handlePhotoSelection);

    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    }
}
// ====================== MENU LATERAL ======================
const hamburgerBtn = document.getElementById('hamburger-btn');
const sidebarEl = document.getElementById('sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const sidebarButtons = document.querySelectorAll('.sidebar-btn[data-route]');

function closeMenu() {
    sidebarEl?.classList.remove('open');
    sidebarOverlay?.classList.remove('active');

    if (hamburgerBtn) {
        hamburgerBtn.setAttribute('aria-expanded', 'false');
        hamburgerBtn.setAttribute('aria-label', 'Abrir menu');
    }
}

function toggleMenu() {
    if (!sidebarEl) return;

    const isOpen = sidebarEl.classList.toggle('open');
    sidebarOverlay?.classList.toggle('active', isOpen);

    if (hamburgerBtn) {
        hamburgerBtn.setAttribute('aria-expanded', String(isOpen));
        hamburgerBtn.setAttribute('aria-label', isOpen ? 'Fechar menu' : 'Abrir menu');
    }
}

function navigateToPage(route) {
    if (!route) return;

    closeMenu();
    window.location.href = route;
}

hamburgerBtn?.addEventListener('click', toggleMenu);
sidebarOverlay?.addEventListener('click', closeMenu);

sidebarButtons.forEach((button) => {
    button.addEventListener('click', () => {
        navigateToPage(button.dataset.route);
    });
});
init();
