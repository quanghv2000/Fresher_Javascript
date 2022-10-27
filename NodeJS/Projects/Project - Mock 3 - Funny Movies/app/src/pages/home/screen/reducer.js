const initialState = {
  loading: false,
  error: false,
  dataResponse: [
    {
      id: 1,
      videoId: "WWCsGEarExg",
      url: "https://www.youtube.com/watch?v=b7DxNXHmxmY",
      title: "New Songs Alan Walker 2019 - Top 20 Alan Walker Songs 2019",
      numOfView: 46837234,
      createdDate: new Date(),
      sharedBy: {
        id: 1,
        imageUrl:
          "https://yt3.ggpht.com/ytc/AKedOLQ_wkgzX3KkPQ_AOuLaGkmg1mglK6KdJYYsVAdS=s176-c-k-c0x00ffffff-no-rj",
        name: "Listen To Music",
      },
    },
    {
      id: 2,
      videoId: "HLFPwiztmZY",
      url: "https://www.youtube.com/watch?v=HLFPwiztmZY",
      title: "Best Of Alan Walker Remix | Alan Walker Greatest Hits Full Album",
      numOfView: 187112,
      createdDate: new Date(),
      sharedBy: {
        id: 2,
        imageUrl:
          "https://yt3.ggpht.com/jLPgkgf2dn9oKPR1asw--puU9qSuxjcR0Px825VRpUgMTiQysV9J7WroyuxXDlC4tq13lvOT=s176-c-k-c0x00ffffff-no-rj",
        name: "Legends EDM Music",
      },
    },
    {
      id: 3,
      videoId: "WNeLUngb-Xg",
      url: "https://www.youtube.com/watch?v=WNeLUngb-Xg",
      title: "Linkin Park - In The End (Mellen Gi & Tommee Profitt Remix)",
      numOfView: 895149456,
      createdDate: new Date(),
      sharedBy: {
        id: 3,
        imageUrl:
          "https://yt3.ggpht.com/ytc/AKedOLS-IMvZFJkRjUW8t61klmORV2T8dKdIZfLQ3oluqw=s176-c-k-c0x00ffffff-no-rj",
        name: "Trap Music",
      },
    },
    {
      id: 4,
      videoId: "GYWc9PSyvBo",
      url: "https://www.youtube.com/watch?v=GYWc9PSyvBo",
      title: "Tái Hiện Lịch Sử Đế Chế Nga (1283-1917)",
      numOfView: 241191,
      createdDate: new Date(),
      sharedBy: {
        id: 4,
        imageUrl:
          "https://yt3.ggpht.com/PhjMxzHuzqyeaQ1fWh6yRYk6pDzXQIefkSXESDKJPKZfwbALloZF7jQx9qYAbQPfpWqn7gWaZw=s176-c-k-c0x00ffffff-no-rj",
        name: "CDTeam - Sử Đồ",
      },
    },
    {
      id: 5,
      videoId: "rg_-yfpxN2I",
      url: "https://www.youtube.com/watch?v=rg_-yfpxN2I",
      title: "EDM TikTok Hay 2022 - BXH Nhạc Trẻ Remix Hay Nhất Hiện Nay",
      numOfView: 1094291,
      createdDate: new Date(),
      sharedBy: {
        id: 5,
        imageUrl:
          "https://yt3.ggpht.com/ufA-f4PLKP89KuheL3Bvk2c4MJXowSY73gOOjQlXGvCXwV8boRIzMHy7NyVJ0d8tp_gTHJ5Y=s176-c-k-c0x00ffffff-no-rj",
        name: "Orinn Remix",
      },
    },
    {
      id: 6,
      videoId: "q3KpIBFjVyQ",
      url: "https://www.youtube.com/watch?v=q3KpIBFjVyQ",
      title:
        "Nhạc Trẻ Mới Hay Nhất 2022 - Liên Khúc Nhạc Trẻ Hay Nhất Hiện Nay",
      numOfView: 894893,
      createdDate: new Date(),
      sharedBy: {
        id: 6,
        imageUrl:
          "https://yt3.ggpht.com/j3RNfcHfFvFfdZxpylBSzDZDtWZOqM8iPC91ZqwupBFCXS8uhDzfbXL7c8sEYlbkGlf3q0z81xw=s176-c-k-c0x00ffffff-no-rj",
        name: "ACV Music Trending",
      },
    },
    {
      id: 7,
      videoId: "kJQP7kiw5Fk",
      url: "https://www.youtube.com/watch?v=kJQP7kiw5Fk",
      title: "Luis Fonsi - Despacito ft. Daddy Yankee",
      numOfView: 7909641061,
      createdDate: new Date(),
      sharedBy: {
        id: 7,
        imageUrl:
          "https://yt3.ggpht.com/8Lwf4LCR2VmxD2JKiozRu7Lo2jGdnhRs42NawHmMN_xJ8TdW-30e3J9DhumEksivp1Esog4A=s176-c-k-c0x00ffffff-no-rj",
        name: "Luis Fonsi",
      },
    },
    {
      id: 8,
      videoId: "vnXvYy_GIGI",
      url: "https://www.youtube.com/watch?v=vnXvYy_GIGI",
      title: "M-TP | Tuyển tập các ca khúc Sơn Tùng | His Music Journey",
      numOfView: 12718016,
      createdDate: new Date(),
      sharedBy: {
        id: 8,
        imageUrl:
          "https://yt3.ggpht.com/a1EfjlBYCJaiK6xb60QnvwivnW6X8n82-pmJE8-YeQ87IHN_3NSNXhLUHIKAnMPY98wlJnF8Tw=s176-c-k-c0x00ffffff-no-rj",
        name: "Sơn Tùng M-TP Official",
      },
    },
    {
      id: 9,
      videoId: "7IPnZ9N7jUY",
      url: "https://www.youtube.com/watch?v=7IPnZ9N7jUY",
      title: "Iran tuyên bố đủ khả năng chế tạo bom hạt nhân | VTC Now",
      numOfView: 28871,
      createdDate: new Date(),
      sharedBy: {
        id: 9,
        imageUrl:
          "https://yt3.ggpht.com/E3wmTEtzAuluCYtlIFPoB1krW6wYZecaTBhf4oRpQBSz0b3iBnvgn3WzBRbyVcz_QVyezzJgqg=s176-c-k-c0x00ffffff-no-rj",
        name: "VTC NOW",
      },
    },
    {
      id: 10,
      videoId: "GHTA143_b-s",
      url: "https://www.youtube.com/watch?v=GHTA143_b-s",
      title: "NestJs Course for Beginners - Create a REST API",
      numOfView: 256087,
      createdDate: new Date(),
      sharedBy: {
        id: 10,
        imageUrl:
          "https://yt3.ggpht.com/ytc/AKedOLRR2uNiXJiFH-XRmtGgkdICxTuDJxCPJidKFRNCNg=s176-c-k-c0x00ffffff-no-rj",
        name: "Free Code Camp",
      },
    },
    {
      id: 11,
      videoId: "WubMoUdESB4",
      url: "https://www.youtube.com/watch?v=WubMoUdESB4",
      title: "Phim hay nhất 2022 | CHIẾN DỊCH BÃO TỐ - Phim chiếu rạp",
      numOfView: 524349,
      createdDate: new Date(),
      sharedBy: {
        id: 11,
        imageUrl:
          "https://yt3.ggpht.com/ytc/AKedOLSml7dYjF3voNbFVeEZaOmKUE-4pTzpAAuqIANX=s176-c-k-c0x00ffffff-no-rj",
        name: "Public Media",
      },
    },
    {
      id: 12,
      videoId: "E9QRaiOamRA",
      url: "https://www.youtube.com/watch?v=E9QRaiOamRA",
      title: "Bí Mật Đằng Sau Hệ Thống Trả Đũa Hạt Nhân Tự Báo Thù Của Nga",
      numOfView: 5211105,
      createdDate: new Date(),
      sharedBy: {
        id: 12,
        imageUrl:
          "https://yt3.ggpht.com/xW_pvceTk6y8oPXqv9Ea0hT3X9z4sQ8cAL0e7ukRMRv2rd1IEiXy7xjVivYHIMU9_SPHFoPK=s176-c-k-c0x00ffffff-no-rj",
        name: "CDTeam - Kiến Thức Quân Sự",
      },
    },
  ],
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialState, { action }) => {
  switch (action?.type) {
    case "GET_DATA_VIDEOS":
      return { ...state, dataResponse: action.videos };

    default:
      return state;
  }
};
