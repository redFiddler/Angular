/*Dashboard Controller*/
app.controller('dashboardController', ['$scope', '$log', function($scope, $log){
    $scope.test = 'Dashboard Page';
}]);


/*Dashboard Controller*/
app.controller('adddataController', ['$scope', '$log', '$localStorage','$route','$timeout', function($scope, $log, $localStorage, $route, $timeout){
    var addObj = [];
    $scope.addNumber = 0;
    
    /*Function for inserting in to Array*/
    $scope.addUserData = function(){
        /*Unique id*/        
        $scope.addNumber++;        
        addObj.push({id:$scope.addNumber, title:$scope.txtTitle, country:$scope.txtCountry, state:$scope.txtState, city:$scope.txtCity, description:$scope.txtDescription});
        $localStorage.userDataObj = addObj; 
        $scope.printUserData = $localStorage.userDataObj;
        
    };    
    
    /*Temp Delete*/
    $scope.tempDelete = function(){        
        $localStorage.$reset({userDataObj : addObj});
        $scope.printUserData = $localStorage;        
        $route.reload();
    };    
    
    /*Created Local Storage for Storing Data of User Input*/
    $scope.printUserData = $localStorage.userDataObj;
}]);