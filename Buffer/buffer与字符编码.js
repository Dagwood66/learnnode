let buffer = Buffer.from("hello",'ascii');

console.log(buffer.toString());

console.log(buffer.toString("hex"));

console.log(buffer.toString("base64"));

console.log(buffer.toString("utf-8"));