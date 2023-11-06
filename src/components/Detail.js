import React, { useContext, useEffect } from "react";

import Context from "../config/context";

import {
  Form,
  Modal,
  Button,
  Header,
  Dropdown,
  Image,
  Grid
} from "semantic-ui-react";

export default function Detail(props) {
  const context = useContext(Context);
  const { currency, getCurrency } = context;

  if (currency === null) {
    getCurrency();
  }

  console.log(currency + " " + parseFloat(currency));
  const priceLocal = 1 * parseFloat(props.product.price);

  return (
    <Modal trigger={<Button fluid>Ver producto</Button>}>
      <Modal.Content>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Image src={props.product.picture1} />
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Image src={props.product.picture2} />
            </Grid.Column>
            <Grid.Column>
              <Image src={props.product.picture3} />
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <br />
        <Form>
          <Form.Input name="name" label="Nombre" value={props.product.name} />
          <Form.Input
            name="description"
            label="Descripcion"
            value={props.product.description}
          />
          <Form.Group widths="equal">
            <Form.Input
              name="price"
              label="Precio"
              value={"$" + props.product.price}
            />
            <Form.Input name="price" label="Precio (ARS)" value={"$" + priceLocal} />
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Input
              name="category"
              label="Category"
              value={props.product.category_id}
            />
            <Form.Input
              name="weight"
              label="Weight"
              value={props.product.weight}
            />
          </Form.Group>
          <Button primary fluid>
            Comprar
          </Button>
        </Form>
      </Modal.Content>
    </Modal>
  );
}
