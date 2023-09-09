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

type CoffeeProps = {
  id: number;
  tag: string;
  title: string;
  description: string;
  image: string;
  price: number;
}

export function Home() {
  // array de cafes vindo da api
  const [coffees, setCoffees] = useState<CoffeeProps[]>([]);
  // armazenamento da quantidade de cafe e cafe selecionados
  const [selectCountCoffees, setSelectCountCoffees] = useState<CoffeeProps[]>([]);

  function handleSelectedCoffeesAdd(id: number) {
    const addQuantityCoffee = coffees.filter(coffees => coffees.id === id);

    setSelectCountCoffees(state => [...state, ...addQuantityCoffee])
  }

  /* call API */
  useEffect(() => {
    async function loadCoffee() {
      const response = await api.get('coffee')

      setCoffees(response.data);
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
          {coffees.map((coffee) => (
            <CoffeeCardContainer key={coffee.id} >
              <CoffeeInfoContainer>
                <img src={coffee.image} alt="Café em uma chicara" />
                <span>{coffee.tag}</span>
                <strong>{coffee.title}</strong>
                <p>{coffee.description}</p>
              </CoffeeInfoContainer>

              <FooterPrice>
                <SmallSpanContainer>
                  <small>R$</small>
                  <span>{coffee.price}</span>
                </SmallSpanContainer>

                <BuyDetail>
                  <CountSelect handleCountAdd={() => handleSelectedCoffeesAdd(coffee.id)} />

                  <CartButton>
                    <ShoppingCartSimple size={22} color="#ffffff" weight="fill" />
                  </CartButton>
                </BuyDetail>
              </FooterPrice>
            </CoffeeCardContainer>
          ))}
        </CoffeeList>
      </CoffeeContainer>
    </>
  );
}