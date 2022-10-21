const kakugen_items=[
    // "格言１","格言２","格言３"/*値は０から数える*/
　　"人生の問題を解決するには、まず針箱を整頓せよ（カーライル）",
 　 "常識とは、18歳までに身に付けた偏見のコレクションである（アインシュタイン）",
 　 "人はその制服どおりの人間になる（ナポレオン）",
 　 "神は水だけを造った。しかし人はワインを作った（ユーゴー）",
　  "善にも強ければ、悪にも強いというのが、いちばん強力な性格である（ニーチェ）"
]
// const test =kakugen_items.length -1;
// alert(test);
// alert(kakugen_items);
// alert(kakugen_items[0]);
// alert(Math.random()*4);
// const test2 = Math.floor(Math.random()*kakugen_items.length);
// alert(kakugen_items[test2]);

const btn = document.getElementById("gacha-button");
const disp = document.getElementById("gacha-display");
// ターゲット.addEventListener("click", function() {
//   // 実行する処理
// });
btn.addEventListener("click", function(){
//   alert("イベント感知しました");
  const num = Math.floor(Math.random()* kakugen_items.length);
  disp.innerHTML = kakugen_items[num];
})
