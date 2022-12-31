CREATE TABLE NHACUNGCAP (
	MaNhaCC varchar (8) Primary Key Not Null,
    TenNhaCC varchar (50) Not Null,
    DiaChi varchar (30) Not Null,
    SoDT varchar (15) Null,
    MaSoThue varchar (15) Not Null
);

Create Table LOAIDICHVU
(
    MaLoaiDV varchar (6) Primary Key Not Null,
    TenLoaiDV varchar (50) Not Null
);

Create Table MUCPHI
(
    MaMP varchar (5) Primary Key Not Null,
    DonGia varchar (7) Not Null,
    MoTa varchar (30) Null
);

 
Create Table DONGXE
(
    DongXe varchar (15) Primary Key Not Null,
    HangXe varchar (10) Not Null,
    SoChoNgoi int Not Null
);
 
Create Table DANGKYCUNGCAP
(
    MaDKCC varchar (7) Primary Key Not Null,
    MaNhaCC varchar (8) Not Null,
    MaLoaiDV varchar (6) Not Null,
    DongXe varchar (15) Not Null,
    MaMP varchar (5) Not Null,
    NgayBatDauCungCap TIMESTAMP Not Null,
    NgayKetThucCungCap TIMESTAMP Not Null,
    SoLuongXeDangKy int Null
);