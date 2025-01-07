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

const family = ['Peter', 'Ann', 'Alex', 'Linda'];

function showFamily(arr) {
    
    let str = "Семья пуста"
    
    if (arr.length > 0) {
        str = "Семья состоит из: ";
        arr.forEach(item => {
            str += `${item} `;
        })
    }
    
    return console.log(str);
}

showFamily(family);

const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

function standardizeStrings(arr) {
    arr.forEach(city => {
        console.log(`${city.toLowerCase()}`);
    })
}

standardizeStrings(favoriteCities);

// Упрожнение по объектам и массивам #13 

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000,
    calculatingTotalArea: function () {
        let totalArea = 0;
        this.shops.forEach((item) => {
            totalArea += item.width * item.length;
        })
        return Number(totalArea);
    },
    calculatingTotalVolume: function () {
        let totalVolume = this.calculatingTotalArea() * this.height;
        return totalVolume;
    },
    calculatingMonthlyBudget: function () {
        this.totalBudget = this.calculatingTotalVolume() * this.moneyPer1m3;
    }
}

shoppingMallData.calculatingTotalArea();
shoppingMallData.calculatingTotalVolume();
shoppingMallData.calculatingMonthlyBudget();


function isBudgetEnough(data) {
    if (data.totalBudget <= data.budget) {
        return String("Бюджета достаточно");
    } else {
        return String("Бюджета недостаточно");
    }
}

isBudgetEnough(shoppingMallData);