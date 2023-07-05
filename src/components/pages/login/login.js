import React, { useState, useEffect } from "react";
import PageLayout from "components/common/pagelayout/pagelayout";
import { Form } from "./login.style";
import { Input } from "components/common/input";
import { PasswordInput } from "../../common/passwordinput";
import { Button } from "components/common";

let timeout;

export default function Login() {
  const [formFields, setFormFields] = useState({ username: "", password: "" });
  const [loading, setLoading] = useState(false);
  function handleInputChange(e) {
    e.persist();
    setFormFields((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);
  }

  useEffect(() => {
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, []);

  return (
    <PageLayout>
      <h1>Login</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque sed
        voluptas quod nam reprehenderit numquam velit quaerat ad explicabo odit
        doloribus quas dicta assumenda necessitatibus sunt id, dolor eaque est!
      </p>
      <Form onSubmit={handleSubmit}>
        <Input
          value={formFields.username}
          onChange={handleInputChange}
          name="username"
          type="text"
          placeholder="Username"
        />
        <PasswordInput
          value={formFields.password}
          onChange={handleInputChange}
          name="password"
        />

        <Button type="submit" disabled={loading}>
          {loading ? "Loading..." : "Login"}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">or</div>
            <Button type="button">Register</Button>
          </>
        )}
      </Form>
    </PageLayout>
  );
}
