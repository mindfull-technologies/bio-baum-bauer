import express from 'express'
import { createSponsor, deleteSponsor, getAllSponsors, updateSponsor } from '../controllers/sponsorController.js'
import { emailValidator, nameValidator, passwordValidator } from '../helpers/userValidation.js'
import { validate } from '../helpers/sponsorValidation.js'

const router  = express.Router();

router.get('/allSponsors', getAllSponsors)
router.post('/newSponsor', nameValidator(),emailValidator(),passwordValidator(), validate, createSponsor)
router.delete('/deleteSponsor/:id',deleteSponsor)
router.patch('/updateSponsor/:id',updateSponsor)

export default router