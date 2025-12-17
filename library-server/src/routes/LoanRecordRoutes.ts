import experss from 'express';
import LoanRecordController from '../controllers/LoanRecordController';
import { Schemas,ValidateSchema } from '../middleswares/Validation';
const router = experss.Router();

router.get('/',LoanRecordController.getAllRecords);
router.post('/',ValidateSchema(Schemas.loan.create, 'body'),LoanRecordController.createdRecord);
router.put('/',ValidateSchema(Schemas.loan.update, 'body'),LoanRecordController.updatedRecord);
router.post('/query',ValidateSchema(Schemas.loan.query, 'body'), LoanRecordController.getRecordsByProperty);

export = router;