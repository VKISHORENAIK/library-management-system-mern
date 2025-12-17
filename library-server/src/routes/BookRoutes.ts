import express from 'express';
import BookController from '../controllers/BookController';
import { Schemas,ValidateSchema } from '../middleswares/Validation';
const router = express.Router();

router.get('/',BookController.getAllBooks);
router.post('/',ValidateSchema(Schemas.book.create,'body'),BookController.createBook);
router.put('/',ValidateSchema(Schemas.book.update,'body'),BookController.updateBook);
router.delete('/:barcode',ValidateSchema(Schemas.book.delete,'params'),BookController.deleteBook);
router.get("/query",BookController.searchForBooksByQuery);
export = router;


// import express from 'express';
// import BookController from '../controllers/BookController';

// const router = express.Router();

// router.get('/book', BookController.getAllBooks);
// router.post('/book', BookController.createBook);
// router.put('/book', BookController.updateBook);
// router.delete('/book/:barcode', BookController.deleteBook);

// export = router;
