// Penggunaan Scope Inheritance 
<script>
   var mainApp = angular.module("mainApp", []);
   
   mainApp.controller("shapeController", function($scope) {
      $scope.message = "In shape controller";
      $scope.type = "Shape";
   });
   mainApp.controller("circleController", function($scope) {
      $scope.message = "In circle controller";
   });
   
</script>

