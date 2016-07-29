var app = new Marionette.Application();

app.addRegions({
    main: '#main'
});

app.Router = Marionette.AppRouter.extend({
    appRoutes: {
        "user": "listUsers"
    }
});

api = {
    listUsers: function () {
        app.UsersApp.Controller.listUsers();
    }
};

// app.on('show:user', function (model) {
//     var id = model.get('id');
//     app.navigate('user/'+ id);
//     api.showUser(id);
// });







app.navigate = function(route,  options){
    options || (options = {});
    Backbone.history.navigate(route, options);
};

app.getCurrentRoute = function(){
    return Backbone.history.fragment
};

app.on("start", function(){

     new app.Router({
         controller: api
     });

    if(Backbone.history){
        Backbone.history.start();

        if(this.getCurrentRoute() === ""){
            this.navigate("user");
            app.UsersApp.Controller.listUsers();
        }
    }
    
});

