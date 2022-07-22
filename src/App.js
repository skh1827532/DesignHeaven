import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';

import AfterLogandSign from "./layouts/Accounts/pageAfterLogandSign";
import { LandingPage } from "./pages/landing/landing.component";
import LoginPage from "./layouts/Accounts/Login";
import SignUpPage from "./layouts/Accounts/Signup";


import { AccountPage } from "./pages/Account.component";
import { MainPage } from "./pages/main.component";
import { DashboardDesigner } from "./layouts/designer/dashboard/dashboard_designer.component";
import { Profile } from "./layouts/profile/profile.component";
import { DesignsContainer } from "./components/designs_container/designs_container.component";
import { DesignerCompetitionDetails } from "./layouts/designer/competition_details/_competition_details.component";
import { DesignerAbout } from "./layouts/designer/designer_about/designer_about.component"
import { NewCompetition } from "./layouts/client/new_competition/new_competition.component";
import { SubmitDesign } from "./layouts/designer/submit_design/submit_design.component";
import { Auth } from "./pages/auth/auth.component";
import { AuthLayout } from "./layouts/auth/auth_layout.component";
import { Winner } from "./layouts/client/winner/winner.component";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />}>

          </Route>

          <Route path="account" element={<AccountPage />}>
            <Route path="" element={<LoginPage />} />
            <Route path="login" element={<LoginPage />} />
            <Route path="signup" element={<SignUpPage />} />
          </Route>

          <Route path="auth" element={<Auth />}>
            <Route path="signin" element={<AuthLayout />} />
            <Route path="signup/client" element={<AuthLayout />} />
            <Route path="signup/designer" element={<AuthLayout />} />
          </Route>

          <Route path="/afterLogandSign" element={< AfterLogandSign />} />

          <Route path="designer" element={<MainPage />}>
            <Route path="dashboard" element={<DashboardDesigner />} />
            <Route path="competition/brief" element={<DesignerCompetitionDetails />} />
            <Route path="competition/designs" element={<DesignerCompetitionDetails />} />
            <Route path="profile" element={<Profile />}>
              <Route path="current" element={<DesignsContainer />} />
              <Route path="past" element={<DesignsContainer />} />
              <Route path="about" element={<DesignerAbout />} />
            </Route>
            <Route path="helpcenter" element={<SignUpPage />} />
            <Route path="submit_design" element={<SubmitDesign />} />
          </Route>

          <Route path="client" element={<MainPage />}>
            <Route path="competition/brief" element={<DesignerCompetitionDetails />} />
            <Route path="competition/designs" element={<DesignerCompetitionDetails />} />
            <Route path="new_competition" element={<NewCompetition />} />
            <Route path="choose_winner" element={<Winner />} />
            <Route path="dashboard" element={<Profile />}>
              <Route path="current" element={<DesignsContainer />} />
              <Route path="past" element={<DesignsContainer />} />
              <Route path="about" element={<DesignerAbout />} />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
