import React, { useState } from 'react';
import { auth, firestore } from '../../backend/config/firebase';

const UserForm = () => {
  const [name,setName] = useState('');
  const [surname,setSurname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);

  const handleNamechange = (e) => setName(e.target.value);
  const handleSurnamechange =(e) => setSurname(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleRoleChange = (e) => setIsAdmin(e.target.checked);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Créer un nouvel utilisateur avec l'adresse e-mail et le mot de passe
      const { user } = await auth.createUserWithEmailAndPassword(email, password);

      // Ajouter le rôle de l'utilisateur dans la base de données Firestore
      await firestore.collection('users').doc(user.uid).set({
        isAdmin,
      });

      // Réinitialiser les champs du formulaire
      setName('');
      setSurname('');
      setEmail('');
      setPassword('');
      setIsAdmin(false);

      console.log('Utilisateur ajouté avec succès !');
    } catch (error) {
      console.error('Erreur lors de l\'ajout de l\'utilisateur', error);
    }
  };

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
