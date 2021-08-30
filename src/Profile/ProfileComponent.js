import React from "react";
import PropTypes from "prop-types";

const ProfileComponent = ({ fullName, bio, profession,children }) => {
const handleName= e => { 
        e.preventDefault();
        alert(fullName);
    };
    return (
        <div>   
        <a href="/" onClick={handleName}>
    Click me
        </a>
        <h1>{children}</h1>
        </div>
);
};

ProfileComponent.defaultProps = {
    fullName: "XXX",
    bio:"XXXX",
    profession:"XXXXX",
   };

   ProfileComponent.propTypes = {
       fullName: PropTypes.string,
       bio: PropTypes.string,
       profession: PropTypes.string,
   };
export default ProfileComponent;