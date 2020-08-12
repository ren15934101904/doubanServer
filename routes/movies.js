const router = require('koa-router')()
const { getMovies, getDetailById, searchMovies } = require("../dao/movieDao.js")
router.prefix('/movies')

router.get('/hot', async function (ctx, next) {
  ctx.body = await getMovies(Object.assign({}, ctx.request.query, {
    state: "hot"
  }))
})

router.get('/coming', async function (ctx, next) {
  ctx.body = await getMovies(Object.assign({}, ctx.request.query, {
    state: "coming"
  }))
})

router.get('/detail', async function (ctx, next) {
  ctx.body = await getDetailById(ctx.request.query)
})

router.post('/searchMovies', async function (ctx, next) {
  ctx.body = await searchMovies(ctx.request.body)
})

module.exports = router
