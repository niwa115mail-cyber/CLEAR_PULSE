document.addEventListener('DOMContentLoaded', function() {
    // 1. スライドの画像（.slide_img）をすべて捕まえてリストにする
    const slides = document.querySelectorAll('.main_visual_slider .slide_img');
    let currentSlide = 0; // 現在表示されている画像の番号（最初は0番目）

    // もし画像が1枚以下ならスライドさせる必要がないので処理を終了する
    if (slides.length <= 1) return;

    // 2. 次の画像に切り替える関数（命令）を作る
    function nextSlide() {
        // 現在の画像から「active」クラスを奪い取って透明にする
        slides[currentSlide].classList.remove('active');
        
        // 次の画像の番号を計算する（最後の画像までいったら0番目に戻る）
        currentSlide = (currentSlide + 1) % slides.length;
        
        // 新しい次の画像に「active」クラスを授けて不透明（表示）にする
        slides[currentSlide].classList.add('active');
    }

    // 3. 4秒（4000ミリ秒）ごとに、上で作った切り替え命令を自動で繰り返す
    // ※ 2秒かけてフワッと変わり、2秒間静止するイメージです
    setInterval(nextSlide, 4000);
});
