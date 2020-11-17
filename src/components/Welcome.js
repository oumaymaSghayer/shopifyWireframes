import "./../App.css";
import enTranslations from "@shopify/polaris/locales/en.json";
import illus1 from "./../assets/illus1.png";
import {
  AppProvider,
  List,
  Card,
  Button,
  Layout,
  FormLayout,
  TextField,
  TextContainer,
  Heading,
  Frame,
} from "@shopify/polaris";
function Welcome({ gotAPI }) {
  const getButton = () => {
    if (gotAPI)
      return (
        <button
          type="button"
          class="Polaris-Button Polaris-Button--primary Polaris-Button--sizeLarge"
        >
          <span class="Polaris-Button__Content">
            <span class="Polaris-Button__Text"> Visit Dashboard</span>
          </span>
        </button>
      );
    else
      return (
        <button
          type="button"
          class="Polaris-Button Polaris-Button--primary Polaris-Button--sizeLarge"
        >
          <span class="Polaris-Button__Content">
            <span class="Polaris-Button__Text"> Get your API key</span>
          </span>
        </button>
      );
  };
  return (
    <Layout>
      <Layout.Section>
        <TextContainer spacing="loose">
          <h2 class="Polaris-Heading">Hi Sara!</h2>
          <h2 class="Polaris-Heading greeting">Have a great Afternoon </h2>

          <div className="my-container">
            {getButton()} <Button plain>View shipping settings</Button>
          </div>
        </TextContainer>
      </Layout.Section>
      <Layout.Section secondary>
        <img className="logo" src={illus1} />
      </Layout.Section>
    </Layout>
  );
}

export default Welcome;
