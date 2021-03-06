import React, { useState, useEffect } from "react";
import CandidateService from '../services/CandidateService'
import { Table, Header, Icon, Button } from "semantic-ui-react";

export default function CandidateList() {
    const [candidates, setCandidates] = useState([]);
    let candidateService = new CandidateService();
    useEffect(() => {
        candidateService.getCandidate().then((result) => setCandidates(result.data.data))
    }, [])
    return (
        <div>
             <Header as="h2">
        <Icon name="list alternate outline" />
        <Header.Content>Candidate List</Header.Content>
      </Header>
      <Table color="blue" key="blue">
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>First Name</Table.HeaderCell>
            <Table.HeaderCell>Last Name</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
            <Table.HeaderCell>Detail</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidates.map((candidate) => (
            <Table.Row key = {candidate.id}>
              <Table.Cell>{candidate.firstName}</Table.Cell>
              <Table.Cell>{candidate.lastName}</Table.Cell>
              <Table.Cell>{candidate.email}</Table.Cell>
              <Table.Cell>
                <Button>View</Button>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
        </div>
    )
}
