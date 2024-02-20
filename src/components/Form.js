import React from "react";
import { useOutletContext } from "react-router-dom";

function Form(){     // more descriptive
  // const {api, setPeopleInfo, peopleInfo} = useOutletContext();
  const {api,
    firstName,
    setFirstName,
    lastName,
    setLastName,
    email,
    setEmail,
    occupation,
    setOccupation} =useOutletContext();



  // const handleChange = (e) => {
  //   const { name, value } = e.target;
  //   setPeopleInfo((prevState) => ({
  //     ...prevState,
  //     [name]: value,
  //   }));
  // };

  const handleForm = (e) => {
    e.preventDefault();

    const newNameJSON = {
      "firstName": firstName,
      "lastName":lastName,
      "email": email,
      "occupation": occupation
    };

    const post = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newNameJSON),
    };

    fetch(api, post)
      .then((res) => {
        if (res.ok) {
          res.json();
        } else if (!res.ok) {
          throw new Error(
            `the following error occurred inside of Form res not okay ${res.statusText}`
          );
        }
      })
      .then((newPeople)=>{
        newPeople.people.forEach((newPerson)=>{
          setFirstName(newPerson.first);
          setLastName(newPerson.last);
          setEmail(newPerson.email);
          setOccupation(newPerson.occupation);
          
        })


      })
      .catch((error) => alert(error));
      setFirstName('');
      setLastName('');
      setEmail('');
      setOccupation('');
  };

  
  return (
    
    <>
      <br />
      <hr />
      <form onSubmit={handleForm}>
        <input
          value={firstName}
          type="text"
          name="first"
          onChange={(e)=>setFirstName(e.target.value)}
          placeholder="first name"
        />

        <input
          value={lastName}
          type="text"
          name="last"
          onChange={(e)=>setLastName(e.target.value)}
          placeholder="last name"
        />

      <input
        value={email}
        type="text"
        name="email"
        onChange={(e)=>setEmail(e.target.value)}
        placeholder="email"
      />

      <input
        value={occupation}
        type="text"
        name="occupation"
        onChange={(e)=>setOccupation(e.target.value)}
        placeholder="occupation"
      />

        <button type="submit">submit</button>
      </form>
    </>
  );
}
export default Form;
