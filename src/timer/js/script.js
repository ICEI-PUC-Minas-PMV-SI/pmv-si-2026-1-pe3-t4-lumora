const minutesElement = document.querySelector('.minutes')
const secondsElement = document.querySelector('.seconds')

const minutesPicker = document.querySelector('.minutes-picker')
const secondsPicker = document.querySelector('.seconds-picker')

const startButton = document.querySelector('.start')
const pauseButton = document.querySelector('.pause')
const resetButton = document.querySelector('.reset')

const progress = document.querySelector('.progress')
const finishedMessage = document.querySelector('.finished-message')
const themeToggle = document.querySelector('.theme-toggle')

/* Variáveis principais */

let time = 25 * 60
let initialTime = time
let interval = null
let isRunning = false

const totalProgress = 754

/* Atualiza o timer na tela */

function renderTimer() {
    const minutes = Math.floor(time / 60)
    const seconds = time % 60

    minutesElement.textContent = String(minutes).padStart(2, '0')
    secondsElement.textContent = String(seconds).padStart(2, '0')
    
    const progressValue = (time / initialTime) * totalProgress
    progress.style.strokeDashoffset = -(totalProgress - progressValue)
}

/* Contagem */

function updateTimer() {
    if (time <= 0) {
        clearInterval(interval)
        isRunning = false
        showFinishedMessage()
        startButton.disabled = false
        startButton.textContent = 'Iniciar'
        return
    }

    time--
    renderTimer()
}

/* Mensagem de finalização */

function showFinishedMessage() {
    finishedMessage.style.display = 'block'
}

function hideFinishedMessage() {
    finishedMessage.style.display = 'none'
}

/* Criação das opções de minutos e segundos */

function createPickerOptions() {
    for (let i = 0; i <= 60; i++) {
        const option = document.createElement('div')
        option.classList.add('picker-option')
        option.textContent = String(i).padStart(2, '0')

        option.addEventListener('click', function() {
            const seconds = time % 60
            time = (i * 60) + seconds

            if (time > 3600) time = 3600
            
            initialTime = time
            renderTimer()
            minutesPicker.classList.remove('show')
        })

        minutesPicker.appendChild(option)
    }

    for (let i = 0; i <= 59; i++) {
        const option = document.createElement('div')
        option.classList.add('picker-option')
        option.textContent = String(i).padStart(2, '0')

        option.addEventListener('click', function() {
            const minutes = Math.floor(time / 60)
            time = (minutes * 60) + i
            initialTime = time
            renderTimer()
            secondsPicker.classList.remove('show')
        })
        
        secondsPicker.appendChild(option)
    }
}

/* Abrir e fechar as seleções */

minutesElement.addEventListener('click', function() {
    if (isRunning) return
    secondsPicker.classList.remove('show')
    minutesPicker.classList.toggle('show')
})

secondsElement.addEventListener('click', function() {
    if (isRunning) return
    minutesPicker.classList.remove('show')
    secondsPicker.classList.toggle('show')
})

document.addEventListener('click', function(event) {
    const clickInside = event.target.closest('.picker-wrapper')

    if (!clickInside) {
        minutesPicker.classList.remove('show')
        secondsPicker.classList.remove('show')
    }   
})

/* Botões */

startButton.addEventListener('click', function() {
    hideFinishedMessage()

    if (time <= 0) {
        time = initialTime
        renderTimer()
    }

    isRunning = true
    clearInterval(interval)
    interval = setInterval(updateTimer, 1000)

    startButton.disabled = true
    startButton.textContent = 'Iniciado'
})

pauseButton.addEventListener('click', function() {
    clearInterval(interval)
    isRunning = false

    startButton.disabled = false
    startButton.textContent = 'Continuar'
})

resetButton.addEventListener('click', function() {
    clearInterval(interval)
    isRunning = false
    time = initialTime
    renderTimer()
    hideFinishedMessage()

    startButton.disabled = false
    startButton.textContent = 'Iniciar'
})

/* Alternar entre os temas */

const savedTheme = localStorage.getItem('lumora-theme')

if (savedTheme === 'dark') {
  document.body.classList.add('dark')
  themeToggle.textContent = '☀️'
}

themeToggle.addEventListener('click', function() {
  document.body.classList.toggle('dark')

  const isDark = document.body.classList.contains('dark')
  themeToggle.textContent = isDark ? '☀️' : '🌙'
  localStorage.setItem('lumora-theme', isDark ? 'dark' : 'light')
})

createPickerOptions()
renderTimer()