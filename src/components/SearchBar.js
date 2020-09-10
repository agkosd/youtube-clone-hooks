import React, {useState} from "react";

const SearchBar = ({setResults}) => {

  const [term, setTerm] = useState("");

  const onFormSubmit = (e) => {
    e.preventDefault();
    setResults(term);
  };


  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={onFormSubmit}>
        <div className="field">
          <label>Video Search</label>
          <input type="text" 
            onChange={(e)=>{
              setTerm(e.target.value)
            }}
            value= {term}
          />
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
