-- Create database
DROP SCHEMA public CASCADE;
CREATE SCHEMA public;

DROP database assessment;

CREATE DATABASE assessment;

CREATE TABLE mahasiswa (
    nim VARCHAR (50) PRIMARY KEY,
    namamhs VARCHAR (255) NOT NULL,
    prodi VARCHAR(255) NOT NULL,
    jurusan VARCHAR(255) NOT NULL,
    alamat TEXT
);

CREATE TABLE dosen (
    NIP VARCHAR (50) PRIMARY KEY,
    NamaDosen VARCHAR (255) NOT NULL,
    HP VARCHAR(20) NOT NULL
);

CREATE TABLE matkul (
    KodeMK VARCHAR (50) PRIMARY KEY,
    NamaMK VARCHAR (255) NOT NULL
);

CREATE TABLE jadwal_matkul (
    KodeJadwal VARCHAR (50) PRIMARY KEY,
    KodeMK VARCHAR (50),
    NIP VARCHAR (50),
    Semester INT,
    JadwalHari DATE,
    JadwalJam TIME
);

CREATE TABLE kontrak_mhs (
    id_kontrak SERIAL PRIMARY KEY,
    NIM VARCHAR (50),
    KodeJadwal VARCHAR (50)
);

ALTER TABLE jadwal_matkul
DROP CONSTRAINT IF EXISTS jadwal_matkul_dosen_fk;
ALTER TABLE jadwal_matkul
DROP CONSTRAINT IF EXISTS jadwal_matkul_matkul_fk;
ALTER TABLE kontrak_mhs
DROP CONSTRAINT IF EXISTS kontrak_mhs_mahasiswa_fk;
ALTER TABLE kontrak_mhs
DROP CONSTRAINT IF EXISTS kontrak_mhs_jadwal_matkul_fk;

-- Membuat foreign key (NIP) di JadwalMatkul yang mengacu ke Dosen
ALTER TABLE jadwal_matkul
ADD CONSTRAINT jadwal_matkul_dosen_fk
FOREIGN KEY (NIP)
REFERENCES dosen(NIP);

-- Membuat foreign key (KodeMK) di JadwalMatkul yang mengacu ke Matkul
ALTER TABLE jadwal_matkul
ADD CONSTRAINT jadwal_matkul_matkul_fk
FOREIGN KEY (KodeMK)
REFERENCES matkul(KodeMK);

-- Membuat foreign key (NIM) di KontrakMhs yang mengacu ke Mahasiswa
ALTER TABLE kontrak_mhs
ADD CONSTRAINT kontrak_mhs_mahasiswa_fk
FOREIGN KEY (NIM)
REFERENCES mahasiswa(NIM);

-- Membuat foreign key (KodeJadwal) di KontrakMhs yang mengacu ke JadwalMatkul
ALTER TABLE kontrak_mhs
ADD CONSTRAINT kontrak_mhs_jadwal_matkul_fk
FOREIGN KEY (KodeJadwal)
REFERENCES jadwal_matkul(KodeJadwal);