import { Howl } from 'howler';

function alarmSound(srcFile) {
    const sound = new Howl({
        src: [srcFile]
    });

    sound.play();
};

export default alarmSound;