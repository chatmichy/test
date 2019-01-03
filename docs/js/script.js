var boxEl = document.querySelector('a-box');
var box2El = document.querySelector('#box2');

  // カーソルがぶつかったら拡大
  boxEl.addEventListener('mouseenter', function () {
    boxEl.setAttribute('scale', {x: 5, y: 5, z: 5});
    console.log("mouseenter");
  });

  // カーソルが離れたら元にもどす
  boxEl.addEventListener('mouseleave', function () {
    boxEl.setAttribute('scale', {x: 2, y: 2, z: 2});
    console.log("mouseleave");
  });

  // カーソルがぶつかったら拡大
  box2El.addEventListener('mouseenter', function () {
    box2El.setAttribute('scale', {x: 2, y: 2, z: 2});
    console.log("mouseenter");
  });

  // カーソルが離れたら元にもどす
  box2El.addEventListener('mouseleave', function () {
    box2El.setAttribute('scale', {x: 1, y: 1, z: 1});
    console.log("mouseleave");
  });
