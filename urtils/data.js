import moment from "moment";

export const Userlist = [
  {
    name: "Dawn Ramirez",
    avatar_url: "https://randomuser.me/api/portraits/women/80.jpg",
    email: "ramirez@yahoo.de",
    phoneNum: "+44 07545435",
  },

  {
    name: "Brande Eaton",
    avatar_url: "https://randomuser.me/api/portraits/women/80.jpg",
    email: "brande@mozilla.co.uk",
    phoneNum: "+44 0705618175",
  },

  {
    name: "Kelly Foster",
    avatar_url: "https://randomuser.me/api/portraits/women/27.jpg",
    email: "Foster@yandex.co.uk",
    phoneNum: "+44 0733070456",
  },

  {
    name: "Jasmin Oswalt",
    avatar_url: "https://randomuser.me/api/portraits/women/27.jpg",
    email: "jasmin@outlook.org",
    phoneNum: "+44 0788500041",
  },

  {
    name: "Kourtney Levy",
    avatar_url: "https://randomuser.me/api/portraits/women/27.jpg",
    email: "kourtney@protonmail.com",
    phoneNum: "+44 0788500041",
  },

  {
    name: "Zachary Fletcher",
    avatar_url: "https://randomuser.me/api/portraits/men/59.jpg",
    email: "Fletcher@protonmail.com",
    phoneNum: "+44 075745434",
  },

  {
    name: "Zoe Cheney",
    avatar_url: "https://randomuser.me/api/portraits/men/59.jpg",
    email: "zoe@mail.org",
    phoneNum: "+44 07450425608",
  },

  {
    name: "Shanon Banda",
    avatar_url: "https://randomuser.me/api/portraits/men/59.jpg",
    email: "shanon@yandex.org",
    phoneNum: "+44 0724601336",
  },
];

export const favoritesList = [
  {
    name: "Jovita Matos",
    avatar_url: "https://randomuser.me/api/portraits/women/62.jpg",
    email: "jovita@yahoo.com",
    phoneNum: "+44 07535448",
  },
];

export const billsData = [
  {
    id: "0",
    title: "Gas Bill",
    date: moment().add(1, "days"),
    amount: 74,
    color: "rgba(240, 91, 5, .2)",
    color2: "rgb(49, 152, 212)",
    icon: "fire",
    comapany: "EDF Energy",
    accountNo: "31926819",
    sort: "504371",
  },
  {
    id: "1",
    title: "Electricity Bill",
    date: moment().add(10, "days"),
    amount: 79,
    color: "rgba(240, 221, 50, .2)",
    color2: "rgba(242, 186, 44, 1)",
    icon: "lightning-bolt",
    comapany: "EDF Energy",
    accountNo: "31926819",
    sort: "608371",
  },

  {
    id: "2",
    title: "Internet Bill",
    date: moment().add(1, "days"),
    amount: 130,
    color: "rgba(0, 0, 0, .2)",
    color2: "rgba(0, 0, 0, 1)",
    icon: "web",
    comapany: "BT",
    accountNo: "25626659",
    sort: "608371",
  },

  {
    id: "3",
    title: "Water Bill",
    date: moment().add(25, "days"),
    amount: 43,
    color: "rgba(0, 0, 0, .2)",
    color2: "rgba(0, 0, 0, 1)",
    icon: "water",
    comapany: "Thames water",
    accountNo: "76943536",
    sort: "505351",
  },
];
