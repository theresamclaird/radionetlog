/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateNet = /* GraphQL */ `
  subscription OnCreateNet(
    $filter: ModelSubscriptionNetFilterInput
    $owner: String
  ) {
    onCreateNet(filter: $filter, owner: $owner) {
      id
      rounds {
        items {
          id
          netId
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateNet = /* GraphQL */ `
  subscription OnUpdateNet(
    $filter: ModelSubscriptionNetFilterInput
    $owner: String
  ) {
    onUpdateNet(filter: $filter, owner: $owner) {
      id
      rounds {
        items {
          id
          netId
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteNet = /* GraphQL */ `
  subscription OnDeleteNet(
    $filter: ModelSubscriptionNetFilterInput
    $owner: String
  ) {
    onDeleteNet(filter: $filter, owner: $owner) {
      id
      rounds {
        items {
          id
          netId
          owner
          createdAt
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateRound = /* GraphQL */ `
  subscription OnCreateRound(
    $filter: ModelSubscriptionRoundFilterInput
    $owner: String
  ) {
    onCreateRound(filter: $filter, owner: $owner) {
      id
      netId
      contacts {
        items {
          id
          type
          createdAt
          roundId
          callSign
          name
          location
          attributes
          signalReport
          owner
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateRound = /* GraphQL */ `
  subscription OnUpdateRound(
    $filter: ModelSubscriptionRoundFilterInput
    $owner: String
  ) {
    onUpdateRound(filter: $filter, owner: $owner) {
      id
      netId
      contacts {
        items {
          id
          type
          createdAt
          roundId
          callSign
          name
          location
          attributes
          signalReport
          owner
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteRound = /* GraphQL */ `
  subscription OnDeleteRound(
    $filter: ModelSubscriptionRoundFilterInput
    $owner: String
  ) {
    onDeleteRound(filter: $filter, owner: $owner) {
      id
      netId
      contacts {
        items {
          id
          type
          createdAt
          roundId
          callSign
          name
          location
          attributes
          signalReport
          owner
          updatedAt
        }
        nextToken
      }
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onCreateContact = /* GraphQL */ `
  subscription OnCreateContact(
    $filter: ModelSubscriptionContactFilterInput
    $owner: String
  ) {
    onCreateContact(filter: $filter, owner: $owner) {
      id
      type
      createdAt
      roundId
      callSign
      name
      location
      attributes
      signalReport
      owner
      updatedAt
    }
  }
`;
export const onUpdateContact = /* GraphQL */ `
  subscription OnUpdateContact(
    $filter: ModelSubscriptionContactFilterInput
    $owner: String
  ) {
    onUpdateContact(filter: $filter, owner: $owner) {
      id
      type
      createdAt
      roundId
      callSign
      name
      location
      attributes
      signalReport
      owner
      updatedAt
    }
  }
`;
export const onDeleteContact = /* GraphQL */ `
  subscription OnDeleteContact(
    $filter: ModelSubscriptionContactFilterInput
    $owner: String
  ) {
    onDeleteContact(filter: $filter, owner: $owner) {
      id
      type
      createdAt
      roundId
      callSign
      name
      location
      attributes
      signalReport
      owner
      updatedAt
    }
  }
`;
export const onCreateStation = /* GraphQL */ `
  subscription OnCreateStation(
    $filter: ModelSubscriptionStationFilterInput
    $owner: String
  ) {
    onCreateStation(filter: $filter, owner: $owner) {
      id
      callSign
      name
      location
      notes
      attributes
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateStation = /* GraphQL */ `
  subscription OnUpdateStation(
    $filter: ModelSubscriptionStationFilterInput
    $owner: String
  ) {
    onUpdateStation(filter: $filter, owner: $owner) {
      id
      callSign
      name
      location
      notes
      attributes
      owner
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteStation = /* GraphQL */ `
  subscription OnDeleteStation(
    $filter: ModelSubscriptionStationFilterInput
    $owner: String
  ) {
    onDeleteStation(filter: $filter, owner: $owner) {
      id
      callSign
      name
      location
      notes
      attributes
      owner
      createdAt
      updatedAt
    }
  }
`;
