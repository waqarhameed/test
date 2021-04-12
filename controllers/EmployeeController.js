var Router = require('koa-router');
var router = new Router();

const logsRepository=require('../Repository/EmployeeRepository')

router.post('/api/InsertEmployee', async function(ctx,next){

 await   logsRepository.insertEmployee(ctx);
}) 
router.get('/api/GetEmployee', async function(ctx,next){

   await  logsRepository.getEmployee(ctx,next);
})

module.exports=router;