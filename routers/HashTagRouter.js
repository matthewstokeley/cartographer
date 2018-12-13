
// a simple class to find the 
export default class HashTagRoute {


	/**
	 * [constructor description]
	 * @return {[type]} [description]
	 */
	constructor() {
		// set the uri with the findUri Methods
		// and set the route with the findRoute method, which requires
		// the uri, accessed with the getUri method
		this.setUri(this.findURI()).setRoute(this.findRoute(this.getURI()));
	}



	/**
	 * [findUri description]
	 * @return {String} [description]
	 */
	findURI() {
		return document.documentURI;
	}



	/**
	 * [findRoute description]
	 * @param  {String} uri [description]
	 * @return {String}     [description]
	 */
	findRoute(uri) {
		if (!uri) {
			return false;
		}
		return uri.split('#')[1];
	}



	/**
	 * [setUri description]
	 * @chainable
	 * @param {Router} uri [description]
	 */
	setURI(uri) {
		this.uri = uri;
		return this;
	}



	/**
	 * [getUri description]
	 * @return {String} [description]
	 */
	getURI() {
		return this.uri;
	}



	/**
	 * [hasRoute description]
	 * @return {Boolean} [description]
	 */
	hasRoute() {
		if (!this.route) {
			return false;
		}
		return true;
	}



	/**
	 * [Router setter
	 * @param {Router} route [description]
	 */
	setRoute(route) {
		this.route = route;
		return this;
	}



	/**
	 * Router getter
	 * @return {String} [description]
	 */
	getRoute() {
		return this.route;
	}
}