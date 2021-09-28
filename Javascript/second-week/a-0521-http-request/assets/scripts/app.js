const listElement = document.querySelector('.posts')
const postTemplate = document.getElementById('single-post')
const form = document.querySelector('#new-post form')
const fetchButton = document.querySelector('#available-posts button')
const postList = document.querySelector('ul')

function sendHttpRequest(method, url, data) {
  // const promise = new Promise((resolve, reject) => {
  //     const xhr = new XMLHttpRequest()

  //     xhr.open(method, url)

  //     xhr.responseType = 'json'

  //     xhr.onload = function () {
  //         if(xhr.status >= 200 && xhr.status < 300){
  //             resolve(xhr.response)
  //         }else{
  //             reject(new Error('Something went wrong!'))
  //         }
  //     }

  //     xhr.onerror = function(){
  //         console.log(xhr.response)
  //         console.log(xhr.status)
  //     }

  //     xhr.send(JSON.stringify(data))

  // })

  // return promise

  //fetch(URL) <--- GET by default
  //fetch(URL, {}) 

  const response = fetch(url, {
    method: method,
    body: JSON.stringify(data),
    headers: {
        'Content-Type': 'application/json'
    }
  }).then((result) => {
    return result.json()
  })

  return response
}

async function fetchPosts() {
  try {
    const responseData = await sendHttpRequest(
      'GET',
      'https://jsonplaceholder.typicode.com/posts'
    )

    for (const post of responseData) {
      const postElClone = document.importNode(postTemplate.content, true)
      postElClone.querySelector('h2').textContent = post.title.toUpperCase()
      postElClone.querySelector('p').textContent = post.body
      postElClone.querySelector('li').id = post.id
      listElement.appendChild(postElClone)
    }
  } catch (error) {
    console.log(error)
  }
}

async function createPost(title, content) {
  const userId = Math.random()
  const post = {
    title: title,
    body: content,
    userId: userId,
  }
  sendHttpRequest('POST', 'https://jsonplaceholder.typicode.com/posts', post)
}

fetchButton.addEventListener('click', fetchPosts)
form.addEventListener('submit', (event) => {
  event.preventDefault()
  const enteredTitle = event.currentTarget.querySelector('#title').value
  const enteredContent = event.currentTarget.querySelector('#content').value

  createPost(enteredTitle, enteredContent)
})

postList.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const postId = event.target.closest('li').id
    // console.log(postId);
    //delete the li here
    sendHttpRequest(
      'DELETE',
      'https://jsonplaceholder.typicode.com/posts/' + postId
    )
  }
})
