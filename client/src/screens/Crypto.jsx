import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { GetCrypto } from "../features/actions/CryptoActions";
import Layout from "../layouts/Layout";

const Crypto = () => {
  const dispatch = useDispatch();
  const cryptoState = useSelector((state) => state.crypto);
  const loading = useSelector((state) => state.crypto.loading);

  useEffect(() => {
    const getCrypto = async () => {
      await dispatch(GetCrypto());
    };

    getCrypto();
  }, []);

  return (
    <Layout>
      <>
        {loading && (
          <div className="spinner-border" role="status">
            <span className="sr-only"></span>
          </div>
        )}
        {!loading && cryptoState.crypto && cryptoState.crypto.length > 1 && (
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Price</th>
                  <th>24h</th>
                  <th>7d</th>
                  <th>Market Cap</th>
                  <th>Volume</th>
                  <th>Circulating Price</th>
                </tr>
              </thead>
              <tbody>
                {cryptoState.crypto.map((el, id) => (
                  <tr key={id}>
                    <td>{el.rank}</td>
                    <td>{el.name}</td>
                    <td>{el.price}</td>
                    <td>{el["24h"]}</td>
                    <td>{el["7d"]}</td>
                    <td>{el.marketCap}</td>
                    <td>{el.volume}</td>
                    <td>{el.circulatingPrice}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </>
    </Layout>
  );
};

export default Crypto;
