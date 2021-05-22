// ここからふわっと表示
window.sr = ScrollReveal({ reset: true, mobile: true });
// 下から
sr.reveal('.huwa', { origin: 'bottom', distance: '50px', duration: 600, scale: 1.0, delay: 400, });
// 左から
sr.reveal('.huwaLeft', { origin: 'left', distance: '200px', duration: 1000, scale: 1.0, delay: 400, });
// 右から
sr.reveal('.huwaRight', { origin: 'right', distance: '200px', duration: 1000, scale: 1.0, delay: 400, });
// 右から
sr.reveal('.huwaRight', { origin: 'right', distance: '30%', duration: 1000, scale: 1.0, delay: 400, });
// delay2
sr.reveal('.delay2', { origin: 'bottom', distance: '30%', duration: 1000, scale: 1.0, delay: 600, });
// delay3
sr.reveal('.delay3', { origin: 'bottom', distance: '30%', duration: 1000, scale: 1.0, delay: 1000, });

// ここまでふわっと表示


var bubbleLifeTime = 20;
var noOfBubbles = 100;

var wrapper = document.querySelector('.wrapper');
var bubbles = [];

init();

function init() {
    var bubble;
    for(var i = 0; i < noOfBubbles; i++) {
      bubble = createBubble();
      wrapper.appendChild(bubble);
    }
}

function createBubble() {
  var circleContainer = document.createElement('div');
  circleContainer.classList.add('circle_container');
  circleContainer.style.transform = "rotate(" + Math.floor(Math.random() * 360) + "deg)";

  var circle = createCircle();
  circleContainer.appendChild(circle);

  return circleContainer;
}

function createCircle() {
  var circle = document.createElement('div');
  circle.classList.add('circle');
  circle.style.animationDelay = (Math.random() * bubbleLifeTime) + 's';

  var side = (5 + Math.floor(Math.random() * 5)) + 'px';
  circle.style.width = side;
  circle.style.height = side;

  return circle;
}

// ここからページトップ
//スクロールした際の動きを関数でまとめる
function PageTopAnime() {
  var scroll = $(window).scrollTop();
  if (scroll >= 100){//上から100pxスクロールしたら
    $('#page-top').removeClass('DownMove');//#page-topについているDownMoveというクラス名を除く
    $('#page-top').addClass('UpMove');//#page-topについているUpMoveというクラス名を付与
  }else{
    if($('#page-top').hasClass('UpMove')){//すでに#page-topにUpMoveというクラス名がついていたら
      $('#page-top').removeClass('UpMove');//UpMoveというクラス名を除き
      $('#page-top').addClass('DownMove');//DownMoveというクラス名を#page-topに付与
    }
  }
}

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  PageTopAnime();/* スクロールした際の動きの関数を呼ぶ*/
});


// #page-topをクリックした際の設定
$('#page-top').click(function () {
  var scroll = $(window).scrollTop(); //スクロール値を取得
  if(scroll > 0){
    $(this).addClass('floatAnime');//クリックしたらfloatAnimeというクラス名が付与
        $('body,html').animate({
            scrollTop: 0
        }, 2000,function(){//スクロールの速さ。数字が大きくなるほど遅くなる
            $('#page-top').removeClass('floatAnime');//上までスクロールしたらfloatAnimeというクラス名を除く
        }); 
  }
    return false;//リンク自体の無効化
});
// ここまでページトップ

// ここからローディング(機能しないため、配置のみ)-----------------------
//テキストのカウントアップ+バーの設定
var bar = new ProgressBar.Line(splash_text, {//id名を指定
  easing: 'easeInOut',//アニメーション効果linear、easeIn、easeOut、easeInOutが指定可能
  duration: 1000,//時間指定(1000＝1秒)
  strokeWidth: 0.2,//進捗ゲージの太さ
  color: '#555',//進捗ゲージのカラー
  trailWidth: 0.2,//ゲージベースの線の太さ
  trailColor: '#bbb',//ゲージベースの線のカラー
  text: {//テキストの形状を直接指定       
    style: {//天地中央に配置
      position: 'absolute',
      left: '50%',
      top: '50%',
      padding: '0',
      margin: '-30px 0 0 0',//バーより上に配置
      transform:'translate(-50%,-50%)',
      'font-size':'1rem',
      color: '#fff',
    },
    autoStyleContainer: false //自動付与のスタイルを切る
  },
  step: function(state, bar) {
    bar.setText(Math.round(bar.value() * 100) + ' %'); //テキストの数値
  }
});

//アニメーションスタート
bar.animate(1.0, function () {//バーを描画する割合を指定します 1.0 なら100%まで描画します
  $("#splash").delay(500).fadeOut(800);//アニメーションが終わったら#splashエリアをフェードアウト
});
// ここまでローディング----------------------
