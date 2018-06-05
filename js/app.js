var ViewModel = function() {
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

  this.increamentCounter = function() {
    this.clickCount(this.clickCount() + 1);
  }
}
ko.applyBindings(new ViewModel());
