import React from "react";
import vkIcon from "./../../assets/icons/vk.svg";
import twitterIcon from "./../../assets/icons/twitter.svg";
import instagramIcon from "./../../assets/icons/instagram.svg";
import facebookIcon from "./../../assets/icons/facebook.svg";
import styled from "styled-components";

const Container = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #2d2d2d;
  color: #fff;
  width: 100vw;
  flex-direction: column;
  position: absolute;
  bottom: 0;
  @media (min-width: 700px) {
    height: 20vh;
  }
  @media (max-width: 700px) {
    height: 200px;
  }
`;

const UnorderedList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  list-style: none;
`;

const ListElement = styled.li`
  margin: 5px;
`;

const Icon = styled.img`
  width: 30px;
  height: 30px;
  margin: 10px;
`;

const Anchor = styled.a`
  color: #fff;
  font-weight: 700;
`;

const Footer = () => {
  return (
    <Container>
      <UnorderedList>
        <ListElement>FAQ</ListElement>
        <ListElement>RETURNS</ListElement>
        <ListElement>SHIPPING</ListElement>
        <ListElement>CONTACT</ListElement>
      </UnorderedList>
      <div>
        <Anchor href="https://www.vk.com/">
          <Icon src={vkIcon} alt="" />
        </Anchor>
        <Anchor href="https://www.twitter.com/">
          <Icon src={twitterIcon} alt="" />
        </Anchor>
        <Anchor href="https://www.instagram.com/">
          <Icon src={instagramIcon} alt="" />
        </Anchor>
        <Anchor href="https://www.facebook.com/">
          <Icon src={facebookIcon} alt="" />
        </Anchor>
      </div>
      <p>
        website by{" "}
        <Anchor href="https://github.com/y2k01">pavlov stanislav</Anchor>
      </p>
    </Container>
  );
};

export default Footer;
