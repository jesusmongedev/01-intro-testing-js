import BooksService from './books.service'

const fakeBooks = [
  {
    _id: '1',
    title: 'Book 1'
  },
  {
    _id: '2',
    title: 'Book 2'
  }
]

const MongoLibStub = {
  getAll: () =>
    Promise.resolve(fakeBooks),
  create: () =>
    Promise.resolve(fakeBooks[0])
}

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub))

describe('Test for BooksService', () => {
  // Arrange
  let service
  beforeAll(() => {
    service = new BooksService()
  })
  beforeEach(() => {
    jest.clearAllMocks()
  })

  describe('test for getBooks', () => {
    test('should return a list of books', async () => {
      // Arrange
      // Act
      const books = await service.getBooks()
      console.log('books', books)
      // Assert
      expect(books.length).toEqual(2)
    })
    test('should return a string equal to Book 1', async () => {
      // Arrange
      // Act
      const books = await service.getBooks()
      console.log('books', books)
      // Assert
      expect(books[0].title).toEqual('Book 1')
    })
  })
})
