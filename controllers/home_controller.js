const Project = require('../models/project');

//function to display all projects
module.exports.home = async function(req, res){
    try {
        let projects = await Project.find({}).sort('-createdAt');
        return res.render('home', {
            title: 'Issue Tracker | Home',
            projects: projects
        });
    }
    catch (err){
        console.log('Error', err);
        return res.redirect('back');
    }
}