import React from "react";
import coin from "../../assets/crx-logo.png";

const WalletPro = ({ balance }) => {
  return (
    <div className="flex wallet mt-8 justify-between">
      <h1>Your collection</h1>
      <div className="flex gap-4 ">
        <h1>Total</h1>
        <img className="coinPro" src={coin} />
        <h2>{balance}</h2>
      </div>
    </div>
  );
};

export default WalletPro;
