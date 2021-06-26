import React from "react";
import { NavLink } from "react-router-dom";
import { Button, Icon, Menu } from "semantic-ui-react";
import { Container } from "semantic-ui-react";

export default function Navi() {
    return (
        <div>
            <Menu pointing secondary>
                <Container>
                    <Menu.Item name="Home"
          as={NavLink} to ="/ " ></Menu.Item>
                    <Menu.Item name="Job Posting" as={NavLink} to ="/jobPosting " ></Menu.Item>
                    <Menu.Item name="Companies" />
                    <Menu.Menu position='right'>
                        <div>
                            <Button content='Sign-In' secondary />
                            <Button content='Sign-Up' secondary />
                        </div>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    );
}