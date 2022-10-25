import React from "react";

// we need to crete a form component so we use class component for this
 class AddContact extends React.Component{
    // we can not use React hooks int the class function so we create state object
    state={
        name: "",
        email:"",
    }

    add = (e)=>{
        e.preventDefault();
        if(this.state.name===""|| this.state.email===""){
           alert("All fields need to be fill out");
           return;
        }
        this.props.addContactHandler(this.state);
        this.setState({name:"", email:""});

    }
    // we use render for the class component 
    render(){
        return(
            <div className="ui main">
                <h2>
                    Add Contact 
                </h2> 
                <form className="ui form" onSubmit={this.add}>
                    <div className="field">
                        <label>
                            Name
                        </label>
                        <input type="text" name="name" placeholder="Name"
                         value={this.state.name}onChange={(e)=>this.setState({name:e.target.valueAsDate})}/>
                    </div>
                    <div className="field">
                        <label>
                            Email
                        </label>
                        <input type="text" name="email" placeholder="Email"
                        value={this.state.email}onChange={(e)=>this.setState({email:e.target.valueAsDate})}/>
                        <button className="ui button blue">Add</button>
                    </div>

                </form>

            </div>
        );
    }
 }
 export default AddContact;