/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNet = /* GraphQL */ `
  query GetNet($id: ID!) {
    getNet(id: $id) {
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
export const listNets = /* GraphQL */ `
  query ListNets(
    $filter: ModelNetFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listNets(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        rounds {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRound = /* GraphQL */ `
  query GetRound($id: ID!) {
    getRound(id: $id) {
      id
      netId
      contacts {
        items {
          id
          roundId
          callSign
          name
          location
          inAndOut
          mobile
          internet
          recheck
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
export const listRounds = /* GraphQL */ `
  query ListRounds(
    $filter: ModelRoundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRounds(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        netId
        contacts {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const roundsByNetId = /* GraphQL */ `
  query RoundsByNetId(
    $netId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRoundFilterInput
    $limit: Int
    $nextToken: String
  ) {
    roundsByNetId(
      netId: $netId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        netId
        contacts {
          nextToken
        }
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getContact = /* GraphQL */ `
  query GetContact($id: ID!) {
    getContact(id: $id) {
      id
      roundId
      callSign
      name
      location
      inAndOut
      mobile
      internet
      recheck
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listContacts = /* GraphQL */ `
  query ListContacts(
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContacts(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        roundId
        callSign
        name
        location
        inAndOut
        mobile
        internet
        recheck
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const contactsByRoundId = /* GraphQL */ `
  query ContactsByRoundId(
    $roundId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contactsByRoundId(
      roundId: $roundId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        roundId
        callSign
        name
        location
        inAndOut
        mobile
        internet
        recheck
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getStation = /* GraphQL */ `
  query GetStation($id: ID!) {
    getStation(id: $id) {
      id
      callsign
      name
      location
      spouse
      notes
      inAndOut
      mobile
      internet
      recheck
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listStations = /* GraphQL */ `
  query ListStations(
    $filter: ModelStationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStations(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        callsign
        name
        location
        spouse
        notes
        inAndOut
        mobile
        internet
        recheck
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
