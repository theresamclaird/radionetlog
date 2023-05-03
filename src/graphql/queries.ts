/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getNet = /* GraphQL */ `
  query GetNet($id: ID!) {
    getNet(id: $id) {
      id
      repeater
      frequency
      mode
      power
      createdAt
      completedAt
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
        repeater
        frequency
        mode
        power
        createdAt
        completedAt
        rounds {
          nextToken
        }
        owner
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
          type
          frequency
          repeater
          mode
          power
          createdAt
          completedAt
          roundId
          callSign
          name
          qth
          gridSquare
          attributes
          stationPower
          reportSent
          reportReceived
          qslSent
          qslReceived
          comments
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
      type
      frequency
      repeater
      mode
      power
      createdAt
      completedAt
      roundId
      callSign
      name
      qth
      gridSquare
      attributes
      stationPower
      reportSent
      reportReceived
      qslSent
      qslReceived
      comments
      owner
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
        type
        frequency
        repeater
        mode
        power
        createdAt
        completedAt
        roundId
        callSign
        name
        qth
        gridSquare
        attributes
        stationPower
        reportSent
        reportReceived
        qslSent
        qslReceived
        comments
        owner
        updatedAt
      }
      nextToken
    }
  }
`;
export const contactsByDate = /* GraphQL */ `
  query ContactsByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelContactFilterInput
    $limit: Int
    $nextToken: String
  ) {
    contactsByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        type
        frequency
        repeater
        mode
        power
        createdAt
        completedAt
        roundId
        callSign
        name
        qth
        gridSquare
        attributes
        stationPower
        reportSent
        reportReceived
        qslSent
        qslReceived
        comments
        owner
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
        type
        frequency
        repeater
        mode
        power
        createdAt
        completedAt
        roundId
        callSign
        name
        qth
        gridSquare
        attributes
        stationPower
        reportSent
        reportReceived
        qslSent
        qslReceived
        comments
        owner
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
      callSign
      grid
      name
      qth
      notes
      attributes
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
        callSign
        grid
        name
        qth
        notes
        attributes
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const stationsByCallSign = /* GraphQL */ `
  query StationsByCallSign(
    $callSign: String!
    $sortDirection: ModelSortDirection
    $filter: ModelStationFilterInput
    $limit: Int
    $nextToken: String
  ) {
    stationsByCallSign(
      callSign: $callSign
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        callSign
        grid
        name
        qth
        notes
        attributes
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getRepeater = /* GraphQL */ `
  query GetRepeater($id: ID!) {
    getRepeater(id: $id) {
      id
      callSign
      inputFrequency
      inputTone
      outputFrequency
      outputTone
      offset
      grid
      notes
      sponsor
      echoLink
      allStar
      url
      owner
      createdAt
      updatedAt
    }
  }
`;
export const listRepeaters = /* GraphQL */ `
  query ListRepeaters(
    $filter: ModelRepeaterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRepeaters(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        callSign
        inputFrequency
        inputTone
        outputFrequency
        outputTone
        offset
        grid
        notes
        sponsor
        echoLink
        allStar
        url
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const repeatersByCallSign = /* GraphQL */ `
  query RepeatersByCallSign(
    $callSign: String!
    $sortDirection: ModelSortDirection
    $filter: ModelRepeaterFilterInput
    $limit: Int
    $nextToken: String
  ) {
    repeatersByCallSign(
      callSign: $callSign
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        callSign
        inputFrequency
        inputTone
        outputFrequency
        outputTone
        offset
        grid
        notes
        sponsor
        echoLink
        allStar
        url
        owner
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
