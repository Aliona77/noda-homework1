const contactsOperations = require('./Contacts');

const workWithContacts = async (type = "getList", id, data) => {
  try {
    switch (type) {
      case "getList":
        return await contactsOperations.getList();
      
      
      case "getContactById":
        return await contactsOperations.getContactById(id);
      
      case "addContact":
        return await contactsOperations.addContact(data)

      case "updateContactById":
        return await contactsOperations.updateContactById(id, data)

      case "removeContact":
        return await contactsOperations.removeContact(id)
    }
  } catch (error) {
    throw error;
  }
}

const id = 10;
const updateId = "f8633728-deeb-49db-b88d-8253308b0c37";

workWithContacts("removeContact", updateId)
.then(data => console.log(data))
.catch(error=>console.log(error))

// const updateData = {
//   name:"Ramo Kayia",
//   email:"Ramo.elementum@scelerisquescelerisquedui.net",
//   phone:"(777) 879-7777"
// };



//workWithContacts("updateContactById", updateId, updateData)
//.then(data => console.log(data))
//.catch(error=>console.log(error))



// workWithContacts("getList")
// .then(data => console.log(data))
// .catch(error=>console.log(error))

// workWithContacts("getContactById", id)
// .then(data => console.log(data))
// .catch(error=>console.log(error))
// const newData = {
//   name:"Ramo Kaiya",
//   email:"Ramoc.elementum@scelerisquescelerisquedui.net",
//   phone:"(688) 879-7777"
// };

// workWithContacts("addContact", "", newData)
// .then(data => console.log(data))
// .catch(error=>console.log(error))

