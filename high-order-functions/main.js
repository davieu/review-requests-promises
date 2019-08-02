const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2003},
  {name: "Company Two", category: "Retail", start: 1992, end: 2008},
  {name: "Company Three", category: "Auto", start: 1999, end: 2007},
  {name: "Company Four", category: "Retail", start: 1989, end: 2010},
  {name: "Company Five", category: "Technology", start: 2009, end: 2014},
  {name: "Company Six", category: "Finance", start: 1987, end: 2010},
  {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
  {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
  {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
];

const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

/*****************
 * FOREACH
 */
companies.forEach(company => {
  // console.log('forEachCompany: ', company)
  document.getElementById('inject').innerHTML += `<li>${company.name} specializes in ${company.category} and the started in ${company.start} and went bankrupt in ${company.end}</li>`
})

// for (let i = 0; i < companies.length; i++) {
//   document.getElementById('inject').innerHTML += `<li>${companies[i].name} specializes in ${companies[i].category} and the started in ${companies[i].start} and went bankrupt in ${companies[i].end}</li>`
//   console.log(companies[i].name)
// }


/******************
 * FILTER
 */

// let canDrink = [];
// for (let i = 0; i < ages.length; i++) {
//   if (ages[i] > 20) {
//     canDrink.push(ages[i])
//   }
// }
// console.log(canDrink)

let filterAges = ages.filter(age => age > 20)
console.log(filterAges) //[33, 54, 21, 44, 61, 45, 25, 64, 32]

let retailCompanies = companies.filter(company => company.category === 'Retail')
console.log('retailCompanies: ', retailCompanies)

let eightiesCompany = companies.filter(company => (company.start >= 1980 && company.start <= 1989))
console.log('eightiesCompany: ', eightiesCompany)

let lastedTenYears = companies.filter(company => (company.end - company.start >= 10))
console.log('lastedTenYears: ', lastedTenYears)

/***************************
 * MAP
 */
// Create array of company names
let companyNames = companies.map(company => company.name);
console.log(companyNames);

// Create array of company start dates
let companyStartDates = companies.map(function(company) {
  return company.start;
});
console.log(companyStartDates);

// Create array of company end dates
let companyEndDates = companies.map(company => company.end);
console.log(companyEndDates);

let companyDuration = companies.map(company => `${company.name}: [${company.start} - ${company.end}]`)
console.log(companyDuration);

const ageSquare = ages.map(age => Math.sqrt(age));
console.log(ageSquare);

const doubleAges = ageSquare.map(age => age * 2);
console.log(doubleAges);

const chainedAges = ages
  .map(age => age * 2)
  .map(ageDoubled => ageDoubled * 2)
  console.log(chainedAges);

/***************************
 * SORT
 */

// with sort it works with returning 1 or -1. And that is how it compares the companies.
// Sort start dates in ascending. lowest to highest
const sortedCompanies = companies.sort((comp1, comp2) => {
  if (comp1.start > comp2.start) {
    return 1;
  } else {
    return -1;
  }
});
console.log(sortedCompanies);

// SUPER SHORTHAND
// sorts ascending - lowest to highest
// .sort((a, b) => a - b)
// sorts descending - highest to lowest
// .sort((b, a) => a - b)

// Same as above but refactored with ternary
const sortedCompanies2 = companies.sort((a, b) => (a.start > b.start) ? 1 : -1)
console.log(sortedCompanies2)

// Using sort by itself WILL NOT WORK to sort properly!!!!!
const sortAges1 = ages.sort();
console.log(sortAges1) //[12, 13, 15, 16, 20, 21, 25, 32, 33, 44, 45, 5, 54, 61, 64]

// Sort ages
const sortAges2 = ages.sort((a, b) => (a > b ? 1 : -1))
console.log(sortAges2) //[5, 12, 13, 15, 16, 20, 21, 25, 32, 33, 44, 45, 54, 61, 64]

/****************************
 * REDUCE
 */

let ageSumFor = 0;
for (let i = 0; i < ages.length; i++) {
  ageSumFor += ages[i];
}
console.log(ageSumFor);

//takes a second param which is 0. The zero is the initial value
const ageSum = ages.reduce((total, age) => total + age, 0)
console.log(ageSum)

// Get total years for all companies
const totalYears = companies.reduce((total, company) => total + (company.end - company.start), 0);
console.log(totalYears)

/**********************************8
 * COMBINE METHODS
 */
const ages2 = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// multiplies ages by 2, keep ages greater or equal to 40, sort from least to greatest and lastly reduce/add all ages 
const combined = ages2
  .map(age => age * 2) //[66, 24, 40, 32, 10, 108, 42, 88, 122, 26, 30, 90, 50, 128, 64]
  .sort((a, b) => a - b) //[10, 24, 26, 30, 32, 40, 42, 50, 64, 66, 88, 90, 108, 122, 128]
  .filter(age => age >= 40)//[40, 42, 50, 64, 66, 88, 90, 108, 122, 128]
  .reduce((a, b) => a + b, 0) //798

  console.log(combined)