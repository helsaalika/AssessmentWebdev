import db from "../config/database.js";
import { DataTypes } from "sequelize";

const Mahasiswa = db.define(
  "mahasiswa",
  {
    nim: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    namamhs: {
      type: DataTypes.STRING,
    },
    prodi: {
      type: DataTypes.STRING,
    },
    jurusan: {
      type: DataTypes.STRING,
    },
    alamat: {
      type: DataTypes.TEXT,
    },
  },
  {
    // Nama tabel yang sesuai dengan nama tabel di database
    tableName: "mahasiswa",
    timestamps: false,
    freezeTableName: true,
  }
);

export default Mahasiswa;

(async () => {
  await db.sync();
})();
