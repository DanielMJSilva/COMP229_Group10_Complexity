let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');


//create the user Model instance
let Survey = require('../models/survey');

router.get('/', (req, res, next) => {
    Survey.find((err, surveyList)=> {
        if(err){
            return console.error(err);
        }else{
            //console.log(surveyList);
            res.render('survey/survey', {title: 'Survey List', SurveyList: surveyList})
        }
    });
});

module.exports = router;