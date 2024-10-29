import { Product } from "@/model/product";
import { pb } from "../../pocketbase";

export const get = () => {
  return pb.collection("products").getList<Product>();
};

export const remove = (id: string) => {
  return pb.collection("products").delete(id);
};

export const add = (product: Partial<Product>) => {
  return pb.collection("products").create<Product>(product);
};
export const edit = (product: Partial<Product>) => {
  return pb.collection("products").update<Product>(product.id!, product);
};
