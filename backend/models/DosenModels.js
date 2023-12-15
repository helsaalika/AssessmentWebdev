import db from "../config/database.js";
import { DataTypes } from "sequelize";

const Dosen = db.define(
  "dosen",
  {
    // Definisikan kolom dalam model yang sesuai dengan kolom di tabel "admins"
    nip: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    namadosen: {
      type: DataTypes.STRING,
    },
    hp: {
      type: DataTypes.STRING,
    },
  },
  {
    // Nama tabel yang sesuai dengan nama tabel di database
    tableName: "dosen",
    timestamps: false,
    freezeTableName: true,
  }
);

export default Dosen;

(async () => {
  await db.sync();
})();
