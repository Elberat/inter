console.log('start');

setTimeout(() => {
    console.log('timer 1');
    setTimeout(() => {
        console.log('timer 2');
    }, 0);
}, 0);

setTimeout(() => {
    console.log('timer 3');
}, 0);

console.log('end');
