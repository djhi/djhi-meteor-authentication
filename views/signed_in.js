Template.signedIn.events({
  'click #signOut': function(event, template) {
    Meteor.logout(function() {
      Router.go('home');
    });
  }
});

Template.signedIn.helpers({
  currentUserDisplayName: function() {
    return Meteor.user().emails[0].address;
  }
});

Template.signedIn.rendered = function() {
  this.$('.dropdown-toggle').dropdown();
}
