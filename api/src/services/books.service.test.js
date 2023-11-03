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

const fakeBooksCase2 = [
  {
    _id: '1',
    title: 'Rich Dad Poor Dad'
  }
]

const mockGetAll = jest.fn()

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => (
  {
    getAll: mockGetAll,
    create: () =>
      Promise.resolve(fakeBooks[0])
  }
)))

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
      mockGetAll.mockResolvedValue(fakeBooks)
      // Act
      const books = await service.getBooks()
      console.log('books', books)
      // Assert
      expect(books.length).toEqual(2)
      expect(mockGetAll).toHaveBeenCalled()
      expect(mockGetAll).toHaveBeenCalledTimes(1)
      expect(mockGetAll).toHaveBeenCalledWith('books', {})
    })
    test('should return a string equal to expected book title', async () => {
      // Arrange
      mockGetAll.mockResolvedValue(fakeBooksCase2)
      // Act
      const books = await service.getBooks()
      console.log('books', books)
      // Assert
      expect(books[0].title).toEqual('Rich Dad Poor Dad')
    })
  })
})
