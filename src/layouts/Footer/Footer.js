import React, { useContext, memo } from 'react';
import { ReactSVG } from 'react-svg';
import { appStore } from '../../state/app';
import Navigation from '../../components/Navigation';
import SocialLinks from '../../components/SocialLinks';
import logo from '../../assets/images/footer-near-logo.svg';

const Footer = () => {
  const { state } = useContext(appStore);
  const { wallet } = state || {};

  return wallet ? (
    <footer className="footer">
      <div className="footer__container">
        <Navigation className="footer__navigation" signedIn={wallet.signedIn} />
        <SocialLinks className="footer__social" />

        <p className="footer__built">Built on</p>
        <ReactSVG className="footer__logo" src={logo} />

        <p className="footer__text">
          NEAR Kaizo Fighters NFTs are built on top of NEAR Protocol, where minting
          NFTs cost less than a cent per item.
        </p>
        <p className="footer__copyright ">
        <a
          href="https://www.kaizofighters.com/"
          target="_blank"
        > 
          © 2022 NEAR Kaizo Fighters. All Rights Reserved.
        </a>
        </p>
        <p className="footer__copyright ">
        <a
          href="https://tenkbay.com/"
          target="_blank"
        > Powered By TenkBay.com and Open Source Code.
        </a>
        </p>
      </div>
    </footer>
  ) : (
    <></>
  );
};

export default memo(Footer);
