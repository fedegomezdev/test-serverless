import type { ValidatedEventAPIGatewayProxyEvent } from "@libs/apiGateway";
import { formatJSONResponse } from "@libs/apiGateway";
import { middyfy } from "@libs/lambda";
import { createParquet, readParquet } from "@libs/parquet";
import schema from "./schema";

const hello: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (
  event
) => {

  await createParquet()
  const data = await readParquet('test2.parquet')
  console.log(data)
  return formatJSONResponse({
    message: `Hello , welcome`,
    event,
  });
};

export const main = middyfy(hello);
