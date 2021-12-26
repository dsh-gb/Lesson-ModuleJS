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
                } else {
                    document.getElementById(`${input.value}`).style.display = 'none';
                }
            });
        })
    })
}

export default checkForm;