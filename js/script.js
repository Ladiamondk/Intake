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

        //clientOrNavigator displays root email if navigator is selected
const clientOrNavigator = document.getElementById('clientOrNavigator')
const rootsemail = document.getElementById('rootsemail');
rootsemail.style.display = 'none';
if(clientOrNavigator){
    let nav;
    const clientOrNavigatorRadios = clientOrNavigator.querySelectorAll('input[type="radio"]');
    clientOrNavigator.addEventListener('click', () => {
        for(let i = 0; i < clientOrNavigatorRadios.length; i++){
            if(clientOrNavigatorRadios[i].checked){
                nav = clientOrNavigatorRadios[i].value;
                if(nav == 'navigator'){
                    rootsemail.style.display = 'block';
                }
                if(nav == 'client'){
                    rootsemail.style.display = 'none';
                    rootsemail.querySelector('input').value = '';
                }
            }
        }
    })
}
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
                        input.style.width = '170px';
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
    const pronounsList = document.getElementById('pronounsList');
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

                        pronounsList.appendChild(input);
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
const ethnicityList = document.getElementById('ethnicityList');
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

                        ethnicityList.appendChild(input);
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
                        input.id = 'doseBrand1Text';
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
                        input.id = 'doseBrand2Text';
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
                        input.name = 'doseBrand3';
                        input.id = 'doseBrand3Text';
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
                    dateQuit.style.display = 'none';
                    dateQuit.querySelector('input').value = '';
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
                    dateQuit.querySelector('input').value = '';
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
                    const doseBrand1Radios = doseBrand1.querySelectorAll('input[type="radio"]');
                    doseBrand1Radios.forEach(radio => {radio.checked = false});
                    document.getElementById('doseBrand1-date').value = '';
                    document.getElementById('doseBrand1Text').value = '';
                    doseBrand2Set.style.display = 'none'
                    const doseBrand2Radios = doseBrand2.querySelectorAll('input[type="radio"]');
                    doseBrand2Radios.forEach(radio => {radio.checked = false});
                    document.getElementById('doseBrand2-date').value = '';
                    document.getElementById('doseBrand2Text').value = '';
                    doseBrand3Set.style.display = 'none' 
                    const doseBrand3Radios = doseBrand3.querySelectorAll('input[type="radio"]');
                    doseBrand3Radios.forEach(radio => {radio.checked = false});
                    document.getElementById('doseBrand3-date').value = '';
                    document.getElementById('doseBrand3Text').value = '';
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
    const prenatalradio = prenatalCareStatus.querySelectorAll('input[type="radio"]');
    pregnanciesStatus.addEventListener('click', () => {
        for(let i = 0; i < pregRadios.length; i++){
            if(pregRadios[i].checked){
                pregVal = pregRadios[i].value;
                if(pregVal == 'no' || pregVal == 'dont know'){
                    prenatalCareStatus.style.display = 'none';
                    prenatalDoctor.style.display = 'none';
                    prenatalDoctor.querySelector('input').value = '';
                    prenatalradio.forEach(radio => {radio.checked = false});
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
                    prenatalDoctor.querySelector('input').value = 'none';
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
                    document.getElementById('pregnancies-input').value = 'none';
                    document.getElementById('liveBirths-input').value = 'none';
                    document.getElementById('abortions-input').value = 'none';
                    document.getElementById('miscarriages-input').value = 'none';
                }else{
                    pregnancyQuestion.style.display = 'grid';
                }
            }
        }
    })
}
//Preventative  area of the form
        //healthInsurancePlan dynamic functionality
const healthInsurancePlan = document.getElementById('healthInsurancePlan');
const policyNumber = document.getElementById('policyNumber');
policyNumber.style.display = 'none';
if(healthInsurancePlan){
    let policy;
    const healthInsurancePlanRadios = healthInsurancePlan.querySelectorAll('input[type="radio"]');
    healthInsurancePlan.addEventListener('click', () => {
        for(let i = 0; i < healthInsurancePlanRadios.length; i++){
            if(healthInsurancePlanRadios[i].checked){
                policy = healthInsurancePlanRadios[i].value;
                if(policy == 'none'){
                    policyNumber.style.display = 'none';
                    policyNumber.querySelector('input').value = '';
                }else{
                    policyNumber.style.display = 'block';
                }
            }
        }
    })
}
        //primary doctor dynamic functionality
const primaryDoctor = document.getElementById('primaryDoctor');
const primayDoctorNameLocation = document.getElementById('primayDoctorNameLocation');
primayDoctorNameLocation.style.display = 'none';
const lastPrimaryVisit = document.getElementById('lastPrimaryVisit');
lastPrimaryVisit.style.display = 'none';

