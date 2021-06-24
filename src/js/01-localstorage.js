// const user = {
//     name: 'Mango',
//     age: 2,
// };

// console.log(JSON.stringify(user));//делает строку из обьекта

// const saveUserData = '{ "name": "Mango", "age": 2 }';

// console.log(JSON.parse(saveUserData));//делает обьект из строки (парсит строку)

localStorage.setItem('my-data', JSON.stringify({ "name": "Mango", "age": 2 }));

const saveData = localStorage.getItem('my-data');
console.log(saveData);

const parsedData = JSON.parse(saveData);
console.log(parsedData);