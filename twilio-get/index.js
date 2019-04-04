const Koa = require('koa')
const bodyParser = require('koa-bodyparser')
const pool = require('./db/db')
const pino = require('koa-pino-logger')()

const app = new Koa()
app.use(bodyParser())
app.use(pino)

app.use(async ctx => {  
  const dbtitle = await ctx.request.body.title  
  const item = await show(dbtitle)
  ctx.body = item
  //ctx.log.info('This Is A Test')
})

async function show(dbtitle) {
    
  try{
    const itemData = await pool.query(`SELECT todoItem FROM todoList WHERE todoItem LIKE '%${title}%'`)
    return itemData
  } catch (error) {
    return error

  }
 
}
 
  

module.exports = app.callback()



