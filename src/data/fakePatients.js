import { values } from "lodash";
import { toast } from "react-toastify";

const patients = [
  {
    gender: "female",
    name: {
      title: "Ms",
      first: "Julia",
      last: "Castro",
    },
    location: {
      street: {
        number: 9627,
        name: "Calle de Atocha",
      },
      city: "Jerez de la Frontera",
      state: "Canarias",
      country: "Spain",
      postcode: 89492,
      coordinates: {
        latitude: "-19.4690",
        longitude: "11.0913",
      },
      timezone: {
        offset: "+6:00",
        description: "Almaty, Dhaka, Colombo",
      },
    },
    email: "julia.castro@example.com",
    login: {
      uuid: "82ccf663-e950-4862-aba5-a626b452ec2b",
      username: "goldenostrich453",
      password: "pegasus",
      salt: "JvbFykkU",
      md5: "e5b7fef1ad178112fbe2bf87b9061bb7",
      sha1: "4be918b98be1e469234e76f5d2b123fd75ec5e72",
      sha256:
        "5e95d1625a33929b82574dfb6b1a388f9f803389eb2928e6d60e63227bac6041",
    },
    dob: {
      date: "1952-09-24T17:59:13.081Z",
      age: 68,
    },
    registered: {
      date: "2009-11-06T19:26:49.865Z",
      age: 11,
    },
    phone: "923-197-171",
    cell: "687-223-347",
    id: {
      name: "DNI",
      value: "82837030-B",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/68.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/68.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/68.jpg",
    },
    nat: "ES",
    discharging: {
      inProcess: true,
      dischargeLetter: true,
      letterApproved: false,
      discharged: false,
      letter: {
        patientName: "Miss Demy Peeman",
        date: new Date().getVarDate,
        body: `Dear Ms Julia Castro,\n\nToday ${new Date().getUTCDate()}/${new Date().getUTCMonth()}/${new Date().getUTCFullYear()}, we are discharging you from [Hospital name].\n\n[Some information about the following days]\n\nDiagnose:\n\n[Write the diagnose of the patient here]\n\n Additional information:\n\n [Write any additional information for the patient]`,
        createdBy: "Miss Anna Alexander - Nurse",
        headNurseApproved: true,
        surgeonApproved: false,
        signedBy: [
          "Head Nurse - Miss Silvia Denaro",
          "Surgeon - Daniel Jackson",
        ],
      },
    },
    notes: [{ title: "First note", body: "This is my first note!" }],
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Danielle",
      last: "Green",
    },
    location: {
      street: {
        number: 6323,
        name: "Grange Road",
      },
      city: "Wells",
      state: "Warwickshire",
      country: "United Kingdom",
      postcode: "S2K 7RP",
      coordinates: {
        latitude: "8.9108",
        longitude: "83.8895",
      },
      timezone: {
        offset: "+4:30",
        description: "Kabul",
      },
    },
    email: "danielle.green@example.com",
    login: {
      uuid: "453aa3ee-ef3b-4610-9647-a20fbf678ce3",
      username: "lazymouse226",
      password: "diablo",
      salt: "0oSzfaMx",
      md5: "5d552c9d63b51b9cb9f54f5dc5620ae8",
      sha1: "d7e325acf15219cacb3608ebf03536c94287db76",
      sha256:
        "a4c7c5c01a8dabce61bf7b972e5f82fa9eea8f651ba9ebd5662ade1dfd0a63f9",
    },
    dob: {
      date: "1945-07-05T17:07:30.922Z",
      age: 75,
    },
    registered: {
      date: "2019-05-31T19:12:10.417Z",
      age: 1,
    },
    phone: "016977 04959",
    cell: "0778-458-014",
    id: {
      name: "NINO",
      value: "LR 18 77 54 P",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/71.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/71.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/71.jpg",
    },
    nat: "GB",
    discharging: {
      inProcess: true,
      dischargeLetter: true,
      letterApproved: false,
      discharged: false,
      letter: {
        patientName: "Miss Demy Peeman",
        date: new Date().getVarDate,
        body: `Dear Miss Danielle Green,\n\nToday ${new Date().getUTCDate()}/${new Date().getUTCMonth()}/${new Date().getUTCFullYear()}, we are discharging you from [Hospital name].\n\n[Some information about the following days]\n\nDiagnose:\n\n[Write the diagnose of the patient here]\n\n Additional information:\n\n [Write any additional information for the patient]`,
        createdBy: "Miss Anna Alexander - Nurse",
        headNurseApproved: false,
        surgeonApproved: false,
        signedBy: [
          "Head Nurse - Miss Silvia Denaro",
          "Surgeon - Daniel Jackson",
        ],
      },
    },
    notes: [],
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Demy",
      last: "Peeman",
    },
    location: {
      street: {
        number: 8847,
        name: "Greveling",
      },
      city: "Wijdemeren",
      state: "Flevoland",
      country: "Netherlands",
      postcode: 10024,
      coordinates: {
        latitude: "46.7123",
        longitude: "143.4097",
      },
      timezone: {
        offset: "+8:00",
        description: "Beijing, Perth, Singapore, Hong Kong",
      },
    },
    email: "demy.peeman@example.com",
    login: {
      uuid: "380de9e2-000d-4d98-a9eb-c6ee8d966f74",
      username: "sadrabbit473",
      password: "tuscl",
      salt: "dc12LHkM",
      md5: "f05096a44a3bc168a07e74026f36cb43",
      sha1: "a3cf07bf30786be74c459e27bb10628ba6e0b327",
      sha256:
        "f085665aa0c9b39627b636a04fb2e9e4c91683f357a452a0b28a0ccf348e7321",
    },
    dob: {
      date: "1994-04-27T06:34:53.672Z",
      age: 26,
    },
    registered: {
      date: "2018-01-30T22:16:30.710Z",
      age: 2,
    },
    phone: "(854)-494-2674",
    cell: "(737)-683-7908",
    id: {
      name: "BSN",
      value: "47239346",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/51.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/51.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/51.jpg",
    },
    nat: "NL",
    discharging: {
      inProcess: false,
      dischargeLetter: true,
      letterApproved: true,

      discharged: false,
      letter: {
        patientName: "Miss Demy Peeman",
        date: new Date().getVarDate,
        body: `Dear Miss Demy Peeman,\n\nToday ${new Date().getUTCDate()}/${new Date().getUTCMonth()}/${new Date().getUTCFullYear()}, we are discharging you from [Hospital name].\n\n[Some information about the following days]\n\nDiagnose:\n\n[Write the diagnose of the patient here]\n\n Additional information:\n\n [Write any additional information for the patient]`,
        createdBy: "Miss Anna Alexander - Nurse",
        headNurseApproved: true,
        surgeonApproved: true,
        signedBy: [
          "Head Nurse - Miss Silvia Denaro",
          "Surgeon - Daniel Jackson",
        ],
      },
    },
    notes: [],
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Harry",
      last: "Coleman",
    },
    location: {
      street: {
        number: 8403,
        name: "W Belt Line Rd",
      },
      city: "Mcallen",
      state: "Louisiana",
      country: "United States",
      postcode: 81616,
      coordinates: {
        latitude: "87.0226",
        longitude: "-8.0470",
      },
      timezone: {
        offset: "0:00",
        description: "Western Europe Time, London, Lisbon, Casablanca",
      },
    },
    email: "harry.coleman@example.com",
    login: {
      uuid: "627de85c-e13f-471c-a2cb-12b8f8680ac7",
      username: "smallpeacock185",
      password: "bugger",
      salt: "5hm8CeXi",
      md5: "718425a774180cdd57829ed034156c1f",
      sha1: "be9340aa129e3ca2dde4868a8f9414a06a41a88e",
      sha256:
        "448ae8703812685e893fac92294fcb14a54aee2b48e33badacf80b2429af0226",
    },
    dob: {
      date: "1953-04-08T14:52:38.315Z",
      age: 67,
    },
    registered: {
      date: "2014-10-06T17:23:55.705Z",
      age: 6,
    },
    phone: "(954)-506-8458",
    cell: "(415)-683-3671",
    id: {
      name: "SSN",
      value: "971-60-9791",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/52.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/52.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/52.jpg",
    },
    nat: "US",
    discharging: {
      inProcess: false,
      dischargeLetter: false,
      letterApproved: false,
      discharged: false,
      letter: {},
    },
    notes: [],
  },
  {
    gender: "female",
    name: {
      title: "Madame",
      first: "Violeta",
      last: "Roche",
    },
    location: {
      street: {
        number: 7702,
        name: "Rue André-Gide",
      },
      city: "Erlen",
      state: "Zug",
      country: "Switzerland",
      postcode: 3064,
      coordinates: {
        latitude: "-58.1756",
        longitude: "45.4879",
      },
      timezone: {
        offset: "-8:00",
        description: "Pacific Time (US & Canada)",
      },
    },
    email: "violeta.roche@example.com",
    login: {
      uuid: "fe72c64e-f240-416a-9a8a-5be0cf3dc33b",
      username: "redgoose721",
      password: "lonely",
      salt: "jqdgzOfN",
      md5: "d3609cf4a1539583487b1eeb033a028b",
      sha1: "0386aca67e46430298b8f40d3694508cd1e717f4",
      sha256:
        "29ec557531d0b9e2de80288ad4cbcd985d7cabd0ca1aadb6acc5a4d4ca40fa70",
    },
    dob: {
      date: "1994-04-20T00:15:06.694Z",
      age: 26,
    },
    registered: {
      date: "2002-06-04T15:19:11.750Z",
      age: 18,
    },
    phone: "079 812 70 93",
    cell: "079 665 57 79",
    id: {
      name: "AVS",
      value: "756.4180.5265.37",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/76.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/76.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/76.jpg",
    },
    nat: "CH",
    discharging: {
      inProcess: false,
      dischargeLetter: false,
      letterApproved: false,
      discharged: false,
      letter: {},
    },
    notes: [],
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Waldemar",
      last: "Kortmann",
    },
    location: {
      street: {
        number: 2240,
        name: "Schlossstraße",
      },
      city: "Lieberose",
      state: "Mecklenburg-Vorpommern",
      country: "Germany",
      postcode: 78559,
      coordinates: {
        latitude: "-38.6501",
        longitude: "-95.1845",
      },
      timezone: {
        offset: "-10:00",
        description: "Hawaii",
      },
    },
    email: "waldemar.kortmann@example.com",
    login: {
      uuid: "f713d87c-c8a7-464d-9aaa-fbfa3b420033",
      username: "purplemouse979",
      password: "nimrod",
      salt: "WIOCysZh",
      md5: "4174b2037c42be6b1c72f0b7a99c9349",
      sha1: "0ee243aad16548892040032311e17adb94a496d4",
      sha256:
        "8a32def99e081fd822371b97770067107542e3b6e1af2cef3825669e97e24751",
    },
    dob: {
      date: "1982-05-04T12:56:46.805Z",
      age: 38,
    },
    registered: {
      date: "2019-08-26T14:14:35.267Z",
      age: 1,
    },
    phone: "0272-1002202",
    cell: "0174-5054722",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/65.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/65.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/65.jpg",
    },
    nat: "DE",
    discharging: {
      inProcess: false,
      dischargeLetter: false,
      letterApproved: false,
      discharged: false,
      letter: {},
    },
    notes: [],
  },
  {
    gender: "female",
    name: {
      title: "Miss",
      first: "Scarlett",
      last: "Robinson",
    },
    location: {
      street: {
        number: 4265,
        name: "Taharoto Road",
      },
      city: "Whangarei",
      state: "Hawke'S Bay",
      country: "New Zealand",
      postcode: 91337,
      coordinates: {
        latitude: "63.0810",
        longitude: "152.2483",
      },
      timezone: {
        offset: "-8:00",
        description: "Pacific Time (US & Canada)",
      },
    },
    email: "scarlett.robinson@example.com",
    login: {
      uuid: "e9126df4-e188-44b0-bdcf-77c2ee044ed6",
      username: "whiteladybug495",
      password: "schmidt",
      salt: "gFFqQd02",
      md5: "c092d9f5118182aa2fd14da624684167",
      sha1: "2f2c19a668d390a413fffb8d342637ee488bf877",
      sha256:
        "21e86850c160d0a9ea512adaec758503e28384d4a988214afe249287de29f825",
    },
    dob: {
      date: "1986-11-02T14:20:44.206Z",
      age: 34,
    },
    registered: {
      date: "2005-05-11T14:43:56.340Z",
      age: 15,
    },
    phone: "(903)-298-3397",
    cell: "(818)-947-2340",
    id: {
      name: "",
      value: null,
    },
    picture: {
      large: "https://randomuser.me/api/portraits/women/87.jpg",
      medium: "https://randomuser.me/api/portraits/med/women/87.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/women/87.jpg",
    },
    nat: "NZ",
    discharging: {
      inProcess: false,
      dischargeLetter: false,
      letterApproved: false,
      discharged: false,
      letter: {},
    },
    notes: [],
  },
  {
    gender: "male",
    name: {
      title: "Mr",
      first: "Clayton",
      last: "Bowman",
    },
    location: {
      street: {
        number: 9414,
        name: "Boghall Road",
      },
      city: "Swords",
      state: "Tipperary",
      country: "Ireland",
      postcode: 34185,
      coordinates: {
        latitude: "18.5768",
        longitude: "-125.9879",
      },
      timezone: {
        offset: "+11:00",
        description: "Magadan, Solomon Islands, New Caledonia",
      },
    },
    email: "clayton.bowman@example.com",
    login: {
      uuid: "21ff0dd4-c63b-441a-958d-a00d15ffd394",
      username: "orangeswan710",
      password: "eagle",
      salt: "XAlTqgOf",
      md5: "cf3cb95378b23b41249ec2413fc2df6c",
      sha1: "cfe847e846f5d608cc80ef6b2db0d890affece6d",
      sha256:
        "2e6e405605e95ee2096e3246529c014fbf6f4ece82e62469c20c2e678c6f6721",
    },
    dob: {
      date: "1944-12-27T12:05:26.748Z",
      age: 76,
    },
    registered: {
      date: "2002-07-02T13:13:52.461Z",
      age: 18,
    },
    phone: "011-399-8252",
    cell: "081-020-9953",
    id: {
      name: "PPS",
      value: "6598595T",
    },
    picture: {
      large: "https://randomuser.me/api/portraits/men/84.jpg",
      medium: "https://randomuser.me/api/portraits/med/men/84.jpg",
      thumbnail: "https://randomuser.me/api/portraits/thumb/men/84.jpg",
    },
    nat: "IE",
    discharging: {
      inProcess: false,
      dischargeLetter: false,
      letterApproved: false,
      discharged: false,
      letter: {},
    },
    notes: [],
  },
];

