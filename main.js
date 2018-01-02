var Task = require('./task');
var Repo = require('./taskRepository');
var userRepo = require('./taskRepository');
var projectRepo = require('./projectRepository');

var task1 = new Task(Repo.get(1));

var user = userRepo.get(1);
var project = projectRepo.get(1);

task1.user = user;
task1.project = project;

console.log(task1);

task1.save();
