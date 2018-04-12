//carousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel(
        {
            loop: true,
            nav: false,
            dots: true,
            items: 1,
            autoplay: true
        }
    );
});

//pagelingのハンバーガーメニュー
$(document).ready(function(){
  $(".pagelink_logo").click(function(){
    $(".pagelink_list_toggle").slideToggle();
  });
});

//categoriesのハンバーガーメニュー
$(document).ready(function(){
  $(".categories_logo").click(function(){
    $(".categories_list_toggle").slideToggle();
  });
});


 
//toppageに戻る操作
//■page topボタン

$(function(){
var topBtn=$('#pageTop');
topBtn.hide();

 

//◇ボタンの表示設定
$(window).scroll(function(){
  if($(this).scrollTop()>80){

    //---- 画面を80pxスクロールしたら、ボタンを表示する
    topBtn.fadeIn();

  }else{

    //---- 画面が80pxより上なら、ボタンを表示しない
    topBtn.fadeOut();

  } 
});

 

// ◇ボタンをクリックしたら、スクロールして上に戻る
topBtn.click(function(){
  $('body,html').animate({
  scrollTop: 0},500);
  return false;

});


});

$(window).load(function(){
  $("#list_img img").click(function(){
    var img_src = $(this).attr("src");
    $("#display_img img").attr("src", img_src);
  });
});

$(document).ready(function(){
  $(".menu_icon").click(function(){
    $(".sp_navi_li").slideToggle();
  });
});