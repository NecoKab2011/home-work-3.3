const result = 5 + 5 + "5";
console.log(result);
console.log(typeof result);

const myEmail = "mykolakabyn10@gmail.com";
const checkEmail = myEmail.includes("@");
if (checkEmail === true) {
  console.log("Це Ваша електронна пошта");
} else {
  console.log("Це не Ваша електронна пошта");
}

const text1 = "My";
const text2 = "name";
const text3 = "is";
const fullName = `${text1} ${text2} ${text3}`;
console.log(`${fullName} Viktor`);

const userName = "Миколо";
const payment = 1500000;
alert(`Дякуємо, ${userName}! До сплати ${payment} гривень`);