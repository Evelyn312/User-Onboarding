import React from "react";

function Users(props){
    return (
        <div className="user">
            {props.users.map( (user,i) => {
                return(
                    <div className="item" key= {i}>
                    <h3>{user.fName} {user.lName}</h3>
                    <h4>Email: {user.email}</h4>  
                    {/* <pre>{JSON.stringify(user)}</pre> */}
                </div>  
                );
            })}
        </div>
    );

};

export default Users;