Template.addUserModal.events({
  "click [data-action='submitAddUser']": function(e) {
    var email, name, password;
    var adminUser = Meteor.user();

    e.preventDefault();
    name = $("[name='name']").val();
    email = $("[name='email']").val();
    password = $("[name='password']").val();
    orgid: adminUser.profile.orgid;
    Meteor.call('addUser', name, email, password, orgid, function(err, result) {
      if (err) {
        return console.log(err);
      }
    });
    return $('#addUser').modal('hide');
  }
});
