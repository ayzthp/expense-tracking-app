import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from "react-router-dom";
import { Dashboard } from "./pages/dashboard";
import { Auth } from "./pages/auth";
import { FinancialRecordsProvider } from "./contexts/financial-record-context";
import { SignedIn, SignedOut, UserButton } from "@clerk/clerk-react";
// import { dark } from "@clerk/themes";

function App() {
  return (
    <Router>
      <div className="app-container">
        <div className="navbar">
          <Link to="/">Dashboard</Link>

          <SignedIn>
            <UserButton showName />
          </SignedIn>
        </div>
        <Routes>
          <Route
            path="/"
            element={
              <SignedIn>
                <FinancialRecordsProvider>
                  <Dashboard />
                </FinancialRecordsProvider>
              </SignedIn>
            }
          />
          <Route path="/auth" element={<Auth />} />
          <Route path="*" element={<Navigate to="/auth" />} />
        </Routes>
        <SignedOut>
          <Navigate to="/auth" />
        </SignedOut>
      </div>
    </Router>
  );
}

export default App;
