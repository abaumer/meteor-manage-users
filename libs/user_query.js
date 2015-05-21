filteredUserQuery = function(userId, filter) {
	// if not an admin user don't show any other user
	if (!Roles.userIsInRole(userId, ['admin']))
		return Meteor.users.find(userId);

	// only return users in their org
	var adminUser = Meteor.users.findOne(userId);
	var orgid = adminUser.profile.orgid;

	// TODO: configurable limit and paginiation
	var queryLimit = 25;

	if(!!filter) {
		// TODO: passing to regex directly could be dangerous
		users = Meteor.users.find({
			$or: [
				{'profile.name': {$regex: filter, $options: 'i'}},
				{'emails.address': {$regex: filter, $options: 'i'}}
			]
		}, {sort: {emails: 1}, limit: queryLimit});
	} else {
		users = Meteor.users.find({"profile.orgid": orgid}, {sort: {emails: 1}, limit: queryLimit});
	}
	return users;
};
