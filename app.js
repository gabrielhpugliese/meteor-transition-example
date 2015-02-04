Router.configure({
  // the default layout
  layoutTemplate: 'LayoutOne'
});

Router.route('/', function () {
  // set the layout programmatically
  this.layout('LayoutOne');

  // render the PageOne template
  this.render('PageOne');

  this.state.set('currentLayout', 'one');
});

Router.route('/two', function () {
  // set the layout based on a reactive session variable
  this.layout('LayoutOne');

  // render the PageTwo template
  this.render('PageTwo');

  this.state.set('currentLayout', 'two');
});

if (Meteor.isClient) {
  Template.LayoutOne.currentPage = function () {
    return Router.current().state.get('currentLayout') || 'one';
  };
}
