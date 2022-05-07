$(document).ready(function(){
  $(".m-tl").click(function(){
    var _this = $(this);
    slider(_this);
  });
});

function slider(_this){
  var index = _this.index();
  $(_this).addClass("isclicked");
  $(_this).siblings()
  .removeClass("isclicked");

  $(".m-bd").eq(index)
  .addClass("ishide");

  $(".m-bd").eq(index)
  .siblings().
  removeClass("ishide");
}