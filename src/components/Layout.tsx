import { Layout as Wrapper, List } from "antd";
import Link from "next/link";
import React from "react";

const { Header, Content, Footer } = Wrapper;

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper className="layout">
      <Header className="header">
        <div className="logo">
          <img src="https://news.ycombinator.com/y18.gif" />
          <Link href="/">Hacker News</Link>
        </div>
      </Header>
      <Content>{children}</Content>
      <Footer style={{ textAlign: "center" }}>Dhafa Gustiadi Kurniawan</Footer>
    </Wrapper>
  );
}

export default Layout;
