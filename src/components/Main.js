import React from "react";
import {listen,publish,component} from "../core/utils"
import {Card, CardTitle, CardText, CardActions, Button} from "react-mdl";
import fetch from "isomorphic-fetch"

export default component((props) => {
  return <div className="page-container">
  <Card shadow={0} className="card-center">
    <CardTitle>Data Card</CardTitle>
    <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Aenan convallis.
    </CardText>
    <CardActions border>
        <Button colored>Do Something</Button>
    </CardActions>
  </Card>
  </div>;
});
