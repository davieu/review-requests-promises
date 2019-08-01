// https://www.youtube.com/watch?v=PoRJizFvM7s
const posts = [
  { title: `Post`, body: 'This is post one' },
  { title: `Post`, body: 'This is post two' }
];


let postBodyDom = document.getElementById('post-body')

getPosts = () => {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title} ${index + 1}: ${post.body} --- index: ${index}</li>`
    })
    document.querySelector('.posts').innerHTML = output
  }, 1000);
}

createPost = (post) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);
      const error = false;
      if (!error) {
        resolve();
      } else {
        reject('ERROR OCCURRED');
      }
    }, 2000);
  })
}

addCustomPost = () => {
  if (postBodyDom.value) {
      createPost({title: `Post`, body: postBodyDom.value})
        .then(getPosts)
        .catch(err => console.log(err));
      postBodyDom.value = ''
  }
}

document.getElementById('add-post').addEventListener('click', addCustomPost)

createPost({ title: 'Post', body: 'This is post three'})
  .then(getPosts)
  .catch(err => console.error(err))


/**********************************
 * ASYNC AWAIT
 */
myAsyncFunc = async () => {
  try {
    await createPost({ title: 'Post', body: 'This is post four'})
    getPosts();
  } catch(err) {
    console.error(err)
  }
}

myAsyncFunc();




/*******************************
 * PROMISE.all and messing with http get requests
 */
const promise1 = Promise.resolve('prom1')
const promise2 = Promise.resolve('22222')
const promise3 = new Promise((resolve, reject) => {
        //call resolve //call resolve in 2000 milsecs //pass in 'Goodbye
  setTimeout(resolve, 2000, 'Goodbye')
  // setTimeout(() => {
  //   resolve('Goodbye')
  // }, 2000)
});
// For fetch you need to use two .then because you have to format it to json. the second .then will give you the data
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())

Promise.all([promise1, promise2, promise3, promise4])
  .then(res => console.log(res))
  .catch(err => console.err(err))

// fetch needs 2 .then The first one is to format it with json() 2nd .then to get data
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(res => console.log('thenFetch', res))

// axios cdn through script in html
const axiosGET = axios.get('https://jsonplaceholder.typicode.com/users')
  .then(res => console.log('thenAxios', res.data))



/********************************
 * Async Await with requests
 */

fetchReq = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await response.json()
    console.log('FETCHasync', data)
  } catch(err) {
    console.error(err)
  }
}

fetchReq()

axiosReq = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users')
    console.log('AXIOSasync', response.data)
    return response.data
  } catch(err) {
    console.error(err)
  }
}

let users = axiosReq();

changeUserArray = async () => {
  let users = await axiosReq();
  users.forEach(user => user.name = 'AYYY')
  console.log('changeUSERSnames', users)
}

changeUserArray();