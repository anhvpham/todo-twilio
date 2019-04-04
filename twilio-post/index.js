const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const pool = require('./db/db')
const MessagingResponse = require('twilio').twiml.MessagingResponse
const pino = require('koa-pino-logger')()

const app = new Koa()
app.use(bodyParser())
app.use(pino)


app.use(async ctx => {

	
  const dbtitle = await ctx.request.body
  const item = await show(dbtitle)


const twiml = new MessagingResponse();
  twiml.message("Todo item inserted successfully!");
  ctx.res.writeHead(200, { 'Content-Type': 'text/xml' });
  ctx.res.end(twiml.toString());
})

async function show(title) {
  try {
    
    const itemData = await pool.query(`INSERT INTO todoList 
          (todoItem, todoDateAdded, todoStatus, todoDueBy)
       VALUES ("${item.todoItem}", NOW(), ${item.todoStatus}, "${item.todoDueBy}")`)
    return itemData

  } catch (error) {
    return error
  }
}

module.exports = app.callback()

