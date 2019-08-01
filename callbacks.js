// https://www.youtube.com/watch?v=PoRJizFvM7s

const posts = [
  { title: 'Post 1:', body: 'This is post one' },
  { title: 'Post 2:', body: 'This is post two' }
];

getPosts = () => {
  setTimeout(() => {
    let output = '';
    posts.forEach((post, index) => {
      output += `<li>${post.title} ${post.body} --- index: ${index}</li>`
    })
    document.querySelector('.posts').innerHTML = output
  }, 1000);
}

createPost = (post, callback) => {
  setTimeout(() => {
    posts.push(post);
    callback();
  }, 2000);
}

let postTitleDom = document.getElementById('post-title')
let postBodyDom = document.getElementById('post-body')

let postCount = 4

addCustomPost = () => {
  if (postBodyDom.value) {
    postCount += 1
      createPost({title: `Post ${postCount}: `, body: postBodyDom.value}, getPosts)
      postBodyDom.value = ''
  }
}

document.getElementById('add-post').addEventListener('click', addCustomPost)

createPost({ title: 'Post 3:', body: 'This is post three'}, getPosts)
createPost({ title: 'Post 4:', body: 'This is post four'}, getPosts)


