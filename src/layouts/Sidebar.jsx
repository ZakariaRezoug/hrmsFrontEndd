import React from "react";
import { Header, Menu } from 'semantic-ui-react'

export default function SideBar() {
  return (
    <div>
     <Menu vertical>
        <Menu.Item
          name='Jobs'
        >
          <Header as='h4'>Jobs</Header>
          <p>Check out latest jobs</p>
        </Menu.Item>

        <Menu.Item
          name='Candidates'
        >
          <Header as='h4'>Candidates</Header>
          <p>Check out our candidates</p>
        </Menu.Item>

        <Menu.Item
          name='rebates'
        >
          <Header as='h4'>AboutUs</Header>
          <p>Visit our rebate forum for information on claiming rebates</p>
        </Menu.Item>
      </Menu>
    </div>
  );
}