// ,ultiple routes should be available.  here, a hash tag route is manually instantiated. 
//var route = new HashTagRoute();

/**
 * [cartographer description]
 * @type {Object}
 */
export default const jsRoutes = {
	/**
	 * [setRouteObject description]
	 * @param {[type]} route [description]
	 */
	setRouter: function(router) { this.router = router; },
	/**
	 * [getRouteObject description]
	 * @return {[type]} [description]
	 */
	getRouter: function() { return this.router; },
    /**
	 * [hasRoute description]
	 * @param  {[type]}  ) {            return this.route.hasRoute( [description]
	 * @return {Boolean}   [description]
	 */
	hasRoute: function() { return this.router.hasRoute(); },
	/**
	 * [getRoute description]
	 * @param  {[type]} ) {            return this.route.getRoute( [description]
	 * @return {[type]}   [description]
	 */
	getRoute: function() { return this.router.getRoute(); },
	/**
	 * [changeRoute description]
	 * @return {[type]} [description]
	 */
	changeRoute: function() {
	    this.router.init();
	}
}
