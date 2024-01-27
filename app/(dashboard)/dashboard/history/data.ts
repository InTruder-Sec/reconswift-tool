export type Payment = {
  scanid: string;
  status: "In Queue" | "Completed" | "In Progress";
  target: string;
  link: string;
  date: string;
};

const data: Payment[] = [
  {
    scanid: "RSID23436",
    status: "In Queue",
    target: "https://www.google.com",
    link: "https://www.google.com",
    date: "2021-05-01",
  },
  {
    scanid: "RSID23436",
    status: "Completed",
    target: "https://www.google.com",
    link: "https://www.google.com",
    date: "2021-05-01",
  },
  {
    scanid: "RSID23436",
    status: "In Progress",
    target: "https://www.google.com",
    link: "https://www.google.com",
    date: "2021-05-01",
  },
  {
    scanid: "RSID23436",
    status: "In Queue",
    target: "https://www.google.com",
    link: "https://www.google.com",
    date: "2021-05-01",
  },
  {
    scanid: "RSID23436",
    status: "Completed",
    target: "https://www.google.com",
    link: "https://www.google.com",
    date: "2021-05-01",
  },
  {
    scanid: "RSID23436",
    status: "In Progress",
    target: "https://www.google.com",
    link: "https://www.google.com",
    date: "2021-05-01",
  },
  {
    scanid: "RSID23436",
    status: "In Queue",
    target: "https://www.google.com",
    link: "https://www.google.com",
    date: "2021-05-01",
  },
  {
    scanid: "RSID23436",
    status: "Completed",
    target: "https://www.google.com",
    link: "https://www.google.com",
    date: "2021-05-01",
  },
  {
    scanid: "RSID23436",
    status: "In Progress",
    target: "https://www.google.com",
    link: "https://www.google.com",
    date: "2021-05-01",
  },
];

export default data;
