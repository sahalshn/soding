var app = angular.module('sodin', []);
app.controller('myCtrl',['$scope', function($scope) {


    $scope.logmessage = "";
$scope.loguser=0;
$scope.items=[];
	$scope.logusername="";

    $scope.login = function(user,pass) {

        if (user == 'sahal' && pass == 'sahal123') {
        	$scope.logusername="sahal";
            
            $scope.loguser=1;
        } else if (user == 'yasir' && pass == 'yasir123') {
           $scope.logusername="yasir";
            $scope.loguser=2;
        } else {
            alert('Failed')
            $scope.loguser=0;
        }
    }
$scope.add=function(Code,Name){
	console.log($scope.Code)
	var obj={'Code': Code,'Name': Name,'CreatedDate': new Date(), 'user': $scope.loguser}
	$scope.items.push(obj)


}
$scope.remove=function(index){
	$scope.items.splice(index,1)
}


$scope.logout=function(){
	$scope.loguser=0;
}


}]);