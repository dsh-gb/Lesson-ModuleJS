import { printError, printResult } from './printResult.js'
import getDateDiff from './getDateDiff.js'
import checkForm from './checkForm.js';
import timerInteval from './timer.js';
import { Duration } from 'luxon';

// получаем ссылки на элементы html страницы
const inputCheck = document.querySelectorAll('input[name="formcheck"]')
const formDateCacl = document.getElementById('datecalc');
const formTimer = document.getElementById('timer');
const inputTime = document.querySelector('input[name="time"]');
const startBtn = document.getElementById('start');
const stopBtn = document.getElementById('stop');
const timeResult = document.getElementById('time__result');

// ф-ю переключения форм Калькулятор дат и Таймер
checkForm(inputCheck);

// обрабатываем отправку формы для Калькулятор дат
formDateCacl.onsubmit = (event) => {
    event.preventDefault();

    const dataForm = new FormData(event.target);

    const firstDate = dataForm.get('firstDate');
    const secondDate = dataForm.get('secondDate');

    if (!firstDate || !secondDate) {
        printError('datecalc__result', 'Oooopps! Введите дату')
    } else {
        const dateREsult = getDateDiff(firstDate, secondDate);
        printResult('datecalc__result', dateREsult);
    };
};

stopBtn.disabled = true;

// обрабатываем нажатие кнопки Старт
startBtn.addEventListener('click', () => {
    const time = inputTime.value; // получаем введеное значение времени в формате hh:mm:ss
    if (time !== '') {
        startBtn.disabled = true;
        stopBtn.disabled = false;
        let seconds = Duration.fromISOTime(time).as('seconds');

        const idInterval = timerInteval(seconds, timeResult, inputTime, startBtn, stopBtn); // вызываем ф-ю посекундного отчета

        // обрабатываем нажатие кнопки Стоп
        stopBtn.addEventListener('click', () => {
            startBtn.disabled = false;
            stopBtn.disabled = true;
            clearInterval(idInterval);
            timeResult.innerText = '';
            inputTime.value = '';
        });
    } else {
        printError('time__result', 'Введите время таймера!');
    };
}); 