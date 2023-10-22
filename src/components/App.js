import LoginPage from "../pages/LoginPage";
import NotesPage from "../pages/NotesPage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import RequireAuth from "./RequireAuth";
import SignupPage from "../pages/SignupPage";
import LogoutPage from "../pages/LogoutPage";
import HomePage from "../pages/HomePage";
import { LoginAdminPage } from "../pages/LoginAdminPage";
import BorrowersPage from "../pages/BorrowersPage";
import NewLoanPage from "../pages/NewLoanPage";

function App() {
  return (
    <div className="App">
      {/* <div>hello</div> */}
      <BrowserRouter>
        {/* <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/signup">Signup</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul> */}

        <Routes>
          <Route index element={<HomePage />} />
          <Route
            path="/notes"
            element={
              <RequireAuth>
                <NotesPage />
              </RequireAuth>
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/logout" element={<LogoutPage />} />
          <Route path="/loginadmin" element={<LoginAdminPage />} />
          <Route path="/newloan" element={<NewLoanPage />} />
          <Route
            path="/borrowers"
            element={
              <RequireAuth>
                <BorrowersPage />
              </RequireAuth>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
