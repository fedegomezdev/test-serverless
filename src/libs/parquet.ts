
var parquet = require("parquetjsfork");


export const createParquet =async()=> {
    console.log("BEGIN DEBUG PARQUET");
    var debugschema = new parquet.ParquetSchema({
      name: { type: "UTF8" },
      quantity: { type: "INT64" },
      price: { type: "DOUBLE" },
      date: { type: "TIMESTAMP_MILLIS" },
      in_stock: { type: "BOOLEAN" },
    });
    // create new ParquetWriter that writes to 'fruits.parquet`
    var debugwriter = await parquet.ParquetWriter.openFile(
      debugschema,
      `test2.parquet`
    );
    // append a few rows to the file
    await debugwriter.appendRow({
      name: "apples",
      quantity: 10,
      price: 2.5,
      date: new Date(),
      in_stock: true,
    });
    await debugwriter.appendRow({
      name: "apples",
      quantity: 10,
      price: 2.5,
      date: new Date(),
      in_stock: true,
    });
    await debugwriter.appendRow({
      name: "apples",
      quantity: 10,
      price: 2.5,
      date: new Date(),
      in_stock: true,
    });
    await debugwriter.appendRow({
      name: "apples",
      quantity: 10,
      price: 2.5,
      date: new Date(),
      in_stock: true,
    });
    await debugwriter.appendRow({
      name: "apples",
      quantity: 10,
      price: 2.5,
      date: new Date(),
      in_stock: true,
    });
    await debugwriter.appendRow({
      name: "apples",
      quantity: 10,
      price: 2.5,
      date: new Date(),
      in_stock: true,
    });
    await debugwriter.close();
    console.log("END DEBUG PARQUET");
  }


export const readParquet = async (file) => {
  try {
    const reader = await parquet.ParquetReader.openFile(file);
    const cursor = reader.getCursor();
    let allData = [];
    let record = null;
    while ((record = await cursor.next())) {
      allData.push(record);
    }
    await reader.close();
    return allData;
  } catch (error) {
    console.log('Error reading parquet: ', error);
  }
};