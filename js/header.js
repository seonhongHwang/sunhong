// pc드롭다운

$(document).ready(function(){
  $(".gnb").hover(function(){
    $(this).find(".sub").stop().slideDown();
    $(".sub_bgbox").stop().slideDown();
  },
  function(){
    $(this).find(".sub").stop().slideUp();
    $(".sub_bgbox").stop().slideUp();
  });


// ----------------------------------------------------------

  // Mobile Navigation__________________
  const mobSubBtn = $('.gnb.main > li');

  mobSubBtn.click(function(){
    $(this).siblings().find(".sub").slideUp(300);
    $(this).siblings().removeClass("active");

    $(this).find(".sub").slideToggle(200);
    $(this).toggleClass("active");
  });

  // -------------------------------------------------

  const BODY = $("body");
  const hNavBtn = $('.main_tit');  //상단메인메뉴전체
  const subNav = $('.subNav'); //서브메뉴 전체

  //서브메뉴와 검색창 둘중에 하나만 나오게 조건을 만들기 위함
  let hNavIs = false; 
  let schWrapIs = false;

  hNavBtn.mouseenter(hNav);  //메인메뉴 오버시 서브메뉴 전체가 나오게 하는 함수호출
  subNav.mouseleave(hNav_reset);  //서브메뉴 전체영역에서 나갔을때 다시 올라가는 함수호출

  function hNav(){
    if (!schWrapIs && !hNavIs) { //검색창과 서브메뉴가 나와있지 않았을때
      subNav.slideDown(function(){
        BODY.addClass('dOpen');
      });
      hNavIs = true; //서브메뉴가 나와있는 상태에서는 true로 변경
    };
  };

  function hNav_reset(){
    if (hNavIs) {  //메뉴가 나와있는 상태라면(true)
      subNav.slideUp(function () {
        BODY.removeClass('dOpen')
      });
      hNavIs = false;
    };
  };


// -----------------------------------------------

  $(".mob_btn").click(function(){
    $(this).toggleClass("active");
    $(".main, .sub").removeAttr("style");
    $(".mob_btn").removeClass("active");

    $(window).resize(function(){
    let w = $(window).width();
    console.log(w);

    if(w > 768){
      $(".main, .sub").removeAttr("style");
      $(".mob_btn").removeClass("active");
    };
  });

  });



});




