import express from 'express'
import { createSponsor, deleteSponsor, getAllSponsors, updateSponsor } from '../Controllers/SponsorController.js'


const router  = express.Router()
router.get('/allSponsors', getAllSponsors)
router.post('/newSponsor', createSponsor)
router.delete('/deleteSponsor/:id',deleteSponsor)
router.patch('/updateSponsor',updateSponsor)

export default router