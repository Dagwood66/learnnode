// 隐私泄露
let token = 'paSsWord!ASD, totally secret!';
for (let step = 0; step < 10000000; step++) {
    let buf = (new Buffer(200)).toString('ascii');
    if (buf.indexOf(token) !== -1) {
        console.log('Found at step ' + step + ': ' + buf);
    }
}