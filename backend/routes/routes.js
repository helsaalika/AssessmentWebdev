import express from "express";
import {
  createMahasiswa,
  editMahasiswa,
  getAllMahasiswa,
  deleteMahasiswa,
} from "../controllers/MahasiswaController.js";
import { createDosen, getAllDosen } from "../controllers/DosenController.js";

const router = express.Router();

router.get("/", (req, res) => {
  res.send("tess");
});

//MAHASISWA
router.get("/mahasiswa", getAllMahasiswa);
router.post("/mahasiswa", createMahasiswa);
router.patch("/mahasiswa/:nim", editMahasiswa);
router.delete("/mahasiswa/:nim", deleteMahasiswa);

//DOSEN
router.get("/dosen", getAllDosen);
router.post("/dosen", createDosen);

export default router;
