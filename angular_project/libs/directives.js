
var app=angular.module("app")
.directive("genContDirective",function () {
    return{
        restrict:"A",
        link:function(scope,elem,attr){
            scope.source=scope.Items;
            scope.social=scope.icons;
        },
        templateUrl:"about_us.html"
    }

})
    .directive('resizeDirective', ['$window', function ($window) {

        return {
            link: link,
            restrict: 'A'
        };

        function link(scope, element, attrs) {
            scope.width = $window.innerWidth;

            function onResize() {


                if (scope.width !== $window.innerWidth) {
                    scope.width = $window.innerWidth;
                    scope.$digest();
                }
            }
            angular.element($window).on('resize', onResize);


        }
    }]);
