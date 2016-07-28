Library.module("UsersApp.List", function (List, ContactManager, Backbone, Marionette, $, _) {

    List.Controller = {
        listUsers: function () {
            var users = Library.request('users:entities');

            var usersListView = new List.Users({
                collection: users
            });

            Library.main.show(usersListView);
        }
    }

    
});