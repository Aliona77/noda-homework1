const { v4 } = require('uuid');
const fs = require("fs/promises");
const path = require("path");

const getList = require('./getList');

const addContact = async (data) => {
  const contacts = await getList();
  const newContact = { ...data, id: v4()};
  contacts.push(newContact);
  const filePath = path.join(__dirname, "contacts.json");
  await fs.writeFile(filePath, JSON.stringify(contacts));
  return newContact;
}

module.exports = addContact;
