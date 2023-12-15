import db from "../config/database.js";
import { DataTypes } from "sequelize";

const JadwalMatkul = db.define(
  "jadwal_matkul",
  {
    // Definisikan kolom dalam model yang sesuai dengan kolom di tabel "admins"
    kodejadwal: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    semester: {
      type: DataTypes.INTEGER,
    },
    jadwalhari: {
      type: DataTypes.DATE,
    },
    jadwaljam: {
      type: DataTypes.TIME,
    },
  },
  {
    // Nama tabel yang sesuai dengan nama tabel di database
    tableName: "jadwal_matkul",
    timestamps: false,
    freezeTableName: true,
  }
);

export default JadwalMatkul;

(async () => {
  await db.sync();
})();
