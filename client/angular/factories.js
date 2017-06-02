/**************************************
        ANGULAR USER FACTORY
**************************************/
app.factory('UserFactory', function($http, $cookies){
    var factory = {}
    console.log('User Factory');

    factory.index = function(callbakc){
        $http.get('/users').then(callback)
    }

    return factory
})
