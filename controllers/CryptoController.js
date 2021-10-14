const cheerio = require("cheerio");
const axios = require("axios");

const getCryptoScrape = async () => {
  const siteURL = "https://coinmarketcap.com/";

  try {
    const res = await axios({
      method: "GET",
      url: siteURL,
    });

    const siteData = cheerio.load(res.data);
    const elementSelector =
      "#__next > div > div.main-content > div.sc-57oli2-0.comDeo.cmc-body-wrapper > div > div:nth-child(1) > div.h7vnx2-1.bFzXgL > table > tbody > tr";

    const keys = [
      "rank",
      "name",
      "price",
      "24h",
      "7d",
      "marketCap",
      "volume",
      "circulatingPrice",
    ];
    const coinArr = [];
    siteData(elementSelector).each((parentId, parentElem) => {
      let keyId = 0;
      let coinObj = {};
      if (parentId <= 9) {
        siteData(parentElem)
          .children()
          .each((childId, childElem) => {
            const tdValue = siteData(childElem).text();

            if (tdValue) {
              coinObj[keys[keyId]] = tdValue;
              keyId++;
            }
          });
        coinArr.push(coinObj);
      }
    });

    return coinArr;
  } catch (error) {
    console.log(error);
  }
};

exports.getCrypto = async (req, res) => {
  try {
    let coinData = await getCryptoScrape();
    res.json({
      status: 200,
      message: "",
      success: true,
      data: coinData,
    });
  } catch (error) {
    res.status(500).json({ status: 500, message: "something went wrong" });
  }
};
