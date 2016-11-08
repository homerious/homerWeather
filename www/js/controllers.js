angular.module('starter.controllers', ['ionic'])

.controller('weatherCtrl', function($scope,Cities,getWeatherData,$ionicSlideBoxDelegate,$http) {
  var timeData=new Date();
  var month=timeData.getMonth()+1;
  var weekday=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
  var toweekday=timeData.getDay();
  $scope.today=timeData.getFullYear()+'/'+month+'/'+timeData.getDate()+' '+weekday[toweekday];
  $scope.currentDay=[];
  for(var i=0;i<5;i++){
    $scope.currentDay.push(weekday[toweekday+8+i]);
  }
  $scope.$on('$ionicView.enter', function(e) {
    $scope.Cities=Cities.initCities();
    $ionicSlideBoxDelegate.update();
  });
})

.controller('CitiesCtrl', function($scope, Cities) {
  $scope.Cities = Cities.initCities();
  $scope.remove = function(chat) {
    Cities.remove(chat);
    Cities.saveData();
  };

})

.controller('searchCtrl', function($scope,Cities,cityCollection,$ionicPopup) {

  $scope.collections=cityCollection.all();
  $scope.add=function (city) {
    Cities.add(city);
    Cities.saveData();
  };//添加并保存城市
  $scope.search=function (city) {
    if(city==''||city==null)
      return $ionicPopup.alert({
        title:"注意/warning！",
        template:'搜索城市不能为空！'
      }) ;
    else{
      if(cityCollection.searchCity(city))
      {
        $scope.add(city);
        return $ionicPopup.alert({
          title:'成功/success！',
        template:city+'添加成功！'
        })
      }
      else return $ionicPopup.alert({
        title:'失败/error！',
        template:'没有结果显示！'
      });
    }
  };//搜索函数

  $scope.chosenCity='';
  $scope.choose=function (city) {
    $scope.chosenCity=city;
  };//更新已选择的城市

  $scope.enter=function (pro) {
    $scope.citys=pro.city;
    var cityConfirm =$ionicPopup.show({
      title:"选择城市",
      scope:$scope,
      template: '<ion-radio ng-repeat="c in citys" ng-click="choose(c,this)">{{c}}</ion-radio>',
      buttons:[{
        text: 'Cancel',
        type: 'button-default',
        onTap: function(e) {
        }},{
        text: 'OK',
        type: 'button-positive',
        onTap: function() {
          if($scope.chosenCity==''){
            $ionicPopup.alert({
              title:"注意/warning！",
              template:'城市不能为空！'
            })
          }else{
            if(!Cities.check($scope.chosenCity)){
              $scope.add($scope.chosenCity);
              $ionicPopup.alert({
                title:'成功/success！',
                template:$scope.chosenCity+'添加成功！'
              });
              $scope.chosenCity='';
            }else
              {
              $ionicPopup.alert({
                title:'失败/error！',
                template:'城市已经存在！！'
              });
              $scope.chosenCity='';
            }

            }
          }

      }]
    }) ;
  };//城市展开函数


});



// With the new view caching in Ionic, Controllers are only called
// when they are recreated or on app start, instead of every page change.
// To listen for when this page is active (for example, to refresh data),
// listen for the $ionicView.enter event:
//
//$scope.$on('$ionicView.enter', function(e) {
//});
