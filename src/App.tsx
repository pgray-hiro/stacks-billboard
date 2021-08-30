import * as React from "react";

import Billboard from "@components/billboard";
import Docs from "@components/docs";
import Layout from "@components/layout";

function App() {
  return (
    <Layout>
      <Billboard />
      <Docs />
    </Layout>
  );
}

export default App;
