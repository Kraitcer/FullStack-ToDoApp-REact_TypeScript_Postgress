import React from "react";

interface ListHeaderProp {
  listName: string;
}

const ListHeader = ({ listName }: ListHeaderProp) => {
  const signOut = () => {
    console.log("signOut");
  };
  return (
    <div className="list-Header">
      <h1>{listName}</h1>
      <div className="button-container">
        <button className="create">ADD NEW</button>
        <button className="signout" onClick={signOut}>
          SIGN OUT
        </button>
      </div>
    </div>
  );
};

export default ListHeader;
