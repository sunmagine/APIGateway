angular.module('demo1',[])
.controller('SignUpController',function($scope,$http,$location){
	$scope.entity={};
	$scope.submitForm=function(valid){
		if(valid){
			console.log('hello AngularJS')
		}
		$http({
		method:'GET',
		url:'http://www.linyimin.club:8001/user/doLogin',
		params:{
			user_name:$scope.entity.userName,
			password:$scope.entity.password
		}
		}).success(function(data,status,headers,config){
			alert("success");
			window.open("../index.html");
		}).error(function(data,status,headers,config){
			alert('fail');
		})
	}	
})
.directive('ensureUnique',['$http',function($http){
	return{
		require:'ngModel',
		link:function(scope,ele,attrs,c){
			scope.$watch(attrs.ngModel,function(){
				$http({
					method:'POST',
					url:'/api/check/'+attrs.ensureUnique,
					data:{'field':attrs.ensureUnique}
				}).success(function(data,status,headers,cfg){
					c.$setValidity('unique',data.isUnique);
				}).error(function(data,status,headers,cfg){
					c.$setValidity('unique',false);
				});
			});
		}
	}
}]);



