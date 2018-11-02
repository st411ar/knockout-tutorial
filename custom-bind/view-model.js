ko.bindingHandlers.fadeVisible = {
  init: function(element, valueAccessor) {
    var shouldDisplay = valueAccessor();
    $(element).toggle(shouldDisplay);
  },
  update: function(element, valueAccessor) {
    var shouldDisplay = valueAccessor();
    shouldDisplay ? $(element).fadeIn() : $(element).fadeOut();
  }
};

ko.bindingHandlers.jqButton = {
  init: function(element) {
    $(element).button();
  },
  update: function(element, valueAccessor) {
    var currentValue = valueAccessor();
    $(element).button("option", "disabled", currentValue.enable === false);
  }
}

function Answer(text) {
  this.answerText = text;
  this.points = ko.observable(1);
}

function SurveyViewModel(question, pointsBudget, answers) {
  this.question = question;
  this.pointsBudget = pointsBudget;
  this.answers = $.map(
    answers,
    function(text) {
      return new Answer(text);
    }
  );

  this.save = function() {
    alert('To do');
  }

  this.pointsUsed = ko.computed(function() {
    var total = 0;
    for (var i = 0; i < this.answers.length; i++) {
      total += this.answers[i].points();
    }
    return total;
  }, this);
}