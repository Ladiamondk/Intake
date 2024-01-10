//web server
const express = require('express');
const bodyParser = require('body-parser');
const {Pool} = require('pg');
var path = require('path');

const app =express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//connect to Postgress
const pool = new Pool({
    user: 'postgres',
    host:'localhost',
    database:'test',
    password: '102019',
    port: 5432,
})
app.get('/', (req,res) => {
    res.send(`Hello World`)
})
//handle form submission
app.post('/registration', async(req, res) => {
    try {
        const {
            todays_date,
            roots_email,
            roots_site,
            visit_purpose,
            first_name,
            last_name,
            middle_name,
            preferred_name,
            birth_date,
            ssn,
            sex,
            gender_identity,
            pronouns,
            sexual_orientation,
            personal_email,
            home_phone,
            cell_phone,
            address,
            preferred_contact_method,
            emergency_contact_name1,
            emergency_contact_relationship1,
            emergency_contact_number1,
            emergency_contact_name2,
            emergency_contact_relationship2,
            emergency_contact_number2,
            children_name_age,
            child_development_concern,
            last_12months_child_pcp_visit,
            pediatric_care_interest,
            pharmacy,
            identified_race,
            identified_ethnicity,
            languages_spoken,
            martial_status,
            veterans_status,
            smokingHistory,
            currentlySmoke,
            dateQuit,
            prescription,
            allergies,
            hospitalizations,
            covidVaccinationHistory,
            doseBrand1,
            doseBrand1Date,
            doseBrand2,
            doseBrand2Date,
            doseBrand3,
            doseBrand3Date,
            familyHistory,
            vaccinationHistory,
            advanceHealthcareDirective,
            advanceHealthcareDirectiveInquiry,
            tb_testingHistory,
            tb_testingContact,
            immunosuppression,
            tb_ForiegnCountryExposure,
            tb_CongregateSettingExposure,
            pregnanciesStatus,
            prenatalCareStatus,
            prenatalDoctor,
            lastMentrualPeriod,
            past6Months_multipleSexPartners,
            birthControlMethod,
            emergencyContraception,
            pregnanciesHistory,
            pregnancies,
            liveBirths,
            abortions,
            miscarriages,
            healthInsurancePlan,
            policyNumber,
            primaryDoctor,
            lastPrimaryVisit,
            primayDoctorNameLocation,
            regularDentist,
            lastDentistVisit,
            dentistNameLocation,
            doctorsTherapistsCounselors,
            doctorsTherapistsCounselorsNamesLocations,
            healthcareManagementSocialOrCaseWorker,
            caseOrSocialWorkerNameLocation,
            selfHealthEvaluation,
            pastMonthPhysicalHealthSelfEval,
            diagnosedMedicalConditions,
            preventativeScreeningTest,
            lastYearScreening,
            dailyModerateStrenuousExcercise,
            minuteModerateStrenuousExcercise,
            pastYearEmergencyRoomVisit,
            smokeCigarettesStatus,
            cigarettesSmokedPerDay,
            tobaccoNicotineProducts,
            lastSmoke,
            smokeFrequency,
            typicalTransportationToRoots,
            dependableSupportPerson,
            pastYearLackOfConvenientTransportation,
            ownPersonalPhone,
            concernWithLandlord,
            familyImmigrationStatusConcern,
            governmentIssuedIDOrLicense,
            jobsHousingGovBenefitsDifficultiesBasedOnBackground,
            paroleProbationEndDate,
            paroleProbationStatus,
            criminalRecordClearing,
            restitutionAmount,
            restitution,
            lastReleaseCDCPFN,
            prisonHistory,
            onGoingCriminalCase,
            arrestHistory,
            domesticAbuseFromHousingOccupants,
            someoneToCallWhenDownStressed,
            clubCommunityGroupInvolvement,
            someoneDependableForHelp,
            pastProgramAttended,
            programSchoolName,
            educationTrainingParticipating,
            employerNameLocation,
            todaysWorkSituation,
            highestLevelEducation,
            past3MonthsCutSkipMealSize,
            incomeCoverHouseholdExpenses,
            past3MonthsDifficultiesPayingEssentialBills,
            past12MonthsFoodRanOut, 
            past12MonthsWorriedAboutFoodRunningOut, 
            whereGetMajorityFood, 
            servingsFruitTypicalDay,
            past3MonthsLackOfHousing,
            housingLocation,
            housingSituation,
            mentalHealthDiagnose,
            pastMonthMentalHealthInterferedActivitiesWorkRecreation,
            pastMonthWorryAboutLifeCommitments,
            mentalHealthIssuesMakeWorkHouseWorkSocialDifficult,
            drinkAlcoholFrequency,
            alcoholDrinksAmountTypicalDayDrink,
            sixOrMoreDrinksOccasion,
            lastYearCantStopDrinkOnceStart,
            lastYearFailedNormalDutiesFromDrinking,
            lastYearFirstDrinkNeededAfterHeavySession,
            lastYearguiltRemorseAfterDrinking,
            lastYearMemoryLostDueToDrinking,
            injuryResultOfYourDrinking,
            relativeHealthWorkerRaisedConcernOfDrinking,
            drugsUsed,
            drugUseFrequency,
            injectedDrugs,
            treatedForSubstanceAbuse,
            useOfNonPrescribedDrugs,
            abuseMoreThanOneDrugAtTime,
            ableStopDrugsWhenWant,
            blackoutsFlashbacksFromDrugUse,
            feelBadGuiltAboutDrugUse,
            spouseParentComplainAboutDrugUse,
            neglectedFamilyDueToDrugUse,
            illegalActivitiesEngagmentToObtainDrugUSe,
            experiencedWithdrawSymptoms,
            medicalProblemsDueToDrugUse,
            agreementsRootsCommunityCode,
            agreementsRootsCommunityHealthClinicNoticeOfPolicy,
            designateAuthorizedOnBehalf,
            nameOfAuthorized,
            receivingNavigationServices,
            agreementsTargetCaseManagement,
            agreementsHealthyMeasures,
            householdchildren0_5,
            householdchildren6_17,
            householdadults18_65,
            householdadults65_plus,
            TANF,
            SSI,
            GA,
            SNAP,
            WIC,
            unemployment,
            SDI,
            rentalAssistance,
            depressionScreeningLittleInterestPleasure,
            depressionScreeningDownDepressedHopeless,
            depressionScreeningSleepIssues,
            depressionScreeningTiredLittleEnergy,
            depressionScreeningOvereatingPoorAppetite,
            depressionScreeningFeelingsFailure,
            depressionScreeningStruggleConcentrating,
            depressionScreeningFidgetyRestlessMovingSlowly,
            depressionScreeningThoughtsSelfPainDeath
        } = req.body;

        const demographics = await pool.query('INSERT INTO demographics (todays_date, roots_email, roots_site, visit_purpose, first_name, last_name, middle_name, preferred_name, birth_date, ssn, sex, gender_identity, pronouns, sexual_orientation, personal_email, home_phone, cell_phone, address, preferred_contact_method, emergency_contact_name1, emergency_contact_relationship1, emergency_contact_number1, emergency_contact_name2, emergency_contact_relationship2, emergency_contact_number2, children_name_age, child_development_concern, last_12months_child_pcp_visit, pediatric_care_interest, pharmacy, identified_race, identified_ethnicity, languages_spoken, martial_status, veterans_status, householdchildren0_5, householdchildren6_17, householdadults18_65, householdadults65_plus) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37,$38,$39)', [
            todays_date,
            roots_email,
            roots_site,
            visit_purpose,
            first_name,
            last_name,
            middle_name,
            preferred_name,
            birth_date,
            ssn,
            sex, 
            gender_identity,
            pronouns,
            sexual_orientation,
            personal_email,
            home_phone,
            cell_phone,
            address,
            preferred_contact_method,
            emergency_contact_name1,
            emergency_contact_relationship1,
            emergency_contact_number1,
            emergency_contact_name2,
            emergency_contact_relationship2,
            emergency_contact_number2,
            children_name_age,
            child_development_concern,
            last_12months_child_pcp_visit,
            pediatric_care_interest,
            pharmacy,
            identified_race,
            identified_ethnicity,
            languages_spoken,
            martial_status,
            veterans_status,
            householdchildren0_5,
            householdchildren6_17,
            householdadults18_65,
            householdadults65_plus       
        ]);
        console.log(demographics);

        const medicalHistory = await pool.query('INSERT INTO medical_history (smokingHistory, currentlySmoke, dateQuit, prescription, allergies, hospitalizations, covidVaccinationHistory, doseBrand1, doseBrand1Date, doseBrand2, doseBrand2Date, doseBrand3, doseBrand3Date, familyHistory, vaccinationHistory, advanceHealthcareDirective, advanceHealthcareDirectiveInquiry, tb_testingHistory, tb_testingContact, immunosuppression, tb_ForiegnCountryExposure, tb_CongregateSettingExposure, pregnanciesStatus, prenatalCareStatus, prenatalDoctor, lastMentrualPeriod, past6Months_multipleSexPartners, birthControlMethod, emergencyContraception, pregnanciesHistory, pregnancies, liveBirths, abortions, miscarriages) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34)', [
            smokingHistory,
            currentlySmoke,
            dateQuit,
            prescription,
            allergies,
            hospitalizations,
            covidVaccinationHistory,
            doseBrand1,
            doseBrand1Date,
            doseBrand2,
            doseBrand2Date,
            doseBrand3,
            doseBrand3Date,
            familyHistory,
            vaccinationHistory,
            advanceHealthcareDirective,
            advanceHealthcareDirectiveInquiry,
            tb_testingHistory,
            tb_testingContact,
            immunosuppression,
            tb_ForiegnCountryExposure,
            tb_CongregateSettingExposure,
            pregnanciesStatus,
            prenatalCareStatus,
            prenatalDoctor,
            lastMentrualPeriod,
            past6Months_multipleSexPartners,
            birthControlMethod,
            emergencyContraception,
            pregnanciesHistory,
            pregnancies,
            liveBirths,
            abortions,
            miscarriages,
        ]);
        console.log(medicalHistory);
        const preventative = await pool.query('INSERT INTO preventative (healthInsurancePlan, policyNumber, primaryDoctor, lastPrimaryVisit, primayDoctorNameLocation, regularDentist, lastDentistVisit, dentistNameLocation, doctorsTherapistsCounselors, doctorsTherapistsCounselorsNamesLocations, healthcareManagementSocialOrCaseWorker, caseOrSocialWorkerNameLocation, selfHealthEvaluation, pastMonthPhysicalHealthSelfEval, diagnosedMedicalConditions, preventativeScreeningTest, lastYearScreening, dailyModerateStrenuousExcercise, minuteModerateStrenuousExcercise, pastYearEmergencyRoomVisit, smokeCigarettesStatus, cigarettesSmokedPerDay, tobaccoNicotineProducts, lastSmoke, smokeFrequency, calworks_benefits, social_security_disability, general_assistance, calfresh_benefits, women_infant_children_benefits, unemployment_benefits, state_disability_insurance_benefits, rental_assistance_benefits ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33)', [
            healthInsurancePlan,
            policyNumber,
            primaryDoctor,
            lastPrimaryVisit,
            primayDoctorNameLocation,
            regularDentist,
            lastDentistVisit,
            dentistNameLocation,
            doctorsTherapistsCounselors,
            doctorsTherapistsCounselorsNamesLocations,
            healthcareManagementSocialOrCaseWorker,
            caseOrSocialWorkerNameLocation,
            selfHealthEvaluation,
            pastMonthPhysicalHealthSelfEval,
            diagnosedMedicalConditions,
            preventativeScreeningTest,
            lastYearScreening,
            dailyModerateStrenuousExcercise,
            minuteModerateStrenuousExcercise,
            pastYearEmergencyRoomVisit,
            smokeCigarettesStatus,
            cigarettesSmokedPerDay,
            tobaccoNicotineProducts,
            lastSmoke,
            smokeFrequency,
            TANF,
            SSI,
            GA,
            SNAP,
            WIC,
            unemployment,
            SDI,
            rentalAssistance
        ]);
        console.log(preventative);

        const social = await pool.query('INSERT INTO social (typicalTransportationToRoots, dependableSupportPerson, pastYearLackOfConvenientTransportation, ownPersonalPhone, concernWithLandlord, familyImmigrationStatusConcern, governmentIssuedIDOrLicense, jobsHousingGovBenefitsDifficultiesBasedOnBackground, paroleProbationEndDate, paroleProbationStatus, criminalRecordClearing, restitutionAmount, restitution, lastReleaseCDCPFN, prisonHistory, onGoingCriminalCase, arrestHistory, domesticAbuseFromHousingOccupants, someoneToCallWhenDownStressed, clubCommunityGroupInvolvement, someoneDependableForHelp, pastProgramAttended, programSchoolName, educationTrainingParticipating, employerNameLocation, todaysWorkSituation, highestLevelEducation, past3MonthsCutSkipMealSize, incomeCoverHouseholdExpenses, past3MonthsDifficultiesPayingEssentialBills, past12MonthsFoodRanOut, past12MonthsWorriedAboutFoodRunningOut, whereGetMajorityFood, servingsFruitTypicalDay, past3MonthsLackOfHousing, housingLocation, housingSituation) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37)', [
            typicalTransportationToRoots,
            dependableSupportPerson,
            pastYearLackOfConvenientTransportation,
            ownPersonalPhone,
            concernWithLandlord,
            familyImmigrationStatusConcern,
            governmentIssuedIDOrLicense,
            jobsHousingGovBenefitsDifficultiesBasedOnBackground,
            paroleProbationEndDate,
            paroleProbationStatus,
            criminalRecordClearing,
            restitutionAmount,
            restitution,
            lastReleaseCDCPFN,
            prisonHistory,
            onGoingCriminalCase,
            arrestHistory,
            domesticAbuseFromHousingOccupants,
            someoneToCallWhenDownStressed,
            clubCommunityGroupInvolvement,
            someoneDependableForHelp,
            pastProgramAttended,
            programSchoolName,
            educationTrainingParticipating,
            employerNameLocation,
            todaysWorkSituation,
            highestLevelEducation,
            past3MonthsCutSkipMealSize,
            incomeCoverHouseholdExpenses,
            past3MonthsDifficultiesPayingEssentialBills,
            past12MonthsFoodRanOut, 
            past12MonthsWorriedAboutFoodRunningOut, 
            whereGetMajorityFood, 
            servingsFruitTypicalDay,
            past3MonthsLackOfHousing,
            housingLocation,
            housingSituation,
        ]);
        console.log(social);

        const screening = await pool.query('INSERT INTO screening (mentalHealthDiagnose, pastMonthMentalHealthInterferedActivitiesWorkRecreation, pastMonthWorryAboutLifeCommitments, mentalHealthIssuesMakeWorkHouseWorkSocialDifficult, drinkAlcoholFrequency, alcoholDrinksAmountTypicalDayDrink, sixOrMoreDrinksOccasion, lastYearCantStopDrinkOnceStart, lastYearFailedNormalDutiesFromDrinking, lastYearFirstDrinkNeededAfterHeavySession, lastYearguiltRemorseAfterDrinking, lastYearMemoryLostDueToDrinking, injuryResultOfYourDrinking, relativeHealthWorkerRaisedConcernOfDrinking, drugsUsed, drugUseFrequency, injectedDrugs, treatedForSubstanceAbuse, useOfNonPrescribedDrugs, abuseMoreThanOneDrugAtTime, ableStopDrugsWhenWant, blackoutsFlashbacksFromDrugUse, feelBadGuiltAboutDrugUse, spouseParentComplainAboutDrugUse, neglectedFamilyDueToDrugUse, illegalActivitiesEngagmentToObtainDrugUSe, experiencedWithdrawSymptoms, medicalProblemsDueToDrugUse, depression_screening_littleinterest_pleasure, depression_screening_down_depressed_hopeless, depression_screening_sleepissues, depression_screening_tired_littleenergy, depression_screening_overeating_poorappetite, depression_screening_feelingsfailure, depression_screening_struggleconcentrating, depression_screening_fidgety_restless_movingslowly, depression_Screening_Thoughts_SelfPain_Death) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35,$36,$37)', [
            mentalHealthDiagnose,
            pastMonthMentalHealthInterferedActivitiesWorkRecreation,
            pastMonthWorryAboutLifeCommitments,
            mentalHealthIssuesMakeWorkHouseWorkSocialDifficult,
            drinkAlcoholFrequency,
            alcoholDrinksAmountTypicalDayDrink,
            sixOrMoreDrinksOccasion,
            lastYearCantStopDrinkOnceStart,
            lastYearFailedNormalDutiesFromDrinking,
            lastYearFirstDrinkNeededAfterHeavySession,
            lastYearguiltRemorseAfterDrinking,
            lastYearMemoryLostDueToDrinking,
            injuryResultOfYourDrinking,
            relativeHealthWorkerRaisedConcernOfDrinking,
            drugsUsed,
            drugUseFrequency,
            injectedDrugs,
            treatedForSubstanceAbuse,
            useOfNonPrescribedDrugs,
            abuseMoreThanOneDrugAtTime,
            ableStopDrugsWhenWant,
            blackoutsFlashbacksFromDrugUse,
            feelBadGuiltAboutDrugUse,
            spouseParentComplainAboutDrugUse,
            neglectedFamilyDueToDrugUse,
            illegalActivitiesEngagmentToObtainDrugUSe,
            experiencedWithdrawSymptoms,
            medicalProblemsDueToDrugUse,
            depressionScreeningLittleInterestPleasure,
            depressionScreeningDownDepressedHopeless,
            depressionScreeningSleepIssues,
            depressionScreeningTiredLittleEnergy,
            depressionScreeningOvereatingPoorAppetite,
            depressionScreeningFeelingsFailure,
            depressionScreeningStruggleConcentrating,
            depressionScreeningFidgetyRestlessMovingSlowly,
            depressionScreeningThoughtsSelfPainDeath
        ]);
        console.log(screening);

        const agreements = await pool.query('INSERT INTO agreements (agreementsRootsCommunityCode, agreementsRootsCommunityHealthClinicNoticeOfPolicy, designateAuthorizedOnBehalf, nameOfAuthorized, receivingNavigationServices, agreementsTargetCaseManagement, agreementsHealthyMeasures) VALUES ($1,$2,$3,$4,$5,$6,$7)', [
            agreementsRootsCommunityCode,
            agreementsRootsCommunityHealthClinicNoticeOfPolicy,
            designateAuthorizedOnBehalf,
            nameOfAuthorized,
            receivingNavigationServices,
            agreementsTargetCaseManagement,
            agreementsHealthyMeasures
        ]);
        console.log(agreements);

        let housingscore;
        if ((housingSituation == 'I own a house or apartment' || housingSituation == 'I rent a house or apartment') && past3MonthsLackOfHousing == 'never'){
            housingscore = 'low';
        } else if (housingSituation == 'a treatment facility or group home' && past3MonthsLackOfHousing !== 'never') {
            housingscore = 'medium';
        } else if (housingSituation !== 'I rent a house or apartment' && housingSituation !== 'I own a house or apartment' && housingSituation !== 'a treatment facility or group home' && past3MonthsLackOfHousing !== 'never'){
            housingscore = 'high';
        } else {
            housingscore = 'low';
        };

        let financialSecurityScore;
        if(incomeCoverHouseholdExpenses == 'no' && (past3MonthsCutSkipMealSize == 'most days' || past3MonthsCutSkipMealSize == 'every day')){
            financialSecurityScore = 'high';
        }else if((past3MonthsDifficultiesPayingEssentialBills == 'one month' || past3MonthsDifficultiesPayingEssentialBills == 'two months') && past3MonthsCutSkipMealSize == 'several days'){
            financialSecurityScore = 'medium';
        }else{
            financialSecurityScore = 'low';
        };

        let educationEmploymentFlag;
        if(todaysWorkSituation == 'I am unemployed, but looking for work' || educationTrainingParticipating == 'no, but I would like to'){
            educationEmploymentFlag = 'yes';
        }else{
            educationEmploymentFlag = 'no';
        }
        let mobilityCommunicationFlag;
        if(ownPersonalPhone == 'no' || pastYearLackOfConvenientTransportation == 'every day' || pastYearLackOfConvenientTransportation == 'most days' || dependableSupportPerson == 'no'){
            mobilityCommunicationFlag = 'yes';
        }else{
            mobilityCommunicationFlag = 'no';
        };

        let healthcarePreventativeFlag;
        if(healthInsurancePlan == 'none' || primaryDoctor == 'no' || regularDentist == 'no'){
            healthcarePreventativeFlag = 'yes';
        }else{
            healthcarePreventativeFlag = 'no';
        };

        let healthcareGeneralScore;
        if(selfHealthEvaluation == 'poor' || pastYearEmergencyRoomVisit !== 'none' || pastMonthPhysicalHealthSelfEval == 'every day' || pastMonthPhysicalHealthSelfEval == 'more than half the days'){
            healthcareGeneralScore = 'high';
        }else if(selfHealthEvaluation == 'fair' || pastMonthPhysicalHealthSelfEval == 'some days'){
            healthcareGeneralScore = 'medium';
        }else{
            healthcareGeneralScore = 'low';
        }

        let healthcareCardioScore;
        if(diagnosedMedicalConditions == 'Congestive heart failure' || diagnosedMedicalConditions == 'Heart disease' || diagnosedMedicalConditions == 'High blood pressure' || dailyModerateStrenuousExcercise == '0 days' || minuteModerateStrenuousExcercise == '0 min' || smokeCigarettesStatus == 'yes'){
            healthcareCardioScore = 'high';
        }else if(diagnosedMedicalConditions !== 'Congestive heart failure' || diagnosedMedicalConditions !== 'Heart disease' || !diagnosedMedicalConditions == 'High blood pressure' || dailyModerateStrenuousExcercise == '1-2 days' || minuteModerateStrenuousExcercise == '0 min'|| minuteModerateStrenuousExcercise == '15 min'){
            healthcareCardioScore = 'medium';
        }else if(diagnosedMedicalConditions !== 'none' || dailyModerateStrenuousExcercise == '3-4 days' || dailyModerateStrenuousExcercise == '5-7 days' || minuteModerateStrenuousExcercise !== '0 min'|| minuteModerateStrenuousExcercise !== '15 min'){
            healthcareCardioScore = 'low';
        }

        let foodAcccessScore;
        if(past12MonthsWorriedAboutFoodRunningOut == 'often' || past12MonthsFoodRanOut == 'often'){
            foodAcccessScore = 'high';
        }else if(past12MonthsWorriedAboutFoodRunningOut == 'sometimes' || past12MonthsFoodRanOut == 'sometimes'){
            foodAcccessScore = 'medium';
        }else{
            foodAcccessScore = 'low';
        }
        
        const socialVitalSigns = await pool.query('INSERT INTO social_vital_signs (housing, financial_security, employment_education, mobility_communication, healthcare_preventative, healthcare_general, healthcare_cardio, food_access) VALUES ($1,$2,$3,$4,$5,$6,$7,$8)',[
            housingscore,
            financialSecurityScore,
            educationEmploymentFlag,
            mobilityCommunicationFlag,
            healthcarePreventativeFlag,
            healthcareGeneralScore,
            healthcareCardioScore,
            foodAcccessScore
        ])
        res.send('Form submitted successfully!');

    } catch(error){
        console.error('Error processing form data:', error);
        console.error(error.stack);
        res.status(500).send('Internal Server Error');
    }
})
//listen on the port
app.listen(port, () => {
    console.log(`Intake form is running on port${port}`)
})
