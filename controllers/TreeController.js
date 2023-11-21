import Tree from '../models/Tree.js';

export const getAllTrees = async (req, res) => {
    try {
        const trees = await Tree.find();
        res.json(trees);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const getTreeById = async (req, res) => {
    try {
        const tree = await Tree.findById(req.params.id);
        if (!tree) {
            return res.status(404).send('Tree not found');
        }
        res.json(tree);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const addTree = async (req, res) => {
    try {
        const tree = new Tree(req.body);
        await tree.save();
        res.status(201).json(tree);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const updateTree = async (req, res) => {
    try {
        const updatedTree = await Tree.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedTree) {
            return res.status(404).send('Tree not found');
        }
        res.json(updatedTree);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

export const deleteTree = async (req, res) => {
    try {
        const deletedTree = await Tree.findByIdAndDelete(req.params.id);
        if (!deletedTree) {
            return res.status(404).send('Tree not found');
        }
        res.json({ message: 'Tree deleted successfully'});
    } catch (err) {
        res.status(500).send(err.message);
    }
};
