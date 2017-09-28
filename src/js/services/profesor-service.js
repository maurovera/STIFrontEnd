app.service('profesorService', ['baseService', function (baseService) {
    
    var resource = 'ServicioTema/temas';

    return {
      listar : function() {
        return baseService.listar(resource);
      },
      obtener: function(id) {
        return baseService.obtener(resource + (id? '/' + id: ''));
      }
    };

}]);