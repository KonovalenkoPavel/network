import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";

const maxLength20 = maxLengthCreator(20);

const LoginForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            placeholder="Login"
            name={"login"}
            component={Input}
            validate={[required, maxLength20]}
          />
        </div>
        <div>
          <Field
            placeholder="Password"
            name={"password"}
            component={Input}
            validate={[required, maxLength20]}
          />
        </div>
        <div>
          <Field type="checkbox" name={"rememberMe"} component={Input} />{" "}
          remember me
        </div>
        <div>
          <button>Login</button>
        </div>
      </form>
    </>
  );
};

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = () => {
  const onSubmit = (formData) => {
    console.log(formData);
  };
  return (
    <>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};
export default Login;
