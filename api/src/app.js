import express from 'express'
import cors from 'cors'
import routerApi from './routes'
import errorMiddleware from './middlewares/error'

const createApp = () => {
  const app = express()
  app.use(cors())
  app.use(express.json())
  app.use(errorMiddleware)

  app.get('/', (req, res) => {
    res.send('Hello World, Learning testing at Platzi is awesome!')
  })

  routerApi(app)
  return app
}

export default createApp
