//Using Callbacks

const fakeRequestCallback = (url, success, failure) => {
  const delay = Math.floor(Math.random() * 4500) + 500
  console.log('delay:', delay)

  setTimeout(() => {
    if (delay > 4000) {
      failure('Connection Timeout :<')
    } else {
      success(`Here's your fake data from ${url}`)
    }
  }, delay)
}

//Using Promise
const fakeRequestPromise = (url) => {
  return new Promise((resolve, reject) => {
    const delay = Math.floor(Math.random() * 4500) + 500
    console.log('delay:', delay)

    setTimeout(() => {
      if (delay > 4000) {
        reject('Connection Timeout :<')
      } else {
        resolve(`Here's your fake data from ${url}`)
      }
    }, delay)
  })
}

//function calls....

// fakeRequestCallback(
//   'toys.com/cat1',
//   function (response) {
//     console.log('IT WORKED!')
//     console.log(response)
//   },
//   function (err) {
//     console.log('ERROR!!!')
//     console.log(err)
//   }
// )


// fakeRequestPromise('cats.com/page1')
//     .then(() => {
//         console.log('SUCCESS!!!! (pg1)');

//         fakeRequestPromise('cat.com/page2')
//             .then((data) => {
//                 console.log('SUCCESS!!!! (pg2)');
//                 console.log(data);
//             })
//             .catch((err) => {
//                 console.log('OH NO!!! ERROR!!! (pg2)');
//                 console.log(err);
//             })
//     })
//     .catch(() => {
//         console.log('OH NO!!! ERROR!!! (pg1)');
//     })

fakeRequestPromise('cats.com/page1')
    .then((data) => {
        console.log('SUCCESS!!!! (pg1)', data);
        return fakeRequestPromise('cat.com/page2')
    })
    .then((data) => {
        console.log('SUCCESS!!!! (pg2)',data)
    })
    .catch(() => {
        console.log('OH NO!!! ERROR!!!');
    })

