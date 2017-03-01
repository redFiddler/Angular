/*Dashboard Controller*/
app.controller('dashboardController', ['$scope', '$log', function($scope, $log){
    $scope.test = 'Dashboard Page';
}]);


/*Dashboard Controller*/
app.controller('adddataController', ['$scope', '$log', '$localStorage','$route','$timeout','$http', function($scope, $log, $localStorage, $route, $timeout, $http){
    var addObj = [];
    $scope.addNumber = 0;
    
    /*Function for inserting in to Array*/
    $scope.addUserData = function(){
        /*Unique id*/        
        $scope.addNumber++;        
        addObj.push({id:$scope.addNumber, title:$scope.txtTitle, country:$scope.txtCountry.name, state:$scope.txtState.name, city:$scope.txtCity, description:$scope.txtDescription});
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
    
    //$scope.selectedCountryCode = angular.copy($scope.getCountryData);
    
    /*Get Selected Value From Country DropDown*/
    $scope.getSelectedCountryState = function(){
        $scope.getCountryValue = $scope.txtCountry.alpha3_code;        
        /*Getting State Value Depend on Country*/
        $http.get('http://services.groupkt.com/state/get/'+$scope.getCountryValue+'/all')
        .then(function(response){
            $scope.getStateData = response.data;            
        }, function(response){
            $scope.getStateData = response.statusText;
        })
    };
    
    
    
    
    /*Get Country Data From Web Services*/
    $http.get('http://services.groupkt.com/country/get/all')
        .then(function(response){
            $scope.getCountryData = response.data;
        });
}]);