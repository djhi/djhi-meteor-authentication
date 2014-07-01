meteor-authentication
=====================

Authentication based on accounts-template with default configuration and a few additions:

### Support for beta invitation code
You can specify a Meteor settings named `invitationCode`. If present, it will be used in the sign up form and validated on submit.

### Profile name security
I also added code to ensure the user profile name does not contains `admin`, `root` or `system`.

Not meant to be used by anyone but me :)