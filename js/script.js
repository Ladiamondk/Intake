const demo = document.getElementById('demographics');
const medical = document.getElementById('medical');
const preventative = document.getElementById('preventative')
const social = document.getElementById('social')
const agreements = document.getElementById('agreements')
const screening = document.getElementById('screening')

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
        behavior: 'smooth'
      });
}

function prev(current, prev){
    current.style.display = 'none';
    prev.style.display = 'grid';
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
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
    pMed.innerText = 'Medical History';
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
const snprev = document.getElementById('snPrev');
const pSocial = document.getElementById('p-4');
const socialDone = createCheckMark();
scnext.addEventListener('click', () =>{ 
    next(social, screening);
    pSocial.innerText = '';
    pSocial.appendChild(socialDone);
});

snprev.addEventListener('click', () =>{
    prev(screening, social);
    pSocial.innerText = 'Social';
});


const snnext = document.getElementById('snNext');
const amprev = document.getElementById('amPrev');
const pScreen = document.getElementById('p-5');
const screenDone = createCheckMark();

snnext.addEventListener('click', ()=> {
    next(screening, agreements);
    pScreen.innerText = '';
    pScreen.appendChild(screenDone);
})

amprev.addEventListener('click', () => {
    prev(agreements, screening);
    pScreen.innerText = 'Screening';
})
//Demographics section of the form
//creates a text input element if other is selected
        //rootg_site question
const roots_site = document.getElementById('rootsSite');
//specifies the question that is targeted
if(roots_site){
    //stores the value of the selected button
    let site;
    //this will store the values of the input element created when 'other' is selected
    let input;
    //this is to query all the input elements with the type 'radio' with in the root_site fieldset
    const rootsSiteRadios = roots_site.querySelectorAll('input[type="radio"]');
    //great an event listener on the roots_site fieldset
    roots_site.addEventListener('click', () => {
        //when clicked it looks through the rootsSiteRadios
        for(let i = 0; i < rootsSiteRadios.length; i++){
            //if statement checks for a checked psuedo code
            if(rootsSiteRadios[i].checked){
                //store that value in the site variable
                site = rootsSiteRadios[i].value;
                //check if site is store the value of 'other
                if(site == 'other'){
                    //if returns true, check to insure that the input variable is empty/ return false
                    if(!input){
                        //if return false, create the input elment and assign to the input variable
                        //creates a input element
                        input = document.createElement('input');
                        //assigns values to attributes
                        input.name = 'roots_site';
                        input.value = '';
                        input.placeholder = 'Please specify';
                        //append to the element you want it to displayed
                        roots_site.appendChild(input)
                    }
                    //this insures that the input element is displayed ever time 'other' is selected
                    input.style.display = 'inline';
                } else {
                    //checks if input returns true
                    if(input){
                        input.style.display = 'none'
                        input.name = '';
                        input.value = '';
                    }
                }
            }
        }
    })
}
        //gender_identity question
const gender_identity = document.getElementById('genderIdentity');
if(gender_identity){
    let genderIdentified;
    let input;
    const genderIdentifiedRadios = gender_identity.querySelectorAll('input[type="radio"]');

    gender_identity.addEventListener('click', () =>{
        for(let i = 0; i < genderIdentifiedRadios.length; i++){
            if(genderIdentifiedRadios[i].checked){
                genderIdentified = genderIdentifiedRadios[i].value;

                if(genderIdentified === 'other'){
                    gender_identity_other.style.display = 'inline';

                    if(!input){
                        //createing new element
                        input = document.createElement('input');
                        input.name = 'gender_identity';
                        input.value = '';
                        input.placeholder = 'Please specify';
                        //append to element
                        gender_identity.appendChild(input); 
                    }
                }else{
                    gender_identity_other.style.display = 'inline';
                    if(input){
                       input.style.display = 'none';
                       input.value = '';
                       input.name = '';
                    }
                }   
            }
        }
    })
}
        //pronouns question
const pronouns = document.getElementById('pronouns');
if(pronouns){
    let preferredPronouns;
    let input;

    const pronounsRadios = pronouns.querySelectorAll('input[type="radio"]');
    pronouns.addEventListener('click',() =>{
        for(let i = 0; i < pronounsRadios.length; i++){
            if(pronounsRadios[i].checked){
                preferredPronouns = pronounsRadios[i].value;
                if(preferredPronouns == 'other'){
                    if(!input){
                        input = document.createElement('input');
                        input.name = 'pronouns';
                        input.value = '';
                        input.placeholder = 'Please specify';

                        pronouns.appendChild(input);
                    }
                    input.style.display = 'inline';
                } else {
                    if(input){
                        input.name = '';
                        input.value = '';
                        input.style.display = 'none';
                    }
                }
            }
        }
    })
}
        //sexual_orientation question
const sexual_orientation = document.getElementById('sexual_orientation');
if(sexual_orientation){
    let other_sexual_orientation;
    let input;

    const sexual_orientationRadios = sexual_orientation.querySelectorAll('input[type="radio"]');
    sexual_orientation.addEventListener('click', () => {
        for(let i = 0; i < sexual_orientationRadios.length; i++){
            if(sexual_orientationRadios[i].checked){
                other_sexual_orientation = sexual_orientationRadios[i].value;
                if(other_sexual_orientation == 'other'){
                    if(!input){
                        input = document.createElement('input');
                        input.name = 'sexual_orientation';
                        input.value = '';
                        input.placeholder = 'Please specify';

                        sexual_orientation.appendChild(input)
                    }
                    input.style.display = 'inline';
                } else {
                    if(input){
                        input.style.display = 'none';
                        input.value = '';
                        input.name = '';
                    }
                }
            }
        }
    })
}
        //preferredContactMethod question
const preferredContactMethod = document.getElementById('preferredContactMethod');
if(preferredContactMethod){
    let OtherpreferredContactMethod;
    let input;

    const preferredContactMethodRadios = preferredContactMethod.querySelectorAll('input[type="radio"]');
    preferredContactMethod.addEventListener('click', () => {
        for(let i = 0; preferredContactMethodRadios.length; i++){
            if(preferredContactMethodRadios[i].checked){
                OtherpreferredContactMethod = preferredContactMethodRadios[i].value;
                if(OtherpreferredContactMethod == 'other'){
                    if(!input){
                        input = document.createElement('input');
                        input.name = 'preferred_contact_method';
                        input.value = '';
                        input.placeholder = 'Please specify';

                        preferredContactMethod.appendChild(input);
                    }
                    input.style.display = 'inline';
                } else {
                    if(input){
                        input.value = '';
                        input.name = '';
                        input.style.display = 'none';
                    }
                }
            }
        }
    })
}
        //identifiedRace question
const identifiedRace = document.getElementById('identifiedRace');
if(identifiedRace){
    let input;
    identifiedRace.addEventListener('click', () => {
        const identified_race_other = document.getElementById('identified_race-other');
        if(identified_race_other.checked){
            if(!input){
                input = document.createElement('input')
                input.name = 'identified_race';
                input.value = '';
                input.placeholder = 'Please specify';

                identifiedRace.appendChild(input)
            }
            input.style.display = 'inline';
        } else {
            input.style.display = 'none';
            input.name = '';
        }
    })
}
        //identifiedEthnicity question
const identifiedEthnicity = document.getElementById('identifiedEthnicity');
if(identifiedEthnicity){
    let input;
    let OtherIdentifiedEthnicity;

    const identifiedEthnicityRadios = identifiedEthnicity.querySelectorAll('input[type="radio"]');
    identifiedEthnicity.addEventListener('click', () => {
        for(let i = 0; i < identifiedEthnicityRadios.length; i++){
            if(identifiedEthnicityRadios[i].checked){
                OtherIdentifiedEthnicity = identifiedEthnicityRadios[i].value;
                if(OtherIdentifiedEthnicity== 'other'){
                    if(!input){
                        input = document.createElement('input');
                        input.name = 'identified_ethnicity';
                        input.value = '';
                        input.placeholder = 'Please specify';

                        identifiedEthnicity.appendChild(input);
                    }
                    input.style.display = 'inline';
                } else {
                    if(input){
                        input.style.display = 'none';
                        input.value = '';
                        input.name = '';
                    }
                }
            }
        }
    })
}
        //languagesSpoken question
const languagesSpoken = document.getElementById('languagesSpoken');
if(languagesSpoken){
    let input;
    const languages_spoken_other = document.getElementById('languages_spoken-other');
    languagesSpoken.addEventListener('click', () => {
        if(languages_spoken_other.checked){
            if(!input){
                input = document.createElement('input');
                input.name = 'languages_spoken';
                input.value = '';
                input.placeholder = 'Please specify';

                languagesSpoken.appendChild(input);
            }
            input.style.display = 'inline';
        } else {
            if(input){
                input.style.display = 'none';
                input.value = '';
            }
        }
    })
}
        // martialStatus question
const martialStatus = document.getElementById('martialStatus');
if(martialStatus){
    let input;
    let martialStatusOther;

    const martialStatusRadios = martialStatus.querySelectorAll('input[type="radio"]');
    martialStatus.addEventListener('click', () => {
        for(let i = 0; i < martialStatusRadios.length; i++){
            if(martialStatusRadios[i].checked){
                martialStatusOther = martialStatusRadios[i].value;
                if(martialStatusOther == 'other'){
                    if(!input){
                        input = document.createElement('input');
                        input.name = 'martial_status';
                        input.value = '';
                        input.placeholder = 'Please specify';

                        martialStatus.appendChild(input);
                    }
                    input.style.display = 'inline'
                } else {
                    if(input){
                        input.style.display = 'none';
                        input.name = '';
                        input.value = '';
                    }
                }
            }
        }
    })
}
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





