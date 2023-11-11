import createApp from '../app'
import request from 'supertest'

describe('Tests for Hello', () => {
  let app = null
  let server = null
  beforeAll(() => {
    app = createApp()
    server = app.listen(3001)
  })

  afterAll(async () => {
    await server.close()
  })

  describe('test for [GET] /', () => {
    test('It should return "Hello World, Learning testing at Platzi is awesome!"', async () => {
      const resp = await request(app)
        .get('/')
        .expect(200)
      expect(resp.text).toBe('Hello World, Learning testing at Platzi is awesome!')
    })
  })
})
