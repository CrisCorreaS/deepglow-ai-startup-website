import { useState } from "react";
import supabase from "../helper/supabaseClient";
import { useNavigate } from "react-router-dom";
import Section from "../components/Section";
import Heading from "../components/Heading";
import Button from "../components/Button";

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setMessage("");

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      setMessage(error.message);
      setEmail("");
      setPassword("");
      return;
    }

    if (data) {
      navigate("/dashboard");
    }
  };

  return (
    <Section className="pt-20 mt-10">
      <Heading
        className="max-w-[50rem] mx-auto mb-8 lg:mb-10 md:text-center"
        tag="Welcome Back"
        title="Log into your account"
        text="Access your dashboard and continue your AI journey."
      />

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
              Log In
            </Button>
          </form>
        </div>
      </div>
    </Section>
  );
}

export default Login;
