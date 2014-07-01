Package.describe({
  summary: "Authentication based on accounts-template with a few defaults and support for beta invitation code. Not meant to be used by anyone but me :)"
});

Package.on_use(function(api, where) {
  var both = ['client', 'server'];

  api.use([
    'standard-app-packages',
    'accounts-base',
    'accounts-t9n',
    'accounts-templates-core'
  ], both);

  api.use([
    'accounts-templates-bootstrap',
  ], 'client');

  api.use([
    'accounts-password'
  ], 'server');

  api.imply([
    'accounts-base',
    'accounts-t9n',
    'accounts-templates-core',
  ], both);

  api.imply([
    'accounts-templates-bootstrap',
  ], 'client');

  api.imply([
    'accounts-password',
  ], 'server');

  api.add_files(['config.js'], both);

  api.add_files(['server.js'], 'server');

  api.add_files(['security-for-routes.js'], both);

  api.add_files([
    'views/sign_in.html',
    'views/signed_in.html',
    'views/signed_in.js'
  ], 'client');
});
