/* import { NavLink } from 'react-router-dom' */
import { StyledLink } from "./styles";
import { ShoppingCart } from "phosphor-react";

export function Cart() {
  return (
    <StyledLink to="checkout" title='Checkout'>
      <div>
        <span>3</span>
      </div>
      <ShoppingCart size={22} color="#C47F17" weight="fill" />
    </StyledLink>
  );
}