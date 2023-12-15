//DosenControllers.js

import Dosen from "../models/DosenModels.js";

export const createDosen = async (req, res) => {
  try {
    const dosen = await Dosen.create(req.body);
    res.status(201).json({ msg: "Dosen Created", data: dosen });
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: "Terjadi kesalahan dalam menginput data Dosen." });
  }
};

export const getAllDosen = async (req, res) => {
  try {
    const response = await Dosen.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.error(error.message);
    res
      .status(500)
      .json({ error: "Terjadi kesalahan dalam mengambil data Dosen." });
  }
};
