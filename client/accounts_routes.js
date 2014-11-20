Meteor.startup(function() {
  Router.route('/adminUsers', {
    path: 'admin/users',
    name: 'accountsAdmin',
    template: 'accountsAdmin',
    loginRequired: 'entrySignIn'
  });
});
