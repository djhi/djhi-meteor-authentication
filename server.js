Meteor.startup(function(){
  var code = getInvitationCode();

  if(code && code.length > 0){
    if(!Meteor.settings.public){
      Meteor.settings.public = {};
    };

    Meteor.settings.public.useInvitationCode = true;
  }  
});

getInvitationCode = function() {
  return (Meteor.settings && Meteor.settings.invitationCode) ? Meteor.settings.invitationCode : undefined;
};

// Validate invalid usernames
Accounts.validateNewUser(function(user) {
  var regexInvalidUsernames = new RegExp("admin|root|system", "i");

  if (regexInvalidUsernames.test(user.username).length > 0) {
    throw new Meteor.Error(403, "invalidUserName");
  }

  return true;
});


// Validate beta invitation code
Accounts.validateNewUser(function(user) {
  var invitationCode = getInvitationCode();

  if (invitationCode && invitationCode.length > 0) {
    if (!user.profile || !user.profile.invitationCode || user.profile.invitationCode !== invitationCode) {
      throw new Meteor.Error(403, "invalidInvitationCode");
    }
  }

  return true;
});