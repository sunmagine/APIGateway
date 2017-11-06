angular.module('myApp',[])

.controller('SignUpController',function($scope,$http,$location){
	$scope.userdata={};
	$scope.submitForm =function(){
//		console.log($scope.userdata);
//		if($scope.signUpForm.$invalid){
//			alert("请检查信息");
//		}else{
//			alert("成功");
//		}
        
        $http({
        	method:'GET',
        	url:'http://www.linyimin.club:8001/user/register',
        	params:{
        		user_name:$scope.userdata.username,
        		email:$scope.userdata.email,
        		password:$scope.userdata.password
        	}
        }).success(function(data,status,headers,config){
        	if(data.result){
        		window.open("login.html")
        	}else{
        		alert("用户名重复")
        	}
        	
        }).error(function(data,status,headers,config){
        	alert(data.Error);
        })
	}
	
	
})
.directive('compare',function(){
	var o={};
	o.strict='AE';
	o.scope = {
		orgText:'=compare'
	};
	o.require='ngModel';
	o.link=function(sco,ele,att,con){
		
		con.$validators.compare = function(v){
			return v== sco.orgText;
		}
		sco.$watch('orgText',function(){
			con.$validator();
		})
	}
	return o;
})


