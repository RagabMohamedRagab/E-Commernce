let ChangeImage = document.querySelectorAll('.Change_Back img'),
    Array_Of_Image = ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg", "06.jpg"],
    RandomImages, RandomClass;

/**
 * Change Image Of Products
 */
function Change() {
    RandomImages = Math.floor(Math.random() * Array_Of_Image.length);
    RandomClass = Math.floor(Math.random() * ChangeImage.length);
    ChangeImage[RandomClass].setAttribute('src', 'image/' + Array_Of_Image[RandomImages] + '');
}
setInterval(Change, 2000);
/**
 * Change Paigantion
 */
let ChangeColor = document.querySelectorAll('.Point ul li'),
    BackgroundColor = ['#AAAAAA', '#3A8BCD'],
    RandomBackground, RandomElements;
setInterval(() => {
    RandomBackground = Math.floor(Math.random() * BackgroundColor.length);
    RandomElements = Math.floor(Math.random() * ChangeColor.length);
    ChangeColor[RandomElements].style.backgroundColor = "" + BackgroundColor[RandomBackground] + "";

}, 2000);
let Element = document.querySelectorAll('.Subscribe input')[0];
Element.classList.add("input#Change::placeholder");

Element.onfocus = function () {
    this.setAttribute("placeholder", "Full Email...");
}
Element.onblur = function () {
    this.setAttribute('placeholder', '');
}
/* start Logic NaBar To Route Of Other Pages By Jquery* */

$(document).ready(function () {
   $('.Add li').click(function(){
    $(this).toggleClass('active');
   });
});

