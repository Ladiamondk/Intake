const demo = document.getElementById('demographics');
const medical = document.getElementById('medical');
const preventative = document.getElementById('preventative')
const social = document.getElementById('social')
const agreements = document.getElementById('agreements')
const screening = document.getElementById('screening')

const rd34 = document.getElementById('rd3-4')
const rd7 = document.getElementById('rd-7')

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
const genderIdentity = document.getElementById('genderIdentity');
if(genderIdentity){
    let gender_identified;
    let input;
    const genderIdentifiedRadios = genderIdentity.querySelectorAll('input[type="radio"]');

    genderIdentity.addEventListener('click', () =>{
        for(let i = 0; i < genderIdentifiedRadios.length; i++){
            if(genderIdentifiedRadios[i].checked){
                gender_identified = genderIdentifiedRadios[i].value;

                if(gender_identified == 'other'){
                    if(!input){
                        //createing new element
                        input = document.createElement('input');
                        input.name = 'gender_identity';
                        input.value = '';
                        input.placeholder = 'Please specify';
                        //append to element
                        genderIdentity.appendChild(input); 
                    }
                    input.style.display = 'inline';
                }else{
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
        for(let i = 0;i < preferredContactMethodRadios.length; i++){
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
//Medical History section of the form
//creates a text input element if other is selected
        //Dose Brand 1 questiondoseBrand1
const doseBrand1 = document.getElementById('doseBrand1');
if(doseBrand1){
    let input;
    let otherDoseBrand1;

    const doseBrand1Randios = doseBrand1.querySelectorAll('input[type="radio"]');
    doseBrand1.addEventListener('click', () => {
        for(let i = 0; doseBrand1Randios.length; i++){
            if(doseBrand1Randios[i].checked){
                otherDoseBrand1 = doseBrand1Randios[i].value;
                if(otherDoseBrand1 == 'other'){
                    if(!input){
                        input = document.createElement('input');
                        input.value = '';
                        input.placeholder = 'Please specify';
                        input.name = 'doseBrand1';

                        doseBrand1.appendChild(input);
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
        //Dose Brand 2 question
const doseBrand2 = document.getElementById('doseBrand2');
if(doseBrand2){
    let input;
    let otherDoseBrand2;
        
    const doseBrand2Randios = doseBrand2.querySelectorAll('input[type="radio"]');
    doseBrand2.addEventListener('click', () => {
        for(let i = 0; doseBrand2Randios.length; i++){
            if(doseBrand2Randios[i].checked){
                otherDoseBrand2 = doseBrand2Randios[i].value;
                if(otherDoseBrand2 == 'other'){
                    if(!input){
                        input = document.createElement('input');
                        input.value = '';
                        input.placeholder = 'Please specify';
                        input.name = 'doseBrand2';
        
                        doseBrand2.appendChild(input);
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
        //Dose Band 3 question
const doseBrand3 = document.getElementById('doseBrand3');
if(doseBrand3){
    let input;
    let otherDoseBrand3;
        
    const doseBrand3Randios = doseBrand3.querySelectorAll('input[type="radio"]');
    doseBrand3.addEventListener('click', () => {
        for(let i = 0; doseBrand3Randios.length; i++){
            if(doseBrand3Randios[i].checked){
                otherDoseBrand3 = doseBrand3Randios[i].value;
                if(otherDoseBrand3 == 'other'){
                    if(!input){
                        input = document.createElement('input');
                        input.value = '';
                        input.placeholder = 'Please specify';
                        input.name = 'doseBrand1';
        
                        doseBrand3.appendChild(input);
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
//Medical History dynamic Questions
        //Smoking history and currently smoke
const currentlySmoke = document.getElementById('currentlySmoke');
const currentlySmokeRadios = currentlySmoke.querySelectorAll('input[type="radio"]');
currentlySmoke.style.display = 'none';
const smokingHistory = document.getElementById('smokingHistory');
if(smokingHistory){
    let history;
    const smokingHistoryRadios = smokingHistory.querySelectorAll('input[type="radio"]');
    smokingHistory.addEventListener('click', () => {
        for(let i = 0; smokingHistoryRadios.length; i++){
            if(smokingHistoryRadios[i].checked){
                history = smokingHistoryRadios[i].value;
                if(history == 'yes'){
                    currentlySmoke.style.display = 'block';
                } else {
                    currentlySmoke.style.display = 'none';
                    const currentlySmokeRadios = currentlySmoke.querySelectorAll('input[type="radio"]');
                    currentlySmokeRadios.forEach(radio => {
                        radio.checked = false;
                    })
                }
            }
        }
    })
}
        //date quit smoking question
const dateQuit = document.getElementById('dateQuit');
dateQuit.style.display = 'none';
if(currentlySmoke){
    let quitSmoke;
    currentlySmoke.addEventListener('click', () => {
          for(let i = 0; currentlySmokeRadios.length; i++){
            if(currentlySmokeRadios[i].checked){
                quitSmoke = currentlySmokeRadios[i].value;
                if(quitSmoke == 'yes'){
                    dateQuit.style.display = 'block';
                } else {
                    dateQuit.style.display = 'none';
                }
            }

        }  
    })
}
        //covidHistory dynamic functionality
const covidVaccinationHistory = document.getElementById('covidVaccinationHistory');
const doseBrand1Set = document.getElementById('doseBrand1-set');
doseBrand1Set.style.display = 'none';
const doseBrand2Set = document.getElementById('doseBrand2-set');
doseBrand2Set.style.display = 'none';
const doseBrand3Set = document.getElementById('doseBrand3-set');
doseBrand3Set.style.display = 'none';

if(covidVaccinationHistory){
    let covidVaccinatied;
    const covidVaccinationHistoryRadios = covidVaccinationHistory.querySelectorAll('input[type="radio"]');
    covidVaccinationHistory.addEventListener('click', () => {
        for(let i = 0; i < covidVaccinationHistoryRadios.length; i++){
            if(covidVaccinationHistoryRadios[i].checked){
                covidVaccinatied = covidVaccinationHistoryRadios[i].value;
                if(covidVaccinatied == 'yes'){
                    doseBrand1Set.style.display = 'block'
                    doseBrand2Set.style.display = 'block'
                    doseBrand3Set.style.display = 'block'
                } else {
                    doseBrand1Set.style.display = 'none'
                    doseBrand2Set.style.display = 'none'
                    doseBrand3Set.style.display = 'none' 
                }
            }
        }
    })
}
        //advanceHealthcareDirective question dynamic functionality
const advanceHealthcareDirective = document.getElementById('advanceHealthcareDirective');
const advanceHealthcareDirectiveInquiry = document.getElementById('advanceHealthcareDirectiveInquiry');
advanceHealthcareDirectiveInquiry.style.display = 'none';

if(advanceHealthcareDirective){
    let advanceHealthcare;
    const advanceHealthcareDirectiveRadios = advanceHealthcareDirective.querySelectorAll('input[type="radio"]');
    advanceHealthcareDirective.addEventListener('click', () => {
        for(let i = 0; i < advanceHealthcareDirectiveRadios.length; i++){
            if(advanceHealthcareDirectiveRadios[i].checked){
                advanceHealthcare = advanceHealthcareDirectiveRadios[i].value;
                if(advanceHealthcare == 'no');
                advanceHealthcareDirectiveInquiry.style.display = 'block';
            }else{
                advanceHealthcareDirectiveInquiry.style.display = 'none';
                const advanceHealthcareDirectiveInquiryRadios = advanceHealthcareDirectiveInquiry.querySelectorAll('input[type="radio"]');
                advanceHealthcareDirectiveInquiryRadios.forEach(radio => {
                    radio.checked = false;
                });
            }
        }
    })
}
//Reproductive section of the form
        //pregnanciesStatus question dynamic  functionality
const pregnanciesStatus = document.getElementById('pregnanciesStatus')
const prenatalCareStatus = document.getElementById('prenatalCareStatus')
prenatalCareStatus.style.display = 'none';
const prenatalDoctor = document.getElementById('prenatalDoctor');
prenatalDoctor.style.display = 'none'
const emergencyContraception = document.getElementById('emergencyContraception')

if(pregnanciesStatus){
    let pregVal;
    const pregRadios = pregnanciesStatus.querySelectorAll('input[type="radio"]');
    pregnanciesStatus.addEventListener('click', () => {
        for(let i = 0; i < pregRadios.length; i++){
            if(pregRadios[i].checked){
                pregVal = pregRadios[i].value;
                if(pregVal == 'no' || pregVal == 'dont know'){
                    prenatalCareStatus.style.display = 'none';
                    emergencyContraception.style.display = 'block';
                } else if(pregVal == 'yes'){
                    prenatalCareStatus.style.display = 'block';
                    emergencyContraception.style.display = 'none';
                }
            }
        }
    })
}
        //prenatal 
if(prenatalCareStatus){
    let prenatalVal;
    const prenatalRadios = prenatalCareStatus.querySelectorAll('input[type="radio"]');
    prenatalCareStatus.addEventListener('click', () => {
    for(let i = 0; i < prenatalRadios.length; i++){
            if(prenatalRadios[i].checked){
                prenatalVal = prenatalRadios[i].value;
                if(prenatalVal == 'no'||prenatalVal == 'dont know'){
                    prenatalDoctor.style.display = 'none';
                }else{
                    prenatalDoctor.style.display = 'block';
                }
            }
        }
    })  
}
        //pregnancies
const pregnancyQuestion = document.getElementById('pregnancyQuestion');
pregnancyQuestion.style.display = 'none';
if(pregnanciesHistory){
    let pregnanciesVal;
    const pregnanciesRadios = pregnanciesHistory.querySelectorAll('input[type="radio"]');
    pregnanciesHistory.addEventListener('click', () => {
        for(let i = 0; i < pregnanciesRadios.length; i++){
            if(pregnanciesRadios[i].checked){
                pregnanciesVal = pregnanciesRadios[i].value;
                if(pregnanciesVal == 'no'){
                    pregnancyQuestion.style.display = 'none';
                }else{
                    pregnancyQuestion.style.display = 'grid';
                }
            }
        }
    })
}





