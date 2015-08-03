// AuthController
AuthEdge.controller('AuthController', ['$scope', '$http', '$location', '$cookies', function( $scope, $http, $location, $cookies ){
	$scope.email    = null;
    $scope.password = null;
    $scope.remember = 0;

    $scope.login = function( email, password, remember ) {
        // push to scope, not required, just tested
        $scope.email    = email;
        $scope.password = password;
        $scope.remember = remember;

        // login url
        if( $location.path() == '/login' ){
        	url = $location.absUrl().replace('#','api/auth');
		}else{
			url = $location.absUrl().replace('#','api/auth/login');
		}

		// post data
		data = {email:email, password: password, remember: remember};

        // post 
		$http.post( url, data )
		.then(function(response) {
		    // when the response is available
		    $cookies.put('authToken', response.data.token);
		    // redirect
		    $location.path('/dashboard').replace();		    
		}, function(response) {
		    // just message now
		    alert('fail with ' + response.data.message);		    
		});        
    };
}]);