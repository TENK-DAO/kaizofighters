import React, { useContext } from 'react';
import GenerateSoldOut from './GenerateSoldOut';
// import GenerateBlock from './GenerateBlock';
import { appStore } from '../../state/app';
import useBuy from '../../hooks/useBuy';

const Generate = () => {
  const { state } = useContext(appStore);
  const { soldOut } = state.app;
  const { oneNFT } = state.price;

  const { formatPrice } = useBuy();

  return (
    <section className="generate" id="generate">
      <div className="generate__container">
        <div className="generate__information">
          <h2 className="generate__title">Fight</h2>
          <p className="generate__text">
            welcome to kaizo fight CLUB
            5,000 kaizo fighters coming to the near blockchain
          </p>
          <p className="generate__text">
            NEAR Kaizo Fighters are priced at a flat rate of {formatPrice(oneNFT)}{' '}
            NEAR.
          </p>
        </div>

        <div className="generate__block">
          <GenerateSoldOut />
          {/* soldOut ? <GenerateSoldOut /> : <GenerateBlock /> */}

          <picture>
            <source srcSet="./images/kaizo-art-4.webp, ./images/kaizo-art-4.webp" />
            <img
              className={`generate__img ${
                soldOut ? 'generate__img-sold-out' : ''
              }`}
              src="./images/kaizo-art-4.webp"
              alt="generate kaizo"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Generate;
