var APIGateway = angular.module('APIGateway', [
    'ngRoute', 'apiGatewayCtrls', 'apiGatewayFilters',
    'apiGatewayServices', 'apiGatewayDirectives'
]);//module作为启动点，告诉该项目依赖哪些模块----依赖注入，ng开头是自带的，不用自己定义，如果出现了未定义的模块会报错

APIGateway.config(function($routeProvider) {//配置路由
    $routeProvider.when('/hello',{
        templateUrl:'tpls/hello.html',
        controller:'HelloCtrl'
    }).when('/start', {//路由的控制
        templateUrl: 'index.html',//指明模板
       // controller: 'StartCtrl'//哪个控制器来控制加载
    }).otherwise({
        redirectTo: '/start'
    })
});
