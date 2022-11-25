import React from "react";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { Input } from "../common/FormsControls/FormsControls";
import { login } from "../../redux/auth-reducer";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";

const maxLength30 = maxLengthCreator(30);

const LoginForm = (props) => {
  return (
    <>
      <form onSubmit={props.handleSubmit}>
        <div>
          <Field
            placeholder="Email"
            name="email"
            component={Input}
            validate={[required, maxLength30]}
          />
        </div>
        <div>
          <Field
            placeholder="Password"
            name="password"
            component={Input}
            validate={[required, maxLength30]}
            type="password"
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

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(props);
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to="/profile" />;
  }
  return (
    <>
      <h1>LOGIN</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);
