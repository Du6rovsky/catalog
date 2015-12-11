var run = function($httpBackend, localStorageService){
  $httpBackend.whenGET(/\.html/).passThrough();
  /*
   * Product app backend
   */

  //Procuts data
  var products = [
      {   
          "id" :"0",
          "name" : "BMW M5 E34",
          "color" : "black",
          "issueDate" : "05/01/1993",
          "price" : "45000",
          "img" : "/build/img/BMW_M5_e34_black_1993.png",
          "wiki" : "https://ru.wikipedia.org/wiki/BMW_M5"
      },
      {   
          "id" :"1",
          "name" : "Nissan GTR R34 Spec",
          "color" : "blue",
          "issueDate" : "11/13/1998",
          "price" : "50000",
          "img" : "/build/img/Nissan-Gtr-R34-Specs_Blue_1998.png",
          "wiki" : "https://ru.wikipedia.org/wiki/Nissan_Skyline"
      },
      {   
          "id" :"2",
          "name" : "Koenigsegg CCX",
          "color" : "white",
          "issueDate" : "04/01/2006",
          "price" : "700000",
          "img" : "/build/img/Koenigsegg_CCX_white_2006.png",
          "wiki" : "https://ru.wikipedia.org/wiki/Koenigsegg_CCX"
      },
      {   
          "id" :"3",
          "name" : "Dodge viper SRT10",
          "color" : "green",
          "issueDate" : "08/25/2008",
          "price" : "45000",
          "img" : "/build/img/Dodge_viper_srt10_green_2008.png",
          "wiki" : "https://ru.wikipedia.org/wiki/Dodge_Viper"
      },
      {   
          "id" :"4",
          "name" : "Lamborghini Murcielago LP670-4 SV",
          "color" : "yellow",
          "issueDate" : "10/07/2009",
          "price" : "250000",
          "img" : "/build/img/Lamborghini Murcielago LP670-4SV_yellow_2009.png",
          "wiki" : "https://ru.wikipedia.org/wiki/Lamborghini_Murci%C3%A9lago"
      },
      {   
          "id" :"5",
          "name" : "Ferrari LaFerrari",
          "color" : "red",
          "issueDate" : "04/02/2010",
          "price" : "1000000",
          "img" : "/build/img/Ferrari_LaFerrari_Red_2010.png",
          "wiki" : "https://ru.wikipedia.org/wiki/LaFerrari"
      },
      {   
          "id" :"6",
          "name" : "Aston Martin DB9",
          "color" : "black",
          "issueDate" : "01/15/2015",
          "price" : "350000",
          "img" : "/build/img/Aston_Martin_DB9_2015.png",
          "wiki" : "https://ru.wikipedia.org/wiki/Aston_Martin_DB9"
      },
      {   
          "id" :"7",
          "name" : "Audi Sport Quattro",
          "color" : "white",
          "issueDate" : "07/20/1985",
          "price" : "35000",
          "img" : "/build/img/Audi_Sport_Quattro_white_1985.png",
          "wiki" : "https://ru.wikipedia.org/wiki/Audi_Sport_quattro"
      },
      {   
          "id" :"8",
          "name" : "BMW M5 F10",
          "color" : "red",
          "issueDate" : "12/16/2011",
          "price" : "63000",
          "img" : "/build/img/BMW_M5_F10_red_2011.png",
          "wiki" : "https://ru.wikipedia.org/wiki/BMW_M5"
      },
      {   
          "id" :"9",
          "name" : "Bugatti Veyron",
          "color" : "green",
          "issueDate" : "03/27/2009",
          "price" : "2300000",
          "img" : "/build/img/Bugatti_Veyron_green_2009.png",
          "wiki" : "https://ru.wikipedia.org/wiki/Bugatti_Veyron"
      },
      {   
          "id" :"10",
          "name" : "Ferrari 250 GTO",
          "color" : "red",
          "issueDate" : "02/17/1962",
          "price" : "30000000",
          "img" : "/build/img/Ferrari_250_GTO_red_1962.png",
          "wiki" : "https://ru.wikipedia.org/wiki/Ferrari_250_GTO"
      },
      {   
          "id" :"11",
          "name" : "Lamborghini Miura",
          "color" : "yellow",
          "issueDate" : "11/04/1966",
          "price" : "3000000",
          "img" : "/build/img/Lamborghini_Miura_yellow_1966.png",
          "wiki" : "https://ru.wikipedia.org/wiki/Lamborghini_Miura"
      },
      {   
          "id" :"12",
          "name" : "Lamborghini Aventador LP700-4",
          "color" : "green",
          "issueDate" : "02/09/2013",
          "price" : "1800000",
          "img" : "/build/img/Lamborghini-Aventador_LP_700_4_green__2013.png",
          "wiki" : "https://ru.wikipedia.org/wiki/Lamborghini_Aventador"
      },
      {   
          "id" :"13",
          "name" : "McLaren F1 GTR",
          "color" : "yellow",
          "issueDate" : "02/15/1995",
          "price" : "4500000",
          "img" : "/build/img/McLaren_F1_GTR_yellow_1995.png",
          "wiki" : "https://ru.wikipedia.org/wiki/McLaren_F1"
      },
      {   
          "id" :"14",
          "name" : "Mercedes AMG GT",
          "color" : "blue",
          "issueDate" : "05/23/2015",
          "price" : "200000",
          "img" : "/build/img/Mercedes_AMG_GT_Blue_2015.png",
          "wiki" : "https://ru.wikipedia.org/wiki/Mercedes-AMG_GT"
      },
      {   
          "id" :"15",
          "name" : "Nissan GTR",
          "color" : "black",
          "issueDate" : "07/27/2015",
          "price" : "130000",
          "img" : "/build/img/Nissan_GTR_black_2015.png",
          "wiki" : "https://ru.wikipedia.org/wiki/Nissan_GT-R"
      },
      {   
          "id" :"16",
          "name" : "Shelby Cobra",
          "color" : "blue",
          "issueDate" : "01/10/1967",
          "price" : "450000",
          "img" : "/build/img/Shelby_Cobra_blue_1967.png",
          "wiki" : "https://ru.wikipedia.org/wiki/AC_Cobra"
      },
      {   
          "id" :"17",
          "name" : "Toyota Sprinter Trueno AE86",
          "color" : "white",
          "issueDate" : "01/12/1984",
          "price" : "30000",
          "img" : "/build/img/Toyota_Sprinter_Trueno_AE86_white_1984.png",
          "wiki" : "https://ru.wikipedia.org/wiki/Toyota_Sprinter_Trueno"
      }
  ];

  //Get
  $httpBackend.whenGET('/products').respond(function(method,url,data) {
    console.log("Getting products list...");
    return [200, products, {}];
  });

  /*
   * Reviews app backend
   */

  //Init reviews value
  var reviews = localStorageService.get('reviews');
  if(reviews){
    reviews = reviews;
  } else reviews = [];

  //Get
  $httpBackend.whenGET('/reviews').respond(function(method,url,data) {
    console.log("Getting reviews list...");
    return [200, reviews, {}];
  });

  //Post
  $httpBackend.whenPOST('/reviews').respond(function(method, url, data, headers){
    console.log('Received reviews data:', method, url, data, headers);
    reviews.push(angular.fromJson(data));
    //Update reviews list in local storage
    localStorageService.set('reviews',reviews);
    return [200, {}, {}];
  });
};

module.exports = run;