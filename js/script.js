let funcObj = {
  f_0:function(){
    const tl = gsap.timeline();
    tl.to('#section0 .tit_wrap > *',{
      opacity: 1,
      y:-30,
      stagger:0.3,
    });
  },
  f_1:function(){
    const tl = gsap.timeline();
    tl.to('.magaleft',{
      opacity: 1,
      y:-50,
    })
    tl.to('.magaright',{
      opacity: 1,
      stagger: 0.3,
      y:-30,
    })
  },
  f_2:function(){
    const tl = gsap.timeline();
    tl.to('#section2 .iconkingbg',{
      opacity: 1,
      y:-20,
      stagger:0.3,
    });
    tl.to('#section2 .iconbg',{
      opacity: 1,
      delay: 0.3,
      y:10,
      stagger:0.3,
    });
  },
  f_3:function(){
    const tl = gsap.timeline();
    tl.to('#section3 .bluebg',{
      opacity: 1,
      y:-30,
      stagger:0.3,
    });
    tl.to('#section3 .text-box',{
      opacity: 1,
      x:-30,
      stagger:0.3,
    });
    tl.to('#section3 .img_box',{
      opacity: 1,
      y:-30,
      stagger:0.3,
    });
  },
  f_4:function(){
    const tl = gsap.timeline();
    tl.to('#section4 .bluebg2',{
      opacity: 1,
      y:-30,
      stagger:0.3,
    });
    tl.to('#section4 .text-box2',{
      opacity: 1,
      x:-30,
      stagger:0.3,
    });
    tl.to('#section4 .img_box',{
      opacity: 1,
      y:-30,
      stagger:0.3,
    });
  },
  f_5:function(){
    const tl = gsap.timeline();
    tl.to('#section5 .tit-box',{
      opacity: 1,
      y:-30,
      stagger:0.3,
    });
    tl.to('#section5 .text-left',{
      opacity: 1,
      x:30,
      stagger:0.3,
    });
    tl.to('#section5 .img-right',{
      opacity: 1,
      x:-30,
      stagger:0.3,
    });
  },
};

let section = document.querySelectorAll('section');
funcObj['f_0']();

window.addEventListener('scroll',function(){
  let scroll = document.scrollingElement.scrollTop;
  let outHeight = this.window.outerHeight;

  section.forEach((sec,i) => {
    if(scroll > section[i].offsetTop - outHeight &&
      scroll < section[i].offsetTop - outHeight + section[i].offsetHeight){
        funcObj['f_'+i]();
    }
  }); 
});

/* ------------------------------------------------------------------------------------- */

//JQuery____________start
$(function(){

  const BODY = $("body");
  const mobBtn = $(".mob_btn");
  const scrollTopBtn = $('.scrollTop_btn');

  //(4)Mobile Menu
  mobBtn.on("click", function (e) {
    e.preventDefault();  
    BODY.toggleClass("mOpen");
  });

  //(1)scroll-header
  $(window).on("scroll", function(){
    let scroll = $(this).scrollTop();
    
    if(scroll > 60){
      BODY.addClass("scrolling");
      scrollTopBtn.addClass('On');
    }else{
      BODY.removeClass("scrolling");
      scrollTopBtn.removeClass('On')
    };
  });

  //(2)Top Button scroll
  scrollTopBtn.on('click',function(){
    window.scrollTo({
      top:0,
      behavior:'smooth'
    });
  });
});

