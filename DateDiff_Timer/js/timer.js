import alarmSound from './audio.js';

function timerInteval(seconds, timeResult, inputTime, startBtn, stopBtn) {
    const idInterval = setInterval(() => {
        if (seconds > 0) {
            // переводим обратно время из секунд в формат hh:mm:ss 
            const hh = Math.trunc(seconds / 3600);
            const mm = Math.trunc((seconds - 3600 * hh) / 60);
            const ss = seconds - 3600 * hh - 60 * mm;
            seconds--;
            timeResult.innerText = `Осталось времени ${hh}:${mm}:${ss}`;
        } else {
            startBtn.disabled = false;
            stopBtn.disabled = true;
            timeResult.innerText = '';
            inputTime.value = '';
            alarmSound(); // ф-я воспроизведения звука таймера
            clearInterval(idInterval);
        }
    }, 1000);
    return idInterval;
};

export default timerInteval;