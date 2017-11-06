var app=angular.module('myApp',[]);
app.controller('event',['$scope',function($scope){
	
	$scope.text = '生成xml';
	
	$scope.test=function(){
		var xml = Blockly.Xml.workspaceToDom(workspace);
	    var xml_text = Blockly.Xml.domToPrettyText(xml);
	    alert(xml_text);
	    $scope.xml=xml_text;
	}
	$scope.run=function(){
		alert("hahah");
	}
}])

