import dotenv from 'dotenv'

dotenv.config()
const isProd = process.env.NODE_ENV === 'production'
const prodDbUrl = process.env.DB_URL
const testDbUrl = process.env.TEST_DB_URL
const dbUrl = isProd ? prodDbUrl : testDbUrl

const config = {
  port: process.env.PORT || 3000,
  dbUrl,
  dbName: process.env.DB_NAME,
  bookCollection: process.env.BOOK_COLLECTION
}

export { config }
