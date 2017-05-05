var app=angular.module("app")

.controller("menuCtrl",['$scope','smoothScroll',function(scope,smoothScroll){

    scope.items=[{name:"HOME",id:"header"},
        {name:"SERVICES",id:"services"},
        {name:"PORTFOLIO",id:"portfolio"},
        {name:"ABOUT",id:"aboutUs"},
        {name:"NEWS",id:"news"},
        {name:"CONTACT",id:"contactUs"}
    ];

    scope.scroll=function(id){
        var elem=document.getElementById(id);
        var options = {
            duration: 1000,
            easing: 'easeInQuad',
            offset: 120,

        }
        smoothScroll(elem,options);
    };
    scope.startTour=function(){

        var elem=document.getElementById("portfolio");

        var options = {
            duration: 1000,
            easing: 'easeInQuad',
            offset: 20,

        };


        smoothScroll(elem,options);
    }


}])
    .controller("serviceCtrl",['$scope','smoothScroll','$window',function(scope,smoothScroll,$window){
        scope.data=[{name:"WEB DESIGN",url:"img/services_img1.png",index:"1"},
            {name:"GRAPHIC DESIGN",url:"img/services_img2.png",index:"2"},
            {name:"PROGRAMMING",url:"img/services_img3.png",index:"3"},
            {name:"PHOTOGRAPHY",url:"img/services_img4.png",index:"4"}];

        scope.wdphClass={
            leftB:true,
            rightB:false

        }

        scope.gd=false;
        scope.pr=false;

        scope.value=scope.data[0].index;

        scope.changeValue=function(index){
            scope.value=index;

            scope.wdphClass.leftB=false;
            scope.wdphClass.rightB=false;
            scope.gd=false;
            scope.pr=false;

            switch(scope.value){
                case "1":scope.wdphClass.leftB=true;
                    break;
                case "2":scope.gd=true;
                    break;
                case "3":scope.pr=true;
                    break;
                case "4":scope.wdphClass.rightB=true;

            }

        };

        scope.getNow=function(){
            var elem=document.getElementById("contactUs");
            var options = {
                duration: 1000,
                easing: 'easeInQuad',
                offset: 20,

            };


            smoothScroll(elem,options);
        }
    }])
    .controller("portfolioCtrl",['$scope',function(scope){
        scope.currentCat="ALL";

        scope.items=[{url:'img/pf_img1.png',category:"WEB",flag:false,index:0},
            {url:'img/pf_img2.png',category:"WEB",flag:false,index:1},
            {url:'img/pf_img3.png',category:"WEB",flag:false,index:2},
            {url:'img/pf_img4.png',category:"WEB",flag:false,index:3},
            {url:'img/pf_img5.png',category:"PHOTOGRAPHY",flag:false,index:4},
            {url:'img/pf_img6.png',category:"PHOTOGRAPHY",flag:false,index:5},
            {url:'img/pf_img7.png',category:"PHOTOGRAPHY",flag:false,index:6},
            {url:'img/pf_img8.png',category:"PHOTOGRAPHY",flag:false,index:7},
            {url:'img/pf_img9.png',category:"GRAPHIC DESIGN",flag:false,index:8},
            {url:'img/pf_img10.png',category:"GRAPHIC DESIGN",flag:false,index:9},
            {url:'img/pf_img11.png',category:"GRAPHIC DESIGN",flag:false,index:10},
            {url:'img/pf_img12.png',category:"GRAPHIC DESIGN",flag:false,index:11}

        ];
        scope.buttons=["ALL","WEB","PHOTOGRAPHY","GRAPHIC DESIGN"];
        scope.chooseCat=function(cat){

            scope.currentCat=cat;

        }

        scope.onImg=function(index){

            scope.items[index].flag=true;
        }
        scope.outDiv=function(index){

            scope.items[index].flag=false;
        }
    }])
   .controller("statisticCtrl",['$scope',function(scope){
        scope.statItems=[{number:3054,url:"img/statistic_img1.png",text:"COMPLETED PROJECTS"},
            {number:7234853,url:"img/statistic_img2.png",text:"CLICK PRESSED"},
            {number:4670,url:"img/statistic_img3.png",text:"MAILS SENTED&RECEIVED"},
            {number:939,url:"img/statistic_img4.png",text:"COMPLETED PROJECTS"}
        ];


    }])

    .controller("aboutUs",['$scope',function(scope){
        scope.Items=[{name:"Leonardo Di",url:"img/theteam_img1.jpg",occup:"Creative director",
            text:"amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."},
            {name:"Eddy Murphy",url:"img/theteam_img2.jpg",occup:"Art director",
                text:"sectetur adipiscing elit, sed do eiusmod eiusmodeiusmod tempor incididunt ut labore et dolore magna aliqua."},
            {name:"Mr Bin",url:"img/theteam_img3.jpg",occup:"Best worker",
                text:"etur adipiscing elit, sed do eiusmod tempor incididunt tempor incididunt ut labore et dolore magna aliqua."},
            {name:"Kianu Rivz",url:"img/theteam_img4.jpg",occup:"Manager",
                text:"ipiscing elit, sed do eiusmod tempor incididunt ut labore tempor incididunt et dolore magna aliqua."}
        ];
        scope.icons=[{url:"img/icon_face.png",url2:"img/icon_faceh.png"},
            {url:"img/icon_tw.png",url2:"img/icon_twh.png"},
            {url:"img/icon_goog.png",url2:"img/icon_googh.png"},
            {url:"img/icon_dr.png",url2:"img/icon_drh.png"}]

        scope.mouseOn=function(){
            this.hover=true;
        }
        scope.mouseOut=function(){
            this.hover=false;
        }

    }])
    .controller("newsCtrl",['$scope','$http','$location','$routeParams',function(scope,http,location,$routeParams){

        http.get("files/data.json").success(function (response) {
            scope.data=response;

        })

        scope.link=function(id){
            location.path("/"+id);
        }

        scope.getDate=function(){
            return scope.data[$routeParams.id-1].date;
        }
        scope.getText=function(){
            return scope.data[$routeParams.id-1].fullText;
        }



    }])

    .controller("contactUsCtrl",['$scope',function(scope){
        scope.patMsg=/^.{20,}$/;
        scope.patMail=/^\w+@[a-zA-Z_]+?\.[a-zA-Z]+$/;
        scope.patName=/^[a-zA-Z]+$/;

    }])

    .controller("footerCtrl",['$scope','smoothScroll',function(scope,smoothScroll){
        scope.toTheTop=function(){

            var elem=document.getElementById("header");



            smoothScroll(elem);

        }

    }])
