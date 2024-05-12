import { db } from "./firebase";
import { ref, query, orderByChild, equalTo, get } from "firebase/database";

export const verifyUserCredentials = async (email, password) => {
  try {
    const hospRef = ref(db, 'hosp');
    const queryRef = query(hospRef, orderByChild('email'), equalTo(email));
    const snapshot = await get(queryRef);

    console.log("Retrieved data:", snapshot.val());
    
    if (!snapshot.exists()) {
      throw new Error('Hospital not found');
    }

    let matchedHospital = null;

    snapshot.forEach((childSnapshot) => {
      const hospital = childSnapshot.val();
      if (hospital.pass && hospital.pass === password) {
        matchedHospital = hospital;
      }
    });

    console.log("Matched hospital:", matchedHospital); 
    
    if (!matchedHospital) {
      throw new Error('Incorrect email or password');
    }

    return matchedHospital;
  } catch (error) {
    console.error('Authentication failed:', error.message);
    throw error;
  }
};
