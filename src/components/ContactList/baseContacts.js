import { v4 as uuidv4 } from "uuid";

const baseContacts = [
  { id: uuidv4(), name: "Rosie Simpson", phoneNumber: "459-12-56" },
  { id: uuidv4(), name: "Hermione Kline", phoneNumber: "443-89-12" },
  { id: uuidv4(), name: "Eden Clements", phoneNumber: "645-17-79" },
  { id: uuidv4(), name: "Annie Copeland", phoneNumber: "227-91-26" },
];

export default baseContacts;
