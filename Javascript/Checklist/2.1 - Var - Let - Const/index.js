let data = [
  {
    month: 'Tháng 1',
    numOfPost: 0,
    numOfUser: 0,
  },
  {
    month: 'Tháng 2',
    numOfPost: 0,
    numOfUser: 0,
  },
  {
    month: 'Tháng 3',
    numOfPost: 0,
    numOfUser: 0,
  },
  {
    month: 'Tháng 4',
    numOfPost: 0,
    numOfUser: 0,
  },
  {
    month: 'Tháng 5',
    numOfPost: 0,
    numOfUser: 0,
  },
  {
    month: 'Tháng 6',
    numOfPost: 0,
    numOfUser: 0,
  },
  {
    month: 'Tháng 7',
    numOfPost: 0,
    numOfUser: 0,
  },
  {
    month: 'Tháng 8',
    numOfPost: 0,
    numOfUser: 0,
  },
  {
    month: 'Tháng 9',
    numOfPost: 0,
    numOfUser: 0,
  },
  {
    month: 'Tháng 10',
    numOfPost: 0,
    numOfUser: 0,
  },
  {
    month: 'Tháng 11',
    numOfPost: 0,
    numOfUser: 0,
  },
  {
    month: 'Tháng 12',
    numOfPost: 0,
    numOfUser: 0,
  },
];

const posting = [
  {
    month: 2,
    number: 2,
  },
  {
    month: 3,
    number: 1,
  },
  {
    month: 4,
    number: 1,
  },
  {
    month: 5,
    number: 1,
  },
  {
    month: 6,
    number: 21,
  },
  {
    month: 7,
    number: 10,
  },
  {
    month: 8,
    number: 1,
  },
  {
    month: 9,
    number: 1,
  },
  {
    month: 10,
    number: 1,
  },
  {
    month: 11,
    number: 1,
  },
  {
    month: 12,
    number: 1,
  },
];

const user = [
  {
    month: 6,
    number: 21,
  },
  {
    month: 7,
    number: 15,
  },
];

posting.forEach((item) => {
  data[item.month - 1].numOfPost = item.number;
})

user.forEach((item) => {
  data[item.month - 1].numOfUser = item.number;
})

console.log(data);