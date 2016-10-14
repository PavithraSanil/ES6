import loginCtrl from './login/loginCtrl';
import detailCtrl from './detail/detailCtrl';
import updateCtrl from './update/update';
import empService from './service/empService';
import HeaderDirective from './directives/header';
import FooterDirective from './directives/footer';

angular.module('myApp', ['ngRoute'])
  .config(function($routeProvider){
    $routeProvider.when('/',{
			 templateUrl:'login/login.html',
			 controller:'loginCtrl',
			 controllerAs:'lc'
		 })

     .when('/detail',{
 			 templateUrl:'detail/detail.html',
 			 controller:'detailCtrl',
 			 controllerAs:'dc'
 		 })

     .when('/update/:id', {
       templateUrl:'update/update.html',
       controller:'updateCtrl',
       controllerAs:'uc'
     })

     .when('/create', {
       templateUrl:'update/update.html',
       controller:'updateCtrl',
       controllerAs:'uc'
     })
	})

  .controller('loginCtrl',loginCtrl)
  .controller('detailCtrl',detailCtrl)
  .controller('updateCtrl',updateCtrl)
  .service('empService', empService)
  .directive('headerDirective', () => new HeaderDirective)
  .directive('footerDirective', () => new FooterDirective);
