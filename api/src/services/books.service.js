import { config } from '../config'
import MongoLib from '../lib/mongo.lib'

class BooksService {
  constructor () {
    this.collection = config.bookCollection
    this.mongoDB = new MongoLib()
  }

  getBooks (query = {}) {
    return this.mongoDB.getAll(this.collection, query)
  }

  createBook (newBook = {}) {
    return this.mongoDB.create(this.collection, newBook)
  }
}

export default BooksService
