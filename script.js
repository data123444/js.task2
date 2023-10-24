
// დავალება:

// ციკლის საშუალებით გამოიტანეთ რიცხვები 5დან - 100მდე
let i = [5];
for (let i = 5; i < 101; i++) {
    console.log(i);
}

// 2მოცემულია მასივი:
// let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
// ციკლის საშუალებით გამოიტანეთ მხოლოდ ის რიცხვები რომლებიც მეტია 0 ზე და ნაკლებია 10ზე
let array1= [1, 2, 4, -1, -3, 8, 7, 0, -5, 18, 12];
for (let i = 0; i < array1.length; i++) {
    if (array1[i] > 0 && array1[i] < 10) {
      console.log(array1[i]);
    }
  }
//  3 მოცემულია მასივი
//   let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
//   ციკლის საშუალებით შეამოწმეთ, თუ ამ მასივში არის რიცხვი 5 - მაშინ დალოგეთ - ‘არის’ და გააჩერეთ ციკლი
  
let array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (let i = 0; i < array2.length; i++) {
  if (array2[i] === 5) {
    console.log('true');
    break; 
  }
}
// 4 მოცემულია მასივი:
// let array3= [1, 2, 3, 4, 5];
// ციკლის საშუალებით გამოთვალეთ რიცხვების ჯამი
let array3 = [1, 2, 3, 4, 5];
let sum = 0;

for (let i = 0; i < array3.length; i++) {
  sum += array3[i];
}

console.log( + sum);

// 5 მოცემულია მასივი:
// let array4 = [1, 2, 3, 7, 6, 9];
// გამოთვალეთ საშუალო არითმტიკული (ჯამი გავყოთ ელემნტების რაოდენობაზე)


let array4 = [1, 2, 3, 7, 6, 9];
let sum2 = 0;
for (let i = 0; i < array4.length; i++) {
  sum2 += array4[i];
}

let arr = sum2 / array4.length;

console.log(arr);



// 6 მოცემულია მასივი
// გამოიტანეთ ყველა რიცხვი 7 ის გარდა ( continue)
 let array5 = [1, 2, 3, 7, 6, 9];
 let leave = 3;
 console.log(array5.filter((e,i) => i !== leave));

// 7task
let user = {
    firstname: "giorgi",
    lastname: "smith",
    age: 25,
    studentstatus: "active"
  };

  console.log(user.studentstatus);

//   8 
const user3 = {
  name: 'giorgi',
  age: 20,
  studentstatus: 'active'
};

if (user3.age < 18 && user3.studentstatus === 'active') {
  console.log('hello');
} else if (user3.name === 'levani') {
  console.log(`hello ${user.name}`);
} else if (user3.studentstatus === 'active' || user3.age < 25) {
  console.log('hello world');
} else {
  console.log('error');

}
// 9
let array = [
    [2, -3, 5, 10],
    [25, -24, -11, 100],
    [-6, -7, 10],
  ];
  
  for (let i = 0; i < array.length; i++) {

    for (let j = 0; j < array[i].length; j++) {
      if (array[i][j] > 0) {
        console.log(array[i][j]);
      }
    }
  }
//   10
let array9 = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

let result8 = array9.filter(function (number) {
    return number % 2 !== 0; 
  });
  
  console.log(result8);

  let arrays = [2, 3, 5, 10, 25, 24, 11, 100, 6, 7, 10];

  let result = arrays.filter(function (number) {
    return number % 2 === 0; 
  });
  
  console.log(result);
//   11
let users = [
    { username: 'giorgi', status: false },
    { username: 'levani', status: false },
    { username: 'anna', status: true }
];

let activeUsers = users.filter(function (user) {
  return user.status === true;
});

console.log(true);







