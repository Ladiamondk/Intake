const demo = document.getElementById('demographics');
const medical = document.getElementById('medical');
const preventative = document.getElementById('preventative')
const social = document.getElementById('social')
const agreements = document.getElementById('agreements')
const dgnext = document.getElementById('dgNext')
const mdprev =document.getElementById('mdPrev')


dgnext.addEventListener('click', () => {
    demo.style.display = 'none';
    medical.style.display = 'contents';
})
mdprev.addEventListener('click', () =>{
    medical.style.display = 'none';
    demo.style.display = 'flex';
})
