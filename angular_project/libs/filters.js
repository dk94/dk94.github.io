var app=angular.module("app")
.filter("portfolioFilter",function(){
    return function(arr,cat){
        var newArr=[];
        if(cat=="ALL")
            return arr;

        else{
            for(var i=0;i<arr.length;i++){
                if(cat==arr[i].category)
                    newArr.push(arr[i]);
            }
        }
        return newArr;
    }
})
    .filter("convertDateFilter",function () {
        return function (item) {
            if (item != null) {
                return new Date(item);
            }
            return "";
        };
    })