if(primaryDoctor){
    let doctor;
    const primaryDoctorRadios = primaryDoctor.querySelectorAll('input[type="radio"]');
    primaryDoctor.addEventListener('click', () => {
        for(let i = 0; i < primaryDoctorRadios.length; i++){
            if(primaryDoctorRadios[i].checked){
                doctor = primaryDoctorRadios[i].value;
                if(doctor == 'yes'){
                    primayDoctorNameLocation.style.display = 'block';
                    lastPrimaryVisit.style.display = 'block';
                }else{
                    primayDoctorNameLocation.style.display = 'none';
                    primayDoctorNameLocation.querySelector('input').value = '';
                    lastPrimaryVisit.style.display = 'none';
                    lastPrimaryVisit.querySelector('input').value = '';
                }
            }
        }
    })
}
        //regularDentist dynamic functionality
const regularDentist = document.getElementById('regularDentist');
const lastDentistVisit = document.getElementById('lastDentistVisit');
lastDentistVisit.style.display = 'none';
const dentistNameLocation = document.getElementById('dentistNameLocation');
dentistNameLocation.style.display = 'none';
if(regularDentist){
    let dentist;
    const regularDentistRadios = regularDentist.querySelectorAll('input[type="radio"]');
    regularDentist.addEventListener('click', () => {
        for(let i = 0; i < regularDentistRadios.length; i++){
            if(regularDentistRadios[i].checked){
                dentist = regularDentistRadios[i].value;
                if(dentist == 'yes'){
                    lastDentistVisit.style.display = 'block';
                    dentistNameLocation.style.display = 'block';
                }else{
                    dentistNameLocation.style.display = 'none';
                    dentistNameLocation.querySelector('input').value = '';
                    lastDentistVisit.style.display = 'none';
                    lastDentistVisit.querySelector('input').value = '';
                }
            }
        }
    })
}
        //doctorsTherapistsCounselors dynamic functionality
const doctorsTherapistsCounselors = document.getElementById('doctorsTherapistsCounselors');
const doctorsTherapistsCounselorsNamesLocations = document.getElementById('doctorsTherapistsCounselorsNamesLocations');
doctorsTherapistsCounselorsNamesLocations.style.display = 'none';
if(doctorsTherapistsCounselors){
    let additionalDoctors;
    const doctorsTherapistsCounselorsRadios = doctorsTherapistsCounselors.querySelectorAll('input[type="radio"]');
    doctorsTherapistsCounselors.addEventListener('click', () => {
        for(let i = 0; i < doctorsTherapistsCounselorsRadios.length; i++){
            if(doctorsTherapistsCounselorsRadios[i].checked){
                additionalDoctors = doctorsTherapistsCounselorsRadios[i].value;
                if(additionalDoctors == 'yes'){
                    doctorsTherapistsCounselorsNamesLocations.style.display = 'block';
                }else{
                    doctorsTherapistsCounselorsNamesLocations.style.display = 'none';
                    doctorsTherapistsCounselorsNamesLocations.querySelector('input').value = '';
                }
            }
        }
    })
}
        //HealthcareManagementSocialOrCaseWorker dynamic functionality
const HealthcareManagementSocialOrCaseWorker = document.getElementById('healthcareManagementSocialOrCaseWorker');
const CaseOrSocialWorkerNameLocation = document.getElementById('caseOrSocialWorkerNameLocation');
CaseOrSocialWorkerNameLocation.style.display = 'none';
if(HealthcareManagementSocialOrCaseWorker){
    let healthcareManagement;
    const HealthcareManagementSocialOrCaseWorkerRadios = HealthcareManagementSocialOrCaseWorker.querySelectorAll('input[type="radio"]');
    HealthcareManagementSocialOrCaseWorker.addEventListener('click', () => {
        for(let i = 0; i < HealthcareManagementSocialOrCaseWorkerRadios.length; i++){
            if(HealthcareManagementSocialOrCaseWorkerRadios[i].checked){
                healthcareManagement = HealthcareManagementSocialOrCaseWorkerRadios[i].value;
                if(healthcareManagement == 'yes'){
                    CaseOrSocialWorkerNameLocation.style.display = 'block';
                }else{
                    CaseOrSocialWorkerNameLocation.style.display = 'none';
                    CaseOrSocialWorkerNameLocation.querySelector('input').value = '';
                }
            }
        }
    })
}
        //smokeCigarettesStatus dynamic functionality
