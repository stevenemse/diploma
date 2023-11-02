import { addDoc, collection } from "firebase/firestore";
import { getAllIssuer } from "../issuers/getAllIssuer";
import React,{ useState, useEffect} from 'react';

//Allows schools to add a single diploma to the contract
const addCredentiale = () =>{

    const [issuer,setIssuer] = useState([]);
    const [credentialId,setCredentialId] = useState();
    const [issuerEmail,setIssuerEmail] = useState();
    const [holderId,setHolderId] = useState();
    const [credentialTitle,setCredentialTitle] = useState();
    const [issuerDate,setIssuerDate] = useState();
    const [verificationCode,setVerificationCode] = useState();
    const [institution,setInstitution] = useState();
    const [prototypeFile,setPrototypeFile] = useState();


    const handleChangeCredentialId = (e) => setCredentialId(e.target.value);
    const handleChangeIssuerEmail = (e) => setIssuerEmail(e.target.value);
    const handleChangeHolderId = (e) => setHolderId(e.target.value);
    const handleChangeCredentialTitle = (e) => setCredentialTitle(e.target.value);
    const handleChangeIssuerDate = (e) => setIssuerDate(e.target.value);
    const handleChangeVerificationCode = (e) => setVerificationCode(e.target.value);
    const handleChangeInstitution = (e) => setInstitution(e.target.value)
    const handleChangePrototypeFile = (e) => setPrototypeFile(e.target.files[0]);

    //check the issuer
    useEffect(()=>{
        async function getData(){
            const credentialListe = await getAllIssuer()
        }
    },[]);


    const handleSubmit =  async (e) =>{
        e.preventDefault();
        let alert;
        for(let i = 0; i<issuer.length;i++){
            if(issuer[i].credentialId === credentialId){
                alert = true;
            }
        }
        if(alert === true){

        }
        else{
            try {
                const information = await addDoc(collection(db,"credential"),{
                    credentialId:credentialId,
                    issuerEmail:issuerEmail,
                    holderId:holderId,
                    credentialTitle:credentialTitle,
                    issuerDate:issuerDate,
                    verificationCode:verificationCode,
                    institution:institution,
                    prototypeFile:prototypeFile
                })
                console.log("document written with id: ",information.id);
                console.log("credential add successfully");
            } catch (error) {
                console.error("can't add issuer\n there is problem");
            }
        }
    }


    return (
        <>
        <div>
            <label>IssuerEmail: </label>
            <input type="email" value="issueremail" onChange={handleChangeIssuerEmail}/>
        </div>
        <div>
            <label></label>
        </div>
        </>
    )
};
export default addCredentiale;
