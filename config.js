Meteor.startup(function() {
  /* Set the default language */
  T9n.language = "fr";
  T9n.maps['fr']['error.accounts.invalidUserName'] = "Votre nom d'utilisateur n'est pas valide";
  T9n.maps['fr']['error.accounts.invalidInvitationCode'] = "Votre code d'invitation n'est pas valide";
  T9n.maps['fr']['invitationCode'] = "Code d'invitation";
  T9n.maps['en']['error.accounts.invalidUserName'] = "Invalid username";
  T9n.maps['en']['error.accounts.invalidInvitationCode'] = "Invalid invitation code";
  T9n.maps['en']['invitationCode'] = "Invitation code";

  T9n.defaultLanguage = "en";

  Accounts.config({
    // TODO: set to true when in prod
    sendVerificationEmail: false
  });

  AccountsTemplates.configure({
    displayFormLabels: true,
    continuousValidation: true,
    homeRoutePath: 'home',
    postSignUpRoutePath: '/newCustomer',
  });

  if (Meteor.settings.public.useInvitationCode) {
    AccountsTemplates.addField({
      name: 'invitationCode',
      type: 'text',
      displayName: T9n.get("invitationCode"),
      required: true
    });
  }

  AccountsTemplates.init();
});
