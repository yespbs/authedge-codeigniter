// DashboardController
AuthEdge.controller('DashboardController', ['$scope', '$http', '$location', '$cookies', function( $scope, $http, $location, $cookies ){

	$scope.logout = function(){
		
		$cookies.remove('authToken');

		// redirect
		$location.path('/login').replace();	
	}
}]);	