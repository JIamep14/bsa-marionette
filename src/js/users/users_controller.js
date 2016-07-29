app.module("UsersApp", function (UsersApp, app, Backbone, Marionette, $, _) {

    UsersApp.Controller = {
        listUsers: function () {

            var users = app.request('users:entities');

            var usersListView = new UsersApp.Users({
                collection: users
            });

            app.main.show(usersListView);
        },
        showUser: function (model) {

            var view = new UsersApp.ShowUser({
                model: model
            });
            
            app.getRegion('main').show(view);
        },
        // getUsers: function () {
        //     app.users = app.request('users:entities');
        // }
    }
});