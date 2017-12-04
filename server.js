
var express = require('express')
var cookieSession = require('cookie-session')
var Cookies = require('universal-cookie')

var cookieParser = require('cookie-parser')
const cookiesMiddleware = require('universal-cookie-express');

var setCookie = require('set-cookie');
var app = express()
var port = 8787

app.use(cookieParser())
app.use(cookiesMiddleware())

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2']
}))

/* read a cookie */
app.get('/hello', function(req, res) {
  console.log('Cookies: ', req.cookies) // - cookie-parse
  console.log(req.universalCookies.get('my-data'))  // - universal-cookie-express
  res.send('hello')
})

// reading a cookie from req.headers.cookie
app.get('/cookies', function(req, res) {
  console.log('headers', req.headers)
  console.log('headers - cookies', req.headers.cookie)
  const cookies = new Cookies(req.headers.cookie);	
  console.log(cookies.get('nombre'));

  cookies.set('myCat', 'Pacman', { path: '/' });
  res.send('done')
})


app.get('/', function(req, res) {
 console.log('session-', req.session)
 res.send('home')
})

// setting a cookie-session from the server (this data will be hashed to the client)
// set a cookie in the client with user data session within a cookie (data hashed)
// after seeting, the req.session, always will be getting the data user session, ready to be used (was read from the client)

app.get('/home', function (req, res) {
  // Update views
  req.session.name = 'joel'
  req.session.surname = 'gonzales'
  req.session.age = '21'
  req.session.nickname = 'joelengt'

  console.log('cookie - session ?', req.session)
 
  // Write response
  res.end(req.session.views + ' views')
})


// Setting a cookie to the client, (this data is able to be used to the client)
app.get('/setting', function(req, res) {
  console.log('setting')
  setCookie('myCookie', 'the value of the cookie', {
    domain: 'localhost',
    res: res
  });
  
  res.send('done')

})

app.listen(port, () => {
  console.log(`Server started in ${port}`)
})
