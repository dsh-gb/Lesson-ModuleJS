// обьект путей к медиа файлам
const path = {
    image: './media/images',
    audio: './media/audio',
    video: './media/video'
};

// ф-я создания html разметки для карточек медиа файлов
function creatItems() {

    // обьект медиа файлов
    const items = [
        {
            type: 'image',
            name: 'Мельница',
            src: `${path.image}/1.jpg`,
        },
        {
            type: 'image',
            name: 'Горы',
            src: `${path.image}/2.jpg`,
        },
        {
            type: 'image',
            name: 'Канал',
            src: `${path.image}/3.jpg`,
        },
        {
            type: 'image',
            name: 'Gif мастер',
            src: `${path.image}/4.gif`,
        },
        {
            type: 'audio',
            name: 'Звуки джунглей',
            src: `${path.audio}/1.mp3`,
        },
        {
            type: 'audio',
            name: 'Звуки ручья и леса',
            src: `${path.audio}/2.mp3`,
        },
        {
            type: 'audio',
            name: 'Звуки ночных цикад',
            src: `${path.audio}/3.mp3`,
        },
        {
            type: 'video',
            name: 'Клип',
            src: `${path.video}/1.mp4`,
        },
        {
            type: 'video',
            name: 'Прибой',
            src: `${path.video}/2.mp4`,
        },
    ];

    // for (let i = 1; i < 5; i++) {
    //     items.push({
    //         name: `Image_${i}`,
    //         file: `${pathPic}/${i}.jpg`
    //     });
    // };

    // получаем доступ к html элементам оберткам карточек файлов
    const divPics = document.getElementById('pics');
    const divAudio = document.getElementById('audio');
    const divVideo = document.getElementById('video');

    // проходим по всем элементам в обьекте медиа файлов items
    items.forEach(item => {
        switch (item.type) { // в зависимости от типа файла формируем соотвеств html разметку
            case 'image':
                divPics.insertAdjacentHTML('beforeend', `<div class="cart__wrapper">
                                                            <h3>${item.name}</h2>
                                                            <img src="${item.src}" alt="${item.name}">
                                                        </div>`);
                break;
            case 'audio':
                divAudio.insertAdjacentHTML('beforeend', `<div class="cart__wrapper">
                                                            <h3>${item.name}</h2>
                                                            <audio controls src="${item.src}">
                                                        </div>`);
                break;
            case 'video':
                divVideo.insertAdjacentHTML('beforeend', `<div class="cart__wrapper">
                                                                <h3>${item.name}</h2>
                                                                <video controls src="${item.src}">
                                                        </div>`);
                break;

            default:
                break;
        }
    });
};

export default creatItems;