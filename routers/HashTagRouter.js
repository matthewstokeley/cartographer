
// a simple class to find the 
export default class HashTagRoute {


	/**
	 * wonky method chaining initializatin function
	 * @return {Object}
	 */
	constructor() {
		this.setUri(this.findURI()).setRoute(this.findRoute(this.getURI()))
	}



	/**
	 * @return {String}
	 */
	findURI() {
		return document.documentURI;
	}



	/**
	 * @param  {String} uri
	 * @return {String}
	 */
	findRoute(uri) {
		if (!uri) {
			return false;
		}
		return uri.split('#')[1];
	}



	/**
	 * @chainable
	 * @param {String} uri
	 * @return {Object}
	 */
	setURI(uri) {
		this.uri = uri;
		return this;
	}



	/**
	 * 
	 * @return {String}
	 */
	getURI() {
		return this.uri;
	}



	/**
	 * @return {Boolean}
	 */
	hasRoute() {
		return !this.route
                    ? false
		    : true
	}



	/**
	 * @param {String} route 
	 * @return {Object}
	 */
	setRoute(route) {
		this.route = route;
		return this;
	}



	/**
	 * Router getter
	 * @return {String}
	 */
	getRoute() {
		return this.route;
	}
}
