import { CartContainerLink } from "./styles";
import { ShoppingCart } from "phosphor-react";

export function Cart() {
  return (
    <CartContainerLink href="#">
      <ShoppingCart size={25} color="#C47F17" weight="fill" />
    </CartContainerLink>
  );
}