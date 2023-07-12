window.addEventListener("scroll", function () {
    // ヘッダーを変数の中に格納する
    const header = document.querySelector("header");
    // 100px以上スクロールしたらヘッダーに「scroll-nav」クラスをつける
    header.classList.toggle("scroll-nav", window.scrollY > 450);
  });
  
  // $(function(){
  //   $('button').on('click',function(){
  //     $('h2').toggleClass('slide_on');
  //   }); 
  // });
  $(document).ready(function(){
    $('h2').toggleClass('slide_on');
  })