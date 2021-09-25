

const willGetYouACat = new Promise((resolve, reject) => {

    const rand = Math.random()
    console.log(rand);

    
    if(rand < 0.5){
        resolve()
    }else{
        reject()
    }
})

willGetYouACat.then(() => {
    console.log('YAY! GOT ME A CAT');
}).catch(() => {
    console.log(':< NO CAT');
})