import { HeaderContainer, LocalizationCartContainer } from "./styles";
import LogoCoffeeDelivery from '../../assets/logo-coffee.svg';
import { MapPin } from "phosphor-react";
import { Cart } from "../Cart";

export function Header() {
  return (
    <HeaderContainer>
      <img src={LogoCoffeeDelivery} alt="Coffee Delivery logo" />

      <LocalizationCartContainer>
        <div>
          <MapPin size={22} color="#8047F8" weight="fill" />
          <span>Belém, PA</span>
        </div>

        <Cart />
      </LocalizationCartContainer>
    </HeaderContainer>
  );
}