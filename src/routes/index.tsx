import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import { DarkSwitch } from "../components/DarkSwitch";
import ForgetPasswordPage from "../pages/forget-password/forget-password.page";
import LoginPage from "../pages/login/login.page";
import ResetPasswordPage from "../pages/reset-password/reset-password.page";
import SettingsPage from "../pages/settings/settings.page";
import UsersDetailPage from "../pages/users-detail/users-detail.page";
import NewUserPage from "../pages/users-new/new-user.page";
import UsersPage from "../pages/users/users.page";

export default function AppRoutes() {
  return (
    <>
          <DarkSwitch />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/forget" element={<ForgetPasswordPage />} />
          <Route path="/reset" element={<ResetPasswordPage />} />
          <Route path="/dash" element={<App />}>
            <Route path="/dash/users">
              <Route index element={<UsersPage />} />
              <Route path=":userId" element={<UsersDetailPage />} />
              <Route path="new" element={<NewUserPage />} />
            </Route>
            <Route path="/dash/settings" element={<SettingsPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
