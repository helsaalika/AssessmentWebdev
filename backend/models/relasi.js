import JadwalMatkul from "./JadwalMatkulModels.js";
import Dosen from "./DosenModels.js";
import Matkul from "./MatkulModels.js";
import Mahasiswa from "./MahasiswaModels.js";
import Mahasiswa from "./KontrakMhsModels.js";

Dosen.hasMany(JadwalMatkul, {
  foreignKey: "nip",
  onDelete: "CASCADE",
});

Matkul.hasOne(JadwalMatkul, { foreignKey: "kodemk" });
JadwalMatkul.belongsTo(Dosen, { foreignKey: "nip" });
JadwalMatkul.belongsTo(Matkul, { foreignKey: "kodemk" });
JadwalMatkul.belongsToMany(Mahasiswa, {
  through: KontrakMhs,
  foreignKey: "kodejadwal",
});
Mahasiswa.belongsToMany(JadwalMatkul, {
  through: KontrakMhs,
  foreignKey: "nim",
  onDelete: "CASCADE",
});
Mahasiswa.belongsToMany(JadwalMatkul, {
  through: KontrakMhs,
  foreignKey: "nim",
  onDelete: "CASCADE",
}); // Definisi relasi many-to-many antara Mahasiswa dan JadwalMatkul
JadwalMatkul.belongsToMany(Mahasiswa, {
  through: KontrakMhs,
  foreignKey: "kodejadwal",
}); // Definisi relasi many-to-many antara JadwalMatkul dan Mahasiswa
