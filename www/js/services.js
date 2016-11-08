angular.module('starter.services', [])

  .service('Cities', function (getWeatherData) {
    var CitieNames = ['广州', '深圳', '北京', '上海'];
    var Cities=[];
    return {

      initCities: function () {
        if(Cities.length==0){
          if(localStorage.getItem('data')==null){//没有本地数据，用默认的
            for(var j =0; j<CitieNames.length;j++){
              this.add(CitieNames[j]);
            }
            localStorage.setItem('data',JSON.stringify(CitieNames));
            return Cities;
          }
          else{

            var datalist=JSON.parse(localStorage.getItem('data'));
            for(var i =0;i< datalist.length;i++){
              this.add(datalist[i]);
            }
            return Cities;
          }//初始化城市参数，检查本地有没有数据有就用，没有数据的话就用默认的
        }else return Cities;//看看cities里面有没有数据，没有的话就新建，有就直接返回
      },
      remove: function (city) {
        Cities.splice(Cities.indexOf(city), 1);
      },//删除城市
      add: function (name) {
        var newer = {
          name: '',
          today: {tem: 0, air: 0, wet: 0, ico: '',state:''},
          current:[]
        };
        newer.name = name;
        newer.today=getWeatherData.getToday(name);
        newer.current=getWeatherData.getCurrent(name);
        Cities.push(newer);
      },//添加城市
      check: function (name) {
        for (var i in Cities)
          if (Cities[i].name == name)return true;
        return false;
      },//检测城市是否已经存在
      saveData:function () {
        var namelist=[];
        for(var i in Cities){
          namelist.push(Cities[i].name);
        }
        localStorage.setItem('data',JSON.stringify(namelist));
      }//把数据保存到本地去
    };
  })//城市气象数据和相关方法
  .factory('cityCollection', function () {
    var cityCollection = [
      {
        province: "北京",
        city: ["北京"]
      },
      {
        province: "天津",
        city: ["天津"]
      },
      {
        province: "重庆",
        city: ["重庆"]
      },
      {
        province: "上海",
        city: ["上海"]
      },
      {
        province: "香港",
        city: ["香港"]
      },
      {
        province: "澳门",
        city: ["澳门"]
      },
      {
        province: "黑龙江",
        city: ['哈尔滨', '大庆', '齐齐哈尔', '佳木斯', '鸡西', '鹤岗', '双鸭山', '牡丹江', '伊春', '七台河', '黑河', '绥化']
      },
      {
        province: '吉林',
        city: ['长春', '吉林', '四平', '辽源', '通化', '白山', '松原', '白城']
      },
      {
        province: '辽宁',
        city: ['沈阳', '大连', '鞍山', '抚顺', '本溪', '丹东', '锦州', '营口', '阜新', '辽阳', '盘锦', '铁岭', '朝阳', '葫芦岛']
      },
      {
        province: '河北',
        city: ['石家庄', '唐山', '邯郸', '秦皇岛', '保定', '张家口', '承德', '廊坊', '沧州', '衡水', '邢台']
      },
      {
        province: '山东',
        city: ['济南', '青岛', '淄博', '枣庄', '东营', '烟台', '潍坊', '济宁', '泰安', '威海', '日照', '莱芜', '临沂', '德州', '聊城', '菏泽', '滨州']
      },
      {
        province: '江苏',
        city: ['南京', '镇江', '常州', '无锡', '苏州', '徐州', '连云港', '淮安', '盐城', '扬州', '泰州', '南通', '宿迁']
      },
      {
        province: '安徽',
        city: ['合肥', '蚌埠', '芜湖', '淮南', '亳州', '阜阳', '淮北', '宿州', '滁州', '安庆', '巢湖', '马鞍山', '宣城', '黄山', '池州', '铜陵']
      },
      {
        province: '浙江',
        city: ['杭州', '嘉兴', '湖州', '宁波', '金华', '温州', '丽水', '绍兴', '衢州', '舟山', '台州']
      },
      {
        province: '福建',
        city: ['福州', '厦门', '泉州', '三明', '南平', '漳州', '莆田', '宁德', '龙岩']
      },
      {
        province: '广东',
        city: ['广州', '深圳', '汕头', '惠州', '珠海', '揭阳', '佛山', '河源', '阳江', '茂名', '湛江', '梅州', '肇庆', '韶关', '潮州', '东莞', '中山', '清远', '江门', '汕尾', '云浮']
      },
      {
        province: '海南',
        city: ['海口', '三亚']
      },
      {
        province: '云南',
        city: ['昆明', '曲靖', '玉溪', '保山', '昭通', '丽江', '普洱', '临沧']
      },
      {
        province: '贵州',
        city: ['贵阳', '六盘水', '遵义', '安顺']
      },
      {
        province: '四川',
        city: ['成都', '绵阳', '德阳', '广元', '自贡', '攀枝花', '乐山', '南充', '内江', '遂宁', '广安', '泸州', '达州', '眉山', '宜宾', '雅安', '资阳']
      },
      {
        province: '湖南',
        city: ['长沙', '株洲', '湘潭', '衡阳', '岳阳', '郴州', '永州', '邵阳', '怀化', '常德', '益阳', '张家界', '娄底']
      },
      {
        province: '湖北',
        city: ['武汉', '襄樊', '宜昌', '黄石', '鄂州', '随州', '荆州', '荆门', '十堰', '孝感', '黄冈', '咸宁']
      },
      {
        province: '河南',
        city: ['郑州', '洛阳', '开封', '漯河', '安阳', '新乡', '周口', '三门峡', '焦作', '平顶山', '信阳', '南阳', '鹤壁', '濮阳', '许昌', '商丘', '驻马店']
      },
      {
        province: '山西',
        city: ['太原', '大同', '忻州', '阳泉', '长治', '晋城', '朔州', '晋中', '运城', '临汾', '吕梁']
      },
      {
        province: '陕西',
        city: ['西安', '咸阳', '铜川', '延安', '宝鸡', '渭南', '汉中', '安康', '商洛', '榆林']
      },
      {
        province: '甘肃',
        city: ['兰州', '天水', '平凉', '酒泉', '嘉峪关', '金昌', '白银', '武威', '张掖', '庆阳', '定西', '陇南']
      },
      {
        province: '青海',
        city: ['西宁']
      },
      {
        province: '江西',
        city: ['南昌', '九江', '赣州', '吉安', '鹰潭', '上饶', '萍乡', '景德镇', '新余', '宜春', '抚州']
      },
      {
        province: '台湾',
        city: ['台北', '台中', '基隆', '高雄', '台南', '新竹', '嘉义']
      },
      {
        province: '新疆',
        city: ['乌鲁木齐', '克拉玛依']
      },
      {
        province: '西藏',
        city: ['拉萨']
      },
      {
        province: '宁夏',
        city: ['银川', '石嘴山', '吴忠', '固原', '中卫']
      },
      {
        province: '内蒙古',
        city: ['呼和浩特', '包头', '乌海', '赤峰', '通辽', '鄂尔多斯', '呼伦贝尔', '巴彦淖尔', '乌兰察布']
      },
      {
        province: '广西',
        city: ['南宁', '柳州', '桂林', '梧州', '北海', '崇左', '来宾', '贺州', '玉林', '百色', '河池', '钦州', '防城港', '贵港']
      }
    ];
    return {
      all: function () {
        return cityCollection;
      },
      searchCity: function (city) {
        for (var i in cityCollection)
          for (var j in cityCollection[i].city)
            if (city == cityCollection[i].city[j])return true;
        return false;
      }
    };
  })//城市选择的数据
  .factory('getWeatherData', function ($http, stringSearch) {
    return{
      getToday:function (name) {
        var dataTemp={tem: 0, air: 0, wet: 0, ico: '',state:''};
        if(stringSearch.incommon(name)!=null){//检查是否同音城市，是的话发送id，不是的话发送拼音
            var id=stringSearch.incommon(name);
            $http.jsonp("http://api.openweathermap.org/data/2.5/weather?id="+id+"&units=metric&lang=zh_cn&callback=JSON_CALLBACK&appid=663b25ec9d6054da0d3de36387574924")
              .success(function (data) {
                dataTemp.tem=Math.round(data.main.temp);
                dataTemp.wet=data.main.humidity;
                dataTemp.state=data.weather[0].description;
                dataTemp.air=data.wind.speed;
                dataTemp.ico=stringSearch.setIco(data.weather[0].id);
            })
        }else{
            var string=stringSearch.searchString(name);
            if(string=='')return null;
            $http.jsonp("http://api.openweathermap.org/data/2.5/weather?q="+string+"&units=metric&lang=zh_cn&callback=JSON_CALLBACK&appid=663b25ec9d6054da0d3de36387574924")
              .success(function (data) {
                dataTemp.tem=Math.round(data.main.temp);
                dataTemp.wet=data.main.humidity;
                dataTemp.state=data.weather[0].description;
                dataTemp.air=data.wind.speed;
                dataTemp.ico=stringSearch.setIco(data.weather[0].id);
              })
        }
        return dataTemp;
      },//获取当天的气象数据
      getCurrent:function (name) {
          var currentTemp=[];
        if(stringSearch.incommon(name)!=null){//检查是否同音城市，是的话发送id，不是的话发送拼音
          var id=stringSearch.incommon(name);
          $http.jsonp("http://api.openweathermap.org/data/2.5/forecast/daily?id="+id+"&units=metric&cnt=6&lang=zh_cn&callback=JSON_CALLBACK&appid=663b25ec9d6054da0d3de36387574924")
            .success(function (data) {
              for(var i=1;i<=5;i++)
              {
               var ico=stringSearch.setIco(data.list[i].weather[0].id)+'_low';
                currentTemp.push(ico)
              }
            })
        }else{
          var string=stringSearch.searchString(name);
          if(string=='')return null;
          $http.jsonp("http://api.openweathermap.org/data/2.5/forecast/daily?q="+string+"&units=metric&cnt=6&lang=zh_cn&callback=JSON_CALLBACK&appid=663b25ec9d6054da0d3de36387574924")
            .success(function (data) {
              for(var i=1;i<=5;i++)
              {
                var ico=stringSearch.setIco(data.list[i].weather[0].id)+'_low';
                currentTemp.push(ico)
              }
            })
        }
        return currentTemp;
      }//获取最近五天的数据

    };

  })//发送网络请求获得气象数据
  .factory('stringSearch', function () {
  var stringCollection = [
    {name: '北京', string: 'beijing'},{name: '天津', string: 'tianjin'},{name: '重庆', string: 'chongqing'},{name: '上海', string: 'shanghai'},
    {name: '香港', string: 'hongkong'},{name: '澳门', string: 'macau'},
    {name: '长春', string: 'changchun'}, {name: '吉林', string: 'jilin'}, {name: '四平', string: 'siping'}, {name: '辽源', string: 'liaoyuan'}, {
      name: '通化',
      string: 'tonghua'
    }, {name: '白山', string: 'baishan'}, {name: '松原', string: 'songyuan'}, {name: '白城', string: 'baicheng'},
    {name: '哈尔滨', string: 'haerbin'}, {name: '大庆', string: 'daqing'}, {name: '齐齐哈尔', string: 'qiqihaer'}, {
      name: '佳木斯',
      string: 'jiamusi'
    }, {name: '鸡西', string: 'jixi'}, {name: '鹤岗', string: 'hegang'}, {name: '双鸭山', string: 'shuangyashan'}, {
      name: '牡丹江',
      string: 'mudanjiang'
    }, {name: '伊春', string: 'yichun'}, {name: '七台河', string: 'qitaihe'}, {name: '黑河', string: 'heihe'}, {name: '绥化', string: 'suihua'},
    {name: '沈阳', string: 'shenyang'}, {name: '大连', string: 'dalian'}, {name: '鞍山', string: 'anshan'}, {name: '抚顺', string: 'fushun'}, {
      name: '本溪',
      string: 'benxi'
    }, {name: '丹东', string: 'dandong'}, {name: '锦州', string: 'jinzhou'}, {name: '营口', string: 'yingkou'}, {
      name: '阜新',
      string: 'fuxin'
    }, {name: '辽阳', string: 'liaoyang'}, {name: '盘锦', string: 'panjin'}, {name: '铁岭', string: 'tieling'}, {
      name: '朝阳',
      string: 'chaoyang'
    }, {name: '葫芦岛', string: 'huludao'},
    {name: '石家庄', string: 'shijiazhuang'}, {name: '唐山', string: 'tangshan'}, {name: '邯郸', string: 'handan'}, {
      name: '秦皇岛',
      string: 'qinhuangdao'
    }, {name: '保定', string: 'baoding'}, {name: '张家口', string: 'zhangjiakou'}, {name: '承德', string: 'chengde'}, {
      name: '廊坊',
      string: 'langfang'
    }, {name: '沧州', string: 'cangzhou'}, {name: '衡水', string: 'hengshui'}, {name: '邢台', string: 'xingtai'},
    {name: '济南', string: 'jinan'}, {name: '青岛', string: 'qingdao'}, {name: '淄博', string: 'zibo'}, {name: '枣庄', string: 'zaozhuang'}, {
      name: '东营',
      string: 'dongying'
    }, {name: '烟台', string: 'yantai'}, {name: '潍坊', string: 'weifang'}, {name: '济宁', string: 'jining'}, {
      name: '泰安',
      string: 'taian'
    }, {name: '威海', string: 'weihai'}, {name: '日照', string: 'rizhao'}, {name: '莱芜', string: 'laiwu'}, {
      name: '临沂',
      string: '临沂'
    }, {name: '德州', string: 'dezhou'}, {name: '聊城', string: 'liaocheng'}, {name: '菏泽', string: 'heze'}, {name: '滨州', string: 'binzhou'},
    {name: '南京', string: 'nanjing'}, {name: '镇江', string: 'zhenjiang'}, {name: '常州', string: 'changzhou'}, {name: '无锡', string: 'wuxi'}, {
      name: '苏州',
      string: 'suzhou'
    }, {name: '徐州', string: 'xuzhou'}, {name: '连云港', string: 'lianyungang'}, {name: '淮安', string: 'huaian'}, {
      name: '盐城',
      string: 'yancheng'
    }, {name: '扬州', string: 'yangzhou'}, {name: '泰州', string: 'taizhou'}, {name: '南通', string: 'nantong'}, {name: '宿迁', string: 'suqian'},
    {name: '合肥', string: 'hefei'}, {name: '蚌埠', string: 'bengbu'}, {name: '芜湖', string: 'wuhu'}, {name: '淮南', string: 'huainan'}, {
      name: '亳州',
      string: 'bozhou'
    }, {name: '阜阳', string: 'fuyang'}, {name: '淮北', string: 'huaibei'}, {name: '宿州', string: 'suzhou'}, {
      name: '滁州',
      string: 'chuzhou'
    }, {name: '安庆', string: 'anqing'}, {name: '巢湖', string: 'chaohu'}, {name: '马鞍山', string: 'maanshan'}, {
      name: '宣城',
      string: 'xuancheng'
    }, {name: '黄山', string: 'huangshan'}, {name: '池州', string: '池州'}, {name: '铜陵', string: 'tongling'},
    {name: '杭州', string: 'hangzhou'}, {name: '嘉兴', string: 'jiaxing'}, {name: '湖州', string: 'huzhou'}, {name: '宁波', string: 'ningbo'}, {
      name: '金华',
      string: 'jinhua'
    }, {name: '温州', string: 'wenzhou'}, {name: '丽水', string: 'lishui'}, {name: '绍兴', string: 'shaoxing'}, {
      name: '衢州',
      string: 'quzhou'
    }, {name: '舟山', string: 'zhoushan'}, {name: '台州', string: 'taizhou'},
    {name: '福州', string: 'fuzhou'}, {name: '厦门', string: 'xiamen'}, {name: '泉州', string: 'quanzhou'}, {name: '三明', string: 'sanming'}, {
      name: '南平',
      string: 'nanping'
    }, {name: '漳州', string: 'zhangzhou'}, {name: '莆田', string: 'putian'}, {name: '宁德', string: 'ningde'}, {name: '龙岩', string: 'longyan'},
    {name: '广州', string: 'guangzhou'}, {name: '深圳', string: 'shenzhen'}, {name: '汕头', string: 'shantou'}, {name: '惠州', string: 'huizhou'}, {
      name: '珠海',
      string: 'zhuhai'
    }, {name: '揭阳', string: 'jieyang'}, {name: '佛山', string: 'foshan'}, {name: '河源', string: 'heyuan'}, {
      name: '阳江',
      string: 'yangjiang'
    }, {name: '茂名', string: 'maoming'}, {name: '湛江', string: 'zhanjiang'}, {name: '梅州', string: 'meizhou'}, {
      name: '肇庆',
      string: 'zhaoqing'
    }, {name: '韶关', string: 'shaoguan'}, {name: '潮州', string: 'chaozhou'}, {name: '东莞', string: 'dongguan'}, {
      name: '中山',
      string: 'zhongshan'
    }, {name: '清远', string: 'qingyuan'}, {name: '江门', string: 'jiangmen'}, {name: '汕尾', string: 'shanwei'}, {name: '云浮', string: 'yunfu'},
    {name: '海口', string: 'haikou'}, {name: '三亚', string: 'sanya'},
    {name: '昆明', string: 'kunming'}, {name: '曲靖', string: 'qujing'}, {name: '玉溪', string: 'yuxi'}, {name: '保山', string: 'baoshan'}, {
      name: '昭通',
      string: 'zhaotong'
    }, {name: '丽江', string: 'lijiang'}, {name: '普洱', string: 'puer'}, {name: '临沧', string: 'lincang'},
    {name: '贵阳', string: 'guiyang'}, {name: '六盘水', string: 'liupanshui'}, {name: '遵义', string: 'zunyi'}, {name: '安顺', string: 'anshun'},
    {name: '成都', string: 'chengdu'}, {name: '绵阳', string: 'mianyang'}, {name: '德阳', string: 'deyang'}, {name: '广元', string: 'guangyuan'}, {
      name: '自贡',
      string: 'zigong'
    }, {name: '攀枝花', string: 'panzhihua'}, {name: '乐山', string: 'leshan'}, {name: '南充', string: 'nanchong'}, {
      name: '内江',
      string: 'neijiang'
    }, {name: '遂宁', string: 'suining'}, {name: '广安', string: 'guangan'}, {name: '泸州', string: 'luzhou'}, {
      name: '达州',
      string: 'dazhou'
    }, {name: '眉山', string: 'meishan'}, {name: '宜宾', string: 'yibin'}, {name: '雅安', string: 'yaan'}, {name: '资阳', string: 'ziyang'},
    {name: '长沙', string: 'changsha'}, {name: '株洲', string: 'zhuzhou'}, {name: '湘潭', string: 'xiangtan'}, {name: '衡阳', string: 'hengyang'}, {
      name: '岳阳',
      string: 'yueyang'
    }, {name: '郴州', string: 'chenzhou'}, {name: '永州', string: 'yongzhou'}, {name: '邵阳', string: 'shaoyang'}, {
      name: '怀化',
      string: 'huaihua'
    }, {name: '常德', string: 'changde'}, {name: '益阳', string: 'yiyang'}, {name: '张家界', string: 'zhangjiajie'}, {name: '娄底', string: 'loudi'},
    {name: '武汉', string: 'wuhan'}, {name: '襄樊', string: 'xiangfan'}, {name: '宜昌', string: 'yichang'}, {name: '黄石', string: 'huangshi'}, {
      name: '鄂州',
      string: 'ezhou'
    }, {name: '随州', string: 'suizhou'}, {name: '荆州', string: 'jingzhou'}, {name: '荆门', string: 'jingmen'}, {
      name: '十堰',
      string: 'shiyan'
    }, {name: '孝感', string: 'xiaogan'}, {name: '黄冈', string: 'huanggang'}, {name: '咸宁', string: 'xianning'},
    {name: '郑州', string: 'zhengzhou'}, {name: '洛阳', string: 'luoyang'}, {name: '开封', string: 'kaifeng'}, {name: '漯河', string: 'luohe'}, {
      name: '安阳',
      string: 'anyang'
    }, {name: '新乡', string: 'xinxiang'}, {name: '周口', string: 'zhoukou'}, {name: '三门峡', string: 'sanmenxia'}, {
      name: '焦作',
      string: 'jiaozuo'
    }, {name: '平顶山', string: 'pingdingshan'}, {name: '信阳', string: 'xinyang'}, {name: '南阳', string: 'nanyang'}, {
      name: '鹤壁',
      string: 'hebi'
    }, {name: '濮阳', string: 'puyang'}, {name: '许昌', string: 'xuchang'}, {name: '商丘', string: 'shangqiu'}, {name: '驻马店', string: 'zhumadian'},
    {name: '太原', string: 'taiyuan'}, {name: '大同', string: 'datong'}, {name: '忻州', string: 'xinzhou'}, {name: '阳泉', string: 'yangquan'}, {
      name: '长治',
      string: 'changzhi'
    }, {name: '晋城', string: 'jincheng'}, {name: '朔州', string: 'shuozhou'}, {name: '晋中', string: 'jinzhong'}, {
      name: '运城',
      string: 'yuncheng'
    }, {name: '临汾', string: 'linfen'}, {name: '吕梁', string: 'lvliang'},
    {name: '西安', string: 'xian'}, {name: '咸阳', string: 'xianyang'}, {name: '铜川', string: 'tongchuan'}, {name: '延安', string: 'yanan'}, {
      name: '宝鸡',
      string: 'baoji'
    }, {name: '渭南', string: 'weinan'}, {name: '汉中', string: 'hanzhong'}, {name: '安康', string: 'ankang'}, {
      name: '商洛',
      string: 'shangluo'
    }, {name: '榆林', string: 'yulin'},
    {name: '兰州', string: 'lanzhou'}, {name: '天水', string: 'tianshui'}, {name: '平凉', string: 'pingliang'}, {
      name: '酒泉',
      string: 'jiuquan'
    }, {name: '嘉峪关', string: 'jiayuguan'}, {name: '金昌', string: 'jinchang'}, {name: '白银', string: 'baiyin'}, {
      name: '武威',
      string: 'wuwei'
    }, {name: '张掖', string: 'zhangye'}, {name: '庆阳', string: 'qingyang'}, {name: '定西', string: 'dingxi'}, {name: '陇南', string: 'longnan'},
    {name: '西宁', string: 'xining'},
    {name: '南昌', string: 'nanchang'}, {name: '九江', string: 'jiujiang'}, {name: '赣州', string: 'ganzhou'}, {name: '吉安', string: 'jian'}, {
      name: '鹰潭',
      string: 'yingtan'
    }, {name: '上饶', string: 'shagnrao'}, {name: '萍乡', string: 'pingxiang'}, {name: '景德镇', string: 'jingdezhen'}, {
      name: '新余',
      string: 'xinyu'
    }, {name: '宜春', string: 'yichun'}, {name: '抚州', string: 'fuzhou'},
    {name: '台北', string: 'taibei'}, {name: '台中', string: 'taizhong'}, {name: '基隆', string: 'jilong'}, {name: '高雄', string: 'gaoxioing'}, {
      name: '台南',
      string: 'tainan'
    }, {name: '新竹', string: 'xinzhu'}, {name: '嘉义', string: 'jiayi'},
    {name: '乌鲁木齐', string: 'wulumuqi'}, {name: '克拉玛依', string: 'kelamayi'},
    {name: '拉萨', string: 'lasa'},
    {name: '银川', string: 'yinchuan'}, {name: '石嘴山', string: 'shizuishan'}, {name: '吴忠', string: 'wuzhong'}, {
      name: '固原',
      string: 'guyuan'
    }, {name: '中卫', string: 'zhongwei'},
    {name: '呼和浩特', string: 'huhehaote'}, {name: '包头', string: 'baotou'}, {name: '乌海', string: 'wuhai'}, {
      name: '赤峰',
      string: 'chifeng'
    }, {name: '通辽', string: 'tongliao'}, {name: '鄂尔多斯', string: 'eerduosi'}, {name: '呼伦贝尔', string: 'hulunbeier'}, {
      name: '巴彦淖尔',
      string: 'bayannaoer'
    }, {name: '乌兰察布', string: 'wulanchabu'},
    {name: '南宁', string: 'nanning'}, {name: '柳州', string: 'liuzhou'}, {name: '桂林', string: 'guilin'}, {name: '梧州', string: 'wuzhou'}, {
      name: '北海',
      string: 'beihai'
    }, {name: '崇左', string: 'chongzuo'}, {name: '来宾', string: 'laibin'}, {name: '贺州', string: 'hezhou'}, {
      name: '玉林',
      string: 'yulin'
    }, {name: '百色', string: 'baise'}, {name: '河池', string: 'hechi'}, {name: '钦州', string: 'qinzhou'}, {
      name: '防城港',
      string: 'fangchenggang'
    }, {name: '贵港', string: 'guigang'}

  ];
  var commonList=[
    {name:'宿州',id:1279945},
    {name:'苏州',id:1886760},
    {name:'伊春',id:2033413},
    {name:'宜春',id:1786746},
    {name:'泰州',id:1793505},
    {name:'台州',id:1793505},
    {name:'玉林',id:1785781},
    {name:'榆林',id:1785777}
  ];
  return{
    searchString:function (name) {
      for(var i in stringCollection)
        if(stringCollection[i].name==name)return stringCollection[i].string;
      return '';
    },//根据城市名字获得拼音
    /*testCommon:function(){
      var commonList=[];
      for(var i=0 ;i< stringCollection.length;i++){
        for(var j =i+1;j<stringCollection.length;j++)
          if(stringCollection[i].string==stringCollection[j].string&&commonList.indexOf(stringCollection[j].name)<0){
            if(commonList.indexOf(stringCollection[i].name)<0)commonList.push(stringCollection[i].name);
            commonList.push(stringCollection[j].name);
          }
      }
      console.log(commonList);
  },*///测试名字相同的城市的
    incommon:function (name) {//检查是否同音城市，是则返回id，否则返回null
      for(var i in commonList)
        if(commonList[i].name==name)return commonList[i].id;
      return null;
    },
    setIco:function (stateID) {//设置图标的函数，没地方放，放这里了
      if(stateID!=0){
        if(200<=stateID&&stateID<300)return 'thunder';
        if(300<=stateID&&stateID<600)return 'raining';
        if(stateID==800)return 'sunny';
        if(stateID==801)return 'cloudy';
        if(700<=stateID&&stateID<800)return 'overcast';
        if(801<stateID&&stateID<900)return 'overcast';
        if(600<=stateID&&stateID<700)return 'snow';
      }
      return '';
    }
  }
});//城市拼音数据
