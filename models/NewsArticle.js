import mongoose from "mongoose";

const newsArticleSchema = new mongoose.Schema({
    dateCreated: { type: Date, default: Date.now},
    writer: {
        firstName: { type: String, required: true },
        lastName: { type: String, required: true },
        username: { type: String, required: true },
        id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'User' },
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    content: { type: String, required: true },
    imageUrl: { type: String, required: false},

});

const NewsArticle = mongoose.model('NewsArticle', newsArticleSchema);

export default NewsArticle;