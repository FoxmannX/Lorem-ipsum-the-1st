//some freakin' constants--------
const iw = window.innerWidth;
const header = document.querySelector('header');
const hul = header.querySelector('ul');
const menu = header.querySelector('.menu');

let flow = false;
//freakin' menu-------------
menu.onclick = () => {
    if(iw<550){
        if(!flow){
            hul.style.display = 'block'
        }else{
            hul.style.display = 'none'
        }
        flow = !flow
    }
}