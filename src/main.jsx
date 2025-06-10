import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import { Toaster } from "react-hot-toast";

import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <App />
          <Toaster position="top-right" toastOptions={{ duration: 1000 }} />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </StrictMode>
);
