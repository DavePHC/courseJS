'use strict';

// function returnHours(minutes) {
//     let result = minutes / 60;
//     return console.log(result);
// }

// returnHours(40);

// const personalPlanPeter = {
//     name: "Peter",
//     age: "29",
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(obj) {
//         const {age} = obj;
//         const {languages} = obj.skills;
//         let str = `Мне ${age} и я владею языками: `;
//         languages.forEach(lang => {
//             str += `${lang.toUpperCase()} `
//         });
//         return str;
//     },
// };

// function showExperience (plan) {
//     let {skills:{exp}} = plan;
//     return exp;
// }

// function showProgrammingLangs(plan) {
//     const programmingLanguages = plan.skills.programmingLangs;
//     let result = '';
//     if (Object.keys(programmingLanguages).length !== 0) {
//         for (let key in programmingLanguages) {
//             result += `Язык ${key} изучен на ${programmingLanguages[key]}\n`
//         }
//     }
//     return console.log(result);
// }

// showProgrammingLangs(personalPlanPeter);

// personalPlanPeter.showAgeAndLangs(personalPlanPeter);

// Задание по массивам #11

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
    
//     let str = "Семья пуста"
    
//     if (arr.length > 0) {
//         str = "Семья состоит из: ";
//         arr.forEach(item => {
//             str += `${item} `;
//         })
//     }
    
//     return console.log(str);
// }

// showFamily(family);

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     arr.forEach(city => {
//         console.log(`${city.toLowerCase()}`);
//     })
// }

// standardizeStrings(favoriteCities);

// Упрожнение по объектам и массивам #13

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000,
// }

// function isBudgetEnough(data) {

//     let totalSquare = 0,
//         totalVolume = 0;

//     data.shops.forEach(shop => {
//         totalSquare += shop.width * shop.length;
//     })

//     totalVolume = totalSquare * data.height;

//     if (data.budget >= totalVolume * data.moneyPer1m3) {
//         return console.log(String("Бюджета достаточно")); 
//     } else {
//         return console.log(String("Бюджета недостаточно"));
//     }
    
// }

// isBudgetEnough(shoppingMallData);

// Упрожнение по объектам и массивам #14

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {

// }

// function getCoupeNumber(seat) {
//     if (typeof seat !== "number" || !Number.isInteger(seat) || seat < 0) {
//         return console.log( 'Ошибка. Проверьте правильность введенного номера места')
//     } else if (seat < 1 || seat > 36) {
//         return console.log( 'Таких мест в вагоне не существует')
//     } else {
//         return console.log( Math.ceil(seat / 4))
//     }
// }
