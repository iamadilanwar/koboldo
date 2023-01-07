import { Layout } from "antd";
import Home from "./App/Home";

import HeaderApp from "./components/Header";

const {Content } = Layout;

function App({ pageProps }) {
  console.log("pageProps", pageProps);
  return (
    <Layout>
      <HeaderApp />
      <Content>
        <Home />
      </Content>
    </Layout>
  );
}

export default App;
