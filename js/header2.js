// PC 드롭다운
$(document).ready(function(){
  
  // PC 버전 메가드롭다운 (1200px 초과에서만 작동)
  function pcDropdown() {
    // 기존 이벤트 제거
    $(".gnb").off("mouseenter mouseleave");
    $(".main > .main_tit").off("click");
    
    if($(window).width() > 1199) {
      // PC에서는 호버
      $(".gnb").hover(
        function(){
          $(this).find(".sub").stop().slideDown();
          $(".sub_bgbox").stop().slideDown();
        },
        function(){
          $(this).find(".sub").stop().slideUp();
          $(".sub_bgbox").stop().slideUp();
        }
      );
    } else {
      // 태블릿/모바일에서는 클릭
      $(".main > .main_tit").off("click").on("click", function(e){
        e.preventDefault();
        e.stopPropagation();
        
        const parent = $(this).parent();
        
        // 다른 메뉴 닫기
        parent.siblings().find(".sub").slideUp(300);
        parent.siblings().removeClass("active");
        
        // 현재 메뉴 토글
        parent.find(".sub").slideToggle(300);
        parent.toggleClass("active");
      });
    }
  }
  
  pcDropdown();
  
  // ----------------------------------------------------------
  
  // 햄버거 버튼 클릭 - 메뉴 열기/닫기
  $(".mob_btn").click(function(e){
    e.preventDefault();
    e.stopPropagation();
    
    // 활성화 토글
    $(this).toggleClass("active");
    $("body").toggleClass("mOpen");
    $(".sub_menu").toggleClass("open");
    
    // 메뉴가 닫힐 때 모든 서브메뉴 닫기
    if(!$(this).hasClass("active")) {
      $(".main").removeClass("active");
      $(".sub").slideUp();
    }
  });
  
  // ----------------------------------------------------------
  
  // 모달 배경 클릭 시 메뉴 닫기
  $(document).on("click", function(e){
    if($("body").hasClass("mOpen")) {
      if(!$(e.target).closest(".sub_menu, .mob_btn").length) {
        $(".mob_btn").removeClass("active");
        $("body").removeClass("mOpen");
        $(".sub_menu").removeClass("open");
        $(".main").removeClass("active");
        $(".sub").slideUp();
      }
    }
  });
  
  // ----------------------------------------------------------
  
  // 윈도우 리사이즈 처리
  $(window).resize(function(){
    let w = $(window).width();
    
    if(w > 1199){
      // PC 버전으로 전환 시 모바일 메뉴 초기화
      $(".main, .sub").removeAttr("style");
      $(".mob_btn").removeClass("active");
      $("body").removeClass("mOpen");
      $(".sub_menu").removeClass("open");
      $(".main").removeClass("active");
      
      // PC 드롭다운 다시 활성화
      pcDropdown();
    } else {
      // 태블릿/모바일 버전으로 전환 시 PC 호버 이벤트 제거
      $(".gnb").off("mouseenter mouseleave");
      $(".main, .sub").removeAttr("style");
      $(".main").removeClass("active");
      
      // 클릭 이벤트 다시 바인딩
      pcDropdown();
    }
  });

});