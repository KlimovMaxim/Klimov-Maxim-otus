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
        const reduceCalling = async f => {
            await f().then(x => memo = reduce.call(promiseReduce, memo, x));
        };
        
        (async () => {
            for (f of asyncFunctions) await reduceCalling(f);
            resolve(memo);
        })();
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