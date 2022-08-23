import { createContext, useEffect, useState } from 'react';

export const Store = createContext();

export function StoreProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [userEdit, setUserEdit] = useState({});
  const [showForm, setShowForm] = useState(false);
 
const addUsers = (newUser) => {
  setUsers(newUser);
};

const readUsers = () => {
   return users
};

const updateUsers = (id, editUser) => {
  const editUsers = users.map(user => {
    if (user._id === id) {
      return editUser;
    }else{
      return users;
    }
  })
  setUsers( editUsers)
};

const removeUsers = (id)=>{
  const userLists = users.filter((user) => user._id !== id );

  setUsers( userLists)
}

const resetUsers = (id)=>{
  // const userLists = users.filter((user) => user._id !== id );

  setUsers([])
}



  return (
    <Store.Provider value={{
      users,
      setUsers,
      addUsers,
      readUsers,
      resetUsers,
      removeUsers,
      updateUsers,
      showForm,
      setShowForm,
      userEdit, 
      setUserEdit
  
    }}>
  
   {children}
   
   </Store.Provider>
  )
  
  
}