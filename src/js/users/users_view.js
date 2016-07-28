Library.module("UsersApp.List", function (List, ContactManager, Backbone, Marionette, $, _) {

    List.User = Marionette.ItemView.extend({
        tagName: 'tr',
        template: '#user-tr',

        ui: {
            show: '.btn-success',
            edit: '.btn-warning',
            give: '.btn-default',
            delete: '.btn-danger'
        },

        events: {
            'click @ui.js-show': 'showClicked',
            'click @ui.js-edit': 'editClicked',
            'click @ui.js-give': 'giveClicked',
            'click @ui.js-delete': 'deleteClicked'
        },

        showClicked: function () {

        },
        editClicked: function () {

        },
        giveClicked: function () {

        },
        deleteClicked: function () {
            
        }
    });

    List.Users = Marionette.CompositeView.extend({
        tagName: "table",
        className: "table table-striped table-hover table-bordered",
        template: "#table-template",
        childView: List.User,
        itemViewContainer: "tbody"
    });

});