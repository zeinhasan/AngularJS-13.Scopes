// contoh syntax penggunaan fungsi $scope 
<script>
     var mainApp = angular.module("mainApp", []);
    
    mainApp.controller("shapeController", function($scope) {
        $scope.message = "In shape controller";
        $scope.type = "Shape";
    });
</script>
