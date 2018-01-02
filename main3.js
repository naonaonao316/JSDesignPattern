var Task = require('./task');
var repoFactory = require('./repoFactory2');

console.log(repoFactory);

var task1 = new Task(repoFactory.task.get(1));
console.log(task1);
