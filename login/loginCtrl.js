export default class loginCtrl {
	/*@ngInject;*/
	constructor($scope,$location,$http,empService) {
		console.log("VIEW CONTROLLER");
    this.scope=$scope;
		this.http=$http;
		this.location=$location;
		this.emp=empService;
	}

    submit(){
				this.emp.authentication(this.scope.uname, this.scope.password).then(res => {
			    this.scope.header = res.data.header;
					console.log(this.scope.header)

		      if(this.scope.header.status==200){
		        console.log('loggged in');
						console.log(this.scope.header.status);
						this.location.path("detail");
		      }
					});
		}
}
