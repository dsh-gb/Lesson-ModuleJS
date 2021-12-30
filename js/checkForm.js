import fonPic_one from '../fon-pic/fon-1.jpg';
import fonPic_two from '../fon-pic/fon-2.jpg';

function checkForm(listInput) {
    listInput.forEach(input => {
        // id форм совпадает с input.value
        // скрываем форму по не отмеченному input
        if (!input.checked) {
            document.getElementById(`${input.value}`).style.display = 'none';
        }
        // при изминении состояния инпута 
        // меняем видимость форм
        input.addEventListener('change', () => {
            listInput.forEach(input => {
                if (input.checked) {
                    document.getElementById(`${input.value}`).style.display = '';
                    switch (input.value) {
                        case 'datecalc':
                            document.body.style.backgroundImage = `url(${fonPic_one})`;
                            break;
                        case 'timer':
                            document.body.style.backgroundImage = `url(${fonPic_two})`;
                            break;
                    }
                } else {
                    document.getElementById(`${input.value}`).style.display = 'none';
                };
            });
        });
    });
}

export default checkForm;