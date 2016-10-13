export default class updateCtrl {
	/*@ngInject;*/
	constructor($scope,$location,$http,empService, $routeParams) {
		console.log("VIEW CONTROLLER");
    this.scope=$scope;
		this.http=$http;
		this.location=$location;
		this.emp=empService;
    this.rp=$routeParams;
		console.log(this.rp.id);
    this.emp.getEmp(this.rp.id).then(res => {
			console.log("data",res.data.body);
      if(res.data.body.gender=="0"){
        res.data.body.gender="Female";
      }
      else{
        res.data.body.gender="Male";
      }
			this.scope.emp = res.data.body;

	  });
	}

    updateData(){
        if(this.scope.emp.gender=="Female"){
          this.scope.emp.gender="0";
        }
				else{
	        this.scope.emp.gender="1";
	      }
				this.emp.updateEmpData(this.scope.emp.cid, this.scope.emp.first_name, this.scope.emp.last_name, this.scope.emp.gender, this.scope.emp.designation, this.scope.emp.description).success(res=>{
					console.log(res);
					if(res.header.status==200){
		        console.log('Successfully Updated');
						console.log(res.header.status);
						console.log(this.scope.emp.last_name);
						this.location.path("detail");
		      }
					});
		}

		createData(){
			if(this.scope.emp.gender=="Female"){
				this.scope.emp.gender="0";
			}
			else{
				this.scope.emp.gender="1";
			}
			this.emp.createEmpData(this.scope.emp.first_name, this.scope.emp.last_name, this.scope.emp.gender, this.scope.emp.designation, this.scope.emp.description).success(res=>{
				console.log(res);
				if(res.header.status==200){
					console.log('Successfully created');
					console.log(res.header.status);
					//console.log(this.scope.emp.last_name);
					this.location.path("detail");
				}
			});
		}
	}
