Meteor.startup(function() {
	// create an admin role if it doesn't exist
	if (Meteor.roles.find({name: 'admin'}).count() < 1 ) {
		Roles.createRole('admin');
	}
    if (Meteor.roles.find({name: 'org-owner'}).count() < 1 ) {
        Roles.createRole('org-owner');
    }
});