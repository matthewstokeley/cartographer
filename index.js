// ,ultiple routes should be available.  here, a hash tag route is manually instantiated. 
//var route = new HashTagRoute();

/**
 * [cartographer description]
 * @type {Object}
 */
export default const jsRoutes = {
	/**
	 * @param {Object} route
	 */
	setRouter: (router) => this.router = router,
	/**
	 * @return {Object}
	 */
	getRouter: () => this.router,
        /**
	 * @return {Boolean}
	 */
	hasRoute: () => this.router.hasRoute(),
	/**
	 * @return {String}
	 */
	getRoute: () => this.router.getRoute(),
	/**
	 * @todo
	 */
	changeRoute: function() {
	    // this.router.init();
	}
}
