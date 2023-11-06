import express from 'express'
import { createSponsor, deleteSponsor, getAllSponsors, updateSponsor } from '../controllers/sponsorController.js'


const router  = express.Router()
router.get('/allSponsors', getAllSponsors)
router.post('/newSponsor', createSponsor)
router.delete('/deleteSponsor/:id',deleteSponsor)
router.patch('/updateSponsor/:id',updateSponsor)

export default router