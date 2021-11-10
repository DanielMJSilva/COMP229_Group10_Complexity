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

router.get('/create',(req, res, next) => {

    let emptySurvey = Survey({
        title: '',
        description: '',
        created: null,
        updated: null,
        expiry: null,
        active: null,
        startDate: null

      });

    res.render('survey/createSurvey', {title: 'Create Survey', Survey: emptySurvey});   
}
);

router.post('/create', (req, res, next) => {

    let newServey = Survey({
        title: req.body.title,
        description: req.body.description,
        owner: "Group 10",
        questions: null,
        created: new Date(),
        updated: null,
        expiry: req.body.expiry,
        active: null, //req.body.active
        startDate: req.body.startDate,
        
    });

    Survey.create(newServey, (err, Survey) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            res.redirect('/survey-list');
        }
    });

});

router.get('/delete/:id', (req, res, next) => {
    let id = req.params.id;
    Survey.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
        res.redirect('/survey-list');
        }
    });

});

module.exports = router;