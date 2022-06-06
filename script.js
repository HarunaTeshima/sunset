$(function(){  
  // とっしー
  // スライド
  let index = 0;
    let slideMax = $('.slide').length
    $('.right-arrow').on('click',function () {
      if (index !== slideMax-1) {
        index++;
        num = index * -1 * 100;
        $('.slide-container').css({'transform':`translateX(${num}%)`});
      }
    })
  
    $('.left-arrow').on('click',function () {
      if (index !== 0) {
        index--;
        num = index * -1 * 100;
        $('.slide-container').css({'transform':`translateX(${num}%)`})
      }
    })
  
    // タブ
    // ①.tab-list liが押されたら押された要素のid名を取得(関数名はattr())
    $('.tab-list_shop li').on('click',function(){
      let target = $(this).attr('id');
      // console.log(target);  
      // ②boxからクラス名currentを取る
      $('.box_shop').removeClass('current_shop');
      // ③取得したID名にクラス名currentを付ける
    $(target).addClass('current_shop');
    })
    
    $('.tab-list li').on('click', function () {
        let target = $(this).attr('id');
        // ②boxからクラス名currentを取る
        $('.box').removeClass('current');
        // ③取得したID名にクラス名currentを付ける
        $(target).addClass('current');
    });

    $('.question').on('click', function () {
        $(this).next().slideToggle();
        // ②押された要素にも'on'クラスを付ける
        $(this).toggleClass('on');

    });

    $('.go-top-btn').on('click',function(){
        $('html,body').animate({'scrollTop': 0 },1000);
    })


    
  
    // ↓大外のカッコ
    })