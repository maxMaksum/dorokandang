import { createContext, useEffect, useState } from 'react';

export const Store = createContext();

export function StoreProvider({ children }) {
  const [users, setUsers] = useState([]);
  const [userEdit, setUserEdit] = useState({});
  const [showForm, setShowForm] = useState(false);
  const [showSearchOK, setShowSearchOK] = useState(true);
 
const addUsers = (newUser) => {
  setUsers(newUser);
};

const readUsers = () => {
   return users
};

const updateUsers = (id, x) => {
  const editUsers = users.filter(user => {
    return user._id !== x._id})
  setUsers([...editUsers, x])

};

const removeUsers = (id)=>{
  const userLists = users.filter((user) => user._id !== id );
  setUsers( userLists)
}

const resetUsers = ()=>{

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
      setUserEdit,
      showSearchOK, setShowSearchOK
  
    }}>
  
   {children}
   
   </Store.Provider>
  )
  
  
}