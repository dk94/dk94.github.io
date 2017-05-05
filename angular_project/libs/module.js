angular.module("app",['scrollSpyModule','countUpModule','ngRoute','smoothScroll'])
    .config(function ($routeProvider) {

        $routeProvider
            .when('/:id', {
                templateUrl: 'views/description.html',
            })
            .when('/', {
                templateUrl: 'views/index.html',
            })
    });
