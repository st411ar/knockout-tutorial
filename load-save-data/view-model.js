function Task(data) {
  this.title = ko.observable(data.title);
  this.isDone = ko.observable(data.isDone);
}

function TaskListViewModel() {
  var self = this;
  self.tasks = ko.observableArray([]);
  self.newTaskText = ko.observable();

  self.incompleteTasks = ko.computed(function() {
    return ko.utils.arrayFilter(
      self.tasks(),
      function(task) {
        return !task.isDone();
      }
    );
  });

  self.addTask = function() {
    self.tasks.push(new Task({ title: this.newTaskText() }));
    self.newTaskText('');
  };

  self.removeTask = function(task) {
    self.tasks.remove(task);
  };

  $.getJSON('http://learn.knockoutjs.com/tasks', function(allData) {
    var mappedTasks = $.map(allData, function(item) { return new Task(item); });
    self.tasks(mappedTasks);
  });
}