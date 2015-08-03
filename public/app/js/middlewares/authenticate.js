// middlewareService
AuthEdge.factory("middlewareService", function($cookies, $location){
    return {
        handleAuth: function(){
        	// if user not logged in and attempts /dashboard, redirect to /login
            if( $cookies.get('authToken') == undefined ){
            	// redirect
				$location.path('/login').replace();	
				// false
				return false;
            }

            // true
            return true;
        },

        handleGuest: function(){
        	// if user logged in and attempts /login, redirect to /dashboard
            if( $cookies.get('authToken') != undefined ){
            	// redirect
				$location.path('/dashboard').replace();	
				// false
				return false;
            }

            // true
            return true;
        }
    };
});