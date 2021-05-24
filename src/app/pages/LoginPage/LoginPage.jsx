import { useState } from "react";
import { FormGroup, TextInput, Button, Form } from "carbon-components-react";
import Card from "../../domains/Common/components/card/Card";
import { formFields } from "../../domains/Common/kernel/formFields";
import { validate } from "./../../../utils/validate";

const LoginPage = ({ history }) => {
  const [errors, setErrors] = useState({});
  const [invalidUser, setInvalidUser] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const credentails = {
    email: "admin@x0pa.com",
    password: "admin@1234",
  };

  const handleSubmit = () => {
    setInvalidUser(false);
    const error = validate(formData, "login");
    setErrors(error);
    if (!error && JSON.stringify(formData) === JSON.stringify(credentails)) {
      sessionStorage.setItem("isLoggedIn", true);
      history.push("/home");
    } else {
      setInvalidUser(true);
    }
  };

  return (
    <Card>
      <Form>
        <FormGroup legendText={""}>
          {formFields.map(({ type, id, label }) => (
            <TextInput
              key={id}
              type={type}
              id={id}
              labelText={label}
              invalid={errors && errors[id]}
              invalidText={errors && errors[id]}
              onChange={(evt) =>
                setFormData((prevValues) => ({
                  ...prevValues,
                  [evt?.target.id]: evt.target.value,
                }))
              }
              value={formData[id]}
              autoComplete="off"
            />
          ))}

          {invalidUser && !errors && (
            <div
              style={{
                color: "#da1e28",
                fontSize: ".75rem",
                margin: "0.5rem 0",
              }}
            >
              Invalid Email or Password
            </div>
          )}

          <Button
            style={{ marginTop: "0.5rem" }}
            onClick={handleSubmit}
            size="small"
            kind="primary"
          >
            Login
          </Button>
        </FormGroup>
      </Form>
    </Card>
  );
};

export default LoginPage;
