import { DataSource } from "typeorm";
import { Products } from "./Product.entity";
import { ProductFeature } from "./ProductFeature.entity";

const dataSource = new DataSource({
  type: "postgres",
  host: "localhost",
  port: 5433,
  database: "ecommerce",
  username: "postgres",
  password: "12345",
  synchronize: true,
  entities: [Products, ProductFeature],
  logging: true,
});

export default function initalize(){
  dataSource
  .initialize()
  .then(() => {
    console.log("DataSource initialized");
  })
  .catch((err) => {
    console.error("Datasource initialization falied", err);
  });
}

export { dataSource }