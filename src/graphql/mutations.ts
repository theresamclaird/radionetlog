/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createNet = /* GraphQL */ `
  mutation CreateNet(
    $input: CreateNetInput!
    $condition: ModelNetConditionInput
  ) {
    createNet(input: $input, condition: $condition) {
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
export const updateNet = /* GraphQL */ `
  mutation UpdateNet(
    $input: UpdateNetInput!
    $condition: ModelNetConditionInput
  ) {
    updateNet(input: $input, condition: $condition) {
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
export const deleteNet = /* GraphQL */ `
  mutation DeleteNet(
    $input: DeleteNetInput!
    $condition: ModelNetConditionInput
  ) {
    deleteNet(input: $input, condition: $condition) {
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
export const createRound = /* GraphQL */ `
  mutation CreateRound(
    $input: CreateRoundInput!
    $condition: ModelRoundConditionInput
  ) {
    createRound(input: $input, condition: $condition) {
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
export const updateRound = /* GraphQL */ `
  mutation UpdateRound(
    $input: UpdateRoundInput!
    $condition: ModelRoundConditionInput
  ) {
    updateRound(input: $input, condition: $condition) {
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
export const deleteRound = /* GraphQL */ `
  mutation DeleteRound(
    $input: DeleteRoundInput!
    $condition: ModelRoundConditionInput
  ) {
    deleteRound(input: $input, condition: $condition) {
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
export const createContact = /* GraphQL */ `
  mutation CreateContact(
    $input: CreateContactInput!
    $condition: ModelContactConditionInput
  ) {
    createContact(input: $input, condition: $condition) {
      id
      type
      createdAt
      roundId
      callSign
      name
      location
      attributes
      owner
      updatedAt
    }
  }
`;
export const updateContact = /* GraphQL */ `
  mutation UpdateContact(
    $input: UpdateContactInput!
    $condition: ModelContactConditionInput
  ) {
    updateContact(input: $input, condition: $condition) {
      id
      type
      createdAt
      roundId
      callSign
      name
      location
      attributes
      owner
      updatedAt
    }
  }
`;
export const deleteContact = /* GraphQL */ `
  mutation DeleteContact(
    $input: DeleteContactInput!
    $condition: ModelContactConditionInput
  ) {
    deleteContact(input: $input, condition: $condition) {
      id
      type
      createdAt
      roundId
      callSign
      name
      location
      attributes
      owner
      updatedAt
    }
  }
`;
export const createStation = /* GraphQL */ `
  mutation CreateStation(
    $input: CreateStationInput!
    $condition: ModelStationConditionInput
  ) {
    createStation(input: $input, condition: $condition) {
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
export const updateStation = /* GraphQL */ `
  mutation UpdateStation(
    $input: UpdateStationInput!
    $condition: ModelStationConditionInput
  ) {
    updateStation(input: $input, condition: $condition) {
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
export const deleteStation = /* GraphQL */ `
  mutation DeleteStation(
    $input: DeleteStationInput!
    $condition: ModelStationConditionInput
  ) {
    deleteStation(input: $input, condition: $condition) {
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
