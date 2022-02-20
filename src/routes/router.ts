
export function configureRouter (app) {
  const homeRouter = require('./routes/home')
  const templatesRouter = require('./routes/templates')

  app.use('/', homeRouter)
  app.use('/template', templatesRouter)
}
