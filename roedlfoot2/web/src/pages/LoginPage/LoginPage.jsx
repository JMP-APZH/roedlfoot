import { useRef } from "react";
import { useEffect } from "react";

import {
  Form,
  Label,
  TextField,
  PasswordField,
  Submit,
  FieldError,
} from "@redwoodjs/forms";
import { Link, navigate, routes } from "@redwoodjs/router";
import { MetaTags } from "@redwoodjs/web";
import { toast, Toaster } from "@redwoodjs/web/toast";

import { useAuth } from "src/auth";

const LoginPage = () => {
  const { isAuthenticated, logIn } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home());
    }
  }, [isAuthenticated]);

  const roedlEMailRef = useRef(null);
  useEffect(() => {
    roedlEMailRef.current?.focus();
  }, []);

  const onSubmit = async (data) => {
    const response = await logIn({
      username: data.roedlEMail,
      password: data.passwort,
    });

    if (response.message) {
      toast(response.message);
    } else if (response.error) {
      toast.error(response.error);
    } else {
      toast.success("Welcome back!");
    }
  };

  return (
    <>
      <MetaTags title="Login" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: "rw-toast", duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Login</h2>
            </header>

            <div className="rw-segment-main">
              <div className="rw-form-wrapper">
                <Form onSubmit={onSubmit} className="rw-form-wrapper">
                  <Label
                    name="roedlEMail"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Roedl E-Mail
                  </Label>
                  <TextField
                    name="roedlEMail"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    ref={roedlEMailRef}
                    validation={{
                      required: {
                        value: true,
                        message: "Roedl E-Mail is required",
                      },
                    }}
                  />

                  <FieldError name="roedlEMail" className="rw-field-error" />

                  <Label
                    name="passwort"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Passwort
                  </Label>
                  <PasswordField
                    name="passwort"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    autoComplete="current-password"
                    validation={{
                      required: {
                        value: true,
                        message: "Passwort is required",
                      },
                    }}
                  />

                  <div className="rw-forgot-link">
                    <Link
                      to={routes.forgotPassword()}
                      className="rw-forgot-link"
                    >
                      Forgot Passwort?
                    </Link>
                  </div>

                  <FieldError name="passwort" className="rw-field-error" />

                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">Login</Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>Don&apos;t have an account?</span>{" "}
            <Link to={routes.signup()} className="rw-link">
              Sign up!
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default LoginPage;
