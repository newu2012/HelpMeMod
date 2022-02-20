import * as express from 'express'

import { getTemplate } from '../controllers/templateController'
export const router = express.Router()

router.get('/', getTemplate)
