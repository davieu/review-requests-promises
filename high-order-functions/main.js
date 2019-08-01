const companies= [
  {name: "Company One", category: "Finance", start: 1981, end: 2004},
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