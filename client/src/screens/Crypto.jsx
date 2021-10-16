import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/LoadingSpinner";
import { GetCrypto } from "../features/actions/CryptoActions";
import Layout from "../layouts/Layout";
import CryptoItem from "../components/CryptoItem";

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
        {loading && <LoadingSpinner />}
        {!loading && cryptoState.crypto && cryptoState.crypto.length > 1 && (
          <div className="row justify-content-center align-itmes-center m-3">
            {cryptoState.crypto.map((el, id) => (
              <div
                key={id}
                className=" col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3 mx-2 h6 p-2"
              >
                <CryptoItem key={id} item={el} variant="light" text="dark" />
              </div>
            ))}
          </div>
        )}
      </>
    </Layout>
  );
};

export default Crypto;
