import * as React from "react";
import styled from "@emotion/styled";
import tw from "twin.macro";

import Footer from "@components/footer";
import Header from "@components/header";

const StyledBody = tw.body`flex flex-col bg-white`;
const StyledContainer = tw.div`flex flex-col p-4 md:p-12`;
const StyledMain = styled.main`
  min-height: 80vh;
`;

const Layout: React.FC<{}> = ({ children }) => {
  return (
    <div>
      <StyledBody>
        <StyledContainer>
          <Header />
          <StyledMain>{children}</StyledMain>
          <Footer />
        </StyledContainer>
      </StyledBody>
    </div>
  );
};

export default Layout;
