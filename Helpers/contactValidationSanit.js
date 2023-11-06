import { body } from "express-validator";
import Filter from 'bad-words';

// Validating incoming data for creating and updating Contact 
export const validateFullContact = [
    body('emailAddress')
        .trim()
        .notEmpty()
        .withMessage('Email should not left empty!')
        .isEmail()
        .withMessage('This field is an email address..!'),
    body('message')
        .trim()
        .notEmpty()
        .withMessage('You need to provide some detail')
        .isLength({ min: 3 })
        .withMessage('The length of your message should be at least 3 characters!')
        .customSanitizer(value => validationMiddleWare(value))
];


/**
 * this function is going to filter a text if it contains some predefined bad words
 * @param {*} paragraph 
 * @returns 
 */
export const validationMiddleWare = (paragraph) => {
    const badWords = ['foolish', 'bad', 'wrong', 'crazy']
    const filter = new Filter();
    filter.addWords(...badWords);
    return filter.clean(paragraph);
}

