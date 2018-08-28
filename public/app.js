var app = angular.module('sportshold', [
	'ui.router',
	'ngCookies'
])

app.config(routeConfig);

routeConfig.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function routeConfig ($stateProvider, $urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');

	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: '/views/home.html',
			controller: 'MainCtrl',
			controllerAs: 'vm'
		})
		.state('basket', {
			url: '/basket',
			templateUrl: '/views/basket.html',
			controller: 'BasketCtrl',
			controllerAs: 'vm'
		})
		.state('login' , {
			url: '/login',
			templateUrl: '/views/login.html',
			controller: 'LoginCtrl',
			controllerAs: 'vm'
		})
		.state('registration' , {
			url: '/registration',
			templateUrl: '/views/registration.html',
			controller: 'RegistrCtrl',
			controllerAs: 'vm'
		})
		.state('menshoes' , {
			url: '/men',
			templateUrl: '/views/menshoes.html',
			controller: 'MenShoesCtrl',
			controllerAs: 'vm'
		})
		.state('admin' , {
			url: '/admin',
			templateUrl: '/views/admin.html',
			controller: 'AdminCtrl',
			controllerAs: 'vm'
		})


}
