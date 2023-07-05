import React, { useState } from "react";
import PageLayout from "components/common/pagelayout/pagelayout";
import { Form } from "./login.style";
import { Input } from "components/common/input";
export default function Login() {
  const [formFields, setFormFields] = useState({ username: "", password: "" });

  function handleInputChange(e) {
    e.persist();
    setFormFields((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }));
  }

  return (
    <PageLayout>
      <h1>Login</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed
        voluptas quod nam reprehenderit numquam velit quaerat ad explicabo odit
        doloribus quas dicta assumenda necessitatibus sunt id, dolor eaque est!
      </p>
      <Form>
        <Input
          value={formFields.username}
          onChange={handleInputChange}
          name="username"
          type="text"
          placeholder="Username"
        />
        <Input
          value={formFields.password}
          onChange={handleInputChange}
          name="password"
          type="password"
          placeholder="Password"
        />
      </Form>
    </PageLayout>
  );
}
