import express from "express";
import {
  createMahasiswa,
  editMahasiswa,
  getAllMahasiswa,
  deleteMahasiswa,
} from "../controllers/MahasiswaController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("tess");
});

//MAHASISWA
router.get("/mahasiswa", getAllMahasiswa);
router.post("/mahasiswa", createMahasiswa);
router.patch("/mahasiswa/:NIM", editMahasiswa);
router.delete("/mahasiswa/:NIM", deleteMahasiswa);

export default router;
