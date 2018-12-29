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
	containsRoute: () => this.router.containsRoute(),
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
