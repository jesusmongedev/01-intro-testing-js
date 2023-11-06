import { generateManyBooks, generateOneBook } from '../fakes/book.fake'
import BooksService from './books.service'

const mockGetAll = jest.fn()
const mockfakeBook = generateOneBook()

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => (
  {
    getAll: mockGetAll,
    create: () =>
      Promise.resolve(mockfakeBook)
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
      const fakeBooks = generateManyBooks(20)
      mockGetAll.mockResolvedValue(fakeBooks)
      // Act
      const books = await service.getBooks()
      console.log('books', books)
      // Assert
      expect(books.length).toEqual(fakeBooks.length)
      expect(mockGetAll).toHaveBeenCalled()
      expect(mockGetAll).toHaveBeenCalledTimes(1)
      expect(mockGetAll).toHaveBeenCalledWith('books', {})
    })
    test('should return a string equal to expected book name', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(5)
      mockGetAll.mockResolvedValue(fakeBooks)
      // Act
      const books = await service.getBooks()
      console.log('books', books)
      // Assert
      expect(books[0].name).toEqual(fakeBooks[0].name)
    })
  })
})
