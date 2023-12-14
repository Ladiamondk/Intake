const demo = document.getElementById('demographics');
const medical = document.getElementById('medical');
const preventative = document.getElementById('preventative')
const social = document.getElementById('social')
const agreements = document.getElementById('agreements')


const rd1 = document.getElementById('rd-1')
const rd2 = document.getElementById('rd-2')
const rd34 = document.getElementById('rd3-4')
const rd6 = document.getElementById('rd-6')
const rd7 = document.getElementById('rd-7')
const rd8 = document.getElementById('rd-8')
const rd9101112 = document.getElementById('rd9-10-11-12')


/*This area is for operating the next and previous buttons*/
function next(current, next){
    current.style.display = 'none';
    next.style.display = 'contents'; 
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // You can use 'auto' instead of 'smooth' for instant scrolling
      });
}
function prev(current, prev){
    current.style.display = 'none';
    prev.style.display = 'flex';
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // You can use 'auto' instead of 'smooth' for instant scrolling
      });
}

function createCheckMark(){
    const checkmark = new Image();
    checkmark.src = 'resources/checkmark.png';
    checkmark.width = 20;
    checkmark.height = 20;
    checkmark.alt = 'green checkmark';
    checkmark.style.borderRadius = '15px';
    checkmark.style.boxShadow = '0px 2px 2px #54595f'; 
    return checkmark;
}

const dgnext = document.getElementById('dgNext')
const mdprev = document.getElementById('mdPrev')
const demoDone = createCheckMark();
const pDemo = document.getElementById('p-1');
dgnext.addEventListener('click', () =>{ 
    next(demo, medical);
    pDemo.innerText = '';
    pDemo.appendChild(demoDone);
});

mdprev.addEventListener('click', () =>{
    prev(medical, demo);
    pDemo.innerText = 'Demographics';
});

const mdnext = document.getElementById('mdNext');
const pvprev = document.getElementById('pvPrev');
const pMed = document.getElementById('p-2');
const medDone = createCheckMark();
mdnext.addEventListener('click', () =>{ 
    next(medical, preventative);
    pMed.innerText = '';
    pMed.appendChild(medDone);
});

pvprev.addEventListener('click', () =>{
    prev(preventative, medical);
    pMed.innerText = 'Medical';
});

const pvnext = document.getElementById('pvNext');
const scprev = document.getElementById('scPrev');
const pPrev = document.getElementById('p-3');
const prevDone = createCheckMark();
pvnext.addEventListener('click', () =>{ 
    next(preventative, social);
    pPrev.innerText = '';
    pPrev.appendChild(prevDone);
});

scprev.addEventListener('click', () =>{
    prev(social, preventative);
    pPrev.innerText = 'Preventative';
});

const scnext = document.getElementById('scNext');
const amprev = document.getElementById('amPrev');
const pSocial = document.getElementById('p-4');
const socialDone = createCheckMark();
scnext.addEventListener('click', () =>{ 
    next(social, agreements);
    pSocial.innerText = '';
    pSocial.appendChild(socialDone);
});

amprev.addEventListener('click', () =>{
    prev(agreements, social);
    pSocial.innerText = 'Social';
});


//Demographics section of the form
//Additional Emergency contact
function additionEC(){
    const addEBtn = document.getElementById('addEBtn');
    const addEContact = document.getElementById('dg23-24-25');
    if(addEContact.style.display === 'none'){
        addEContact.style.display = 'block';
        //uncomment if decide to want to be able to toggle
       // addEBtn.style.visibility = 'hidden'
    }else{
        addEContact.style.display = 'none';
    }   
}

//Male
const gender = document.getElementById('dg11');
if(gender){
    gender.addEventListener('click', () => {
        let genderVal;
        const genderRadios = gender.querySelectorAll('input[type="radio"]');
    
        for(let i = 0; i < genderRadios.length; i++){
            if( genderRadios[i].checked){
                genderVal = genderRadios[i].value;
                if(genderVal == 'male'){
                    rd1.style.display = 'none';
                    rd2.style.display = 'none';
                    rd34.style.display = 'none';
                    rd6.style.display = 'none';
                    rd7.style.display = 'none';
                    rd8.style.display = 'none';
                    rd9101112.style.display = 'none';
                } else {
                    rd1.style.display = 'block';
                    rd2.style.display = 'block';
                    rd34.style.display = 'block';
                    rd6.style.display = 'block';
                    rd7.style.display = 'block';
                    rd8.style.display = 'block';
                    rd9101112.style.display = 'block';
                }
            }
        }
    });  
}
//Reproductive section of the form
//Pregnant
const rd3 = document.getElementById('rd-3');
if(rd1){
    let pregVal;
    const pregRadios = rd1.querySelectorAll('input[type="radio"]');
    rd1.addEventListener('click', () => {
        for(let i = 0; i < pregRadios.length; i++){
            if(pregRadios[i].checked){
                pregVal = pregRadios[i].value;
                if(pregVal == 'no' || pregVal == 'dont know'){
                    rd2.style.display = 'none';
                    rd3.style.display = 'none';
                    rd7.style.display = 'block';
                } else if(pregVal == 'yes'){
                    rd2.style.display = 'block';
                    rd3.style.display = 'block';
                    rd7.style.display = 'none';
                }
            }
        }
    })
}
//prenatal 
if(rd2){
    let prenatalVal;
    const prenatalRadios = rd2.querySelectorAll('input[type="radio"]');
    rd2.addEventListener('click', () => {
    for(let i = 0; i < prenatalRadios.length; i++){
            if(prenatalRadios[i].checked){
                prenatalVal = prenatalRadios[i].value;
                if(prenatalVal == 'no'||prenatalVal == 'dont know'){
                    rd3.style.display = 'none';
                }else{
                    rd3.style.display = 'block';
                }
            }
        }
    })  
}
//pregnancies
if(rd8){
    let pregnanciesVal;
    const pregnanciesRadios = rd8.querySelectorAll('input[type="radio"]');
    rd8.addEventListener('click', () => {
        for(let i = 0; i < pregnanciesRadios.length; i++){
            if(pregnanciesRadios[i].checked){
                pregnanciesVal = pregnanciesRadios[i].value;
                if(pregnanciesVal == 'no'){
                    rd9101112.style.display = 'none';
                }else{
                    rd9101112.style.display = 'block';
                }
            }
        }
    })

}





