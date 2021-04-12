// app.js

const Koa = require('koa');
var bodyParser = require('koa-bodyparser');
var Router = require('koa-router');
const Employee=require('./controllers/EmployeeController');

const app = new Koa();
const koaCors = require('koa-cors')
app.use(koaCors());

app.use(bodyParser({
    extendTypes: {
      json: ['application/x-javascript'] // will parse application/x-javascript type body as a JSON string
    }
 }));

app
  .use(Employee.routes())
  .use(Employee.allowedMethods())
const PORT = process.env.PORT || 5000
app.listen(PORT);