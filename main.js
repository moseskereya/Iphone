const phoneColor = document.querySelector('button');
const phone = document.querySelector('.iphoneX');


phoneColor.addEventListener('click', function(){
    phone.classList.toggle('color')
})