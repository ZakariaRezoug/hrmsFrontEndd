import React from 'react'
import Navi from './Navi'
import Section from './Section'
import Sidebar from './Sidebar'
import { Grid } from "semantic-ui-react";
import { Route } from 'react-router-dom'
import CandidateList from '../pages/CandidateList';
import HomePage from '../pages/HomePage';
import JobPostingList from '../pages/JobPostingList';

export default function Dashboard() {
    return (
        <div>
         <Grid>
        <Grid.Row>
        <Grid.Column width={5}>
            <Sidebar/>
           </Grid.Column>
          <Grid.Column width={10}>
              {/* <Section/> */}
              <Route exact path="/candidates" component={CandidateList}></Route>
              <Route exact path="/" component={HomePage}></Route>
              <Route exact path="/jobPosting" component={JobPostingList}></Route>
          </Grid.Column>
        </Grid.Row>
      </Grid>
        </div>
    );
}
