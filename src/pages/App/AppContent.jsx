import React from "react";
import { IntlProvider } from "react-intl";
import AppRouter from "./AppRouter";
const AppContent = () => {
  return (
    <IntlProvider locale="de">
      <AppRouter />
    </IntlProvider>
  );
};

export default AppContent;
