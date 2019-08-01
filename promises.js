// https://www.youtube.com/watch?v=DHvZLI7Db8E

let p = new Promise((resolve, reject) => {
  let a = 1 + 1
  let pass = 'I am var pass';
  let fail = 'I am var FAIL';
  if(a == 2) {
    // setTimeout(() => resolve(pass, 'helllloooo'), 1000 )
    resolve(pass, 'helllloooo')
  } else {
    reject(fail)
  }
})

let yo = async () => {
  try {
    let result = await p;
    // setTimeout(() => console.log(result), 1000)
    console.log(result)
    
    // return result

  } catch(err) {
    console.log('errrrrrr')
  }
}
yo()

// p.then((res) => res).then(res => console.log(res)).catch(pop => console.log(pop))

// console.log(yo().then(res => console.log(res)))
// let test = yo()
// console.log(test)

// let p = new Promise(function(res, rej) {

// })

/****************
 * TESTING CALLBACK FUNCTIONS
 */
/*
// functions are the params
let myFunc = (callBack1, callBack2) => {
  let test1 = callBack1(0)
  let test2 = callBack2(0)
  console.log(test1 < test2)
}

// callback function being executed
myFunc(
  (num) => {
    let newNum = num + 10
    console.log(newNum)
  },
  (num) => {
    let newNum = num - 10
    console.log(newNum)
  }
)
*/

const userLeft = true;
const userWatching = false;

watchTutorialPromise = () => {
  return new Promise((resolve, reject) => {
    if (userLeft) {
      reject({
        name: 'User left',
        message: 'plase come back :('
      })
    } else if (userWatching) {
      reject({
        name: 'Dave',
        message: 'Watching the vid'
      })
    } else {
      resolve('Thumbs up and subscribe')
    }
  })
}

watchTutorialPromise()
  .then(res => console.log(res))
  .catch(err => console.log(err.message))

const recordVideoOne = new Promise((res, rej) => {
  res('Video 1 Recorded');
})

const recordVideoTwo = new Promise((res, rej) => {
  res('Video 2 Recorded');
})

const recordVideoThree = new Promise((res, rej) => {
  res('Video 3 Recorded');
})

// recordVideoOne.then(res => res).then(res => console.log(res))
// recordVideoTwo.then(res => res).then(res => console.log(res))
// recordVideoThree.then(res => console.log(res))

let allPromises = Promise.all([
  p,
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree
]).then(res => console.log(res))

let raceAllPromises = Promise.race([
  
  recordVideoOne,
  recordVideoTwo,
  recordVideoThree,
  p
]).then(res => console.log(res))

// allPromises.then(res => console.log(res))