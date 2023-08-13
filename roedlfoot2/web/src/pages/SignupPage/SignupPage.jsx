import { useRef } from "react";
import { useEffect } from "react";

import {
  Form,
  Label,
  TextField,
  PasswordField,
  FieldError,
  Submit,
} from "@redwoodjs/forms";
import { Link, navigate, routes } from "@redwoodjs/router";
import { MetaTags } from "@redwoodjs/web";
import { toast, Toaster } from "@redwoodjs/web/toast";

import { useAuth } from "src/auth";

const SignupPage = () => {
  const { isAuthenticated, signUp } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate(routes.home());
    }
  }, [isAuthenticated]);

  // focus on roedl e-mail box on page load
  const roedlEMailRef = useRef(null);
  useEffect(() => {
    roedlEMailRef.current?.focus();
  }, []);

  const onSubmit = async (data) => {
    const response = await signUp({
      username: data.roedlEMail,
      fullName: data.fullName,
      email: data.email,
      password: data.passwort,
      tournamentId: data.tournamentId,
      salt: data.salt
    });

    console.log("Data from onSubmit:", response)

    if (response.message) {
      toast(response.message);
    } else if (response.error) {
      toast.error(response.error);
    } else {
      // user is signed in automatically
      toast.success("Welcome!");
    }
  };

  return (
    <>
      <MetaTags title="Signup" />

      <main className="rw-main">
        <Toaster toastOptions={{ className: "rw-toast", duration: 6000 }} />
        <div className="rw-scaffold rw-login-container">
          <div className="rw-segment">
            <header className="rw-segment-header">
              <h2 className="rw-heading rw-heading-secondary">Signup</h2>
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
                    name="fullName"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Namen
                  </Label>
                  <TextField
                    name="fullName"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    // ref={roedlEMailRef}
                    // validation={{
                    //   required: {
                    //     value: true,
                    //     message: "fullName is required",
                    //   },
                    // }}
                  />

                  <FieldError name="fullName" className="rw-field-error" />

                  <Label
                    name="email"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    E-Mail
                  </Label>
                  <TextField
                    name="email"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    // ref={roedlEMailRef}
                    // validation={{
                    //   required: {
                    //     value: true,
                    //     message: "fullName is required",
                    //   },
                    // }}
                  />

                  <FieldError name="email" className="rw-field-error" />

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

                  <FieldError name="passwort" className="rw-field-error" />

                  <Label
                    name="fullName"
                    className="rw-label"
                    errorClassName="rw-label rw-label-error"
                  >
                    Tournament ID
                  </Label>
                  <TextField
                    name="tournamentId"
                    className="rw-input"
                    errorClassName="rw-input rw-input-error"
                    // ref={roedlEMailRef}
                    // validation={{
                    //   required: {
                    //     value: true,
                    //     message: "fullName is required",
                    //   },
                    // }}
                  />

                  <FieldError name="tournamentId" className="rw-field-error" />

                  <div className="rw-button-group">
                    <Submit className="rw-button rw-button-blue">
                      Sign Up
                    </Submit>
                  </div>
                </Form>
              </div>
            </div>
          </div>
          <div className="rw-login-link">
            <span>Already have an account?</span>{" "}
            <Link to={routes.login()} className="rw-link">
              Log in!
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default SignupPage;
