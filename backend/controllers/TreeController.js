import Tree from "../models/Tree.js";
import { StatusCodes } from "http-status-codes";

export const getAllTrees = async (req, res) => {
  try {
    const limitValue = Number(req.query.limit);
    const skipValue = Number(req.query.skip)

    const trees = await Tree.find({}).limit(limitValue).skip(skipValue).lean();
    const total = await Tree.find({}).count()


    res.status(StatusCodes.OK).json({ trees, total });

  } catch (err) {
    res.status(500).send(err.message);
  }
};
export const getTreeById = async (req, res) => {
  try {
    const tree = await Tree.findById(req.params.id);
    if (!tree) {
      return res.status(404).send("Tree not found");
    }
    res.json(tree);
  } catch (err) {
    res.status(500).send(err.message);
  }
};
export const searchByName = async (req, res) => {
  try {
    const searchParam = req.params.searchParam
    const trees = await Tree.find({ name: searchParam });
    console.log("Search Tree Back:", trees)
    res.status(StatusCodes.OK).json(trees);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ error: 'Internal Server Error' });

  }
};
export const addTree = async (req, res) => {
  const { category, treeName, treePrice, status, availableQuantity, description } = req.body;
  const treeImage = req.file.path;
  console.log('Data: ', req.body, treeImage);
  try {
    const newTree = new Tree({
      name: treeName,
      category: category,
      price: treePrice,
      availableQuantity: availableQuantity,
      status: status,
      description: description,
      image: treeImage
    });
    const savedTree = await newTree.save();
    res.status(StatusCodes.CREATED).json(savedTree);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: err.message });
  }
};
export const updateTree = async (req, res) => {
  try {
    const updatedTree = await Tree.findByIdAndUpdate(req.params._id, req.body, {
      new: true,
    });
    if (!updatedTree) {
      return res.status(404).send("Tree not found");
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
      return res.status(404).send("Tree not found");
    }
    res.json({ message: "Tree deleted successfully" });
  } catch (err) {
    res.status(500).send(err.message);
  }
};
export const getTreesInCart = async (req, res) => {
  const { ids } = req.body;

  try {
    const trees = await Tree.find({ _id: { $in: ids } });

    res.status(200).json(trees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getFeaturedTrees = async (req, res) => {
  try {
    const featuredTrees = await Tree.find({ isFeatured: true }).limit(4).lean();
    res.status(StatusCodes.OK).json({ featuredTrees });
  } catch (error) {
    res.status(500).send(error.message);
  }
}