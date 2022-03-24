/**
 * var,let,constの使い分け
 */
// var val1 = "var変数";
// console.log(val1);

// val1 = "上書き";
// console.log(val1);

// var val1 = "再宣言";
// console.log(val1);

// let val2 = "let変数(上書き可能再宣言不可)";
// console.log(val2);

// const val3 = "const変数(上書き再宣言不可)";
// console.log(val3);

// const val4 = {
//   name: "じゃけえ",
//   age: "25"
// };
// console.log(val4);

// val4.name = "jak";
// console.log(val4);

// val4.addres = "Odaiba";

// constで定義してもプロパティの書き換えは可能、配列も同様
// const val5 = ["dog", "cat"];
// console.log(val5);

// val5.push("monkey");

/**
 * テンプレート文字列
 */
// const name = "じゃけえ";
// const age = "25";
// 私の名前はじゃけえです。年齢は25歳です。
//従来の方法
// const message1 = "私の名前は" + name + "です。年齢は" + age + "です。";
// console.log(message1);

//テンプレート文字列
// const message2 = `私の名前は${name}です。年齢は${age}です。`;
// console.log(message2);

/**
 * アロー関数
 */
//従来の関数
// function func1(str) {
//   return str;
// }
// const func1 = function (str) {
//   return str;
// };
// console.log(func1("func1です"));

//アロー関数
// const func2 = (str) => {
//   return str;
// };
//1行の場合は省略も可能
// const func2 = (str) => str;
// console.log(func2("func2です"));

// const func3 = (num1, num2) => {
//   return num1 + num2;
// };
// console.log(func3(10, 20));

/**
 * 分割代入
 */
// const myProfile = {
//   name: "じゃけえ",
//   age: 25
// };

// const message1 = `名前は${myProfile.name}です。年齢は${myProfile.age}歳です。`;
// console.log(message1);

//分割代入
// const { name, age } = myProfile;
// const message2 = `名前は${name}です。年齢は${age}歳です。`;
// console.log(message2);

// const myProfile = ["じゃけえ", 25];
// const message3 = `名前は${myProfile[0]}です。年齢は${myProfile[1]}歳です`;
// console.log(message3);

// const [name, age] = myProfile;
// const message4 = `名前は${name}です。年齢は${age}です。`;
// console.log(message4);

/**
 * デフォルト値、引数など
 */
// const sayHello = (name = "ゲスト") => console.log(`こんにちは！${name}さん`);
// sayHello("じゃけえ");

/**
 * スプレッド構文
 */
//配列の展開
// const arr1 = [1, 2];
// console.log(arr1);
// console.log(...arr1);

// const sumFunc = (num1, num2) => console.log(num1 + num2);
// sumFunc(arr1[0], arr1[1]);
// sumFunc(...arr1);

//まとめる
// const arr2 = [1,2,3,4,5];
// const [num1,num2,...arr3] = arr2;
// console.log(num1);
// console.log(num2);
// console.log(arr3);

//配列のコピー、結合
// const arr4 = [10, 20];
// const arr5 = [30, 40];

// const arr6 = [...arr4];
// console.log(arr6);

// const arr7 = [...arr4, ...arr5];
// console.log(arr7);

//=で繋ぐだけだと参照も引き継いでしまう
// const arr8 = arr4;
// arr8[0] = 100;
// console.log(arr4);

/**
 * mapやfilterを使った配列の処理
 */
const nameArr = ["田中", "山田", "じゃけえ"];
// for (let index = 0; index < nameArr.length; index++) {
//   console.log(`${index + 1}番目は${nameArr[index]}です`);
// }

// mapは引数に配列の要素を指定できるもの
// const nameArr2 = nameArr.map((name) => {
//   return name;
// });
// console.log(nameArr2);

// mapで第2引数を指定するとインデックスを渡せる
// nameArr.map((name, index) => console.log(`${index + 1}番目は${name}です`));

// filterは配列の要素にフィルターをかけて条件に一致するものを返す
// const numArr = [1, 2, 3, 4, 5];
// const newNumArr = numArr.filter((num) => {
//   return num % 2 === 0;
// });
// console.log(newNumArr);

// const newNameArr = nameArr.map((name) => {
//   if (name === "じゃけえ") {
//     return name;
//   } else {
//     return `${name}さん`;
//   }
// });
// console.log(newNameArr);

/**
 * 三項演算子
 */
// ある条件 ? 条件がtrueの時 : 条件がfalseの時

// const val1 = 1 < 0 ? "trueです" : "falseです";
// console.log(val1);

// const num = "1300";
// console.log(num.toLocaleString());

// const formattedNum = typeof num === 'number' ? num.toLocaleString() : '数値を入力してください';
// console.log(formattedNum)

// const checkSum = (num1, num2) => {
//   return (num1 =
//     num1 + num2 > 100 ? "100を超えています！！" : "許容範囲を超えています！！");
// };
// console.log(checkSum(40, 60));

/**
 * 論理演算子の本当の意味を知ろう && \\
 */

// const flag1 = true;
// const flag2 = false;

// if (flag1 || flag2) {
//   console.log("1か2はtrueです");
// }

// if (flag1 && flag2) {
//   console.log("1も2もtrueです");
// }

// || は左側がfalseなら右側を返すという意味
// const num = 100;
// const fee = num || "金額未設定です";
// console.log(fee);

// && は左側がtrueなら右側を返す
// const num2 = 100;
// const fee2 = num2 && "何か設定されました";
// console.log(fee2);
