import React from 'react'
import Navi from './Navi'
import Section from './Section'
import Sidebar from './Sidebar'
import { Grid } from "semantic-ui-react";

export default function Dashboard() {
    return (
        <div>
         <Grid>
        <Grid.Row>
        <Grid.Column width={5}>
            <Sidebar/>
           </Grid.Column>
          <Grid.Column width={10}>
              <Section/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
        </div>
    );
}
