import React,{useState, useEffect} from "react";
import * as yup from "yup";
import axios from "axios";

function Form (props){
    const initialState = {
        fName: "",
        lName: "",
        email: "",
        password: "",
        terms: false
    }
    const [formState, setFormState] = useState(initialState);

    const formSchema = yup.object().shape({
        fName: yup.string().required("First Name is a required field"),
        lName: yup.string().required("Last Name is a required field"),
        email: yup
          .string()
          .email("Must be a valid email address")
          .required("Must include email address"),
        // motivation: yup.string().required("Must include why you'd like to join"),
        password: yup.string().required('No password provided.') 
            .min(8, 'Password is too short - should be 8 chars minimum.')
            .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),

        terms: yup.boolean().oneOf([true], "Please agree to terms of use")
      });

      const [buttonDisabled, setButtonDisabled] = useState(true);

      useEffect(() => {
        formSchema.isValid(formState).then(valid => {
          setButtonDisabled(!valid);
        });
      }, [formState, formSchema]);

      const [errorState, setErrorState] = useState({
        fName: "",
        lName: "",
        email: "",
        password: "",
        terms: ""
      });

    const validate = e => {
        let value =
          e.target.type === "checkbox" ? e.target.checked : e.target.value;
        yup
          .reach(formSchema, e.target.name)
          .validate(value)
          .then(valid => {
            setErrorState({
              ...errorState,
              [e.target.name]: ""
            });
          })
          .catch(err => {
            setErrorState({
              ...errorState,
              [e.target.name]: err.errors[0]
            });
          });
      };

    const inputChange = event => {
        event.persist();
        validate(event);
        let value = event.target.type === "checkbox" ? event.target.checked : event.target.value;

        setFormState({...formState, [event.target.name]: value});
    };

    const formSubmit = event => {
        event.preventDefault();
        axios
        .post("https://reqres.in/api/users", formState)
        .then(response => {
            console.log(response);
            props.setUsers(response.data);
            setFormState(initialState);
        })
        .catch(err => console.log(err));

    };
 
    return(
        <div>
        <form onSubmit={formSubmit}>
            <label htmlFor="fName">
                First Name
                <input
                    type="text"
                    name="fName"
                    id="fName"
                    value={formState.fName}
                    onChange={inputChange}
                    data-cy="fName"
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
                    data-cy="email"
                />
                {errorState.email.length > 0 ? <p>{errorState.email}</p> : null}
            </label>
            <label htmlFor="password">
                Password
                <input 
                    type="password"
                    name="password"
                    id="password"
                    value={formState.password}
                    onChange={inputChange}
                    data-cy="password"
                />
                {errorState.password.length > 0 ? <p>{errorState.password}</p>: null}
            </label>
            <label htmlFor="terms">
                <input 
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={formState.terms}
                    onChange={inputChange}   
                />
            Term of Service    
            </label>
            <button disabled={buttonDisabled}>Submit</button>
        </form>
        </div>

    );
  
};

export default Form;