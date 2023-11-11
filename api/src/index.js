import { config } from './config'
import createApp from './app'

const app = createApp()

app.listen(config.port, (err) => {
  console.log(`Listening http://localhost:${config.port}`)
  if (err) {
    console.error('Error: ', err)
  }
})
