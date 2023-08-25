import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { InfoAddressContainer, InfoContainer, OrderInfoWrapper, SuccessContentContainer } from "./styles";
import { IconContainer } from "../Home/styles";

export function Success() {
  return (
    <>
      <SuccessContentContainer>
        <h2>Uhu! Pedido confirmado</h2>
        <span>Agora é só aguardar que logo o café chegará até você</span>

        <InfoAddressContainer>
          <OrderInfoWrapper>
            <IconContainer $backGroundColor="#8047F8">
              <MapPin size={16} color="#FAFAFA" weight="fill" />
            </IconContainer>

            <InfoContainer>
              <span>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></span>
              <span>Farrapos - Porto Alegre, RS</span>
            </InfoContainer>
          </OrderInfoWrapper>

          <OrderInfoWrapper>
            <IconContainer $backGroundColor="#DBAC2C">
              <Timer size={16} color="#FAFAFA" weight="fill" />
            </IconContainer>

            <InfoContainer>
              <span>Previsão de entrega</span>
              <strong>20 min - 30 min</strong>
            </InfoContainer>
          </OrderInfoWrapper>

          <OrderInfoWrapper>
            <IconContainer $backGroundColor="#C47F17">
              <CurrencyDollar size={16} color="#FAFAFA" weight="fill" />
            </IconContainer>

            <InfoContainer>
              <span>Pagamento na entrega</span>
              <strong>Cartão de Crédito</strong>
            </InfoContainer>
          </OrderInfoWrapper>
        </InfoAddressContainer>
      </SuccessContentContainer>
    </>
  );
}