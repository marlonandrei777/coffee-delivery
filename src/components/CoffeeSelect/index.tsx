import { CountSelect } from "../CountSelect";
import coffeeCup from '../../assets/coffee-cup.svg';

import { CoffeeDetailContainer, CoffeeSelectCard, CoffeeSelectContainer, ConfirmOrderLink, CountAndRemoveContainer, InfoContainer, RemoveButton, ValuesWrapper } from "./styles";
import { Trash } from "phosphor-react";

export function CoffeeSelect() {
  return (
    <CoffeeSelectContainer>
      <h3>Cafés selecionados</h3>

      <CoffeeSelectCard>
        <CoffeeDetailContainer>
          <img src={coffeeCup} alt="" />

          <InfoContainer>
            <span>Expresso Tradicional</span>
            <CountAndRemoveContainer>
              <CountSelect />

              <RemoveButton>
                <Trash size={16} color="#8047F8" />
                <span>REMOVER</span>
              </RemoveButton>
            </CountAndRemoveContainer>
            <strong>R$ 9,90</strong>
          </InfoContainer>
        </CoffeeDetailContainer>

        <ValuesWrapper>
          <div>
            <p>Total de itens</p>
            <span>R$ 29,70</span>
          </div>

          <div>
            <p>Entrega</p>
            <span>R$ 3,50</span>
          </div>

          <div>
            <p>Total</p>
            <span>R$ 33,20</span>
          </div>
        </ValuesWrapper>

        <ConfirmOrderLink href="#">
          CONFIRMAR PEDIDO
        </ConfirmOrderLink>
      </CoffeeSelectCard>
    </CoffeeSelectContainer>
  );
}