// AuthController
AuthEdge.controller('AuthController', ['$scope', '$http', '$location', '$cookies', function( $scope, $http, $location, $cookies ){
	$scope.email    = null;
    $scope.password = null;
    $scope.remember = 0;

    $scope.login = function( email, password, remember ) {
        $scope.email    = email;
        $scope.password = password;
        $scope.remember = remember;

        if( $location.path() == '/login' ){
        	url = $location.absUrl().replace('#','api/auth');
		}else{
			url = $location.absUrl().replace('#','api/auth/login');
		}

		data = {email:email, password: password, remember: remember};

        // Simple POST request example (passing data) :
		$http.post( url, data )
		.then(function(response) {
		    // when the response is available
		    $cookies.put('authToken', response.data.token);
		    // redirect
		    $location.path('/dashboard').replace();		    
		}, function(response) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		    //if( response.data.status == false){
		    alert('fail with ' + response.data.message);		   		
		    //}
		});        
    };
}]);