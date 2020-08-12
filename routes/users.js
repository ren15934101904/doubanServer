const router = require('koa-router')()
const { login } = require('../dao/usersDao')
var jwt = require('jsonwebtoken');

router.prefix('/users')

router.post('/login', async function (ctx, next) {
  const result = {}
  const res = await login(ctx.request.body);
  if(res[0]){
    const {username,password,_id} = res[0];
    const token = jwt.sign({id:_id,username,exp: Date.now() / 1000 + (60 * 60 * 24)},"PRIVATE_KEY")
    result.userInfo = {username,password};
    result.token= token;
  }
  ctx.body = result;
  
})



module.exports = router
