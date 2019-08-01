 const dodat = (onsuccess, onerror) => {
  const n = parseInt(Math.random()*1000)
  if (n % 2 === 0) {
    setTimeout(() => onsuccess(n), 1000)
  } else {
    setTimeout(() => onerror(n), 1000)
  }
}

// dodat( x => console.log("SUCCESS " + x), x => console.error("FAIL " + x))

function dodat2 () { 
  return new Promise((resolve, reject) => {
    const n = parseInt(Math.random()*1000)
    if (n % 2 === 0) {
      setTimeout(() => resolve(n), 1000)
    } else {
      setTimeout(() => reject(n), 1000)
    }
  })
}

/*
dodat2()
.then(e => {console.log(`success ${e}`); return dodat2();})
.then( e => {console.log(`second succes baby ${e}`); return dodat2();})
.then(e => console.log(`seucces 3 ${e}`))
.catch(e => console.error(`error ${e}`))
.finally(e => console.log("finally im here"))
*/

async function executeDodat2() {
  try {
    const n = await dodat2()
    console.log(`success ${n}`)
    const n1 = await dodat2()
    console.log(`second call ${n1}`)
    const n2 = await dodat2()
    console.log(`second call ${n2}`)
    
  }
  catch(e){ 
    console.error(`failed ${e}`)
  }
  finally {
    console.log("finally done")
  }
}

let test = executeDodat2();
// test.then(res => console.log(res)).catch(err => console.log(err))