var fn1 = () => {
    console.log('fn1')
    return Promise.resolve(1)
}

var fn2 = () => new Promise(resolve => {
    console.log('fn2')
    setTimeout(() => resolve(2), 1000)
})


function promiseReduce(asyncFunctions, reduce, initialValue) {
    return new Promise(function (resolve, reject) {
        let memo = initialValue;

        const reduceCalling = f => {
            //console.log(memo,f);
            f().then(x => memo = reduce.call(promiseReduce, memo, x));
        };

        for (f of asyncFunctions) reduceCalling(f);
        //asyncFunctions.forEach(f => reduceCalling(f));

        
        Promise.all(asyncFunctions).then(resolve(memo));
    })
}



promiseReduce(
        [fn1, fn2],
        function (memo, value) {
            console.log('reduce')
            return memo * value
        },
        1
    )
    .then(a => console.log(a));