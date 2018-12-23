## js-routes

0.2.1

Route-awareness is an important feature for web applications.  It is useful for fetching appropriate data and contextually loading scripts, among other things.

`js-routes` is a very simple object that provides an `API` for `Routers` that parse the `URI`. 

### Example

```
import { jsRoutes as map } from './index';
import { HashTagRouter } from './routers/HashTagRouter';

// set the router we want to use, named after the syntax that is used to determine the route.
map.setRouter(new HashTagRouter());

// if there is a route, find it
var route = map.hasRoute() ? map.getRoute() : '';



switch route
  case 'fiction':
    loadScript('fiction');
  break;

  case 'non-fiction':
    loadScript('non-fiction');
  break;

```

### API Documentation

##### Routers

`Routers` should inherit from a `Router` interface, which is not explicitly defined.  Expected methods are outlined below - essentially just `getters`, `setters`, and initialization methods for two properties, the `URI` and the `route`. 

---

`findURI`

Uses `document.getURI` rather than `window.location` to capture the current URI. 


---

`setURI`

Sets the `URI` property.

---

`getURI`
Returns the `URI` property. 

---

`findRoute`

This is the only method that needs to be changed between inheritors of the `Router` interface.   

---

`hasRoute`

Returns a boolean if the `route` property is set.

---

`setRoute`

Sets the route property. 

---

`getRoute`

Returns the route property.

---

##### jsRoutes

`index` is the main module and only has five methods.

---

`setRouter`

Set the `Router` class.

---

`getRouter`

Get the `Router` class

---

`getRoute`

Returns the `router`-defined `route`.

---

`hasRoute`

Returns a boolean if the `router` has a defined `route`. 

----

`@todo`
`changeRoute`

  

---
