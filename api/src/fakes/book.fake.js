import { faker } from '@faker-js/faker'

/**
 * @description Generate a book
 * @typedef {Object} Book
 * @property {String} _id
 * @property {String} name
 * @property {Number} price
 * @returns {Book}
 */
const generateOneBook = () => ({
  _id: faker.database.mongodbObjectId(),
  name: faker.commerce.productName(),
  price: faker.commerce.price()
})

/**
 * @description Generate many books
 * @param {Number} size
 * @returns {Book[]}
 */
const generateManyBooks = (size = 10) => {
  const books = []

  for (let i = 0; i < size; i++) {
    books.push(generateOneBook())
  }

  return books
}

export { generateOneBook, generateManyBooks }
