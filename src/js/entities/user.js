Library.module("Entities", function (Entities, ContactManager, Backbone, Marionette, $, _) {

    Entities.User = Backbone.Model.extend({
        defaults: {
            id: '',
            firstname: '',
            lastname: '',
            email: ''
        }
    });

    Entities.UserCollection = Backbone.Collection.extend({
        model: Entities.User,
        url: 'http://bsa2.local/api/user'
    });

    var API = {
        getUserEntities: function () {
            var users = new Entities.UserCollection();
            users.fetch();
            return users;
        }
    }

    Library.reqres.setHandler("users:entities", function () {
        return API.getUserEntities();
    });
});

