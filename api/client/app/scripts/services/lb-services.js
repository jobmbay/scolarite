// CommonJS package manager support
if (typeof module !== 'undefined' && typeof exports !== 'undefined' &&
  module.exports === exports) {
  // Export the *name* of this Angular module
  // Sample usage:
  //
  //   import lbServices from './lb-services';
  //   angular.module('app', [lbServices]);
  //
  module.exports = "lbServices";
}

(function(window, angular, undefined) {
  'use strict';

  var urlBase = "http://localhost:3000/api";
  var authHeader = 'authorization';

  function getHost(url) {
    var m = url.match(/^(?:https?:)?\/\/([^\/]+)/);
    return m ? m[1] : null;
  }

  var urlBaseHost = getHost(urlBase) || location.host;

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
  var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.User
 * @header lbServices.User
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `User` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "User",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/Users/:id",
          { 'id': '@id' },
          {

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__findById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__findById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__destroyById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__destroyById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__updateById__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update a related item by id for accessTokens.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `fk` – `{*}` - Foreign key for accessTokens
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__updateById__accessTokens": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/Users/:id/accessTokens/:fk",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__get__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Queries accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__get__accessTokens": {
              isArray: true,
              url: urlBase + "/Users/:id/accessTokens",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__create__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Creates a new instance in accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$__create__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__delete__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Deletes all accessTokens of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "prototype$__delete__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$__count__accessTokens
             * @methodOf lbServices.User
             *
             * @description
             *
             * Counts accessTokens of User.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "prototype$__count__accessTokens": {
              url: urlBase + "/Users/:id/accessTokens/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#create
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createMany
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/Users",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsert
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/Users",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/Users/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#upsertWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/Users/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#exists
             * @methodOf lbServices.User
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/Users/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/Users/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#replaceById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/Users/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#find
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/Users",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#findOne
             * @methodOf lbServices.User
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/Users/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#updateAll
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/Users/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#deleteById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/Users/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#count
             * @methodOf lbServices.User
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/Users/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#prototype$updateAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/Users/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#createChangeStream
             * @methodOf lbServices.User
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/Users/change-stream",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#login
             * @methodOf lbServices.User
             *
             * @description
             *
             * Login a user with username/email and password.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
             *   Default value: `user`.
             *
             *  - `rememberMe` - `boolean` - Whether the authentication credentials
             *     should be remembered in localStorage across app/browser restarts.
             *     Default: `true`.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * The response body contains properties of the AccessToken created on login.
             * Depending on the value of `include` parameter, the body may contain additional properties:
             *   - `user` - `U+007BUserU+007D` - Data of the currently logged in user. (`include=user`)
             *
             */
            "login": {
              params: {
                include: 'user',
              },
              interceptor: {
                response: function(response) {
                  var accessToken = response.data;
                  LoopBackAuth.setUser(
                    accessToken.id, accessToken.userId, accessToken.user);
                  LoopBackAuth.rememberMe =
                    response.config.params.rememberMe !== false;
                  LoopBackAuth.save();
                  return response.resource;
                },
              },
              url: urlBase + "/Users/login",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#logout
             * @methodOf lbServices.User
             *
             * @description
             *
             * Logout a user with access token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "logout": {
              interceptor: {
                response: function(response) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return responseError.resource;
                },
              },
              url: urlBase + "/Users/logout",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#confirm
             * @methodOf lbServices.User
             *
             * @description
             *
             * Confirm a user registration with email verification token.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `uid` – `{string}` -
             *
             *  - `token` – `{string}` -
             *
             *  - `redirect` – `{string=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "confirm": {
              url: urlBase + "/Users/confirm",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#resetPassword
             * @methodOf lbServices.User
             *
             * @description
             *
             * Reset password for a user with email.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
            "resetPassword": {
              url: urlBase + "/Users/reset",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.User#getCurrent
             * @methodOf lbServices.User
             *
             * @description
             *
             * Get data of the currently logged user. Fail with HTTP result 401
             * when there is no user logged in.
             *
             * @param {function(Object,Object)=} successCb
             *    Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *    `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             */
            'getCurrent': {
              url: urlBase + "/Users" + '/:id',
              method: 'GET',
              params: {
                id: function() {
                  var id = LoopBackAuth.currentUserId;
                  if (id == null) id = '__anonymous__';
                  return id;
                },
              },
              interceptor: {
                response: function(response) {
                  LoopBackAuth.currentUserData = response.data;
                  return response.resource;
                },
                responseError: function(responseError) {
                  LoopBackAuth.clearUser();
                  LoopBackAuth.clearStorage();
                  return $q.reject(responseError);
                },
              },
              __isGetCurrentUser__: true,
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.User#updateOrCreate
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.User#patchOrCreateWithWhere
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.User#update
             * @methodOf lbServices.User
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.User#destroyById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#removeById
             * @methodOf lbServices.User
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.User#patchAttributes
             * @methodOf lbServices.User
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - User id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `User` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];

        /**
         * @ngdoc method
         * @name lbServices.User#getCachedCurrent
         * @methodOf lbServices.User
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.User#login} or
         * {@link lbServices.User#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A User instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#isAuthenticated
         * @methodOf lbServices.User
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.User#getCurrentId
         * @methodOf lbServices.User
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

        /**
        * @ngdoc property
        * @name lbServices.User#modelName
        * @propertyOf lbServices.User
        * @description
        * The name of the model represented by this $resource,
        * i.e. `User`.
        */
        R.modelName = "User";



        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Etudiant
 * @header lbServices.Etudiant
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Etudiant` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Etudiant",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/etudiant/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Etudiant.departement() instead.
            "prototype$__get__departement": {
              url: urlBase + "/etudiant/:id/departement",
              method: "GET",
            },

            // INTERNAL. Use Etudiant.formation() instead.
            "prototype$__get__formation": {
              url: urlBase + "/etudiant/:id/formation",
              method: "GET",
            },

            // INTERNAL. Use Etudiant.niveau() instead.
            "prototype$__get__niveau": {
              url: urlBase + "/etudiant/:id/niveau",
              method: "GET",
            },

            // INTERNAL. Use Etudiant.classe() instead.
            "prototype$__get__classe": {
              url: urlBase + "/etudiant/:id/classe",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#create
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/etudiant",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#createMany
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/etudiant",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#upsert
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/etudiant",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#replaceOrCreate
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/etudiant/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#upsertWithWhere
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/etudiant/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#exists
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/etudiant/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#findById
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/etudiant/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#replaceById
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/etudiant/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#find
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/etudiant",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#findOne
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/etudiant/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#updateAll
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/etudiant/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#deleteById
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/etudiant/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#count
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/etudiant/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#prototype$updateAttributes
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - etudiant id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/etudiant/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#createChangeStream
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/etudiant/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Departement.etudiants.findById() instead.
            "::findById::Departement::etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/departement/:id/etudiants/:fk",
              method: "GET",
            },

            // INTERNAL. Use Departement.etudiants.destroyById() instead.
            "::destroyById::Departement::etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/departement/:id/etudiants/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Departement.etudiants.updateById() instead.
            "::updateById::Departement::etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/departement/:id/etudiants/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Departement.etudiants() instead.
            "::get::Departement::etudiants": {
              isArray: true,
              url: urlBase + "/departement/:id/etudiants",
              method: "GET",
            },

            // INTERNAL. Use Departement.etudiants.create() instead.
            "::create::Departement::etudiants": {
              url: urlBase + "/departement/:id/etudiants",
              method: "POST",
            },

            // INTERNAL. Use Departement.etudiants.createMany() instead.
            "::createMany::Departement::etudiants": {
              isArray: true,
              url: urlBase + "/departement/:id/etudiants",
              method: "POST",
            },

            // INTERNAL. Use Departement.etudiants.destroyAll() instead.
            "::delete::Departement::etudiants": {
              url: urlBase + "/departement/:id/etudiants",
              method: "DELETE",
            },

            // INTERNAL. Use Departement.etudiants.count() instead.
            "::count::Departement::etudiants": {
              url: urlBase + "/departement/:id/etudiants/count",
              method: "GET",
            },

            // INTERNAL. Use Formation.etudiants.findById() instead.
            "::findById::Formation::etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/etudiants/:fk",
              method: "GET",
            },

            // INTERNAL. Use Formation.etudiants.destroyById() instead.
            "::destroyById::Formation::etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/etudiants/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Formation.etudiants.updateById() instead.
            "::updateById::Formation::etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/etudiants/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Formation.etudiants() instead.
            "::get::Formation::etudiants": {
              isArray: true,
              url: urlBase + "/formation/:id/etudiants",
              method: "GET",
            },

            // INTERNAL. Use Formation.etudiants.create() instead.
            "::create::Formation::etudiants": {
              url: urlBase + "/formation/:id/etudiants",
              method: "POST",
            },

            // INTERNAL. Use Formation.etudiants.createMany() instead.
            "::createMany::Formation::etudiants": {
              isArray: true,
              url: urlBase + "/formation/:id/etudiants",
              method: "POST",
            },

            // INTERNAL. Use Formation.etudiants.destroyAll() instead.
            "::delete::Formation::etudiants": {
              url: urlBase + "/formation/:id/etudiants",
              method: "DELETE",
            },

            // INTERNAL. Use Formation.etudiants.count() instead.
            "::count::Formation::etudiants": {
              url: urlBase + "/formation/:id/etudiants/count",
              method: "GET",
            },

            // INTERNAL. Use Niveau.etudiants.findById() instead.
            "::findById::Niveau::etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/niveau/:id/etudiants/:fk",
              method: "GET",
            },

            // INTERNAL. Use Niveau.etudiants.destroyById() instead.
            "::destroyById::Niveau::etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/niveau/:id/etudiants/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Niveau.etudiants.updateById() instead.
            "::updateById::Niveau::etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/niveau/:id/etudiants/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Niveau.etudiants() instead.
            "::get::Niveau::etudiants": {
              isArray: true,
              url: urlBase + "/niveau/:id/etudiants",
              method: "GET",
            },

            // INTERNAL. Use Niveau.etudiants.create() instead.
            "::create::Niveau::etudiants": {
              url: urlBase + "/niveau/:id/etudiants",
              method: "POST",
            },

            // INTERNAL. Use Niveau.etudiants.createMany() instead.
            "::createMany::Niveau::etudiants": {
              isArray: true,
              url: urlBase + "/niveau/:id/etudiants",
              method: "POST",
            },

            // INTERNAL. Use Niveau.etudiants.destroyAll() instead.
            "::delete::Niveau::etudiants": {
              url: urlBase + "/niveau/:id/etudiants",
              method: "DELETE",
            },

            // INTERNAL. Use Niveau.etudiants.count() instead.
            "::count::Niveau::etudiants": {
              url: urlBase + "/niveau/:id/etudiants/count",
              method: "GET",
            },

            // INTERNAL. Use Option.etudiants.findById() instead.
            "::findById::Option::etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/option/:id/etudiants/:fk",
              method: "GET",
            },

            // INTERNAL. Use Option.etudiants.destroyById() instead.
            "::destroyById::Option::etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/option/:id/etudiants/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Option.etudiants.updateById() instead.
            "::updateById::Option::etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/option/:id/etudiants/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Option.etudiants() instead.
            "::get::Option::etudiants": {
              isArray: true,
              url: urlBase + "/option/:id/etudiants",
              method: "GET",
            },

            // INTERNAL. Use Option.etudiants.create() instead.
            "::create::Option::etudiants": {
              url: urlBase + "/option/:id/etudiants",
              method: "POST",
            },

            // INTERNAL. Use Option.etudiants.createMany() instead.
            "::createMany::Option::etudiants": {
              isArray: true,
              url: urlBase + "/option/:id/etudiants",
              method: "POST",
            },

            // INTERNAL. Use Option.etudiants.destroyAll() instead.
            "::delete::Option::etudiants": {
              url: urlBase + "/option/:id/etudiants",
              method: "DELETE",
            },

            // INTERNAL. Use Option.etudiants.count() instead.
            "::count::Option::etudiants": {
              url: urlBase + "/option/:id/etudiants/count",
              method: "GET",
            },

            // INTERNAL. Use Classe.etudiants.findById() instead.
            "::findById::Classe::etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/classe/:id/etudiants/:fk",
              method: "GET",
            },

            // INTERNAL. Use Classe.etudiants.destroyById() instead.
            "::destroyById::Classe::etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/classe/:id/etudiants/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Classe.etudiants.updateById() instead.
            "::updateById::Classe::etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/classe/:id/etudiants/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Classe.etudiants() instead.
            "::get::Classe::etudiants": {
              isArray: true,
              url: urlBase + "/classe/:id/etudiants",
              method: "GET",
            },

            // INTERNAL. Use Classe.etudiants.create() instead.
            "::create::Classe::etudiants": {
              url: urlBase + "/classe/:id/etudiants",
              method: "POST",
            },

            // INTERNAL. Use Classe.etudiants.createMany() instead.
            "::createMany::Classe::etudiants": {
              isArray: true,
              url: urlBase + "/classe/:id/etudiants",
              method: "POST",
            },

            // INTERNAL. Use Classe.etudiants.destroyAll() instead.
            "::delete::Classe::etudiants": {
              url: urlBase + "/classe/:id/etudiants",
              method: "DELETE",
            },

            // INTERNAL. Use Classe.etudiants.count() instead.
            "::count::Classe::etudiants": {
              url: urlBase + "/classe/:id/etudiants/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Etudiant#patchOrCreate
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#updateOrCreate
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#patchOrCreateWithWhere
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#update
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#destroyById
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#removeById
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#patchAttributes
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - etudiant id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Etudiant#modelName
        * @propertyOf lbServices.Etudiant
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Etudiant`.
        */
        R.modelName = "Etudiant";


            /**
             * @ngdoc method
             * @name lbServices.Etudiant#departement
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Fetches belongsTo relation departement.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - etudiant id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Departement` object.)
             * </em>
             */
        R.departement = function() {
          var TargetResource = $injector.get("Departement");
          var action = TargetResource["::get::Etudiant::departement"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#formation
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Fetches belongsTo relation formation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - etudiant id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
        R.formation = function() {
          var TargetResource = $injector.get("Formation");
          var action = TargetResource["::get::Etudiant::formation"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#niveau
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Fetches belongsTo relation niveau.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - etudiant id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
        R.niveau = function() {
          var TargetResource = $injector.get("Niveau");
          var action = TargetResource["::get::Etudiant::niveau"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Etudiant#classe
             * @methodOf lbServices.Etudiant
             *
             * @description
             *
             * Fetches belongsTo relation classe.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - etudiant id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R.classe = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::get::Etudiant::classe"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Departement
 * @header lbServices.Departement
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Departement` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Departement",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/departement/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Departement.etudiants.findById() instead.
            "prototype$__findById__etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/departement/:id/etudiants/:fk",
              method: "GET",
            },

            // INTERNAL. Use Departement.etudiants.destroyById() instead.
            "prototype$__destroyById__etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/departement/:id/etudiants/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Departement.etudiants.updateById() instead.
            "prototype$__updateById__etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/departement/:id/etudiants/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Departement.options.findById() instead.
            "prototype$__findById__options": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/departement/:id/options/:fk",
              method: "GET",
            },

            // INTERNAL. Use Departement.options.destroyById() instead.
            "prototype$__destroyById__options": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/departement/:id/options/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Departement.options.updateById() instead.
            "prototype$__updateById__options": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/departement/:id/options/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Departement.classes.findById() instead.
            "prototype$__findById__classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/departement/:id/classes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Departement.classes.destroyById() instead.
            "prototype$__destroyById__classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/departement/:id/classes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Departement.classes.updateById() instead.
            "prototype$__updateById__classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/departement/:id/classes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Departement.etudiants() instead.
            "prototype$__get__etudiants": {
              isArray: true,
              url: urlBase + "/departement/:id/etudiants",
              method: "GET",
            },

            // INTERNAL. Use Departement.etudiants.create() instead.
            "prototype$__create__etudiants": {
              url: urlBase + "/departement/:id/etudiants",
              method: "POST",
            },

            // INTERNAL. Use Departement.etudiants.destroyAll() instead.
            "prototype$__delete__etudiants": {
              url: urlBase + "/departement/:id/etudiants",
              method: "DELETE",
            },

            // INTERNAL. Use Departement.etudiants.count() instead.
            "prototype$__count__etudiants": {
              url: urlBase + "/departement/:id/etudiants/count",
              method: "GET",
            },

            // INTERNAL. Use Departement.options() instead.
            "prototype$__get__options": {
              isArray: true,
              url: urlBase + "/departement/:id/options",
              method: "GET",
            },

            // INTERNAL. Use Departement.options.create() instead.
            "prototype$__create__options": {
              url: urlBase + "/departement/:id/options",
              method: "POST",
            },

            // INTERNAL. Use Departement.options.destroyAll() instead.
            "prototype$__delete__options": {
              url: urlBase + "/departement/:id/options",
              method: "DELETE",
            },

            // INTERNAL. Use Departement.options.count() instead.
            "prototype$__count__options": {
              url: urlBase + "/departement/:id/options/count",
              method: "GET",
            },

            // INTERNAL. Use Departement.classes() instead.
            "prototype$__get__classes": {
              isArray: true,
              url: urlBase + "/departement/:id/classes",
              method: "GET",
            },

            // INTERNAL. Use Departement.classes.create() instead.
            "prototype$__create__classes": {
              url: urlBase + "/departement/:id/classes",
              method: "POST",
            },

            // INTERNAL. Use Departement.classes.destroyAll() instead.
            "prototype$__delete__classes": {
              url: urlBase + "/departement/:id/classes",
              method: "DELETE",
            },

            // INTERNAL. Use Departement.classes.count() instead.
            "prototype$__count__classes": {
              url: urlBase + "/departement/:id/classes/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Departement#create
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Departement` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/departement",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Departement#createMany
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Departement` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/departement",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Departement#upsert
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Departement` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/departement",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Departement#replaceOrCreate
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Departement` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/departement/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Departement#upsertWithWhere
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Departement` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/departement/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Departement#exists
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/departement/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Departement#findById
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Departement` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/departement/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Departement#replaceById
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Departement` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/departement/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Departement#find
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Departement` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/departement",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Departement#findOne
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Departement` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/departement/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Departement#updateAll
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/departement/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Departement#deleteById
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Departement` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/departement/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Departement#count
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/departement/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Departement#prototype$updateAttributes
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Departement` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/departement/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Departement#createChangeStream
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/departement/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Etudiant.departement() instead.
            "::get::Etudiant::departement": {
              url: urlBase + "/etudiant/:id/departement",
              method: "GET",
            },

            // INTERNAL. Use Option.departement() instead.
            "::get::Option::departement": {
              url: urlBase + "/option/:id/departement",
              method: "GET",
            },

            // INTERNAL. Use Classe.departement() instead.
            "::get::Classe::departement": {
              url: urlBase + "/classe/:id/departement",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Departement#patchOrCreate
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Departement` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Departement#updateOrCreate
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Departement` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Departement#patchOrCreateWithWhere
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Departement` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Departement#update
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Departement#destroyById
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Departement` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Departement#removeById
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Departement` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Departement#patchAttributes
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Departement` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Departement#modelName
        * @propertyOf lbServices.Departement
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Departement`.
        */
        R.modelName = "Departement";

    /**
     * @ngdoc object
     * @name lbServices.Departement.etudiants
     * @header lbServices.Departement.etudiants
     * @object
     * @description
     *
     * The object `Departement.etudiants` groups methods
     * manipulating `Etudiant` instances related to `Departement`.
     *
     * Call {@link lbServices.Departement#etudiants Departement.etudiants()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Departement#etudiants
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Queries etudiants of departement.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::get::Departement::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Departement.etudiants#count
             * @methodOf lbServices.Departement.etudiants
             *
             * @description
             *
             * Counts etudiants of departement.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.etudiants.count = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::count::Departement::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Departement.etudiants#create
             * @methodOf lbServices.Departement.etudiants
             *
             * @description
             *
             * Creates a new instance in etudiants of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants.create = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::create::Departement::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Departement.etudiants#createMany
             * @methodOf lbServices.Departement.etudiants
             *
             * @description
             *
             * Creates a new instance in etudiants of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants.createMany = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::createMany::Departement::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Departement.etudiants#destroyAll
             * @methodOf lbServices.Departement.etudiants
             *
             * @description
             *
             * Deletes all etudiants of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.etudiants.destroyAll = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::delete::Departement::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Departement.etudiants#destroyById
             * @methodOf lbServices.Departement.etudiants
             *
             * @description
             *
             * Delete a related item by id for etudiants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             *  - `fk` – `{*}` - Foreign key for etudiants
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.etudiants.destroyById = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::destroyById::Departement::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Departement.etudiants#findById
             * @methodOf lbServices.Departement.etudiants
             *
             * @description
             *
             * Find a related item by id for etudiants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             *  - `fk` – `{*}` - Foreign key for etudiants
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants.findById = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::findById::Departement::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Departement.etudiants#updateById
             * @methodOf lbServices.Departement.etudiants
             *
             * @description
             *
             * Update a related item by id for etudiants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             *  - `fk` – `{*}` - Foreign key for etudiants
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants.updateById = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::updateById::Departement::etudiants"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Departement.options
     * @header lbServices.Departement.options
     * @object
     * @description
     *
     * The object `Departement.options` groups methods
     * manipulating `Option` instances related to `Departement`.
     *
     * Call {@link lbServices.Departement#options Departement.options()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Departement#options
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Queries options of departement.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
        R.options = function() {
          var TargetResource = $injector.get("Option");
          var action = TargetResource["::get::Departement::options"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Departement.options#count
             * @methodOf lbServices.Departement.options
             *
             * @description
             *
             * Counts options of departement.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.options.count = function() {
          var TargetResource = $injector.get("Option");
          var action = TargetResource["::count::Departement::options"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Departement.options#create
             * @methodOf lbServices.Departement.options
             *
             * @description
             *
             * Creates a new instance in options of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
        R.options.create = function() {
          var TargetResource = $injector.get("Option");
          var action = TargetResource["::create::Departement::options"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Departement.options#createMany
             * @methodOf lbServices.Departement.options
             *
             * @description
             *
             * Creates a new instance in options of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
        R.options.createMany = function() {
          var TargetResource = $injector.get("Option");
          var action = TargetResource["::createMany::Departement::options"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Departement.options#destroyAll
             * @methodOf lbServices.Departement.options
             *
             * @description
             *
             * Deletes all options of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.options.destroyAll = function() {
          var TargetResource = $injector.get("Option");
          var action = TargetResource["::delete::Departement::options"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Departement.options#destroyById
             * @methodOf lbServices.Departement.options
             *
             * @description
             *
             * Delete a related item by id for options.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             *  - `fk` – `{*}` - Foreign key for options
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.options.destroyById = function() {
          var TargetResource = $injector.get("Option");
          var action = TargetResource["::destroyById::Departement::options"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Departement.options#findById
             * @methodOf lbServices.Departement.options
             *
             * @description
             *
             * Find a related item by id for options.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             *  - `fk` – `{*}` - Foreign key for options
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
        R.options.findById = function() {
          var TargetResource = $injector.get("Option");
          var action = TargetResource["::findById::Departement::options"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Departement.options#updateById
             * @methodOf lbServices.Departement.options
             *
             * @description
             *
             * Update a related item by id for options.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             *  - `fk` – `{*}` - Foreign key for options
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
        R.options.updateById = function() {
          var TargetResource = $injector.get("Option");
          var action = TargetResource["::updateById::Departement::options"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Departement.classes
     * @header lbServices.Departement.classes
     * @object
     * @description
     *
     * The object `Departement.classes` groups methods
     * manipulating `Classe` instances related to `Departement`.
     *
     * Call {@link lbServices.Departement#classes Departement.classes()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Departement#classes
             * @methodOf lbServices.Departement
             *
             * @description
             *
             * Queries classes of departement.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R.classes = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::get::Departement::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Departement.classes#count
             * @methodOf lbServices.Departement.classes
             *
             * @description
             *
             * Counts classes of departement.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.classes.count = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::count::Departement::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Departement.classes#create
             * @methodOf lbServices.Departement.classes
             *
             * @description
             *
             * Creates a new instance in classes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R.classes.create = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::create::Departement::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Departement.classes#createMany
             * @methodOf lbServices.Departement.classes
             *
             * @description
             *
             * Creates a new instance in classes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R.classes.createMany = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::createMany::Departement::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Departement.classes#destroyAll
             * @methodOf lbServices.Departement.classes
             *
             * @description
             *
             * Deletes all classes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.classes.destroyAll = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::delete::Departement::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Departement.classes#destroyById
             * @methodOf lbServices.Departement.classes
             *
             * @description
             *
             * Delete a related item by id for classes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             *  - `fk` – `{*}` - Foreign key for classes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.classes.destroyById = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::destroyById::Departement::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Departement.classes#findById
             * @methodOf lbServices.Departement.classes
             *
             * @description
             *
             * Find a related item by id for classes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             *  - `fk` – `{*}` - Foreign key for classes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R.classes.findById = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::findById::Departement::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Departement.classes#updateById
             * @methodOf lbServices.Departement.classes
             *
             * @description
             *
             * Update a related item by id for classes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - departement id
             *
             *  - `fk` – `{*}` - Foreign key for classes
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R.classes.updateById = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::updateById::Departement::classes"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Formation
 * @header lbServices.Formation
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Formation` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Formation",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/formation/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Formation.etudiants.findById() instead.
            "prototype$__findById__etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/etudiants/:fk",
              method: "GET",
            },

            // INTERNAL. Use Formation.etudiants.destroyById() instead.
            "prototype$__destroyById__etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/etudiants/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Formation.etudiants.updateById() instead.
            "prototype$__updateById__etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/etudiants/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Formation.niveaus.findById() instead.
            "prototype$__findById__niveaus": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/niveaus/:fk",
              method: "GET",
            },

            // INTERNAL. Use Formation.niveaus.destroyById() instead.
            "prototype$__destroyById__niveaus": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/niveaus/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Formation.niveaus.updateById() instead.
            "prototype$__updateById__niveaus": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/niveaus/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Formation.options.findById() instead.
            "prototype$__findById__options": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/options/:fk",
              method: "GET",
            },

            // INTERNAL. Use Formation.options.destroyById() instead.
            "prototype$__destroyById__options": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/options/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Formation.options.updateById() instead.
            "prototype$__updateById__options": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/options/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Formation.classes.findById() instead.
            "prototype$__findById__classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/classes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Formation.classes.destroyById() instead.
            "prototype$__destroyById__classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/classes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Formation.classes.updateById() instead.
            "prototype$__updateById__classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/classes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Formation.etudiants() instead.
            "prototype$__get__etudiants": {
              isArray: true,
              url: urlBase + "/formation/:id/etudiants",
              method: "GET",
            },

            // INTERNAL. Use Formation.etudiants.create() instead.
            "prototype$__create__etudiants": {
              url: urlBase + "/formation/:id/etudiants",
              method: "POST",
            },

            // INTERNAL. Use Formation.etudiants.destroyAll() instead.
            "prototype$__delete__etudiants": {
              url: urlBase + "/formation/:id/etudiants",
              method: "DELETE",
            },

            // INTERNAL. Use Formation.etudiants.count() instead.
            "prototype$__count__etudiants": {
              url: urlBase + "/formation/:id/etudiants/count",
              method: "GET",
            },

            // INTERNAL. Use Formation.niveaus() instead.
            "prototype$__get__niveaus": {
              isArray: true,
              url: urlBase + "/formation/:id/niveaus",
              method: "GET",
            },

            // INTERNAL. Use Formation.niveaus.create() instead.
            "prototype$__create__niveaus": {
              url: urlBase + "/formation/:id/niveaus",
              method: "POST",
            },

            // INTERNAL. Use Formation.niveaus.destroyAll() instead.
            "prototype$__delete__niveaus": {
              url: urlBase + "/formation/:id/niveaus",
              method: "DELETE",
            },

            // INTERNAL. Use Formation.niveaus.count() instead.
            "prototype$__count__niveaus": {
              url: urlBase + "/formation/:id/niveaus/count",
              method: "GET",
            },

            // INTERNAL. Use Formation.options() instead.
            "prototype$__get__options": {
              isArray: true,
              url: urlBase + "/formation/:id/options",
              method: "GET",
            },

            // INTERNAL. Use Formation.options.create() instead.
            "prototype$__create__options": {
              url: urlBase + "/formation/:id/options",
              method: "POST",
            },

            // INTERNAL. Use Formation.options.destroyAll() instead.
            "prototype$__delete__options": {
              url: urlBase + "/formation/:id/options",
              method: "DELETE",
            },

            // INTERNAL. Use Formation.options.count() instead.
            "prototype$__count__options": {
              url: urlBase + "/formation/:id/options/count",
              method: "GET",
            },

            // INTERNAL. Use Formation.classes() instead.
            "prototype$__get__classes": {
              isArray: true,
              url: urlBase + "/formation/:id/classes",
              method: "GET",
            },

            // INTERNAL. Use Formation.classes.create() instead.
            "prototype$__create__classes": {
              url: urlBase + "/formation/:id/classes",
              method: "POST",
            },

            // INTERNAL. Use Formation.classes.destroyAll() instead.
            "prototype$__delete__classes": {
              url: urlBase + "/formation/:id/classes",
              method: "DELETE",
            },

            // INTERNAL. Use Formation.classes.count() instead.
            "prototype$__count__classes": {
              url: urlBase + "/formation/:id/classes/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Formation#create
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/formation",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Formation#createMany
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/formation",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Formation#upsert
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/formation",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Formation#replaceOrCreate
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/formation/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Formation#upsertWithWhere
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/formation/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Formation#exists
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/formation/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Formation#findById
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/formation/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Formation#replaceById
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/formation/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Formation#find
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/formation",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Formation#findOne
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/formation/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Formation#updateAll
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/formation/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Formation#deleteById
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/formation/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Formation#count
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/formation/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Formation#prototype$updateAttributes
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/formation/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Formation#createChangeStream
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/formation/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Etudiant.formation() instead.
            "::get::Etudiant::formation": {
              url: urlBase + "/etudiant/:id/formation",
              method: "GET",
            },

            // INTERNAL. Use Niveau.formations.findById() instead.
            "::findById::Niveau::formations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/niveau/:id/formations/:fk",
              method: "GET",
            },

            // INTERNAL. Use Niveau.formations.destroyById() instead.
            "::destroyById::Niveau::formations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/niveau/:id/formations/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Niveau.formations.updateById() instead.
            "::updateById::Niveau::formations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/niveau/:id/formations/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Niveau.formations() instead.
            "::get::Niveau::formations": {
              isArray: true,
              url: urlBase + "/niveau/:id/formations",
              method: "GET",
            },

            // INTERNAL. Use Niveau.formations.create() instead.
            "::create::Niveau::formations": {
              url: urlBase + "/niveau/:id/formations",
              method: "POST",
            },

            // INTERNAL. Use Niveau.formations.createMany() instead.
            "::createMany::Niveau::formations": {
              isArray: true,
              url: urlBase + "/niveau/:id/formations",
              method: "POST",
            },

            // INTERNAL. Use Niveau.formations.destroyAll() instead.
            "::delete::Niveau::formations": {
              url: urlBase + "/niveau/:id/formations",
              method: "DELETE",
            },

            // INTERNAL. Use Niveau.formations.count() instead.
            "::count::Niveau::formations": {
              url: urlBase + "/niveau/:id/formations/count",
              method: "GET",
            },

            // INTERNAL. Use Option.formations.findById() instead.
            "::findById::Option::formations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/option/:id/formations/:fk",
              method: "GET",
            },

            // INTERNAL. Use Option.formations.destroyById() instead.
            "::destroyById::Option::formations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/option/:id/formations/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Option.formations.updateById() instead.
            "::updateById::Option::formations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/option/:id/formations/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Option.formations() instead.
            "::get::Option::formations": {
              isArray: true,
              url: urlBase + "/option/:id/formations",
              method: "GET",
            },

            // INTERNAL. Use Option.formations.create() instead.
            "::create::Option::formations": {
              url: urlBase + "/option/:id/formations",
              method: "POST",
            },

            // INTERNAL. Use Option.formations.createMany() instead.
            "::createMany::Option::formations": {
              isArray: true,
              url: urlBase + "/option/:id/formations",
              method: "POST",
            },

            // INTERNAL. Use Option.formations.destroyAll() instead.
            "::delete::Option::formations": {
              url: urlBase + "/option/:id/formations",
              method: "DELETE",
            },

            // INTERNAL. Use Option.formations.count() instead.
            "::count::Option::formations": {
              url: urlBase + "/option/:id/formations/count",
              method: "GET",
            },

            // INTERNAL. Use Classe.formation() instead.
            "::get::Classe::formation": {
              url: urlBase + "/classe/:id/formation",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Formation#patchOrCreate
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Formation#updateOrCreate
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Formation#patchOrCreateWithWhere
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Formation#update
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Formation#destroyById
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Formation#removeById
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Formation#patchAttributes
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Formation#modelName
        * @propertyOf lbServices.Formation
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Formation`.
        */
        R.modelName = "Formation";

    /**
     * @ngdoc object
     * @name lbServices.Formation.etudiants
     * @header lbServices.Formation.etudiants
     * @object
     * @description
     *
     * The object `Formation.etudiants` groups methods
     * manipulating `Etudiant` instances related to `Formation`.
     *
     * Call {@link lbServices.Formation#etudiants Formation.etudiants()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Formation#etudiants
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Queries etudiants of formation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::get::Formation::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.etudiants#count
             * @methodOf lbServices.Formation.etudiants
             *
             * @description
             *
             * Counts etudiants of formation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.etudiants.count = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::count::Formation::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.etudiants#create
             * @methodOf lbServices.Formation.etudiants
             *
             * @description
             *
             * Creates a new instance in etudiants of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants.create = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::create::Formation::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.etudiants#createMany
             * @methodOf lbServices.Formation.etudiants
             *
             * @description
             *
             * Creates a new instance in etudiants of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants.createMany = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::createMany::Formation::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.etudiants#destroyAll
             * @methodOf lbServices.Formation.etudiants
             *
             * @description
             *
             * Deletes all etudiants of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.etudiants.destroyAll = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::delete::Formation::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.etudiants#destroyById
             * @methodOf lbServices.Formation.etudiants
             *
             * @description
             *
             * Delete a related item by id for etudiants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `fk` – `{*}` - Foreign key for etudiants
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.etudiants.destroyById = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::destroyById::Formation::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.etudiants#findById
             * @methodOf lbServices.Formation.etudiants
             *
             * @description
             *
             * Find a related item by id for etudiants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `fk` – `{*}` - Foreign key for etudiants
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants.findById = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::findById::Formation::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.etudiants#updateById
             * @methodOf lbServices.Formation.etudiants
             *
             * @description
             *
             * Update a related item by id for etudiants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `fk` – `{*}` - Foreign key for etudiants
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants.updateById = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::updateById::Formation::etudiants"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Formation.niveaus
     * @header lbServices.Formation.niveaus
     * @object
     * @description
     *
     * The object `Formation.niveaus` groups methods
     * manipulating `Niveau` instances related to `Formation`.
     *
     * Call {@link lbServices.Formation#niveaus Formation.niveaus()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Formation#niveaus
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Queries niveaus of formation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
        R.niveaus = function() {
          var TargetResource = $injector.get("Niveau");
          var action = TargetResource["::get::Formation::niveaus"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.niveaus#count
             * @methodOf lbServices.Formation.niveaus
             *
             * @description
             *
             * Counts niveaus of formation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.niveaus.count = function() {
          var TargetResource = $injector.get("Niveau");
          var action = TargetResource["::count::Formation::niveaus"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.niveaus#create
             * @methodOf lbServices.Formation.niveaus
             *
             * @description
             *
             * Creates a new instance in niveaus of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
        R.niveaus.create = function() {
          var TargetResource = $injector.get("Niveau");
          var action = TargetResource["::create::Formation::niveaus"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.niveaus#createMany
             * @methodOf lbServices.Formation.niveaus
             *
             * @description
             *
             * Creates a new instance in niveaus of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
        R.niveaus.createMany = function() {
          var TargetResource = $injector.get("Niveau");
          var action = TargetResource["::createMany::Formation::niveaus"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.niveaus#destroyAll
             * @methodOf lbServices.Formation.niveaus
             *
             * @description
             *
             * Deletes all niveaus of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.niveaus.destroyAll = function() {
          var TargetResource = $injector.get("Niveau");
          var action = TargetResource["::delete::Formation::niveaus"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.niveaus#destroyById
             * @methodOf lbServices.Formation.niveaus
             *
             * @description
             *
             * Delete a related item by id for niveaus.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `fk` – `{*}` - Foreign key for niveaus
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.niveaus.destroyById = function() {
          var TargetResource = $injector.get("Niveau");
          var action = TargetResource["::destroyById::Formation::niveaus"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.niveaus#findById
             * @methodOf lbServices.Formation.niveaus
             *
             * @description
             *
             * Find a related item by id for niveaus.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `fk` – `{*}` - Foreign key for niveaus
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
        R.niveaus.findById = function() {
          var TargetResource = $injector.get("Niveau");
          var action = TargetResource["::findById::Formation::niveaus"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.niveaus#updateById
             * @methodOf lbServices.Formation.niveaus
             *
             * @description
             *
             * Update a related item by id for niveaus.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `fk` – `{*}` - Foreign key for niveaus
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
        R.niveaus.updateById = function() {
          var TargetResource = $injector.get("Niveau");
          var action = TargetResource["::updateById::Formation::niveaus"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Formation.options
     * @header lbServices.Formation.options
     * @object
     * @description
     *
     * The object `Formation.options` groups methods
     * manipulating `Option` instances related to `Formation`.
     *
     * Call {@link lbServices.Formation#options Formation.options()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Formation#options
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Queries options of formation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
        R.options = function() {
          var TargetResource = $injector.get("Option");
          var action = TargetResource["::get::Formation::options"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.options#count
             * @methodOf lbServices.Formation.options
             *
             * @description
             *
             * Counts options of formation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.options.count = function() {
          var TargetResource = $injector.get("Option");
          var action = TargetResource["::count::Formation::options"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.options#create
             * @methodOf lbServices.Formation.options
             *
             * @description
             *
             * Creates a new instance in options of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
        R.options.create = function() {
          var TargetResource = $injector.get("Option");
          var action = TargetResource["::create::Formation::options"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.options#createMany
             * @methodOf lbServices.Formation.options
             *
             * @description
             *
             * Creates a new instance in options of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
        R.options.createMany = function() {
          var TargetResource = $injector.get("Option");
          var action = TargetResource["::createMany::Formation::options"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.options#destroyAll
             * @methodOf lbServices.Formation.options
             *
             * @description
             *
             * Deletes all options of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.options.destroyAll = function() {
          var TargetResource = $injector.get("Option");
          var action = TargetResource["::delete::Formation::options"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.options#destroyById
             * @methodOf lbServices.Formation.options
             *
             * @description
             *
             * Delete a related item by id for options.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `fk` – `{*}` - Foreign key for options
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.options.destroyById = function() {
          var TargetResource = $injector.get("Option");
          var action = TargetResource["::destroyById::Formation::options"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.options#findById
             * @methodOf lbServices.Formation.options
             *
             * @description
             *
             * Find a related item by id for options.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `fk` – `{*}` - Foreign key for options
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
        R.options.findById = function() {
          var TargetResource = $injector.get("Option");
          var action = TargetResource["::findById::Formation::options"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.options#updateById
             * @methodOf lbServices.Formation.options
             *
             * @description
             *
             * Update a related item by id for options.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `fk` – `{*}` - Foreign key for options
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
        R.options.updateById = function() {
          var TargetResource = $injector.get("Option");
          var action = TargetResource["::updateById::Formation::options"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Formation.classes
     * @header lbServices.Formation.classes
     * @object
     * @description
     *
     * The object `Formation.classes` groups methods
     * manipulating `Classe` instances related to `Formation`.
     *
     * Call {@link lbServices.Formation#classes Formation.classes()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Formation#classes
             * @methodOf lbServices.Formation
             *
             * @description
             *
             * Queries classes of formation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R.classes = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::get::Formation::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.classes#count
             * @methodOf lbServices.Formation.classes
             *
             * @description
             *
             * Counts classes of formation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.classes.count = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::count::Formation::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.classes#create
             * @methodOf lbServices.Formation.classes
             *
             * @description
             *
             * Creates a new instance in classes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R.classes.create = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::create::Formation::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.classes#createMany
             * @methodOf lbServices.Formation.classes
             *
             * @description
             *
             * Creates a new instance in classes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R.classes.createMany = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::createMany::Formation::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.classes#destroyAll
             * @methodOf lbServices.Formation.classes
             *
             * @description
             *
             * Deletes all classes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.classes.destroyAll = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::delete::Formation::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.classes#destroyById
             * @methodOf lbServices.Formation.classes
             *
             * @description
             *
             * Delete a related item by id for classes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `fk` – `{*}` - Foreign key for classes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.classes.destroyById = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::destroyById::Formation::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.classes#findById
             * @methodOf lbServices.Formation.classes
             *
             * @description
             *
             * Find a related item by id for classes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `fk` – `{*}` - Foreign key for classes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R.classes.findById = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::findById::Formation::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Formation.classes#updateById
             * @methodOf lbServices.Formation.classes
             *
             * @description
             *
             * Update a related item by id for classes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - formation id
             *
             *  - `fk` – `{*}` - Foreign key for classes
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R.classes.updateById = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::updateById::Formation::classes"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Niveau
 * @header lbServices.Niveau
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Niveau` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Niveau",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/niveau/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Niveau.etudiants.findById() instead.
            "prototype$__findById__etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/niveau/:id/etudiants/:fk",
              method: "GET",
            },

            // INTERNAL. Use Niveau.etudiants.destroyById() instead.
            "prototype$__destroyById__etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/niveau/:id/etudiants/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Niveau.etudiants.updateById() instead.
            "prototype$__updateById__etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/niveau/:id/etudiants/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Niveau.formations.findById() instead.
            "prototype$__findById__formations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/niveau/:id/formations/:fk",
              method: "GET",
            },

            // INTERNAL. Use Niveau.formations.destroyById() instead.
            "prototype$__destroyById__formations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/niveau/:id/formations/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Niveau.formations.updateById() instead.
            "prototype$__updateById__formations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/niveau/:id/formations/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Niveau.classes.findById() instead.
            "prototype$__findById__classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/niveau/:id/classes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Niveau.classes.destroyById() instead.
            "prototype$__destroyById__classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/niveau/:id/classes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Niveau.classes.updateById() instead.
            "prototype$__updateById__classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/niveau/:id/classes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Niveau.etudiants() instead.
            "prototype$__get__etudiants": {
              isArray: true,
              url: urlBase + "/niveau/:id/etudiants",
              method: "GET",
            },

            // INTERNAL. Use Niveau.etudiants.create() instead.
            "prototype$__create__etudiants": {
              url: urlBase + "/niveau/:id/etudiants",
              method: "POST",
            },

            // INTERNAL. Use Niveau.etudiants.destroyAll() instead.
            "prototype$__delete__etudiants": {
              url: urlBase + "/niveau/:id/etudiants",
              method: "DELETE",
            },

            // INTERNAL. Use Niveau.etudiants.count() instead.
            "prototype$__count__etudiants": {
              url: urlBase + "/niveau/:id/etudiants/count",
              method: "GET",
            },

            // INTERNAL. Use Niveau.formations() instead.
            "prototype$__get__formations": {
              isArray: true,
              url: urlBase + "/niveau/:id/formations",
              method: "GET",
            },

            // INTERNAL. Use Niveau.formations.create() instead.
            "prototype$__create__formations": {
              url: urlBase + "/niveau/:id/formations",
              method: "POST",
            },

            // INTERNAL. Use Niveau.formations.destroyAll() instead.
            "prototype$__delete__formations": {
              url: urlBase + "/niveau/:id/formations",
              method: "DELETE",
            },

            // INTERNAL. Use Niveau.formations.count() instead.
            "prototype$__count__formations": {
              url: urlBase + "/niveau/:id/formations/count",
              method: "GET",
            },

            // INTERNAL. Use Niveau.classes() instead.
            "prototype$__get__classes": {
              isArray: true,
              url: urlBase + "/niveau/:id/classes",
              method: "GET",
            },

            // INTERNAL. Use Niveau.classes.create() instead.
            "prototype$__create__classes": {
              url: urlBase + "/niveau/:id/classes",
              method: "POST",
            },

            // INTERNAL. Use Niveau.classes.destroyAll() instead.
            "prototype$__delete__classes": {
              url: urlBase + "/niveau/:id/classes",
              method: "DELETE",
            },

            // INTERNAL. Use Niveau.classes.count() instead.
            "prototype$__count__classes": {
              url: urlBase + "/niveau/:id/classes/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Niveau#create
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/niveau",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Niveau#createMany
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/niveau",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Niveau#upsert
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/niveau",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Niveau#replaceOrCreate
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/niveau/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Niveau#upsertWithWhere
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/niveau/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Niveau#exists
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/niveau/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Niveau#findById
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/niveau/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Niveau#replaceById
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/niveau/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Niveau#find
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/niveau",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Niveau#findOne
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/niveau/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Niveau#updateAll
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/niveau/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Niveau#deleteById
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/niveau/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Niveau#count
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/niveau/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Niveau#prototype$updateAttributes
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/niveau/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Niveau#createChangeStream
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/niveau/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Etudiant.niveau() instead.
            "::get::Etudiant::niveau": {
              url: urlBase + "/etudiant/:id/niveau",
              method: "GET",
            },

            // INTERNAL. Use Formation.niveaus.findById() instead.
            "::findById::Formation::niveaus": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/niveaus/:fk",
              method: "GET",
            },

            // INTERNAL. Use Formation.niveaus.destroyById() instead.
            "::destroyById::Formation::niveaus": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/niveaus/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Formation.niveaus.updateById() instead.
            "::updateById::Formation::niveaus": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/niveaus/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Formation.niveaus() instead.
            "::get::Formation::niveaus": {
              isArray: true,
              url: urlBase + "/formation/:id/niveaus",
              method: "GET",
            },

            // INTERNAL. Use Formation.niveaus.create() instead.
            "::create::Formation::niveaus": {
              url: urlBase + "/formation/:id/niveaus",
              method: "POST",
            },

            // INTERNAL. Use Formation.niveaus.createMany() instead.
            "::createMany::Formation::niveaus": {
              isArray: true,
              url: urlBase + "/formation/:id/niveaus",
              method: "POST",
            },

            // INTERNAL. Use Formation.niveaus.destroyAll() instead.
            "::delete::Formation::niveaus": {
              url: urlBase + "/formation/:id/niveaus",
              method: "DELETE",
            },

            // INTERNAL. Use Formation.niveaus.count() instead.
            "::count::Formation::niveaus": {
              url: urlBase + "/formation/:id/niveaus/count",
              method: "GET",
            },

            // INTERNAL. Use Classe.niveau() instead.
            "::get::Classe::niveau": {
              url: urlBase + "/classe/:id/niveau",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Niveau#patchOrCreate
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Niveau#updateOrCreate
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Niveau#patchOrCreateWithWhere
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Niveau#update
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Niveau#destroyById
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Niveau#removeById
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Niveau#patchAttributes
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Niveau#modelName
        * @propertyOf lbServices.Niveau
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Niveau`.
        */
        R.modelName = "Niveau";

    /**
     * @ngdoc object
     * @name lbServices.Niveau.etudiants
     * @header lbServices.Niveau.etudiants
     * @object
     * @description
     *
     * The object `Niveau.etudiants` groups methods
     * manipulating `Etudiant` instances related to `Niveau`.
     *
     * Call {@link lbServices.Niveau#etudiants Niveau.etudiants()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Niveau#etudiants
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Queries etudiants of niveau.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::get::Niveau::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Niveau.etudiants#count
             * @methodOf lbServices.Niveau.etudiants
             *
             * @description
             *
             * Counts etudiants of niveau.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.etudiants.count = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::count::Niveau::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Niveau.etudiants#create
             * @methodOf lbServices.Niveau.etudiants
             *
             * @description
             *
             * Creates a new instance in etudiants of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants.create = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::create::Niveau::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Niveau.etudiants#createMany
             * @methodOf lbServices.Niveau.etudiants
             *
             * @description
             *
             * Creates a new instance in etudiants of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants.createMany = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::createMany::Niveau::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Niveau.etudiants#destroyAll
             * @methodOf lbServices.Niveau.etudiants
             *
             * @description
             *
             * Deletes all etudiants of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.etudiants.destroyAll = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::delete::Niveau::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Niveau.etudiants#destroyById
             * @methodOf lbServices.Niveau.etudiants
             *
             * @description
             *
             * Delete a related item by id for etudiants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             *  - `fk` – `{*}` - Foreign key for etudiants
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.etudiants.destroyById = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::destroyById::Niveau::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Niveau.etudiants#findById
             * @methodOf lbServices.Niveau.etudiants
             *
             * @description
             *
             * Find a related item by id for etudiants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             *  - `fk` – `{*}` - Foreign key for etudiants
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants.findById = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::findById::Niveau::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Niveau.etudiants#updateById
             * @methodOf lbServices.Niveau.etudiants
             *
             * @description
             *
             * Update a related item by id for etudiants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             *  - `fk` – `{*}` - Foreign key for etudiants
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants.updateById = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::updateById::Niveau::etudiants"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Niveau.formations
     * @header lbServices.Niveau.formations
     * @object
     * @description
     *
     * The object `Niveau.formations` groups methods
     * manipulating `Formation` instances related to `Niveau`.
     *
     * Call {@link lbServices.Niveau#formations Niveau.formations()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Niveau#formations
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Queries formations of niveau.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
        R.formations = function() {
          var TargetResource = $injector.get("Formation");
          var action = TargetResource["::get::Niveau::formations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Niveau.formations#count
             * @methodOf lbServices.Niveau.formations
             *
             * @description
             *
             * Counts formations of niveau.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.formations.count = function() {
          var TargetResource = $injector.get("Formation");
          var action = TargetResource["::count::Niveau::formations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Niveau.formations#create
             * @methodOf lbServices.Niveau.formations
             *
             * @description
             *
             * Creates a new instance in formations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
        R.formations.create = function() {
          var TargetResource = $injector.get("Formation");
          var action = TargetResource["::create::Niveau::formations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Niveau.formations#createMany
             * @methodOf lbServices.Niveau.formations
             *
             * @description
             *
             * Creates a new instance in formations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
        R.formations.createMany = function() {
          var TargetResource = $injector.get("Formation");
          var action = TargetResource["::createMany::Niveau::formations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Niveau.formations#destroyAll
             * @methodOf lbServices.Niveau.formations
             *
             * @description
             *
             * Deletes all formations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.formations.destroyAll = function() {
          var TargetResource = $injector.get("Formation");
          var action = TargetResource["::delete::Niveau::formations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Niveau.formations#destroyById
             * @methodOf lbServices.Niveau.formations
             *
             * @description
             *
             * Delete a related item by id for formations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             *  - `fk` – `{*}` - Foreign key for formations
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.formations.destroyById = function() {
          var TargetResource = $injector.get("Formation");
          var action = TargetResource["::destroyById::Niveau::formations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Niveau.formations#findById
             * @methodOf lbServices.Niveau.formations
             *
             * @description
             *
             * Find a related item by id for formations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             *  - `fk` – `{*}` - Foreign key for formations
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
        R.formations.findById = function() {
          var TargetResource = $injector.get("Formation");
          var action = TargetResource["::findById::Niveau::formations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Niveau.formations#updateById
             * @methodOf lbServices.Niveau.formations
             *
             * @description
             *
             * Update a related item by id for formations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             *  - `fk` – `{*}` - Foreign key for formations
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
        R.formations.updateById = function() {
          var TargetResource = $injector.get("Formation");
          var action = TargetResource["::updateById::Niveau::formations"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Niveau.classes
     * @header lbServices.Niveau.classes
     * @object
     * @description
     *
     * The object `Niveau.classes` groups methods
     * manipulating `Classe` instances related to `Niveau`.
     *
     * Call {@link lbServices.Niveau#classes Niveau.classes()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Niveau#classes
             * @methodOf lbServices.Niveau
             *
             * @description
             *
             * Queries classes of niveau.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R.classes = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::get::Niveau::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Niveau.classes#count
             * @methodOf lbServices.Niveau.classes
             *
             * @description
             *
             * Counts classes of niveau.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.classes.count = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::count::Niveau::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Niveau.classes#create
             * @methodOf lbServices.Niveau.classes
             *
             * @description
             *
             * Creates a new instance in classes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R.classes.create = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::create::Niveau::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Niveau.classes#createMany
             * @methodOf lbServices.Niveau.classes
             *
             * @description
             *
             * Creates a new instance in classes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R.classes.createMany = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::createMany::Niveau::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Niveau.classes#destroyAll
             * @methodOf lbServices.Niveau.classes
             *
             * @description
             *
             * Deletes all classes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.classes.destroyAll = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::delete::Niveau::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Niveau.classes#destroyById
             * @methodOf lbServices.Niveau.classes
             *
             * @description
             *
             * Delete a related item by id for classes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             *  - `fk` – `{*}` - Foreign key for classes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.classes.destroyById = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::destroyById::Niveau::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Niveau.classes#findById
             * @methodOf lbServices.Niveau.classes
             *
             * @description
             *
             * Find a related item by id for classes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             *  - `fk` – `{*}` - Foreign key for classes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R.classes.findById = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::findById::Niveau::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Niveau.classes#updateById
             * @methodOf lbServices.Niveau.classes
             *
             * @description
             *
             * Update a related item by id for classes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - niveau id
             *
             *  - `fk` – `{*}` - Foreign key for classes
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R.classes.updateById = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::updateById::Niveau::classes"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Option
 * @header lbServices.Option
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Option` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Option",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/option/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Option.etudiants.findById() instead.
            "prototype$__findById__etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/option/:id/etudiants/:fk",
              method: "GET",
            },

            // INTERNAL. Use Option.etudiants.destroyById() instead.
            "prototype$__destroyById__etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/option/:id/etudiants/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Option.etudiants.updateById() instead.
            "prototype$__updateById__etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/option/:id/etudiants/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Option.departement() instead.
            "prototype$__get__departement": {
              url: urlBase + "/option/:id/departement",
              method: "GET",
            },

            // INTERNAL. Use Option.formations.findById() instead.
            "prototype$__findById__formations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/option/:id/formations/:fk",
              method: "GET",
            },

            // INTERNAL. Use Option.formations.destroyById() instead.
            "prototype$__destroyById__formations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/option/:id/formations/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Option.formations.updateById() instead.
            "prototype$__updateById__formations": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/option/:id/formations/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Option.classes.findById() instead.
            "prototype$__findById__classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/option/:id/classes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Option.classes.destroyById() instead.
            "prototype$__destroyById__classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/option/:id/classes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Option.classes.updateById() instead.
            "prototype$__updateById__classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/option/:id/classes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Option.etudiants() instead.
            "prototype$__get__etudiants": {
              isArray: true,
              url: urlBase + "/option/:id/etudiants",
              method: "GET",
            },

            // INTERNAL. Use Option.etudiants.create() instead.
            "prototype$__create__etudiants": {
              url: urlBase + "/option/:id/etudiants",
              method: "POST",
            },

            // INTERNAL. Use Option.etudiants.destroyAll() instead.
            "prototype$__delete__etudiants": {
              url: urlBase + "/option/:id/etudiants",
              method: "DELETE",
            },

            // INTERNAL. Use Option.etudiants.count() instead.
            "prototype$__count__etudiants": {
              url: urlBase + "/option/:id/etudiants/count",
              method: "GET",
            },

            // INTERNAL. Use Option.formations() instead.
            "prototype$__get__formations": {
              isArray: true,
              url: urlBase + "/option/:id/formations",
              method: "GET",
            },

            // INTERNAL. Use Option.formations.create() instead.
            "prototype$__create__formations": {
              url: urlBase + "/option/:id/formations",
              method: "POST",
            },

            // INTERNAL. Use Option.formations.destroyAll() instead.
            "prototype$__delete__formations": {
              url: urlBase + "/option/:id/formations",
              method: "DELETE",
            },

            // INTERNAL. Use Option.formations.count() instead.
            "prototype$__count__formations": {
              url: urlBase + "/option/:id/formations/count",
              method: "GET",
            },

            // INTERNAL. Use Option.classes() instead.
            "prototype$__get__classes": {
              isArray: true,
              url: urlBase + "/option/:id/classes",
              method: "GET",
            },

            // INTERNAL. Use Option.classes.create() instead.
            "prototype$__create__classes": {
              url: urlBase + "/option/:id/classes",
              method: "POST",
            },

            // INTERNAL. Use Option.classes.destroyAll() instead.
            "prototype$__delete__classes": {
              url: urlBase + "/option/:id/classes",
              method: "DELETE",
            },

            // INTERNAL. Use Option.classes.count() instead.
            "prototype$__count__classes": {
              url: urlBase + "/option/:id/classes/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Option#create
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/option",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Option#createMany
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/option",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Option#upsert
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/option",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Option#replaceOrCreate
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/option/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Option#upsertWithWhere
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/option/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Option#exists
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/option/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Option#findById
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/option/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Option#replaceById
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/option/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Option#find
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/option",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Option#findOne
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/option/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Option#updateAll
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/option/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Option#deleteById
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/option/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Option#count
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/option/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Option#prototype$updateAttributes
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/option/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Option#createChangeStream
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/option/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Departement.options.findById() instead.
            "::findById::Departement::options": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/departement/:id/options/:fk",
              method: "GET",
            },

            // INTERNAL. Use Departement.options.destroyById() instead.
            "::destroyById::Departement::options": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/departement/:id/options/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Departement.options.updateById() instead.
            "::updateById::Departement::options": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/departement/:id/options/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Departement.options() instead.
            "::get::Departement::options": {
              isArray: true,
              url: urlBase + "/departement/:id/options",
              method: "GET",
            },

            // INTERNAL. Use Departement.options.create() instead.
            "::create::Departement::options": {
              url: urlBase + "/departement/:id/options",
              method: "POST",
            },

            // INTERNAL. Use Departement.options.createMany() instead.
            "::createMany::Departement::options": {
              isArray: true,
              url: urlBase + "/departement/:id/options",
              method: "POST",
            },

            // INTERNAL. Use Departement.options.destroyAll() instead.
            "::delete::Departement::options": {
              url: urlBase + "/departement/:id/options",
              method: "DELETE",
            },

            // INTERNAL. Use Departement.options.count() instead.
            "::count::Departement::options": {
              url: urlBase + "/departement/:id/options/count",
              method: "GET",
            },

            // INTERNAL. Use Formation.options.findById() instead.
            "::findById::Formation::options": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/options/:fk",
              method: "GET",
            },

            // INTERNAL. Use Formation.options.destroyById() instead.
            "::destroyById::Formation::options": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/options/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Formation.options.updateById() instead.
            "::updateById::Formation::options": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/options/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Formation.options() instead.
            "::get::Formation::options": {
              isArray: true,
              url: urlBase + "/formation/:id/options",
              method: "GET",
            },

            // INTERNAL. Use Formation.options.create() instead.
            "::create::Formation::options": {
              url: urlBase + "/formation/:id/options",
              method: "POST",
            },

            // INTERNAL. Use Formation.options.createMany() instead.
            "::createMany::Formation::options": {
              isArray: true,
              url: urlBase + "/formation/:id/options",
              method: "POST",
            },

            // INTERNAL. Use Formation.options.destroyAll() instead.
            "::delete::Formation::options": {
              url: urlBase + "/formation/:id/options",
              method: "DELETE",
            },

            // INTERNAL. Use Formation.options.count() instead.
            "::count::Formation::options": {
              url: urlBase + "/formation/:id/options/count",
              method: "GET",
            },

            // INTERNAL. Use Classe.option() instead.
            "::get::Classe::option": {
              url: urlBase + "/classe/:id/option",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Option#patchOrCreate
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Option#updateOrCreate
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Option#patchOrCreateWithWhere
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Option#update
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Option#destroyById
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Option#removeById
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Option#patchAttributes
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Option#modelName
        * @propertyOf lbServices.Option
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Option`.
        */
        R.modelName = "Option";

    /**
     * @ngdoc object
     * @name lbServices.Option.etudiants
     * @header lbServices.Option.etudiants
     * @object
     * @description
     *
     * The object `Option.etudiants` groups methods
     * manipulating `Etudiant` instances related to `Option`.
     *
     * Call {@link lbServices.Option#etudiants Option.etudiants()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Option#etudiants
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Queries etudiants of option.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::get::Option::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Option.etudiants#count
             * @methodOf lbServices.Option.etudiants
             *
             * @description
             *
             * Counts etudiants of option.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.etudiants.count = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::count::Option::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Option.etudiants#create
             * @methodOf lbServices.Option.etudiants
             *
             * @description
             *
             * Creates a new instance in etudiants of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants.create = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::create::Option::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Option.etudiants#createMany
             * @methodOf lbServices.Option.etudiants
             *
             * @description
             *
             * Creates a new instance in etudiants of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants.createMany = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::createMany::Option::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Option.etudiants#destroyAll
             * @methodOf lbServices.Option.etudiants
             *
             * @description
             *
             * Deletes all etudiants of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.etudiants.destroyAll = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::delete::Option::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Option.etudiants#destroyById
             * @methodOf lbServices.Option.etudiants
             *
             * @description
             *
             * Delete a related item by id for etudiants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             *  - `fk` – `{*}` - Foreign key for etudiants
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.etudiants.destroyById = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::destroyById::Option::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Option.etudiants#findById
             * @methodOf lbServices.Option.etudiants
             *
             * @description
             *
             * Find a related item by id for etudiants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             *  - `fk` – `{*}` - Foreign key for etudiants
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants.findById = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::findById::Option::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Option.etudiants#updateById
             * @methodOf lbServices.Option.etudiants
             *
             * @description
             *
             * Update a related item by id for etudiants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             *  - `fk` – `{*}` - Foreign key for etudiants
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants.updateById = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::updateById::Option::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Option#departement
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Fetches belongsTo relation departement.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Departement` object.)
             * </em>
             */
        R.departement = function() {
          var TargetResource = $injector.get("Departement");
          var action = TargetResource["::get::Option::departement"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Option.formations
     * @header lbServices.Option.formations
     * @object
     * @description
     *
     * The object `Option.formations` groups methods
     * manipulating `Formation` instances related to `Option`.
     *
     * Call {@link lbServices.Option#formations Option.formations()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Option#formations
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Queries formations of option.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
        R.formations = function() {
          var TargetResource = $injector.get("Formation");
          var action = TargetResource["::get::Option::formations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Option.formations#count
             * @methodOf lbServices.Option.formations
             *
             * @description
             *
             * Counts formations of option.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.formations.count = function() {
          var TargetResource = $injector.get("Formation");
          var action = TargetResource["::count::Option::formations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Option.formations#create
             * @methodOf lbServices.Option.formations
             *
             * @description
             *
             * Creates a new instance in formations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
        R.formations.create = function() {
          var TargetResource = $injector.get("Formation");
          var action = TargetResource["::create::Option::formations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Option.formations#createMany
             * @methodOf lbServices.Option.formations
             *
             * @description
             *
             * Creates a new instance in formations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
        R.formations.createMany = function() {
          var TargetResource = $injector.get("Formation");
          var action = TargetResource["::createMany::Option::formations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Option.formations#destroyAll
             * @methodOf lbServices.Option.formations
             *
             * @description
             *
             * Deletes all formations of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.formations.destroyAll = function() {
          var TargetResource = $injector.get("Formation");
          var action = TargetResource["::delete::Option::formations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Option.formations#destroyById
             * @methodOf lbServices.Option.formations
             *
             * @description
             *
             * Delete a related item by id for formations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             *  - `fk` – `{*}` - Foreign key for formations
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.formations.destroyById = function() {
          var TargetResource = $injector.get("Formation");
          var action = TargetResource["::destroyById::Option::formations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Option.formations#findById
             * @methodOf lbServices.Option.formations
             *
             * @description
             *
             * Find a related item by id for formations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             *  - `fk` – `{*}` - Foreign key for formations
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
        R.formations.findById = function() {
          var TargetResource = $injector.get("Formation");
          var action = TargetResource["::findById::Option::formations"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Option.formations#updateById
             * @methodOf lbServices.Option.formations
             *
             * @description
             *
             * Update a related item by id for formations.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             *  - `fk` – `{*}` - Foreign key for formations
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
        R.formations.updateById = function() {
          var TargetResource = $injector.get("Formation");
          var action = TargetResource["::updateById::Option::formations"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Option.classes
     * @header lbServices.Option.classes
     * @object
     * @description
     *
     * The object `Option.classes` groups methods
     * manipulating `Classe` instances related to `Option`.
     *
     * Call {@link lbServices.Option#classes Option.classes()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Option#classes
             * @methodOf lbServices.Option
             *
             * @description
             *
             * Queries classes of option.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R.classes = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::get::Option::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Option.classes#count
             * @methodOf lbServices.Option.classes
             *
             * @description
             *
             * Counts classes of option.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.classes.count = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::count::Option::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Option.classes#create
             * @methodOf lbServices.Option.classes
             *
             * @description
             *
             * Creates a new instance in classes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R.classes.create = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::create::Option::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Option.classes#createMany
             * @methodOf lbServices.Option.classes
             *
             * @description
             *
             * Creates a new instance in classes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R.classes.createMany = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::createMany::Option::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Option.classes#destroyAll
             * @methodOf lbServices.Option.classes
             *
             * @description
             *
             * Deletes all classes of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.classes.destroyAll = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::delete::Option::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Option.classes#destroyById
             * @methodOf lbServices.Option.classes
             *
             * @description
             *
             * Delete a related item by id for classes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             *  - `fk` – `{*}` - Foreign key for classes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.classes.destroyById = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::destroyById::Option::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Option.classes#findById
             * @methodOf lbServices.Option.classes
             *
             * @description
             *
             * Find a related item by id for classes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             *  - `fk` – `{*}` - Foreign key for classes
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R.classes.findById = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::findById::Option::classes"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Option.classes#updateById
             * @methodOf lbServices.Option.classes
             *
             * @description
             *
             * Update a related item by id for classes.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - option id
             *
             *  - `fk` – `{*}` - Foreign key for classes
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R.classes.updateById = function() {
          var TargetResource = $injector.get("Classe");
          var action = TargetResource["::updateById::Option::classes"];
          return action.apply(R, arguments);
        };


        return R;
      }]);

/**
 * @ngdoc object
 * @name lbServices.Classe
 * @header lbServices.Classe
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Classe` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
  module.factory(
    "Classe",
    [
      'LoopBackResource', 'LoopBackAuth', '$injector', '$q',
      function(LoopBackResource, LoopBackAuth, $injector, $q) {
        var R = LoopBackResource(
        urlBase + "/classe/:id",
          { 'id': '@id' },
          {

            // INTERNAL. Use Classe.etudiants.findById() instead.
            "prototype$__findById__etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/classe/:id/etudiants/:fk",
              method: "GET",
            },

            // INTERNAL. Use Classe.etudiants.destroyById() instead.
            "prototype$__destroyById__etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/classe/:id/etudiants/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Classe.etudiants.updateById() instead.
            "prototype$__updateById__etudiants": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/classe/:id/etudiants/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Classe.departement() instead.
            "prototype$__get__departement": {
              url: urlBase + "/classe/:id/departement",
              method: "GET",
            },

            // INTERNAL. Use Classe.option() instead.
            "prototype$__get__option": {
              url: urlBase + "/classe/:id/option",
              method: "GET",
            },

            // INTERNAL. Use Classe.formation() instead.
            "prototype$__get__formation": {
              url: urlBase + "/classe/:id/formation",
              method: "GET",
            },

            // INTERNAL. Use Classe.niveau() instead.
            "prototype$__get__niveau": {
              url: urlBase + "/classe/:id/niveau",
              method: "GET",
            },

            // INTERNAL. Use Classe.etudiants() instead.
            "prototype$__get__etudiants": {
              isArray: true,
              url: urlBase + "/classe/:id/etudiants",
              method: "GET",
            },

            // INTERNAL. Use Classe.etudiants.create() instead.
            "prototype$__create__etudiants": {
              url: urlBase + "/classe/:id/etudiants",
              method: "POST",
            },

            // INTERNAL. Use Classe.etudiants.destroyAll() instead.
            "prototype$__delete__etudiants": {
              url: urlBase + "/classe/:id/etudiants",
              method: "DELETE",
            },

            // INTERNAL. Use Classe.etudiants.count() instead.
            "prototype$__count__etudiants": {
              url: urlBase + "/classe/:id/etudiants/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Classe#create
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
            "create": {
              url: urlBase + "/classe",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Classe#createMany
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Create a new instance of the model and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
            "createMany": {
              isArray: true,
              url: urlBase + "/classe",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Classe#upsert
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
            "upsert": {
              url: urlBase + "/classe",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Classe#replaceOrCreate
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Replace an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
            "replaceOrCreate": {
              url: urlBase + "/classe/replaceOrCreate",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Classe#upsertWithWhere
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
            "upsertWithWhere": {
              url: urlBase + "/classe/upsertWithWhere",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Classe#exists
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Check whether a model instance exists in the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `exists` – `{boolean=}` -
             */
            "exists": {
              url: urlBase + "/classe/:id/exists",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Classe#findById
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Find a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             *  - `filter` – `{object=}` - Filter defining fields and include
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
            "findById": {
              url: urlBase + "/classe/:id",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Classe#replaceById
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Replace attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
            "replaceById": {
              url: urlBase + "/classe/:id/replace",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Classe#find
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Find all instances of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
            "find": {
              isArray: true,
              url: urlBase + "/classe",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Classe#findOne
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Find first instance of the model matched by filter from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
            "findOne": {
              url: urlBase + "/classe/findOne",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Classe#updateAll
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
            "updateAll": {
              url: urlBase + "/classe/update",
              method: "POST",
            },

            /**
             * @ngdoc method
             * @name lbServices.Classe#deleteById
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
            "deleteById": {
              url: urlBase + "/classe/:id",
              method: "DELETE",
            },

            /**
             * @ngdoc method
             * @name lbServices.Classe#count
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Count instances of the model matched by where from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
            "count": {
              url: urlBase + "/classe/count",
              method: "GET",
            },

            /**
             * @ngdoc method
             * @name lbServices.Classe#prototype$updateAttributes
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - classe id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
            "prototype$updateAttributes": {
              url: urlBase + "/classe/:id",
              method: "PUT",
            },

            /**
             * @ngdoc method
             * @name lbServices.Classe#createChangeStream
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Create a change stream.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             *  - `options` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `changes` – `{ReadableStream=}` -
             */
            "createChangeStream": {
              url: urlBase + "/classe/change-stream",
              method: "POST",
            },

            // INTERNAL. Use Etudiant.classe() instead.
            "::get::Etudiant::classe": {
              url: urlBase + "/etudiant/:id/classe",
              method: "GET",
            },

            // INTERNAL. Use Departement.classes.findById() instead.
            "::findById::Departement::classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/departement/:id/classes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Departement.classes.destroyById() instead.
            "::destroyById::Departement::classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/departement/:id/classes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Departement.classes.updateById() instead.
            "::updateById::Departement::classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/departement/:id/classes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Departement.classes() instead.
            "::get::Departement::classes": {
              isArray: true,
              url: urlBase + "/departement/:id/classes",
              method: "GET",
            },

            // INTERNAL. Use Departement.classes.create() instead.
            "::create::Departement::classes": {
              url: urlBase + "/departement/:id/classes",
              method: "POST",
            },

            // INTERNAL. Use Departement.classes.createMany() instead.
            "::createMany::Departement::classes": {
              isArray: true,
              url: urlBase + "/departement/:id/classes",
              method: "POST",
            },

            // INTERNAL. Use Departement.classes.destroyAll() instead.
            "::delete::Departement::classes": {
              url: urlBase + "/departement/:id/classes",
              method: "DELETE",
            },

            // INTERNAL. Use Departement.classes.count() instead.
            "::count::Departement::classes": {
              url: urlBase + "/departement/:id/classes/count",
              method: "GET",
            },

            // INTERNAL. Use Formation.classes.findById() instead.
            "::findById::Formation::classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/classes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Formation.classes.destroyById() instead.
            "::destroyById::Formation::classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/classes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Formation.classes.updateById() instead.
            "::updateById::Formation::classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/formation/:id/classes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Formation.classes() instead.
            "::get::Formation::classes": {
              isArray: true,
              url: urlBase + "/formation/:id/classes",
              method: "GET",
            },

            // INTERNAL. Use Formation.classes.create() instead.
            "::create::Formation::classes": {
              url: urlBase + "/formation/:id/classes",
              method: "POST",
            },

            // INTERNAL. Use Formation.classes.createMany() instead.
            "::createMany::Formation::classes": {
              isArray: true,
              url: urlBase + "/formation/:id/classes",
              method: "POST",
            },

            // INTERNAL. Use Formation.classes.destroyAll() instead.
            "::delete::Formation::classes": {
              url: urlBase + "/formation/:id/classes",
              method: "DELETE",
            },

            // INTERNAL. Use Formation.classes.count() instead.
            "::count::Formation::classes": {
              url: urlBase + "/formation/:id/classes/count",
              method: "GET",
            },

            // INTERNAL. Use Niveau.classes.findById() instead.
            "::findById::Niveau::classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/niveau/:id/classes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Niveau.classes.destroyById() instead.
            "::destroyById::Niveau::classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/niveau/:id/classes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Niveau.classes.updateById() instead.
            "::updateById::Niveau::classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/niveau/:id/classes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Niveau.classes() instead.
            "::get::Niveau::classes": {
              isArray: true,
              url: urlBase + "/niveau/:id/classes",
              method: "GET",
            },

            // INTERNAL. Use Niveau.classes.create() instead.
            "::create::Niveau::classes": {
              url: urlBase + "/niveau/:id/classes",
              method: "POST",
            },

            // INTERNAL. Use Niveau.classes.createMany() instead.
            "::createMany::Niveau::classes": {
              isArray: true,
              url: urlBase + "/niveau/:id/classes",
              method: "POST",
            },

            // INTERNAL. Use Niveau.classes.destroyAll() instead.
            "::delete::Niveau::classes": {
              url: urlBase + "/niveau/:id/classes",
              method: "DELETE",
            },

            // INTERNAL. Use Niveau.classes.count() instead.
            "::count::Niveau::classes": {
              url: urlBase + "/niveau/:id/classes/count",
              method: "GET",
            },

            // INTERNAL. Use Option.classes.findById() instead.
            "::findById::Option::classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/option/:id/classes/:fk",
              method: "GET",
            },

            // INTERNAL. Use Option.classes.destroyById() instead.
            "::destroyById::Option::classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/option/:id/classes/:fk",
              method: "DELETE",
            },

            // INTERNAL. Use Option.classes.updateById() instead.
            "::updateById::Option::classes": {
              params: {
                'fk': '@fk',
              },
              url: urlBase + "/option/:id/classes/:fk",
              method: "PUT",
            },

            // INTERNAL. Use Option.classes() instead.
            "::get::Option::classes": {
              isArray: true,
              url: urlBase + "/option/:id/classes",
              method: "GET",
            },

            // INTERNAL. Use Option.classes.create() instead.
            "::create::Option::classes": {
              url: urlBase + "/option/:id/classes",
              method: "POST",
            },

            // INTERNAL. Use Option.classes.createMany() instead.
            "::createMany::Option::classes": {
              isArray: true,
              url: urlBase + "/option/:id/classes",
              method: "POST",
            },

            // INTERNAL. Use Option.classes.destroyAll() instead.
            "::delete::Option::classes": {
              url: urlBase + "/option/:id/classes",
              method: "DELETE",
            },

            // INTERNAL. Use Option.classes.count() instead.
            "::count::Option::classes": {
              url: urlBase + "/option/:id/classes/count",
              method: "GET",
            },
          }
        );



            /**
             * @ngdoc method
             * @name lbServices.Classe#patchOrCreate
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R["patchOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Classe#updateOrCreate
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Patch an existing model instance or insert a new one into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *   This method does not accept any parameters.
             *   Supply an empty object or omit this argument altogether.
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R["updateOrCreate"] = R["upsert"];

            /**
             * @ngdoc method
             * @name lbServices.Classe#patchOrCreateWithWhere
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Update an existing model instance or insert a new one into the data source based on the where criteria.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R["patchOrCreateWithWhere"] = R["upsertWithWhere"];

            /**
             * @ngdoc method
             * @name lbServices.Classe#update
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Update instances of the model matched by {{where}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Information related to the outcome of the operation
             */
        R["update"] = R["updateAll"];

            /**
             * @ngdoc method
             * @name lbServices.Classe#destroyById
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R["destroyById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Classe#removeById
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Delete a model instance by {{id}} from the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - Model id
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R["removeById"] = R["deleteById"];

            /**
             * @ngdoc method
             * @name lbServices.Classe#patchAttributes
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Patch attributes for a model instance and persist it into the data source.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - classe id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Classe` object.)
             * </em>
             */
        R["patchAttributes"] = R["prototype$updateAttributes"];


        /**
        * @ngdoc property
        * @name lbServices.Classe#modelName
        * @propertyOf lbServices.Classe
        * @description
        * The name of the model represented by this $resource,
        * i.e. `Classe`.
        */
        R.modelName = "Classe";

    /**
     * @ngdoc object
     * @name lbServices.Classe.etudiants
     * @header lbServices.Classe.etudiants
     * @object
     * @description
     *
     * The object `Classe.etudiants` groups methods
     * manipulating `Etudiant` instances related to `Classe`.
     *
     * Call {@link lbServices.Classe#etudiants Classe.etudiants()}
     * to query all related instances.
     */


            /**
             * @ngdoc method
             * @name lbServices.Classe#etudiants
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Queries etudiants of classe.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - classe id
             *
             *  - `filter` – `{object=}` -
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::get::Classe::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Classe.etudiants#count
             * @methodOf lbServices.Classe.etudiants
             *
             * @description
             *
             * Counts etudiants of classe.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - classe id
             *
             *  - `where` – `{object=}` - Criteria to match model instances
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * Data properties:
             *
             *  - `count` – `{number=}` -
             */
        R.etudiants.count = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::count::Classe::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Classe.etudiants#create
             * @methodOf lbServices.Classe.etudiants
             *
             * @description
             *
             * Creates a new instance in etudiants of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - classe id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants.create = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::create::Classe::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Classe.etudiants#createMany
             * @methodOf lbServices.Classe.etudiants
             *
             * @description
             *
             * Creates a new instance in etudiants of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - classe id
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Array.<Object>,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Array.<Object>} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants.createMany = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::createMany::Classe::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Classe.etudiants#destroyAll
             * @methodOf lbServices.Classe.etudiants
             *
             * @description
             *
             * Deletes all etudiants of this model.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - classe id
             *
             *  - `where` – `{object=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.etudiants.destroyAll = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::delete::Classe::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Classe.etudiants#destroyById
             * @methodOf lbServices.Classe.etudiants
             *
             * @description
             *
             * Delete a related item by id for etudiants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - classe id
             *
             *  - `fk` – `{*}` - Foreign key for etudiants
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * This method returns no data.
             */
        R.etudiants.destroyById = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::destroyById::Classe::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Classe.etudiants#findById
             * @methodOf lbServices.Classe.etudiants
             *
             * @description
             *
             * Find a related item by id for etudiants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - classe id
             *
             *  - `fk` – `{*}` - Foreign key for etudiants
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants.findById = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::findById::Classe::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Classe.etudiants#updateById
             * @methodOf lbServices.Classe.etudiants
             *
             * @description
             *
             * Update a related item by id for etudiants.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - classe id
             *
             *  - `fk` – `{*}` - Foreign key for etudiants
             *
             * @param {Object} postData Request data.
             *
             * This method expects a subset of model properties as request parameters.
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Etudiant` object.)
             * </em>
             */
        R.etudiants.updateById = function() {
          var TargetResource = $injector.get("Etudiant");
          var action = TargetResource["::updateById::Classe::etudiants"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Classe#departement
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Fetches belongsTo relation departement.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - classe id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Departement` object.)
             * </em>
             */
        R.departement = function() {
          var TargetResource = $injector.get("Departement");
          var action = TargetResource["::get::Classe::departement"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Classe#option
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Fetches belongsTo relation option.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - classe id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Option` object.)
             * </em>
             */
        R.option = function() {
          var TargetResource = $injector.get("Option");
          var action = TargetResource["::get::Classe::option"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Classe#formation
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Fetches belongsTo relation formation.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - classe id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Formation` object.)
             * </em>
             */
        R.formation = function() {
          var TargetResource = $injector.get("Formation");
          var action = TargetResource["::get::Classe::formation"];
          return action.apply(R, arguments);
        };

            /**
             * @ngdoc method
             * @name lbServices.Classe#niveau
             * @methodOf lbServices.Classe
             *
             * @description
             *
             * Fetches belongsTo relation niveau.
             *
             * @param {Object=} parameters Request parameters.
             *
             *  - `id` – `{*}` - classe id
             *
             *  - `refresh` – `{boolean=}` -
             *
             * @param {function(Object,Object)=} successCb
             *   Success callback with two arguments: `value`, `responseHeaders`.
             *
             * @param {function(Object)=} errorCb Error callback with one argument:
             *   `httpResponse`.
             *
             * @returns {Object} An empty reference that will be
             *   populated with the actual data once the response is returned
             *   from the server.
             *
             * <em>
             * (The remote method definition does not provide any description.
             * This usually means the response is a `Niveau` object.)
             * </em>
             */
        R.niveau = function() {
          var TargetResource = $injector.get("Niveau");
          var action = TargetResource["::get::Classe::niveau"];
          return action.apply(R, arguments);
        };


        return R;
      }]);


  module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId', 'rememberMe'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    };

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    };

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      try {
        var key = propsPrefix + name;
        if (value == null) value = '';
        storage[key] = value;
      } catch (err) {
        console.log('Cannot access local/session storage:', err);
      }
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', ['$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {
          // filter out external requests
          var host = getHost(config.url);
          if (host && host !== urlBaseHost) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 }},
              status: 401,
              config: config,
              headers: function() { return undefined; },
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        },
      };
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the header name that is used for sending the authentication token.
     */
    this.getAuthHeader = function() {
      return authHeader;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
      urlBaseHost = getHost(urlBase) || location.host;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      var LoopBackResource = function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };

      LoopBackResource.getUrlBase = function() {
        return urlBase;
      };

      LoopBackResource.getAuthHeader = function() {
        return authHeader;
      };

      return LoopBackResource;
    }];
  });
})(window, window.angular);
