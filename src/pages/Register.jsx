import { useState } from "react";
import supabase from "../helper/supabaseClient";
import { Link } from "react-router-dom";
import Section from "../components/Section";
import Heading from "../components/Heading";
import Button from "../components/Button";
import { Gradient } from "../components/design/Roadmap";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
    });

    if (error) {
      setMessage(error.message);
      return;
    }

    if (data) {
      setMessage("User account created!");
    }

    setEmail("");
    setPassword("");
  };

  return (
    <Section className="pt-20 mt-10">
      <Heading
        className="max-w-[50rem] mx-auto mb-8 lg:mb-10 md:text-center"
        tag="Join Deepglow"
        title="Create Your Account"
        text="Sign up to start administrating your dashboard"
      />

      <Gradient />

      <div className="p-0.5 rounded-[2.5rem] bg-conic-gradient max-w-md mx-auto mb-10">
        <div className="rounded-[2.25rem] bg-n-8 p-8 relative overflow-hidden border border-n-6/20 shadow-lg">
          {message && (
            <div className="text-center text-sm mb-4 text-n-3">{message}</div>
          )}

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder="Email"
              required
              className="p-3 rounded-lg bg-n-10 text-n-1 placeholder:text-n-4 border border-n-6/30 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder="Password"
              required
              className="p-3 rounded-lg bg-n-10 text-n-1 placeholder:text-n-4 border border-n-6/30 focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <Button type="submit" white>
              Create Account
            </Button>
          </form>

          <div className="mt-6 text-center text-sm text-n-3">
            Already have an account?{" "}
            <Link to="/login" className="text-primary underline hover:text-n-1">
              Log in
            </Link>
          </div>
        </div>
      </div>
      <div className="mb-10 flex justify-center">
        <Link
          to="/dashboard"
          className="inline-flex items-center gap-2 text-n-8 bg-n-1 rounded-full px-6 py-2 text-sm font-semibold hover:bg-n-2 transition-all group w-fit mb-10"
        >
          <svg
            className="w-4 h-4 transition-transform group-hover:-translate-x-1"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          Go Back to Dashboard
        </Link>
      </div>
    </Section>
  );
}

export default Register;
