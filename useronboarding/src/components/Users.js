import React from "react";

function Users(props){
    return (
        <div>
            {props.users.map( (user,i) => {
                return(
                    <div key= {i}>
                    <h3>User Name: {user.fName} {user.lName}</h3>
                    <h4>User Email: {user.email}</h4>  
                    <pre>{JSON.stringify(user)}</pre>
                </div>  
                );
            })}
        </div>
    );

};

export default Users;