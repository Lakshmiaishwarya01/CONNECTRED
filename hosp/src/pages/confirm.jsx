import React from "react";
import "../styles/confirm.css";
import Menu from '../components/menu.jsx';
const Confirm = () => {
  return (
    <div className="conf">
      <div className="div">
   <Menu />
        <div className="overlap-2">
        <div className="text-wrapper-24">Donor Confirmation</div>
            <div className="overlap-3">
           
           <div className="overlap-group-2">
             <div className="text-wrapper-10">Donation Id : fr567uhft678</div>
             <p className="p">Date / Time : 11 -03-24 / 11:21</p>
             <div className="text-wrapper-11">Blood Group : A+</div>
             <div className="text-wrapper-16">Mr : Allen</div>
             <div className="text-wrapper-12">Donor Id : a76s8d77s89a</div>
             <div className="text-wrapper-15">Patient name : Swetha</div>
           </div>
           
        
           <button className="rectangle" >
                <div className="text-wrapper-13">Confirm Donation</div>
                </button>
            </div>
            <div className="overlap-wrapper">
            <div className="overlap-group-2">
              
                <div className="text-wrapper-10">Donation Id : fr567uhft678</div>
                <p className="p">Date / Time : 11 -03-24 / 11:21</p>
                <div className="text-wrapper-11">Blood Group : 0+</div>
                <div className="text-wrapper-12">Donor Id : a76s8d77s89a</div>
                <button className="rectangle" >
                <div className="text-wrapper-13">Confirm Donation</div>
                </button>
              
              <div className="text-wrapper-16">Mr : Akshay</div>
              <div className="text-wrapper-15">Patient name : Arun</div>
            </div>
          </div>
            <div className="overlap-group-wrapper">
            <div className="overlap-group-2">
                <div className="text-wrapper-10">Donation Id : fr567uhft678</div>
                <p className="p">Date / Time : 11 -03-24 / 11:21</p>
                <div className="text-wrapper-11">Blood Group : 0+</div>
                <div className="text-wrapper-12">Donor Id : a76s8d77s89a</div>
                <button className="rectangle" >
                <div className="text-wrapper-13">Confirm Donation</div>
                </button>
              <div className="text-wrapper-14">Ms : Merin</div>
              <div className="text-wrapper-15">Patient name : Arun</div>
            </div>
          </div>
          
          <div className="div-wrapper">
            <div className="overlap-group-2">
              
                <div className="text-wrapper-10">Donation Id : fr567uhft678</div>
                <p className="p">Date / Time : 11 -03-24 / 11:21</p>
                <div className="text-wrapper-11">Blood Group : 0+</div>
                <div className="text-wrapper-12">Donor Id : a76s8d77s89a</div>
                <button className="rectangle" >
                <div className="text-wrapper-13">Confirm Donation</div>
                </button>
              <div className="text-wrapper-14">Mr : Keshav</div>
              <div className="text-wrapper-15">Patient name : Arun</div>
            </div>
          </div>
      
          
        </div>
      </div>
    </div>
  );
};
export default Confirm;