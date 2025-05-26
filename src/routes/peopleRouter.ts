import { Router } from 'express';
import {
  getPerson,
  createPerson,
  getPeople,
  getPersonById,
  updatePerson,
  deletePerson,
} from '../controllers/personController';

const router = Router();

router.get('/', getPeople);
router.get('/:id', getPerson, getPersonById);
router.post('/', createPerson);
router.put('/:id', updatePerson);
router.delete('/:id', deletePerson);

export default router;