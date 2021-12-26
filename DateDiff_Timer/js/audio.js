function alarmSound() {
    const sound = new Howl({
        src: ['https://www.soundjay.com/buttons/sounds/beep-09.mp3'],
    });

    sound.play();
};

export default alarmSound;