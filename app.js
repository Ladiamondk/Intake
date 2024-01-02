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
        } = req.body;

        await pool.query('INSERT INTO demographics (todays_date, roots_email, roots_site, visit_purpose, first_name, last_name, middle_name, preferred_name, birth_date, ssn, sex, gender_identity, pronouns, sexual_orientation, personal_email, home_phone, cell_phone, address, preferred_contact_method, emergency_contact_name1, emergency_contact_relationship1, emergency_contact_number1, emergency_contact_name2, emergency_contact_relationship2, emergency_contact_number2, children_name_age, child_development_concern, last_12months_child_pcp_visit, pediatric_care_interest, pharmacy, identified_race, identified_ethnicity, languages_spoken, martial_status, veterans_status) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34,$35)', [
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
        ]);

        await pool.query('INSERT INTO medical_history (smokingHistory, currentlySmoke, dateQuit, prescription, allergies, hospitalizations, covidVaccinationHistory, doseBrand1, doseBrand1Date, doseBrand2, doseBrand2Date, doseBrand3, doseBrand3Date, familyHistory, vaccinationHistory, advanceHealthcareDirective, advanceHealthcareDirectiveInquiry, tb_testingHistory, tb_testingContact, immunosuppression, tb_ForiegnCountryExposure, tb_CongregateSettingExposure, pregnanciesStatus, prenatalCareStatus, prenatalDoctor, lastMentrualPeriod, past6Months_multipleSexPartners, birthControlMethod, emergencyContraception, pregnanciesHistory, pregnancies, liveBirths, abortions, miscarriages) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16,$17,$18,$19,$20,$21,$22,$23,$24,$25,$26,$27,$28,$29,$30,$31,$32,$33,$34)', [
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
            miscarriages
        ]);

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
