// middlewareService
AuthEdge.factory("middlewareService", function($cookies, $location){
    return {
        handleAuth: function(){
        	//alert($cookies.get('authToken'));
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
        	//alert($cookies.get('authToken'));
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