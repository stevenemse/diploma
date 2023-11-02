import React,{ useState, useEffect} from 'react';
import {db} from '../../config/firebase';
import { collection,addDoc } from 'firebase/firestore';
import {getAllIssuer} from '../issuers/getAllIssuer';
//import { tab } from '@testing-library/user-event/dist/tab';


const StructureForm = () => {

    const [issuer, setIssuer] = useState([]);
    const [issuerName, setIssuerName] = useState('');
//    const [issuerId,setIssuerId] = useState('');
    const [issuerPassword,setIssuerPassword] = useState('');
    const [issuerEmail,setIssuerEmail] = useState('');
    const [issuerPhone,setIssuerPhone] = useState('');
    const [issuerType,setIssuerType] = useState('');
//    const [structureLogo,setStructureLogo] = useEffect('');
    const [issuerDescription, setIssuerDescription] = useState('');


    const handleChangeIssuerName = (e) => setIssuerName(e.target.value);
   // const handleChangeStructureLogo = (e) => setStructureLogo(e.target.value);
    const handleChangeIssuerDescription = (e) => setIssuerDescription(e.target.value);
   // const handleChangeIssuerId = (e) => setIssuerId(e.target.value);
    const handleChangeIssuerPassword = (e) => setIssuerPassword(e.target.value);
    const handleChangeIssuerEmail = (e) => setIssuerEmail(e.target.value);
    const handleChangeIssuerPhone = (e) => setIssuerPhone(e.target.value);
    const handleChangeIssuerType = (e) => setIssuerType(e.target.value);


   const handleSubmit = async (e) => {
        e.preventDefault();
        let alert;
        for(let i = 0; i< issuer.length; i++){
            if(issuer[i].issuerName === issuerName){
                alert = true;
            }
        }
        if(alert === true){
            //
        }
        else{
            try {
                const information = await addDoc(collection(db,"issuer"),{
                    issuerName: issuerName,
                    issuerEmail:issuerEmail,
                    issuerPassword:issuerPassword,
                    issuerType: issuerType,
                    issuerPhone:issuerPhone,
                  //  structureLogo:structureLogo,
                    issuerDescription: issuerDescription
                })
                console.log("document written with id: ",information.id);
                console.log("isuer add successfully");
            } catch (error) {
                console.error("can't add issuer\n there is  problem");
            }
        }
    };

    useEffect(()=>{
        localStorage.setItem("issuer",null);
        async function getData(){
            const result = await getAllIssuer();
            setIssuer(result);
        }
        getData();
    },[]);

    return (
        <form onSubmit={handleSubmit}>
      <div>
        <label>Nom de la structure:</label>
        <input type="name" value={issuerName} onChange={handleChangeIssuerName} required />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={issuerEmail} onChange={handleChangeIssuerEmail} required/>
      </div>
      <div>
        <label>Password: </label>
        <input type="text" value={issuerPassword} onChange={handleChangeIssuerPassword} required />
      </div>
      <div>
        <label>Phone: </label>
        <input type="text" value={issuerPhone} onChange={handleChangeIssuerPhone} required/>
      </div>
      <div>
        <label>Type of structure:</label>
        <select value={issuerType} onChange={handleChangeIssuerType} required>
            <option></option>
            <option value="School">School</option>
            <option value="Universite">University</option>
            <option value="Enterprise">Enterprise</option>
            <option value="Ministery">Ministery</option>
            <option value="ONG">ONG</option>
        </select>
      </div>
      <div>
        <label>Descritpion:</label>
        <input type='text' value={issuerDescription} onChange={handleChangeIssuerDescription} required/>
      </div>
      <button type="submit">Ajouter</button>
    </form>
    );
}

export default StructureForm;
