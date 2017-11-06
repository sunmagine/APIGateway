var apiGatewayCtrls = angular.module('apiGatewayCtrls', []);

apiGatewayCtrls.controller('StartCtrl', ['$scope',
    function($scope) {
        $scope.file = '文件';
        $scope.debug = '调试';
        $scope.tools = '工具';
        $scope.window = '窗口';
        $scope.help = '帮助';
        $scope.APIproperty = 'API属性';
        $scope.XMLfile = 'XML文件';
        $scope.property = '属性';
        $scope.ID = 'ID';
        $scope.name = '名称';
        $scope.type = '类型';
        $scope.in = '输入';
        $scope.out = '输出';
        $scope.URL = 'URL';
        $scope.information = '调试信息';
        $scope.debug1 = '运行';
        $scope.debug2 = '调试';
        $scope.debug3 = '生成XML';
        $scope.debug4 = 'XML文件导出';
        // $scope.items =[
        //  {title:"运行"},
        //  {title:"调试"},
        //  {title:"生成XML"}
        // ];
        $scope.toolss =[
         {title:"工具1"},
         {title:"工具2"},
         {title:"工具3"}
        ];
        $scope.filess =[
         {title:"文件1"},
         {title:"文件2"},
         {title:"文件3"}
        ];
        $scope.newxml = function(){
            var xml = Blockly.Xml.workspaceToDom(workspace);
            var xml_text = Blockly.Xml.domToText(xml);
            //alert(xml_text);
            $scope.xml = xml_text;
        };

        $scope.newfile = function(){
            var txtdata = $scope.xml;
            //alert(txtdata);
            var content = ""+txtdata;
            var blob = new Blob([content], {type: "text/plain;charset=utf-8"});
            saveAs(blob, "xmlfile.xml");//saveAs(blob,filename) //仅限于chorme的下载目录里
        };
        
        $scope.runCode = function(){
        	window.LoopTrap =1000;
		    Blockly.JavaScript.INFINITY_LOOP_TRAP=
			'if(--window.LoopTrap == 0) throw "Infinite loop.";\n';
			var code=Blockly.JavaScript.workspaceToCode(workspace);
			Blockly.JavaScript.INFINITE_LOOP_TRAP = null;
			try{
				eval(code);
				}catch(e){
				alert(e);
			}     			
        };
    }
]);

apiGatewayCtrls.controller('HelloCtrl', ['$scope',
    function($scope) {
        $scope.greeting = {
            text: 'Hello'
        };
    }
]);
// apiGatewayCtrls.controller('BookListCtrl', ['$scope',
//     function($scope) {
//         $scope.books =[
//         	{title:"《Ext江湖》",author:"大漠穷秋"},
//         	{title:"《ActionScript游戏设计基础（第二版）》",author:"大漠穷秋"},
//         	{title:"《用AngularJS开发下一代WEB应用》",author:"大漠穷秋"}
//         ]
//     }
// ]);

/**
 * 这里接着往下写，如果控制器的数量非常多，需要分给多个开发者，可以借助于grunt来合并代码
 */