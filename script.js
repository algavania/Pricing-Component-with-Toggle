var btn_toggle = document.getElementById('btn-toggle');
var text_one = document.getElementById('text-one');
var text_two = document.getElementById('text-two');
var text_three = document.getElementById('text-three');
var monthly = document.getElementsByClassName('monthly');
var annually = document.getElementsByClassName('annually');
var isClicked = false;

const toggle = () => {
    if (isClicked) {
        for (let index = 0; index < monthly.length; index++) {
            monthly[index].style.display = 'none';
            annually[index].style.display = 'inline-block';
        }
        isClicked = false;
    } else {
        for (let index = 0; index < monthly.length; index++) {
            monthly[index].style.display = 'inline-block';
            annually[index].style.display = 'none';
        }
        isClicked = true;
    }
}