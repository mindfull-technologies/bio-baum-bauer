import express from 'express'
import { createSponsor, deleteSponsor, getAllSponsors, updateSponsor } from '../controllers/sponsorShipController.js'

import { sponsorshipFullValidation } from '../helpers/sponsorValidation.js';


const router  = express.Router();

router.get('/allSponsors', getAllSponsors)
router.post('/newSponsor',sponsorshipFullValidation ,createSponsor)
router.delete('/deleteSponsor/:id',deleteSponsor)
router.patch('/updateSponsor/:id',updateSponsor)

export default router