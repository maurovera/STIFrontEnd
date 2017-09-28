/*
 * @Class
 * Definición base de las operacioens CRUD de los services
 *
 * @name gfd.service#BaseService
 * @author <a href="mailto:maximiliano.baez@konecta.com.py">Maximiliano Báez</a>
 */
app.service('AsignaturaService', ['$http', 'urlBase', function ($http, urlBase) {
    return {
        recurso: urlBase + 'asignaturaServicio/asignaturas',
        /**
         * Realiza un get para obtener la lista de paginada de lotes
         * @function
         */
        listar: function (params) {
            return $http.get(this.recurso, {
                params: params
            });
        },

        /**
         * Realiza un post para guardar el nuevo lote
         * @function
         */
        crear: function (params) {
            return $http.post(this.recurso, params);
        },

        /**
         * Realiza un post para modificar la plantilla
         * @function
         */
        modificar: function (id) {
            return $http.post(this.recurso + '/' + id);
        },

        /**
         * Realiza un get para obtener una plantilla específica por su id.
         * @function
         */
        obtener: function (params) {
            return $http.get(this.recurso + params.id, {
                params: params
            });
        },

        /**
         * Realiza un get para eliminar una plantilla específica por su id.
         * @function
         */
        eliminar: function (id) {
            return $http.delete(this.recurso + '/' + id);
        }
    }
}]);
