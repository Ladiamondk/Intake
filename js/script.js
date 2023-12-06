const demo = document.getElementById('demographics');
const medical = document.getElementById('medical');
const preventative = document.getElementById('preventative')
const social = document.getElementById('social')
const agreements = document.getElementById('agreements')
const dgnext = document.getElementById('dgNext')
const mdprev =document.getElementById('mdPrev')

/*This area is for operating the next and previous buttons*/
function next(current, next){
    current.style.display = 'none';
    next.style.display = 'contents'; 
}
function prev(current, prev){
    current.style.display = 'none';
    prev.style.display = 'flex';
}
/*demo and medical */
const checkmark = new Image();
checkmark.src = 'resources/checkmark.png';
checkmark.width = 20;
checkmark.height = 20;
checkmark.alt = 'green checkmark';
const pDemo = document.getElementById('p-1');

dgnext.addEventListener('click', () =>{ 
    next(demo, medical);
    pDemo.innerText = '';
    pDemo.appendChild(checkmark);
});

mdprev.addEventListener('click', () =>{
    prev(medical, demo);
    pDemo.innerText = 'Demographics';
});

/**This area is for the progress bar */


