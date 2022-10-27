CREATE TABLE TBLKhoa
(Makhoa char(10) primary key,
 Tenkhoa char(30),
 Dienthoai char(10));

CREATE TABLE TBLGiangVien(
Magv int primary key,
Hotengv char(30),
Luong decimal(5,2),
Makhoa char(10) references TBLKhoa);

CREATE TABLE TBLSinhVien(
Masv int primary key,
Hotensv char(40),
Makhoa char(10) references TBLKhoa(Makhoa),
Namsinh int,
Quequan char(30));

CREATE TABLE TBLDeTai(
Madt char(10) primary key,
Tendt char(30),
Kinhphi int,
Noithuctap char(30));

CREATE TABLE TBLHuongDan(
Masv int primary key,
Madt char(10) references TBLDeTai(Madt),
Magv int references TBLGiangVien(Magv),
KetQua decimal(5,2));