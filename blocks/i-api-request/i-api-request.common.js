BEM.decl('i-api-request', null, {

    request: function (type, resource, data) {
        return this._request(type, resource, data);
    },

    get: function (resource, data) {
        return this._request('get', resource, data);
    },

    post: function (resource, data) {
        return this._request('post', resource, data);
    },

    'delete': function (resource, data) {
        return this._request('delete', resource, data);
    },

    put: function (resource, data) {
        return this._request('put', resource, data);
    }

});
