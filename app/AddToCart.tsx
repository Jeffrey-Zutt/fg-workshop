import api from "@/api";
import AddToCartComponent from "@/components/AddToCart";

type Props = {
  handle: string;
};

const sleep = (timeout: number) =>
  new Promise((resolve) => setTimeout(resolve, timeout));

export const AddToCart = async ({ handle }: Props) => {
  await sleep(2000); // Sleep to see the streaming in action
  const productData = await api.product.fetch(handle);
  return <AddToCartComponent inStock={productData.inStock} />;
};
