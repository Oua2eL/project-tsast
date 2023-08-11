import React from "react";
import "./CreateDash.css";

const CreateDash = () => {
  return (
    <div className="create-container">


        <form action="index.html" method="post">
          <h1> ADD STAFF</h1>

          <fieldset>
            <label htmlFor="name">Full Name</label>
            <input type="text" id="name" name="Name" />

            <label htmlFor="name">Occupation</label>
            <input type="text" id="name" name="Occupation" />

            <label htmlFor="name">Image</label>
            <input type="file" id="name" name="Image" />
          </fieldset>

          <button type="submit">Submit</button>
        </form>

        
        <form action="index.html" method="post">
          <h1> ADD BLOG</h1>

          <fieldset>
            <label htmlFor="name">Date</label>
            <input type="date" id="name" name="Name" />

            <label htmlFor="name">Blog Description</label>
            <input type="text" id="name" name="Blog" />

            <label htmlFor="name">Image</label>
            <input type="file" id="name" name="Image" />
          </fieldset>

          <button type="submit">Submit</button>
        </form>


        <form className="ADD" action="index.html" method="post">
          <h1> ADD PROJECT</h1>

          <fieldset>
            <label htmlFor="name">Project Name</label>
            <input type="text" id="name" name="Name" />

            <label htmlFor="name">Image</label>
            <input type="file" id="name" name="Image" />
          </fieldset>

          <button type="submit">Submit</button>
        </form>

        <form className="ADD" action="index.html" method="post">
          <h1> ADD NEW LANGUAGE</h1>

          <fieldset>
            <label htmlFor="name">Language Name</label>
            <input type="text" id="name" name="Name" />

          </fieldset>

          <button type="submit">Submit</button>
        </form>

        <form className="ADD" action="index.html" method="post">
          <h1> ADD NEW STRATEGIES</h1>

          <fieldset>
            <label htmlFor="name">Language Name</label>
            <input type="text" id="name" name="Name" />

          </fieldset>

          <button type="submit">Submit</button>
        </form>


    </div>
  );
};

export default CreateDash;
