var initialCats =[
  {
    clickCount: 0,
    name: 'Tabby',
    imgSrc: 'img/22252709_010df3379e_z.jpg',
    catNickNames: ['Tab', 'Furry', 'Puffy', 'Meowwy']
  },
  {
    clickCount: 0,
    name: 'Toffy',
    imgSrc: 'img/434164568_fea0ad4013_z.jpg',
    catNickNames: ['Tuff', 'Trr']
  },
  {
    clickCount: 0,
    name: 'Trikky',
    imgSrc: 'img/1413379559_412a540d29_z.jpg',
    catNickNames: ['Trek', 'Trik']
  },
  {
    clickCount: 0,
    name: 'Taddy',
    imgSrc: 'img/4154543904_6e2428c421_z.jpg',
    catNickNames: ['Tad', 'Ted']
  },
  {
    clickCount: 0,
    name: 'Tulky',
    imgSrc: 'img/9648464288_2516b35537_z.jpg',
    catNickNames: ['Talk', 'Trll']
  }
]


var Cat = function(catData) {
  this.clickCount = ko.observable(catData.clickCount);
  this.name = ko.observable(catData.name);
  this.imgSrc = ko.observable(catData.imgSrc);
  this.catNickNames = ko.observableArray(catData.catNickNames);
  this.catLables = ko.computed(function() {
    if (this.clickCount() < 10) {
      return 'Newborn';
    } else if (this.clickCount() >= 0 && this.clickCount() < 100) {
      return 'Infant';
    } else {
      return 'Teen';
    }
  }, this);


}

var ViewModel = function() {
  var self = this;

  this.catList = ko.observableArray([]);

  initialCats.forEach(function(catItem) {
    self.catList.push(new Cat(catItem));
  });
  this.currentCat = ko.observable(this.catList()[0]);

  this.increamentCounter = function() {
    self.currentCat().clickCount(self.currentCat().clickCount() + 1);
  }

  this.setCat = function(clickedCat) {
    self.currentCat(clickedCat);
  }
}
ko.applyBindings(new ViewModel());
