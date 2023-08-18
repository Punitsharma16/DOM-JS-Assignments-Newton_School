function swapTheme() {
    const div = document.getElementById('app');
    const buttonClass = document.getElementById('swap');
    if(div.classList.contains('day')){
        div.classList.remove('day');
        div.classList.add('night');

        buttonClass.classList.remove('button_day');
        buttonClass.classList.add('button_night');
    }else{
        div.classList.remove('night');
        div.classList.add('day');

        buttonClass.classList.remove('button_night');
        buttonClass.classList.add('button_day');
    }

}