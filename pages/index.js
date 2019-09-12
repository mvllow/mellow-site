import React from "react";
import Page from "../components/page";
import { Twitter, GitHub } from "react-feather";

const Index = () => (
  <Page>
    <section>
      <h2>plant based minimalist</h2>

      <nav>
        <img src="../static/logo.svg" alt="mvllow logo" width="16px" />
        <a href="https://twitter.com/mvllow" target="_blank">
          <Twitter size={20} stroke="#444" strokeWidth={1.5} />
        </a>
        <a href="https://github.com/mvllow" target="_blank">
          <GitHub size={20} stroke="#444" strokeWidth={1.5} />
        </a>
      </nav>
    </section>

    <style jsx>{`
      h2 {
        padding: 0.5rem 0 1rem;
        font-weight: 300;
      }

      nav {
        display: flex;
        align-items: center;
      }

      nav img {
        margin-right: 1rem;
      }

      nav a {
        line-height: 0;
      }

      nav a :global(svg) {
        transition: stroke 150ms ease;
      }

      nav a:hover :global(svg) {
        stroke: white;
      }

      nav a:not(:last-child) {
        margin-right: 0.75rem;
      }
    `}</style>
  </Page>
);

export default Index;
