import Faq from "../models/Faq.js";
import { StatusCodes } from "http-status-codes"
/**
 * get all Faq
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const getAllFaq = async (req, res) => {
    try {
        const allFaq = await Faq.find();
        return res.status(StatusCodes.OK).json(allFaq);
    }
    catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.toString() })
    }
}

/**
 * creating a new farm into collection
 * @param {*} req 
 * @param {*} res 
 * @returns 
 */
export const createFaq = async (req, res) => {
    try {
        const { Question, Answers } = req.body;

        const createFaq = await Faq.create({
            Question,
            Answers
        })
        return res.status(StatusCodes.CREATED).json({ message: 'FAQ created', createFaq })

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.toString() })

    }
}
/**
 * update faq 
 */

export const updatefaq = async (req, res) => {
    try {
        const updatefaq = await Faq.findByIdAndUpdate(req.params.id, {
            $set: {
                Answers: req.body.Answers,
            }
        }, { new: true })
        return res.status(StatusCodes.OK).json({ message: 'updated Answers', updatefaq })

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.toString() })

    }

}
/*
Delete Faq 
*/
export const deleteFaq = async (req, res) => {
    try {
        const deleteFaq = await Faq.findByIdAndDelete(req.params.id)
        return res.status(StatusCodes.OK).json({ message: 'deleted', deleteFaq })

    } catch (error) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: error.toString() })

    }

}

