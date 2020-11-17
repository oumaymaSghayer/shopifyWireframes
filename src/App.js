import logo from "./logo.svg";
import React, { useState } from "react";

import "./App.css";
import Welcome from "./components/Welcome";
import Started from "./components/Started";
import enTranslations from "@shopify/polaris/locales/en.json";
import { CodeMajor } from "@shopify/polaris-icons";
import {
  AppProvider,
  List,
  Card,
  Button,
  Layout,
  FormLayout,
  TextField,
  TopBar,
  Page,
  SettingToggle,
  TextStyle,
  ContextualSaveBar,
  Frame,
  useCallback,
  Icon,
} from "@shopify/polaris";
import img from "./assets/codelogo.png";
function App() {
  const theme = {
    colors: {
      topBar: {
        background: "#225062",
      },
    },
    logo: {
      width: 124,
      topBarSource:
        "https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-color.svg?6215648040070010999",
      url: "http://jadedpixel.com",
      accessibilityLabel: "Jaded Pixel",
      contextualSaveBarSource:
        "https://cdn.shopify.com/s/files/1/0446/6937/files/jaded-pixel-logo-gray.svg?6215648040070010999",
    },
  };
  const [gotAPI, setGotApi] = useState(false);
  const [installWidget, setinstallWidget] = useState(false);
  const [manualInstall, setManualInstall] = useState(false);
  const secondCard = () => {
    return (
      <div className="second-card">
        <div
          className="Polaris-Card"
          title="Make sure you have those steps done"
        >
          <div className="Polaris-Card__Section">
            <p>
              Here we will put he need to make sure all configuration are done
            </p>
          </div>
          ​{" "}
          <div className="Polaris-Card__Section">
            <p>
              Setup Your Language and store category, default reviews inside the
              dashboard
            </p>
            <div>
              <button
                type="button"
                class="Polaris-Button Polaris-Button--primary"
              >
                <span class="Polaris-Button__Content">
                  <span class="Polaris-Button__Text">Dedault review</span>
                </span>
              </button>

              <button
                type="button"
                class="Polaris-Button Polaris-Button--plain"
              >
                <span class="Polaris-Button__Content">
                  <span class="Polaris-Button__Text">Learn more</span>
                </span>
              </button>
            </div>
          </div>
          <div className="Polaris-Card__Section">
            <p>Setup Your Coupon code so your customers get happy</p>
            <div>
              <button
                type="button"
                class="Polaris-Button Polaris-Button--primary"
              >
                <span class="Polaris-Button__Content">
                  <span class="Polaris-Button__Text">Create Coupon</span>
                </span>
              </button>

              <button
                type="button"
                class="Polaris-Button Polaris-Button--plain"
              >
                <span class="Polaris-Button__Content">
                  <span class="Polaris-Button__Text">Learn more</span>
                </span>
              </button>
            </div>
          </div>
          <div className="Polaris-Card__Section">
            <p>Request reviews from your old customers</p>
            <div>
              <button
                type="button"
                class="Polaris-Button Polaris-Button--primary"
              >
                <span class="Polaris-Button__Content">
                  <span class="Polaris-Button__Text">Request reviews</span>
                </span>
              </button>
              <button
                type="button"
                class="Polaris-Button Polaris-Button--plain"
              >
                <span class="Polaris-Button__Content">
                  <span class="Polaris-Button__Text">Learn more</span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const componentHandler = () => {
    if (installWidget)
      return (
        <div className="Polaris-Card">
          <div className="Polaris-Card__Section">
            <p>Congratulation , widget is successfully installed</p>

            <button type="button" className="Polaris-Button widget-button">
              <span className="Polaris-Button__Content">
                <span className="Polaris-Button__Text">Remove widget</span>
              </span>
            </button>
          </div>
        </div>
      );
    if (manualInstall)
      return (
        <div class="Polaris-Card ">
          <div class="Polaris-Card__Header header-container">
            <h2 class="Polaris-Heading">Manual installation</h2>
            <img src={img} className="code-logo" />
          </div>

          <div class="Polaris-Card__Section manual-intallation-steps">
            <h2 class="Polaris-Heading second-header">
              Check guide in recomend.io config tab
            </h2>
            <figure className="code-snippet">
              <pre>
                <code> code snippet </code>
              </pre>
            </figure>
          </div>
        </div>
      );
    return (
      <Started
        setinstallWidget={setinstallWidget}
        gotAPI={gotAPI}
        setGotApi={setGotApi}
        setManualInstall={setManualInstall}
      />
    );
  };
  return (
    <div className="App">
      <AppProvider theme={theme}>
        <Welcome gotAPI={gotAPI} />

        {componentHandler()}
        {secondCard()}
      </AppProvider>
    </div>
  );
}

export default App;
