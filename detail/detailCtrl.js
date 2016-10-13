export default class detailCtrl {
	/*@ngInject;*/
	constructor(empService,$scope,$location,$routeParams,$rootScope) {
		console.log("Detail CONTROLLER");
    this.scope = $scope;
		this.location=$location;
		this.scope.rp=$routeParams;
		this.scope.service=empService;
		this.rootScope=$rootScope;

    empService.getData().then(emp => {
		    this.scope.emp = emp.data.body;
		    console.log(this.scope.emp);
				//console.log(this.scope.emp[0].gender);

				for (var index in this.scope.emp) {
						if(this.scope.emp[index].gender == "0" ){
							this.scope.emp[index].gender="Female";
						}
						else {
							this.scope.emp[index].gender="Male";
						}
				}
		});


  }

  deleterec(id) {
  	//this.scope.emp.splice(id, 1);
		console.log(id);
		this.scope.service.deleteObj(id).success(res=> {
			console.log(res.header.status);
			if(res.header.status=="200"){
				console.log('One record is deleted');
				//this.location.reload();
				setTimeout(function(){
			//    window.location.reload();
			},100);
			}
			else {
					console.log('Failed to delete');
			}
		});
	}

	update_call(id){
		this.rootScope.flag=1;
		this.location.path('update/'+id);
		console.log(id);
	}

	create(){
		this.rootScope.flag=0;
		this.location.path('create');
	}
}
