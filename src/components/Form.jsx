import React, { useContext, useRef, useState } from "react";
import Wrapper from "./Wrapper";
import FormContext from "../context/FormContext";

const Form = () => {
  const [name, setName] = useState("shilpa");
  const emailRef = useRef("");

  const formCtx = useContext(FormContext);

  const submitHandler = (e) => {
    e.preventDefault();
    const obj = {
      email: emailRef.current.value,
      name: name,
    };
    formCtx.addData(obj);
  };

  return (
    <Wrapper>
      <form onSubmit={submitHandler}>
        <label>Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Email</label>
        <input type="email" ref={emailRef} />

        <button type="submit">submit</button>
      </form>
      <h1>
        {formCtx.data.map((item) => (
          <>
            <p>{item.name}</p>
            <p>{item.email}</p>
          </>
        ))}
      </h1>
    </Wrapper>
  );
};

export default Form;
