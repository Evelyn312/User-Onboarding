import React,{useState} from "react";

function Form (){

    const [formState, setFormState] = useState({
        fName: "",
        lName: "",
        email: "",
        password: "",
        terms: false

    });

    const inputChange = event => {
        event.persist();

        setFormState({...formState, [event.target.name]: event.target.value});
    };
 
    return(
        <div>
        <form>
            <label htmlFor="fName">
                First Name
                <input
                    type="text"
                    name="fName"
                    id="fName"
                    value={formState.fName}
                    onChange={inputChange}
                />
            </label>
            <label htmlFor="lName">
                Last Name
                <input
                    type="text"
                    name="lName"
                    id="lName"
                    value={formState.lName}
                    onChange={inputChange} 
                />
            </label>
            <label htmlFor="email">
                Email
                <input 
                    type="email"
                    name="email"
                    id="email"
                    value={formState.email}
                    onChange={inputChange}
                />
            </label>
            <label htmlFor="password">
                Password
                <input 
                    type="password"
                    name="password"
                    id="password"
                    value={formState.password}
                    onChange={inputChange}
                />
            </label>
            <label htmlFor="terms">
                <input 
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={formState.terms}
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