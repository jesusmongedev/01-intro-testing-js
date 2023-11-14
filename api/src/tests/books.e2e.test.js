import request from 'supertest'
import { MongoClient } from 'mongodb'

import createApp from '../app'
import { config } from '../config'

const DB_NAME = config.dbName
const MONGO_URI = config.dbUrl
const BOOK_COLLECTION = config.bookCollection

describe('Tests for books', () => {
  let app = null
  let server = null
  let database = null
  let client = null

  beforeAll(async () => {
    app = createApp()
    server = app.listen(3001)
    client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    await client.connect()
    database = client.db(DB_NAME)
  })

  afterAll(async () => {
    await server.close()
    await database.dropDatabase()
    await client.close() // Close the connection
  })

  describe('test for [GET] /api/v1/books', () => {
    test('It should return a list of books', async () => {
      // Arrange
      const seedData = await database.collection(BOOK_COLLECTION).insertMany([
        {
          name: 'Book 1',
          year: 1995,
          author: 'J Monge'
        },
        {
          name: 'Book 2',
          year: 1996,
          author: 'J Monge'
        },
        {
          name: 'Book 3',
          year: 1997,
          author: 'J Monge'
        }
      ])
      // Act
      const { body } = await request(app).get('/api/v1/books')

      console.log('body', body)
      console.log('seedData', seedData)
      // Assert
      expect(body.length).toEqual(seedData.insertedCount)
    })
  })
})