const smokeCigarettesStatus = document.getElementById('smokeCigarettesStatus');
const cigarettesSmokedPerDay = document.getElementById('cigarettesSmokedPerDay');
cigarettesSmokedPerDay.style.display = 'none';
const tobaccoNicotineProducts = document.getElementById('tobaccoNicotineProducts');
tobaccoNicotineProducts.style.display = 'none';
const lastSmoke = document.getElementById('lastSmoke');
lastSmoke.style.display = 'none';
const smokeFrequency = document.getElementById('smokeFrequency');
smokeFrequency.style.display = 'none';
if(smokeCigarettesStatus){
    let smoke;
    const smokeCigarettesStatusRadios = smokeCigarettesStatus.querySelectorAll('input[type="radio"]');
    const perdayRadio = cigarettesSmokedPerDay.querySelectorAll('input[type="radio"]');
    const tobaccoRadio = tobaccoNicotineProducts.querySelectorAll('input[type="radio"]');
    const smokeRadio = lastSmoke.querySelectorAll('input[type="radio"]');
    const smokeFrequencyRadio = smokeFrequency.querySelectorAll('input[type="radio"]');
    smokeCigarettesStatus.addEventListener('click', () => {
        for(let i = 0; i < smokeCigarettesStatusRadios.length; i++){
            if(smokeCigarettesStatusRadios[i].checked){
                smoke = smokeCigarettesStatusRadios[i].value;
                if(smoke == 'yes'){
                    cigarettesSmokedPerDay.style.display = 'block';
                    tobaccoNicotineProducts.style.display = 'block';
                    lastSmoke.style.display = 'block';
                    smokeFrequency.style.display = 'block';
                }else{
                    cigarettesSmokedPerDay.style.display = 'none';
                    perdayRadio.forEach(radio => {radio.checked = false});
                    tobaccoNicotineProducts.style.display = 'none';
                    tobaccoRadio.forEach(radio => {radio.checked = false});
                    lastSmoke.style.display = 'none';
                    smokeRadio.forEach(radio => {radio.checked = false});
                    smokeFrequency.style.display = 'none';
                    smokeFrequencyRadio.forEach(radio => {radio.checked = false});
                }
            }
        }
    })
}
//Social area of the for section
//Housing
        //housingSituation
const housingSituation = document.getElementById('housingSituation');
const housingLocation = document.getElementById('housingLocation');
housingLocation.style.display = 'none';
if(housingSituation){
    let housing;
    const housingSituationRadios = housingSituation.querySelectorAll('input[type="radio"]');
    housingSituation.addEventListener('click', () => {
        for(let i = 0; i < housingSituationRadios.length; i++){
            if(housingSituationRadios[i].checked){
                housing = housingSituationRadios[i].value;
                if(housing == 'I have no housing'){
                    housingLocation.style.display = 'block';
                }else{
                    housingLocation.style.display = 'none';
                    housingLocation.querySelector('input').value = '';
                }
            }
        }
    })
}
//education
        //todaysWorkSituation dynamic functionality
const todaysWorkSituation = document.getElementById('todaysWorkSituation');
const employerNameLocation = document.getElementById('employerNameLocation');
employerNameLocation.style.display = 'none'
if(todaysWorkSituation){
    let work;
    const todaysWorkSituationRadios = todaysWorkSituation.querySelectorAll('input[type="radio"]');
    todaysWorkSituation.addEventListener('click', () => {
        for(let i = 0; i < todaysWorkSituationRadios.length; i++){
            if(todaysWorkSituationRadios[i].checked){
                work = todaysWorkSituationRadios[i].value;
                if(work == 'I am employed full-time' || work == 'I am employed part-time' || work == 'I am self-employed'|| work == 'I do odd jobs/occasional work'){
                    employerNameLocation.style.display = 'block';
                }else{
                    employerNameLocation.style.display = 'none';
                    employerNameLocation.querySelector('input').value = '';
                }
            }
        }
    })
}
        //educationTrainingParticipating dynamic functionality
const educationTrainingParticipating = document.getElementById('educationTrainingParticipating');
const programSchoolName = document.getElementById('programSchoolName');
programSchoolName.style.display = 'none';
const pastProgramAttended = document.getElementById('pastProgramAttended');
pastProgramAttended.style.display = 'none';
if(educationTrainingParticipating){
    let education;
    const educationTrainingParticipatingRadios = educationTrainingParticipating.querySelectorAll('input[type="radio"]');
    educationTrainingParticipating.addEventListener('click', () => {
        for(let i = 0; educationTrainingParticipatingRadios.length; i++){
            if(educationTrainingParticipatingRadios[i].checked){
                education = educationTrainingParticipatingRadios[i].value;
                if(education == 'yes'){
                    programSchoolName.style.display = 'block';
                    pastProgramAttended.style.display = 'none';
                    pastProgramAttended.querySelector('input').value = '';
                }else if(education == 'no, but I have in the past'){
                    pastProgramAttended.style.display = 'block';
                    programSchoolName.style.display = 'none';
                    programSchoolName.querySelector('input').value = '';
                }else{
                    pastProgramAttended.style.display = 'none';
                    pastProgramAttended.querySelector('input').value = '';
                    programSchoolName.style.display = 'none';                    
                    programSchoolName.querySelector('input').value = '';
                }
            }
        }
    })
}
//legal status
        //arrestHistory dynamic functionality
