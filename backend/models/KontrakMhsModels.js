import db from "../config/database.js";
import { DataTypes } from "sequelize";

const KontrakMhs = db.define(
  "kontrak_mhs",
  {
    id_kontrak: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    // Nama tabel yang sesuai dengan nama tabel di database
    tableName: "kontrak_mhs",
    timestamps: false,
    freezeTableName: true,
  }
);

export default KontrakMhs;

(async () => {
  await db.sync();
})();
