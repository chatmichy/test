var box1El = document.querySelector('#box1');
var box2El = document.querySelector('#box2');

  // �J�[�\�����Ԃ�������g��
  box1El.addEventListener('mouseenter', function () {
    box1El.setAttribute('scale', {x: 5, y: 5, z: 5});
    console.log("mouseenter");
  });

  // �J�[�\�������ꂽ�猳�ɂ��ǂ�
  box1El.addEventListener('mouseleave', function () {
    box1El.setAttribute('scale', {x: 2, y: 2, z: 2});
    console.log("mouseleave");
  });

  // �J�[�\�����Ԃ�������g��
  box2El.addEventListener('mouseenter', function () {
    box2El.setAttribute('scale', {x: 2, y: 2, z: 2});
    console.log("mouseenter");
  });

  // �J�[�\�������ꂽ�猳�ɂ��ǂ�
  box2El.addEventListener('mouseleave', function () {
    box2El.setAttribute('scale', {x: 1, y: 1, z: 1});
    console.log("mouseleave");
  });
