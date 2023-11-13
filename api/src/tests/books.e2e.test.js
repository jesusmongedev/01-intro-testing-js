import request from 'supertest'
import { generateManyBooks } from '../fakes/book.fake'
import createApp from '../app'

const mockGetAll = jest.fn()

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {}
})))

describe('Tests for books', () => {
  let app = null
  let server = null

  beforeAll(() => {
    app = createApp()
    server = app.listen(3001)
  })

  afterAll(async () => {
    await server.close()
  })

  describe('test for [GET] /api/v1/books', () => {
    test('It should return a list of books', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(3)
      mockGetAll.mockResolvedValue(fakeBooks)
      // Act
      const { body } = await request(app).get('/api/v1/books')

      console.log('body', body)
      console.log('fakeBooks', fakeBooks)
      // Assert
      expect(body.length).toEqual(fakeBooks.length)
    })
  })
})
