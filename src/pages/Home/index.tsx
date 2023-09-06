import { useEffect, useState } from "react";
import { api } from "../../lib/axios";
import { CountSelect } from "../../components/CountSelect";

import { Coffee, Package, ShoppingCart, ShoppingCartSimple, Timer } from "phosphor-react";
import {
  BannerContainer,
  BuyDetail,
  CartButton,
  CoffeeCardContainer,
  CoffeeContainer,
  CoffeeInfoContainer,
  CoffeeList,
  ContentContainer,
  FooterContainer,
  FooterPrice,
  IconContainer,
  InfoContainer,
  SmallSpanContainer
} from "./styles";
import coffeeImg from '../../assets/coffee-img.svg';
import coffeeCup from '../../assets/coffee-cup.svg';


export function Home() {
  const [coffee, setCoffee] = useState([]);

  /* call API */
  useEffect(() => {
    async function loadCoffee() {
      const response = await api.get('coffees')
      console.log(response.data);
    }

    loadCoffee();
  }, []);


  return (
    <>
      <BannerContainer>
        <ContentContainer>
          <h1>Encontre o café perfeito<br /> para qualquer hora do dia</h1>
          <span>Com o Coffee Delivery você recebe seu café onde estiver, a<br /> qualquer hora</span>

          <FooterContainer>
            <div>
              <InfoContainer>
                <IconContainer $backGroundColor="#C47F17">
                  <ShoppingCart size={16} color="#ffffff" weight="fill" />
                </IconContainer>
                <p>Compra simples e segura</p>
              </InfoContainer>

              <InfoContainer>
                <IconContainer $backGroundColor="#DBAC2C">
                  <Timer size={16} color="#ffffff" weight="fill" />
                </IconContainer>
                <p>Entrega rápida e rastreada</p>
              </InfoContainer>
            </div>

            <div>
              <InfoContainer>
                <IconContainer $backGroundColor="#574F4D">
                  <Package size={16} color="#ffffff" weight="fill" />
                </IconContainer>
                <p>Embalagem mantém o café intacto</p>
              </InfoContainer>

              <InfoContainer>
                <IconContainer $backGroundColor="#8047F8">
                  <Coffee size={16} color="#ffffff" weight="fill" />
                </IconContainer>
                <p>O café chega fresquinho até você</p>
              </InfoContainer>
            </div>
          </FooterContainer>
        </ContentContainer>

        <img src={coffeeImg} alt="Coffeer image" />
      </BannerContainer>

      <CoffeeContainer>
        <h2>Nossos cafés</h2>

        <CoffeeList>
          <CoffeeCardContainer>
            <CoffeeInfoContainer>
              <img src={coffeeCup} alt="Café em uma chicara" />
              <span>TRADICIONAL</span>
              <strong>Expresso Tradicional</strong>
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </CoffeeInfoContainer>

            <FooterPrice>
              <SmallSpanContainer>
                <small>R$</small>
                <span>9,90</span>
              </SmallSpanContainer>

              <BuyDetail>
                <CountSelect />

                <CartButton>
                  <ShoppingCartSimple size={22} color="#ffffff" weight="fill" />
                </CartButton>
              </BuyDetail>
            </FooterPrice>
          </CoffeeCardContainer>

          <CoffeeCardContainer>
            <CoffeeInfoContainer>
              <img src={coffeeCup} alt="Café em uma chicara" />
              <span>TRADICIONAL</span>
              <strong>Expresso Tradicional</strong>
              <p>O tradicional café feito com água quente e grãos moídos</p>
            </CoffeeInfoContainer>

            <FooterPrice>
              <SmallSpanContainer>
                <small>R$</small>
                <span>9,90</span>
              </SmallSpanContainer>

              <BuyDetail>
                <CountSelect />

                <CartButton>
                  <ShoppingCartSimple size={22} color="#ffffff" weight="fill" />
                </CartButton>
              </BuyDetail>
            </FooterPrice>
          </CoffeeCardContainer>
        </CoffeeList>
      </CoffeeContainer>
    </>
  );
}