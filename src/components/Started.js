import React, { useState, useCallback } from "react";

import enTranslations from "@shopify/polaris/locales/en.json";
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
} from "@shopify/polaris";
function Started({ gotAPI, setGotApi, setinstallWidget, setManualInstall }) {
  const [apiKeyField, setapiKeyField] = useState("");

  const handleApiKeyField = useCallback((value) => setapiKeyField(value), []);
  const installWidgetCard = () => {
    if (gotAPI)
      return (
        <div className="Polaris-Card__Section">
          <p>Congratulation , Now you can install your theme</p>

          <button
            onClick={() => {
              setinstallWidget(true);
            }}
            type="button"
            class="Polaris-Button Polaris-Button--primary"
          >
            <span class="Polaris-Button__Content">
              <span class="Polaris-Button__Text"> Install widget</span>
            </span>
          </button>
        </div>
      );
    else
      return (
        <div className="Polaris-Card__Section">
          <p>
            View a summary of your online store’s performance, including sales,
            visitors, top products, and referrals.
          </p>
          <button
            onClick={() => {
              setGotApi(true);
            }}
            type="button"
            class="Polaris-Button Polaris-Button--primary"
          >
            <span class="Polaris-Button__Content">
              <span class="Polaris-Button__Text"> Get your API key</span>
            </span>
          </button>
        </div>
      );
  };
  const installWidgetManually = () => {
    if (gotAPI)
      return (
        <div className="Polaris-Card__Section">
          <p>Do you have a complex theme , install it manually</p>
          <button
            onClick={() => {
              setGotApi(true);
              setManualInstall(true);
            }}
            type="button"
            class="Polaris-Button Polaris-Button--primary"
          >
            <span class="Polaris-Button__Content">
              <span class="Polaris-Button__Text"> Manual install</span>
            </span>
          </button>
        </div>
      );
    else
      return (
        <div className="Polaris-Card__Section">
          <div className="get-started">
            <p>
              Already Have an account , insert your api key and let's get
              started!
            </p>
            <div className="my-input">
              <TextField
                label=""
                value={apiKeyField}
                onChange={handleApiKeyField}
                placeholder="API KEY"
              />
            </div>
            <button
              onClick={() => {
                setGotApi(true);
              }}
              type="button"
              class="Polaris-Button Polaris-Button--primary"
            >
              <span class="Polaris-Button__Content">
                <span class="Polaris-Button__Text"> Submit </span>
              </span>
            </button>
          </div>
        </div>
      );
  };

  return (
    <div className="Polaris-Card" title="Let's get started!">
      <div className="Polaris-Card__Section">
        <p>
          Here we will put why to use US and how to make the experience great
          for your shop
        </p>
      </div>
      {installWidgetCard()}
      {installWidgetManually()}
    </div>
  );
}

export default Started;
