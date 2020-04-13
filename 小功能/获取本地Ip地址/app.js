let os = require("os");

let networks = os.networkInterfaces();
let ip = "localhost";

for (let key in networks) {
    let network = networks[key];
    for (let i = 0; i < network.length; i++) {
        let family = network[i].family;
        let address = network[i].address;
        let internal = network[i].internal;
        if (family === 'IPv4' && address !== '127.0.0.1' && !internal) {
            ip = address;
        }
    }
}

console.log(ip);


