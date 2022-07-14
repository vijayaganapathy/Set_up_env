// const http = require('http')
var myApp = require('./index');

const port = process.env.PORT || 3000

// const server = http.createServer((req, res) => {
//   res.statusCode = 200
//   res.setHeader('Content-Type', 'text/html');
//   res.end('<h1>Hello, Worlad!</h1>');
// })

myApp.app.listen(port, () => {
  console.log(`Server running at port ${port}`)
})
