import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const ListDosen = () => {
  const navigate = useNavigate();
  const [dosen, setDosen] = useState([]);

  useEffect(() => {
    getDosen();
  }, []);

  const getDosen = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/dosen`);
      console.log("Berhasil ambil data mahasiswa");
      console.log("Data : ", response.data);
      setDosen(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  return (
    <div>
      {/* Tombol hamburger untuk menampilkan/sembunyikan sidebar */}
      <div className="bg-gray-200 h-screen box-border p-4 pt-0">
        <div className="flex justify-center items-center">
          <h1>
            <b>Dosen</b>
          </h1>
        </div>
        <div className="flex justify-center items-center p-2">
          <div className="bg-white rounded-lg shadow-lg p-6 m-4 w-10/12 h-auto">
            <div className="flex justify-end items-center p-2 mb-4">
              <div className="flex justify-center items-center"></div>
              <table
                className="table-auto w-full"
                style={{ tableLayout: "fixed" }}
              >
                <thead>
                  <tr>
                    <th className="border px-4 py-2 w-1/2">NIP</th>
                    <th className="border px-4 py-2 w-1/3">Nama</th>
                    <th className="border px-4 py-2 w-1/8">HP</th>
                  </tr>
                </thead>
                <tbody>
                  {dosen.map((dos) => (
                    <tr key={dos.nip}>
                      <td
                        className="border px-4 py-2"
                        style={{
                          whiteSpace: "pre-line",
                          overflowWrap: "break-word",
                        }}
                      >
                        {dos.namadosen}
                      </td>
                      <td
                        className="border px-4 py-2"
                        style={{
                          whiteSpace: "pre-line",
                          overflowWrap: "break-word",
                        }}
                      >
                        {dos.hp}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListDosen;
