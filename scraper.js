// Add packages
const urllib = require('urllib');

urllib.request('https://cnodejs.org/', (err, data, res) => {
    if (err) {
        throw err;  // error handling
    };

    console.log(res.statusCode);
    console.log(res.headers);
    console.log(data.toString());
});