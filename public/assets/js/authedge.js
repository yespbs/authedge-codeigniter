var AuthEdge = angular.module('AuthEdge', ['ngRoute']);


AuthEdge.controller('AuthController', function( $scope ){
	$scope.url = '/api/login';

	/*login: function(){

	}*/
});

AuthEdge.config( function( $routeProvider ){
	$routeProvider
	.when('/',
		{
			controller: 'AuthController',
			templateUrl: 'assets/html/login.html'
		}
	)
	.when('/login',
		{
			controller: 'AuthController',
			templateUrl: 'assets/html/login.html'
		}
	)
	.when('/forgotpass',
		{
			controller: 'AuthController',
			templateUrl: 'assets/html/forgotpass.html'
		}
	)
	.when('/resetpass',
		{
			controller: 'AuthController',
			templateUrl: 'assets/html/resetpass.html'
		}
	)
	.when('/signup',
		{
			controller: 'AuthController',
			templateUrl: 'assets/html/signup.html'
		}
	)
	.when('/dashboard',
		{
			controller: 'AuthController',
			templateUrl: 'assets/html/dashboard.html'
		}
	)
	.otherwise( {redirectTo: '/'} );
} );