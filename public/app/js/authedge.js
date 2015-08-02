var AuthEdge = angular.module('AuthEdge', ['ngRoute']);

// controllers
AuthEdge.controller('AuthController', 'AuthController');
AuthEdge.controller('DashboardController', 'DashboardController');

// routes
AuthEdge.config( function( $routeProvider ){
	$routeProvider
	.when('/',
		{
			controller: 'AuthController',
			templateUrl: 'app/html/login.html'
		}
	)
	.when('/login',
		{
			controller: 'AuthController',
			templateUrl: 'app/html/login.html'
		}
	)
	.when('/forgotpass',
		{
			controller: 'AuthController',
			templateUrl: 'app/html/forgotpass.html'
		}
	)
	.when('/resetpass',
		{
			controller: 'AuthController',
			templateUrl: 'app/html/resetpass.html'
		}
	)
	.when('/signup',
		{
			controller: 'AuthController',
			templateUrl: 'app/html/signup.html'
		}
	)
	.when('/dashboard',
		{
			controller: 'AuthController',
			templateUrl: 'app/html/dashboard.html'
		}
	)
	.otherwise( {redirectTo: '/'} );
} );