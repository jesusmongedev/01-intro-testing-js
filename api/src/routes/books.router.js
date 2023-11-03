import express from 'express'
import BooksService from '../services/books.service'

const router = express.Router()
const service = new BooksService()

router.get('/', async (req, res) => {
  const books = await service.getBooks()
  res.status(200).json(books)
})

router.post('/', async (req, res) => {
  const { body } = req
  const newBook = await service.createBook(body)
  res.status(201).json(newBook)
})

export default router
