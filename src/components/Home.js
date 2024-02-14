import React, { useState } from "react";
import { useOutletContext } from "react-router-dom";

function Home() {     // more descriptive
  const { api, bringBackToState } = useOutletContext();
  const [forForm, setForForm] = useState({
    first: "",
    last: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForForm((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleForm = (e) => {
    e.preventDefault();

    const newNameJSON = {
      first: forForm.first,
      last: forForm.last,
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
            `the following error occurred inside of home res not okay ${res.statusText}`
          );
        }
      })
      .then(bringBackToState) // more descriptive addPerson
      .catch((error) => alert(error));
    setForForm({
      first: "",
      last: "",
    });
  };

  return (
    <>
      <br />
      <hr />
      <form onSubmit={handleForm}>
        <input
          value={forForm.first}
          type="text"
          name="first"
          onChange={handleChange}
          placeholder="first name"
        />

        <input
          value={forForm.last}
          type="text"
          name="last"
          onChange={handleChange}
          placeholder="last name"
        />

        <button type="submit">submit</button>
      </form>
    </>
  );
}
export default Home;
