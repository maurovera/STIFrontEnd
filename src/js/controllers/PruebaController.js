
app.controller('PruebaController', ['$scope', '$routeParams', '$timeout', 'AsignaturaService',
    function ( $scope, $routeParams, $timeout, AsignaturaService) {

        (function initialize() {
        	$scope.mensaje="Ho		la Mundo oooo";
        	$scope.asignaturas = null;
        	$scope.paginaActual = 0;
        	$scope.formData = {};
        	$scope.showForm = false;
            console.log('ProfesorCtrl done!');
        })();
        
        var load = function(page){
	        AsignaturaService.listar({paginaActual : page}).then(function(d){
	        	console.log(d);
	        	$scope.asignaturas = d.data;
	        },function(e){
	        	console.log(e);
	        });
	    };

	    var agregar = function(){
	    	if($scope.formData.descripcion && $scope.formData.descripcion.length > 0){
	    		var data = {
	    			descripcion : $scope.formData.descripcion
	    		}
		    	AsignaturaService.crear(data).then(function(d){
		        	console.log(d);
		        	$scope.closeModal();
		        	Message.ok("La operación finalizó exitosamente");
		        	load();
		        },function(e){
		        	console.log(e);
		        	Message.error("Ocurrio un error");
		        });
	    	}else{
	    		Message.error("La operación falló");
	    	}
	    };

	    // modificar
	    var modificar = function(){
	    	if($scope.formData.descripcion && $scope.formData.descripcion.length > 0){
	    		var data = {
	    			descripcion : $scope.formData.descripcion
	    		}


		    	AsignaturaService.modificar(data).then(function(d){
		        	console.log(d);
		        	$scope.closeModal();
		        	Message.ok("La operación finalizó exitosamente");
		        	load();
		        },function(e){
		        	console.log(e);
		        	Message.error("Ocurrio un error");
		        });
	    	}else{
	    		Message.error("La operación falló");
	    	}
	    };




	    var eliminar = function(id){
	    	AsignaturaService.eliminar(id).then(function(d){
	        	console.log(d);
	        	Message.ok("La operación finalizó exitosamente");
	        	load();
	        },function(e){
	        	console.log(e);
	        	Message.error("Ocurrio un error");
	        });
	    };

	    var showModal = function(){
	    	$('#newModal').modal('show')
	    };
	    var closeModal = function(){
	    	$('#newModal').modal('hide')
	    };

	    $scope.agregar = agregar;
	    $scope.eliminar = eliminar;
	    $scope.showModal = showModal;
	    $scope.closeModal = closeModal;
	    load();

    }
]);