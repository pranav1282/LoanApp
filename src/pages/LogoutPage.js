import { useEffect } from "react";
import authStore from "../stores/authStore";
import Navbar from "../components/Navbar";

export default function LogoutPage() {
  const store = authStore();

  useEffect(() => {
    store.logout();
  }, []);
  return (
    <div>
      <Navbar />
      You are logged out
    </div>
  );
}
