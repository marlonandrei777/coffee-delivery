import { CurrencyDollar, MapPin, Timer } from "phosphor-react";
import { InfoAddressContainer, InfoContainer, OrderInfoWrapper, SuccessContentContainer } from "./styles";
import { IconContainer } from "../Home/styles";
import { useLocation, useNavigate } from "react-router-dom";
import { coffeeFormInputs } from "../Checkout";
import { useEffect } from "react";

type LocationType = {
  state: coffeeFormInputs
}

export function Success() {
  // pegando os dados do form vindo pela rota
  const { state } = useLocation() as unknown as LocationType;

  const navigate = useNavigate();

  // para nao entrar nessa pagina se n houver um state
  useEffect(() => {
    if (!state) {
      navigate("/")
    }
  }, [state, navigate])

  // para nao quebrar a pagina
  if (!state) return <></>

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
              <span>Entrega em <strong>{state.street}, {state.number}</strong></span>
              <span>{state.district} - {state.city}, {state.uf}</span>
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
              <strong>{state.paymentType}</strong>
            </InfoContainer>
          </OrderInfoWrapper>
        </InfoAddressContainer>
      </SuccessContentContainer>
    </>
  );
}