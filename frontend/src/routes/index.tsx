import { App } from "App";
import { HomePage } from "pages/Home";
import { LaboratoriesPage } from "pages/laboratories";
import { LoginPage } from "pages/Login";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RoutesEnum } from "./enum";

function MainRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutesEnum.Login} element={<LoginPage />}>
          <Route index element={<LoginPage />} />
        </Route>
        <Route path={RoutesEnum.Home} element={<App />}>
          <Route index element={<HomePage />} />
        </Route>
        <Route
          path={RoutesEnum.Laboratories}
          element={<LaboratoriesPage />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoutes;
