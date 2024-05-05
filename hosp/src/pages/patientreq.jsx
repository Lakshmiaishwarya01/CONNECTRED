import React from "react";
import "../styles/patientreq.css";
import Menu from '../components/menu.jsx';
const Request = () => {
  return (
    <div className="patient">
      <div className="div">
   <Menu />
        <div className="overlap-2">
        <div className="text-wrapper-24">Patient Requests</div>
            <div className="overlap-3">
           
           <div className="overlap-group-2">
             
             <p className="p">Date / Time : 11 -03-24 / 11:21</p>
             <div className="text-wrapper-11">Blood Group : A+</div>
             <div className="text-wrapper-16">Patient Name:Vimal</div>
             <div className="text-wrapper-12">Request Id : a76s8d77s89a</div>
            
           </div>
           
        
           <button className="rectangle" >
                <div className="text-wrapper-13">Confirm Request</div>
                </button>
            </div>
            <div className="overlap-wrapper">
            <div className="overlap-group-2">
              
                
                <p className="p">Date / Time : 11 -03-24 / 11:21</p>
                <div className="text-wrapper-11">Blood Group : 0+</div>
                <div className="text-wrapper-12">Request Id : a76s8d77s89a</div>
                <button className="rectangle" >
                <div className="text-wrapper-13">Confirm Request</div>
                </button>
              
              <div className="text-wrapper-16">Patient Name:Jake</div>
              
            </div>
          </div>
            <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
                
                <p className="p">Date / Time : 11 -03-24 / 11:21</p>
                <div className="text-wrapper-11">Blood Group : 0+</div>
                <div className="text-wrapper-12">Request : a76s8d77s89a</div>
                <button className="rectangle" >
                <div className="text-wrapper-13">Confirm Request</div>
                </button>
              <div className="text-wrapper-14">Patient Name:Sooraj</div>
              
            </div>
          </div>
          
          <div className="div-wrapper">
            <div className="overlap-group-2">
              
                
                <p className="p">Date / Time : 11 -03-24 / 11:21</p>
                <div className="text-wrapper-11">Blood Group : 0+</div>
                <div className="text-wrapper-12">Request Id : a76s8d77s89a</div>
                <button className="rectangle" >
                <div className="text-wrapper-13">Confirm Request</div>
                </button>
              <div className="text-wrapper-14">Patient Name:Kiran</div>
             
            </div>
          </div>
      
          
        </div>
      </div>
    </div>
  );
};
export default Request;