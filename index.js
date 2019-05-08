const path = require('path')
const express = require('express')
const exphbs = require('express-handlebars')
const Client = require('node-rest-client').Client

const client = new Client()
const app = express()
const port = 8080
// The id of your deployed application is accessible
// as an envrionment variable
const appID = process.env['APP_ID']

app.engine('.hbs', exphbs({
  defaultLayout: 'main',
  extname: '.hbs',
  layoutsDir: path.join(__dirname, 'views/layouts')
}))
app.set('view engine', '.hbs')
app.set('views', path.join(__dirname, 'views'))

app.get('/', (request, response) => {
  // // Hello, it's good to see you here.
  // // Change the name and email so we know who you are!
  // let args = {
  //     data: {
  //       "firstname":"Jon",
  //       "lastname":"Snow",
  //       "email":"know@nothi.ng",
  //       "id":appID
  //     },
  //     headers: { "Content-Type": "application/json" }
  // };
  // // You are nearly there!
  // client.post("http://plant-a-tree.cleverapps.io/play", args, function (data, response) {
  //   console.log(response);
  // });
  // // If you want to dig further you should watch this: https://www.youtube.com/watch?v=CeaoTAXkIZE

  response.render('home', {
    appID: appID
  })
})
app.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on ${port}`)
})
