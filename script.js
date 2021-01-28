var num = +prompt('введите число ');
var power = +prompt('введите степень');
var result = num;

for (let i = 1; i < power ; i++) {
  result = result * num;
}
console.log(result);


var amount, indent, end, s;
while (true) {
  amount = +prompt('введите количество ступенек: ');
  if (amount == 0 || amount % 1 != 0) {
    continue;
  } 
  else if (amount == NaN || amount == undefined || amount == '') {
    amount = 5;
    break;
  }
  else break;
}
while (true){
  indent = prompt('введите символ отступов');
  if (indent == NaN || indent == undefined || indent == ''){
    continue;
  }
  else{
    break;
  }
}
while (true) {
  end = prompt('введите конечный символ');
  if (end == NaN || end == undefined || end == '') {
    continue;
  }
  else {
    break;
  }
}

for (let i = 0; i < amount; i++) {
  s = '';
  for (let j = 0; j < i; j++) {
    s += indent;
  }
  s += end;
  console.log(s);
}