var Cat = function() {
  this.clickCount = ko.observable(0);
  this.name = ko.observable('Tabby');
  this.imgSrc = ko.observable('img/22252709_010df3379e_z.jpg');
  this.catLables = ko.computed(function() {
    if (this.clickCount() < 10) {
      return 'Newborn';
    } else if (this.clickCount() >= 0 && this.clickCount() < 100) {
      return 'Infant';
    } else {
      return 'Teen';
    }
  }, this);

  this.catNickNames = ko.observableArray(['Furry', 'Puffy', 'Meowwy']);
}

var ViewModel = function() {
  var self = this;
  this.currentCat = ko.observable(new Cat());

  this.increamentCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  }
}
ko.applyBindings(new ViewModel());
