import React from "react";
import Head from "next/head";
import styled from "styled-components";

const Page = ({ children }) => (
  <>
    <Head>
      <title>mvllow</title>
      <link rel="icon" type="image/png" href="/static/favicon.png" />
    </Head>

    <StyleWrapper>{children}</StyleWrapper>
  </>
);

const StyleWrapper = styled.main`
  padding: 2rem;
  width: 100%;
  height: calc(100vh - 4rem);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default Page;
