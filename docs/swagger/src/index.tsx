import React from 'react';
import { render } from 'react-dom';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

// import yml from '../swagger.yaml'
import yml from '../../../api/swagger/swagger.yaml'

const Application: React.FC<{}> = () => (
  <SwaggerUI spec={yml} />
);

render(
  <Application />,
  document.getElementById('root')
);
