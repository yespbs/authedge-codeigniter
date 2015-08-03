// routes
AuthEdge.config( function( $routeProvider ){
	$routeProvider
	.when('/',
		{
			controller: 'AuthController',
			templateUrl: 'app/html/login.html',
			resolve: {
				guest: function( middlewareService ){
					return middlewareService.handleGuest();
				}
			}
		}
	)
	.when('/login',
		{
			controller: 'AuthController',
			templateUrl: 'app/html/login.html',
			resolve: {
				guest: function( middlewareService ){
					return middlewareService.handleGuest();
				}
			}
		}
	)
	.when('/forgotpass',
		{
			controller: 'AuthController',
			templateUrl: 'app/html/forgotpass.html',
			resolve: {
				guest: function( middlewareService ){
					return middlewareService.handleGuest();
				}
			}
		}
	)
	.when('/resetpass',
		{
			controller: 'AuthController',
			templateUrl: 'app/html/resetpass.html',
			resolve: {
				guest: function( middlewareService ){
					return middlewareService.handleGuest();
				}
			}
		}
	)
	.when('/signup',
		{
			controller: 'AuthController',
			templateUrl: 'app/html/signup.html',
			resolve: {
				guest: function( middlewareService ){
					return middlewareService.handleGuest();
				}
			}
		}
	)
	.when('/dashboard',
		{
			controller: 'AuthController',
			templateUrl: 'app/html/dashboard.html',
			resolve: {
				auth: function( middlewareService ){
					return middlewareService.handleAuth();
				}
			}
		}
	)
	.otherwise( {redirectTo: '/'} );
} );