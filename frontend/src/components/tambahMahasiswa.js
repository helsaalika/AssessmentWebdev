import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TambahMahasiswa = () => {
  const navigate = useNavigate();
  const [nim, setNim] = useState("");
  const [namamhs, setNamaMhs] = useState("");
  const [prodi, setProdi] = useState("");
  const [jurusan, setJurusan] = useState("");
  const [alamat, setAlamat] = useState("");

  useEffect(() => {}, []);

  const createMahasiswaHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5000/mahasiswa", {
        nim,
        namamhs,
        prodi,
        jurusan,
        alamat,
      });

      navigate(`/mahasiswa`);
      console.log("Berhasil membuat portofolio baru");
      console.log("Data skill : ", response);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div className="text-center">
      <div className="bg-gray-200 h-screen box-border p-4 pt-0 center">
        <div className="flex justify-center items-center">
          <h1>
            <b>Tambah Mahasiswa</b>
          </h1>
        </div>
        <div className="flex justify-center items-center p-2">
          <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-10/12 h-auto">
            <form onSubmit={createMahasiswaHandler}>
              <div className="mb-4 flex items-center">
                <label className="w-1/3 mr-2">
                  <span className="label-text">Nim</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Nama"
                  className="input input-bordered input-sm w-2/3"
                  onChange={(e) => setNim(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 flex items-center">
                <label className="w-1/3 mr-2">
                  <span className="label-text">Nama</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="Nama"
                  className="input input-bordered input-sm w-2/3"
                  onChange={(e) => setNamaMhs(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 flex items-center">
                <label className="w-1/3 mr-2">
                  <span className="label-text">Prodi</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="prodi"
                  className="input input-bordered input-sm w-2/3"
                  onChange={(e) => setProdi(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 flex items-center">
                <label className="w-1/3 mr-2">
                  <span className="label-text">Jurusan</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="jurusan"
                  className="input input-bordered input-sm w-2/3"
                  onChange={(e) => setJurusan(e.target.value)}
                  required
                />
              </div>
              <div className="mb-4 flex items-center">
                <label className="w-1/3 mr-2">
                  <span className="label-text">Alamat</span>
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="alamat"
                  className="input input-bordered input-sm w-2/3"
                  onChange={(e) => setAlamat(e.target.value)}
                  required
                />
              </div>

              <p className="error-message"></p>
              <div className="mt-10 flex justify-center items-center">
                <button className="btn btn-success btn-sm w-1/3">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TambahMahasiswa;
