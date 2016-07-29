app.module("UsersApp", function (UsersApp, app, Backbone, Marionette, $, _) {

    UsersApp.User = Marionette.ItemView.extend({
        tagName: 'tr',
        template: '#user-tr',

        ui: {
            show: '.js-show',
            edit: '.js-edit',
            give: '.js-give',
            delete: '.js-delete'
        },

        events: {
            'click @ui.show': 'showClicked',
            'click @ui.edit': 'editClicked',
            'click @ui.give': 'giveClicked',
            'click @ui.delete': "deleteClicked"
        },

        showClicked: function (e) {
            app.UsersApp.Controller.showUser(this.model);
        },
        editClicked: function (e) {
            
        },
        giveClicked: function (e) {

        },
        deleteClicked: function (e) {
            this.model.destroy();
        },

        remove: function () {
            this.$el.fadeOut();
        }

    });

    UsersApp.ShowUser = Marionette.ItemView.extend({
        template: '#user-view'
    });

    UsersApp.Users = Marionette.CompositeView.extend({
        tagName: "table",
        className: "table table-striped table-hover table-bordered",
        template: "#table-template",
        childView: UsersApp.User,
        itemViewContainer: "tbody"
    });

});