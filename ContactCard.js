import React from 'react';
import ContactList from './ContactList';

const CardContact=(props)=>{
    const{id, name, email} = props.contact
    reutrn (
        <div className="item">
        <div className="content">
            <div className="header">
                {name}
            </div>
            <div>
                {email}
            </div>
        </div>
        <i className="trash alternate ouline icon"
        style={{color:"red", marginTop:"7px"}} 
        onClick={()=>props.clickHandler(id)}></i>
    
    </div>
    );
};
export default ContactCard;