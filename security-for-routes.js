Router.map(function() {
  // Sign-in required
  this.onBeforeAction(AccountsTemplates.ensureSignedIn, {
    except: ['signIn', 'signUp', 'signOut', 'forgetPassword', 'home']
  });
});
