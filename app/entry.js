
// require("script!./es5-shim.min.js");
require("./style.css");
//var $ = require("jquery");
$(function(){
  $(".for_jquery").text(require("./content.js"));
  console.log("It must be a bug of webpack-dev-server that the dom is not yet ready but the script is already running. see $('.for_jquery') is ",$(".for_jquery").length);

  //load image
  $("img").each(function(index,ele){
    var originSrc = $(ele).data("src");
    var actualSrc = require("./images/" + originSrc);
    $(ele).attr("src", actualSrc);
  });
});