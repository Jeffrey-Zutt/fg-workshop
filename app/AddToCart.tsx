import api from "@/api";
import AddToCartComponent from "@/components/AddToCart";

type Props = {
  handle: string;
};

export const AddToCart = async ({ handle }: Props) => {
  const productData = await api.product.fetch(handle);
  return <AddToCartComponent inStock={productData.inStock} />;
};
