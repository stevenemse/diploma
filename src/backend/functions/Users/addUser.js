import React, { useState,useEffect } from 'react';
import { db } from '../../config/firebase';
import {collection,addDoc} from 'firebase/firestore';
import { getAllUsers} from './getAllUsers'
//import {GenerateId} from './generateId'

const UserForm = () => {
  const [users,setUsers] = useState([]);
  //const [usersId,setUsersId] = useState('');
  const [name,setName] = useState('');
  const [surname,setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [usersPhone,setUsersPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleNamechange = (e) => setName(e.target.value);
  const handleSurnamechange =(e) => setSurname(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRoleChange = (e) => setIsAdmin(e.target.checked);
  const handleUsersPhoneChange = (e) => setUsersPhone(e.target.value);
//  const handleUsersIdChange = (e) => setUsersId(e.target.value);


  const handleSubmit = async (e) => {
    e.preventDefault();
    let ale;
    for (let i = 0; i < users.length; i++) {
        if (users[i].email === email ) {
            ale = true
        }
    }
    if (ale === true) {
       // setAlert(true)
    }
    else{
      try {
        // Créer un nouvel utilisateur avec l'adresse e-mail et le mot de passe
        //const { user } = await auth.createUserWithEmailAndPassword(email, password);
        const information = await addDoc(collection(db,"users"),{
  //        usersId: usersId,
          username: name+surname,
          name: name,
          surname:surname,
          email:email,
          usersPhone: usersPhone,
          password:password,
          role:isAdmin
        })
        console.log("Document written with ID: ", information.id);

        console.log('Utilisateur ajouté avec succès !');
      } catch (error) {
        console.error('Erreur lors de l\'ajout de l\'utilisateur', error);
      }


    }

  };

  useEffect(() => {
    localStorage.setItem("users", null); // Réinitialiser la valeur de l'utilisateur dans le stockage local lors du chargement de la page

    async function getData() {
        const result = await getAllUsers(); // Récupérer tous les utilisateurs existants
        setUsers(result) // Mettre à jour l'état des utilisateurs avec les données récupérées
    }
    getData()
}, []);

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input type="name" value={name} onChange={handleNamechange} required />
      </div>
      <div>
        <label>surName:</label>
        <input type="surname" value={surname} onChange={handleSurnamechange} required />
      </div>
      <div>
        <label>Phone number</label>
        <input type="text" value={usersPhone} onChange={handleUsersPhoneChange} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={handleEmailChange} required />
      </div>
      <div>
        <label>Mot de passe:</label>
        <input type="password" value={password} onChange={handlePasswordChange} required />
      </div>
      <div>
        <label>
          Administrateur:
          <input type="checkbox" checked={isAdmin} onChange={handleRoleChange} />
        </label>
      </div>
      <button type="submit">Ajouter</button>
    </form>
  );
};

export default UserForm;
