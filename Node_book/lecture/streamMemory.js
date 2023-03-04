
/** stream 방식으로 큰 파일 읽을 때 메모리 */
const fs = require('fs');

console.log('before', process.memoryUsage().rss);

const readStream = fs.createReadStream('./big.txt');
const writeStream = fs.createWriteStream('./big3.txt');
readStream.pipe(writeStream);
readStream.on('end', () => {
    console.log('stream : ', process.memoryUsage().rss);
})
