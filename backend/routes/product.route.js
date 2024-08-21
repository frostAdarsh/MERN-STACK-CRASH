import express from "express";
import mongoose from "mongoose";
import Product from "../models/product.modle.js";
import {
  createProduct,
  deletProduct,
  getProduct,
  updateProduct,
} from "../controllers/product.controller.js";
const router = express.Router();

router.get("/", getProduct);
router.post("/", createProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deletProduct);

export default router;
