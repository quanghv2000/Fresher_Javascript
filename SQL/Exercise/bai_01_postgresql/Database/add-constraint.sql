Alter Table DANGKYCUNGCAP Add Constraint PK_DANGKYCUNGCAP_MaNhaCC Foreign Key (MaNhaCC) References NHACUNGCAP (MaNhaCC);


Alter Table DANGKYCUNGCAP Add Constraint PK_DANGKYCUNGCAP_MaLoaiDV Foreign Key (MaLoaiDV) References LOAIDICHVU (MaLoaiDV);

 
Alter Table DANGKYCUNGCAP Add Constraint PK_DANGKYCUNGCAP_MaMP Foreign Key (MaMP) References MUCPHI (MaMP);

 
Alter Table DANGKYCUNGCAP Add Constraint PK_DANGKYCUNGCAP_DongXe Foreign Key (DongXe) references DongXe (DongXe);
