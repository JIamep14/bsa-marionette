var Library = new Marionette.Application();

Library.on('start', function () {
    Library.UsersApp.List.Controller.listUsers();
});


Library.addRegions({
    main: '#main'
});

