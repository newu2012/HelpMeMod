import * as express from 'express'
import * as logger from 'morgan'
import * as cookieParser from 'cookie-parser'
import * as cors from 'cors'

//  TODO move routing to /routes/router.js
import { router as homeRouter } from './routes/home'
import { router as templatesRouter } from './routes/templates'
// Check todo above

import { Template } from './models/template'
// const configureRouter = require("/routes/router");

export const app = express.default()
const port = 8080

app.use(cors.default())
app.use(logger.default('dev'))
app.use(express.json())
app.use(cookieParser.default())

const vueAppPath = '/Vue/dist'
app.use(express.static(process.cwd() + vueAppPath))

app.use('/', homeRouter)
app.use('/template', templatesRouter)
Template.createZip().then(() => { console.log('Mod template zip created') })

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})
