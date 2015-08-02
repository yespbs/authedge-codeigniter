var AuthEdge = angular.module('AuthEdge', ['ngRoute']);

// controllers
//AuthEdge.controller('AuthController', 'AuthController');
//AuthEdge.controller('DashboardController', 'DashboardController');

AuthEdge.controller('AuthController', ['$scope', '$http', '$location', function( $scope, $http, $location ){
	$scope.email    = null;
    $scope.password = null;
    $scope.remember = 0;

    $scope.login = function( email, password, remember ) {
        $scope.email = email;
        $scope.password = password;
        $scope.remember = remember;

        //alert( $scope.email );

      //  alert(  );
        //
        // Simple POST request example (passing data) :
		$http.post( $location.absUrl().replace('#','api/auth'), {email:email, password: password, remember: remember}).
		  then(function(response) {
		    // this callback will be called asynchronously
		    // when the response is available
		  }, function(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		  });
        //
    };
}]);

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