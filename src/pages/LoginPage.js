import { Link } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import Navbar from "../components/Navbar";

export default function LoginPage() {
  return (
    <div>
      <Navbar />
      <LoginForm />
    </div>
  );
}
