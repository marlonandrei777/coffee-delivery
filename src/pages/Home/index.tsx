import { Header } from "../../components/Header";

import coffeeImg from '../../assets/coffee-img.svg';
import { BannerContainer, CoffeeContainer, ContentContainer, FooterContainer, IconContainer, InfoContainer } from "./styles";
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Home() {
  return (
    <>
      <Header />

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
      </CoffeeContainer>
    </>
  );
}