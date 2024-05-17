import { db } from "./firebase";
import { ref, query, orderByChild, equalTo, get } from "firebase/database";

export const verifyUserCredentials = async (email, password) => {
  try {
    const hospRef = ref(db, 'hosp');
    const queryRef = query(hospRef, orderByChild('email'), equalTo(email));
    const snapshot = await get(queryRef);

    if (!snapshot.exists()) {
      throw new Error('Hospital not found');
    }

    let matchedHospital = null;
    let hospitalName = null; 

    snapshot.forEach((childSnapshot) => {
      const hospital = childSnapshot.val();
      if (hospital.pass && hospital.pass === password) {
        matchedHospital = hospital;
        hospitalName = hospital.name; 
      }
    });

    if (!matchedHospital) {
      throw new Error('Incorrect email or password');
    }

    return { matchedHospital, hospitalName };
  } catch (error) {
    console.error('Authentication failed:', error.message);
    throw error;
  }
};
