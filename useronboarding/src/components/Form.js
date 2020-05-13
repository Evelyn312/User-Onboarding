import React from "react";

function Form (props){
    return(
        <div>
        <form>
            <label htmlFor="fName">
                First Name
                <input
                    type="text"
                    name="fName"
                    id="fName"
                    value={""}
                    onChange={""}
                />
            </label>
            <label htmlFor="lName">
                Last Name
                <input
                    type="text"
                    name="lName"
                    id="lName"
                    value={""}
                    onChange={""} 
                />
            </label>
            <label htmlFor="email">
                Email
                <input 
                    type="email"
                    name="email"
                    id="email"
                    value={""}
                    onChange={""}
                />
            </label>
            <label htmlFor="password">
                Password
                <input 
                    type="password"
                    name="password"
                    id="password"
                    value={""}
                    onChange={""}
                />
            </label>
            <label htmlFor="terms">
                <input 
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={""}
                    onChange={""}   
                />
            Term of Service    
            </label>
            <button>Submit</button>
        </form>
        </div>

    );
  
};

export default Form;