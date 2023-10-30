import { model, Schema } from "mongoose";

const treeSchema = new Schema({
    value: {
        type: String,
        required: true
    },
    children: [{
        type: Schema.Types.ObjectId,
        ref: 'Tree'
    }]
}, { timestamps: true });

const Tree = model('Tree', treeSchema);
export default Tree;

