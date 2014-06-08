function showBMI() {
  var h = document.BMIform.height.value;
  var w = document.BMIform.weight.value;

  if ( h == "" || w == "" ){
    alert('身長と体重を入力してください');
  } else {
    var bmi = calcBMI(h, w);
    document.getElementById('result').textContent = bmi;
  }

  return false;
}

function calcBMI(h, w) {
  h = h / 100; // 身長をcmからmに変換
  var bmi = w / (h * h);
  bmi = Math.round(bmi * 10) / 10; // 小数点第二位まで四捨五入
  return bmi;
}
