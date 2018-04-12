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
 




//カルーセル
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

//wark-boxをhoverしたらh4が消えるようにする
// $('.wark_site').hover(
//   function(){
//     $('h4').slideUp();
// },
//   function(){
//     $('h4').fadeIn();
//   }
// );

  // $('.wark_box').hover(
  //   function() {
  //     // 子要素の「.text-contents」の要素を取得し、text-activeクラスをつけてください
  //     $(this).find('.text-content').addClass('text-active');
      
  //   },
  //   function() {
  //     // 子要素の「.text-contents」の要素を取得し、text-activeクラスを外してください
  //     $(this).find('.text-content').removeClass('text-active');
      
  //   });