//Get patients
export function getPatients() {
  return patients;
}

//Get patien with provided id
export function getPatient(uuid) {
  const patientsInDb = [...patients];
  const patient = patientsInDb.find((patient) => patient.login.uuid === uuid);
  return patient;
}

//Update patient discharging letter body
export function updateLetter(id, user, body, signedBy) {
  const { discharging } = getPatient(id);
  discharging.letter.body = body;
  discharging.letter.signedBy.push(signedBy);
  if (user.accessLevel === 2) {
    discharging.letter.headNurseApproved = true;
  } else {
    discharging.letter.surgeonApproved = true;
    discharging.inProcess = false;
    discharging.letterApproved = true;
  }
}

//Discharge patient with provided id
export function dischargePatient(id) {
  const patient = getPatient(id);
  const indexOf = patients.indexOf(patient);
  const dischargePatient = delete patients[indexOf];
  if (dischargePatient) {
    toast.success(
      `Patient ${values(patient.name).join(" ")} was discharged successfully! `
    );
    return getPatients();
  } else {
    toast.error(
      "There is something wrong! Please, refresh the page and try again!"
    );
  }
}

//Add new note for patient with provided id
export function newNote(uuid, obj) {
  const patient = getPatient(uuid);
  patient.notes.unshift(obj);
  return patient.notes;
}

//Add discharging letter for user with provided id
export function addDischargingLetter(uuid, obj) {
  const discharging = getPatient(uuid).discharging;
  discharging.letter = obj;
  discharging.dischargeLetter = true;
  discharging.inProcess = true;
}
