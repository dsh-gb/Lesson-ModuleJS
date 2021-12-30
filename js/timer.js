import alarmSound from './alarm.js';
import audioAlarm from '../audio-file/alarm.wav';
import audioTick from '../audio-file/tick.wav';

function timerInteval(seconds, timeResult, inputTime, startBtn, stopBtn) {
    const idInterval = setInterval(() => {
        if (seconds > 0) {
            // переводим обратно время из секунд в формат hh:mm:ss 
            const hh = Math.trunc(seconds / 3600);
            const mm = Math.trunc((seconds - 3600 * hh) / 60);
            const ss = seconds - 3600 * hh - 60 * mm;
            seconds--;
            alarmSound(audioTick); // ф-я воспроизведения звука тика таймера
            timeResult.innerText = `Осталось времени ${hh}:${mm}:${ss}`;
        } else {
            startBtn.disabled = false;
            stopBtn.disabled = true;
            timeResult.innerText = '';
            inputTime.value = '';
            alarmSound(audioAlarm); // ф-я воспроизведения звука окончания таймера
            clearInterval(idInterval);
        }
    }, 1000);
    return idInterval;
};

export default timerInteval; 