const arrestHistory = document.getElementById('arrestHistory');
const onGoingCriminalCase = document.getElementById('onGoingCriminalCase');
onGoingCriminalCase.style.display = 'none';
const prisonHistory = document.getElementById('prisonHistory');
prisonHistory.style.display = 'none';
const lastReleaseCDCPFN = document.getElementById('lastReleaseCDCPFN');
lastReleaseCDCPFN.style.display = 'none'
const restitution = document.getElementById('restitution');
restitution.style.display = 'none';
const restitutionAmount = document.getElementById('restitutionAmount');
restitutionAmount.style.display = 'none';
const criminalRecordClearing = document.getElementById('criminalRecordClearing');
criminalRecordClearing.style.display = 'none'
const paroleProbationStatus = document.getElementById('paroleProbationStatus');
paroleProbationStatus.style.display = 'none';
const paroleProbationEndDate = document.getElementById('paroleProbationEndDate');
paroleProbationEndDate.style.display = 'none';
if(arrestHistory){
    let arrest;
    const arrestHistoryRadios = arrestHistory.querySelectorAll('input[type="radio"]');

    const prisonHistoryRadios = prisonHistory.querySelectorAll('input[type="radio"]');
    const onGoingCriminalCaseRadios = onGoingCriminalCase.querySelectorAll('input[type="radio"]');
    const restitutionRadios = restitution.querySelectorAll('input[type="radio"]');
    const criminalRecordClearingRadios = criminalRecordClearing.querySelectorAll('input[type="radio"]');
    const paroleProbationStatusRadios = paroleProbationStatus.querySelectorAll('input[type="radio"]');

    arrestHistory.addEventListener('click', () => {
        for(let i = 0; i < arrestHistoryRadios.length; i++){
            if(arrestHistoryRadios[i].checked){
                arrest = arrestHistoryRadios[i].value;
                if(arrest == 'yes'){
                    prisonHistory.style.display = 'block';
                    onGoingCriminalCase.style.display = 'block';
                    restitution.style.display = 'block';
                    criminalRecordClearing.style.display = 'block';
                    paroleProbationStatus.style.display = 'block';
                }else{
                    prisonHistory.style.display = 'none';
                    prisonHistoryRadios.forEach(radio => {radio.checked =false});
                    onGoingCriminalCase.style.display = 'none';
                    onGoingCriminalCaseRadios.forEach(radio => {radio.checked =false});
                    restitution.style.display = 'none';
                    restitutionRadios.forEach(radio => {radio.checked =false});
                    criminalRecordClearing.style.display = 'none';
                    criminalRecordClearingRadios.forEach(radio => {radio.checked =false});
                    paroleProbationStatus.style.display = 'none';
                    paroleProbationStatusRadios.forEach(radio => {radio.checked =false});
                }
            }
        }
    })
}
        //prisonHistory dynamic functionality
if(prisonHistory){
    let jail;
    const prisonHistoryRadios = prisonHistory.querySelectorAll('input[type="radio"]');
    prisonHistory.addEventListener('click', () => {
        for(let i = 0; i < prisonHistoryRadios.length; i++){
            if(prisonHistoryRadios[i].checked){
                jail = prisonHistoryRadios[i].value;
                if(jail == 'yes'){
                    lastReleaseCDCPFN.style.display = 'block';
                }else{
                    lastReleaseCDCPFN.style.display = 'none';
                    lastReleaseCDCPFN.querySelector('input').value = '';
                }
            }
        }
    })
}
        //restitution dynamic functionality
if(restitution){
    let owed;
    const restitutionRadios = restitution.querySelectorAll('input[type="radio"]');
    restitution.addEventListener('click', () => {
        for(let i = 0; i < restitutionRadios.length; i++){
            if(restitutionRadios[i].checked){
                owed = restitutionRadios[i].value;
                if(owed == 'yes'){
                    restitutionAmount.style.display = 'block'
                }else{
                    restitutionAmount.style.display = 'none'
                    restitutionAmount.querySelector('input').value = '';
                }
            }
        }
    })
}