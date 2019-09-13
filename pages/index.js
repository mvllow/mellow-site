import React from "react";
import { Twitter, GitHub } from "react-feather";
import Page from "../components/page";
import styled from "styled-components";

const Index = () => (
  <Page>
    <StyleWrapper>
      <h2>plant based minimalist</h2>

      <nav>
        <img src="../static/logo.svg" alt="mvllow logo" width="16px" />
        <a href="https://twitter.com/mvllow" target="_blank">
          <Twitter size={20} stroke="#444" strokeWidth={1.25} />
        </a>
        <a href="https://github.com/mvllow" target="_blank">
          <GitHub size={20} stroke="#444" strokeWidth={1.25} />
        </a>
      </nav>
    </StyleWrapper>
  </Page>
);

const StyleWrapper = styled.section`
  h2 {
    padding: 0.5rem 0 1rem;
    font-weight: 300;
  }

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 1rem;
    }

    a {
      line-height: 0;

      &:hover svg {
        stroke: white;
      }

      &:not(:last-child) {
        margin-right: 0.75rem;
      }
    }

    svg {
      transition: stroke 150ms ease;
    }
  }
`;

export default Index;
