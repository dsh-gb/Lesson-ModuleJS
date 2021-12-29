import { Howl } from 'howler';

function alarmSound() {
    const sound = new Howl({
        src: ['https://www.soundjay.com/buttons/sounds/beep-09.mp3'],
        //src: ['../alarm.wav']
    });

    sound.play();
};

export default alarmSound;