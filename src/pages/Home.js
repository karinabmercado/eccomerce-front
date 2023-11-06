import React, { useContext } from "react";

import { Container, Header, Image, Label } from "semantic-ui-react";

import Context from "../config/context";

export default function Home() {
  const context = useContext(Context);
  const { user } = context;

  const greeting = user ? (
    <div>
      <Label size="massive" color="teal">
        Bienvenido, {user.email}
      </Label>
    </div>
  ) : (
    <div>
      <Label basic size="large" color="red" pointing prompt>
        Inicia sesión para continuar
      </Label>
    </div>
  );

  return (
    <Container textAlign="center">
      <Image
        src="http://www.perfiltic.com/img/logo.png"
        size="large"
        centered
      />
      <Header as="h1" color="teal">
        E-Commerce Karina
      </Header>
      <Header as="h3">
        Ejemplo simple de ecommerce
      </Header>
      {greeting}
    </Container>
  );
}
