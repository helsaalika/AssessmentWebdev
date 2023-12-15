import db from "../config/database.js";
import { DataTypes } from "sequelize";

const Matkul = db.define(
  "matkul",
  {
    // Definisikan kolom dalam model yang sesuai dengan kolom di tabel "admins"
    kodemk: {
      type: DataTypes.STRING,
      primaryKey: true,
    },
    namamk: {
      type: DataTypes.STRING,
    },
  },
  {
    // Nama tabel yang sesuai dengan nama tabel di database
    tableName: "matkul",
    timestamps: false,
    freezeTableName: true,
  }
);

export default Matkul;

(async () => {
  await db.sync();
})();
