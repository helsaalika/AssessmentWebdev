//MahasiswaControllers.js

import Mahasiswa from "../models/MahasiswaModels.js";
import Dosen from "../models/DosenModels.js";

export const createMahasiswa = async (req, res) => {
  try {
    const mahasiswa = await Mahasiswa.create(req.body);
    res.status(201).json({ msg: "Mahasiswa Created", data: mahasiswa });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: "Terjadi kesalahan dalam menginput data Mahasiswa." });
  }
};

export const getAllMahasiswa = async (req, res) => {
  try {
    const response = await Mahasiswa.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: "Terjadi kesalahan dalam mengambil data Mahasiswa." });
  }
};

export const editMahasiswa = async (req, res) => {
  try {
    await Mahasiswa.update(req.body, {
      where: {
        NIM: req.params.NIM,
      },
    });
    res.status(201).json({ msg: "Berhasil update Mahasiswa" });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ msg: "Terjadi kesalahan saat mengupdate Mahasiswa" });
  }
};

export const deleteMahasiswa = async (req, res) => {
  try {
    const NIM = req.params.NIM; // Ambil ID dari parameter URL

    // Menggunakan klausa 'where' untuk menghapus Mahasiswa dengan ID yang sesuai
    const data = await Mahasiswa.destroy({
      where: {
        NIM: NIM,
      },
    });

    if (data === 1) {
      // Data berhasil dihapus (data === 1 menunjukkan satu baris dihapus)
      res.status(200).json({ msg: "Mahasiswa berhasil dihapus" });
    } else {
      // Data tidak ditemukan
      res.status(404).json({ msg: "Mahasiswa tidak ditemukan" });
    }
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: "Terjadi kesalahan saat menghapus Mahasiswa" });
  }
};
