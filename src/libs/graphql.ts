import axios from "axios";
const url =
  "https://api.thegraph.com/subgraphs/name/ianlapham/arbitrum-minimal";

export const getSwaps = async (skipPage?: number) => {
  try {
    const first: number = 1000;
    const skip: number = skipPage || 0;
    const timestamp: number = 1634957045;
    const recipient: string = "0xF7CA7384cc6619866749955065f17beDD3ED80bC";

    const result = await axios.post(url, {
      query: `query swaps {
        swaps(first: ${first}, skip:${skip}
          where:{recipient:"${recipient}",
            timestamp_gt: ${timestamp}}, orderBy: timestamp) {
            amount0
            amount1
            amountUSD
            timestamp
            recipient
            sender
            transaction{
              id
              gasUsed
              gasPrice
            }
            token0{
              symbol
            }
            token1{
              symbol
            }
          }
      }`,
    });
    const data = result.data?.data?.swaps;
    return data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getAll = async () => {
  let allData: [] = [];
  let skip = 0;
  do {
    var data: [] = await getSwaps(skip);
    skip = skip + 1000;
    allData.push(...data);
  } while (data.length > 0);
};
