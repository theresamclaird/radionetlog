/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateNetInput = {
  id?: string | null,
  owner?: string | null,
};

export type ModelNetConditionInput = {
  owner?: ModelStringInput | null,
  and?: Array< ModelNetConditionInput | null > | null,
  or?: Array< ModelNetConditionInput | null > | null,
  not?: ModelNetConditionInput | null,
};

export type ModelStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}


export type ModelSizeInput = {
  ne?: number | null,
  eq?: number | null,
  le?: number | null,
  lt?: number | null,
  ge?: number | null,
  gt?: number | null,
  between?: Array< number | null > | null,
};

export type Net = {
  __typename: "Net",
  id: string,
  rounds?: ModelRoundConnection | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelRoundConnection = {
  __typename: "ModelRoundConnection",
  items:  Array<Round | null >,
  nextToken?: string | null,
};

export type Round = {
  __typename: "Round",
  id: string,
  netId: string,
  contacts?: ModelContactConnection | null,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type ModelContactConnection = {
  __typename: "ModelContactConnection",
  items:  Array<Contact | null >,
  nextToken?: string | null,
};

export type Contact = {
  __typename: "Contact",
  id: string,
  roundId: string,
  callSign: string,
  name: string,
  location: string,
  inAndOut: boolean,
  mobile: boolean,
  internet: boolean,
  recheck: boolean,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateNetInput = {
  id: string,
  owner?: string | null,
};

export type DeleteNetInput = {
  id: string,
};

export type CreateRoundInput = {
  id?: string | null,
  netId: string,
  owner?: string | null,
};

export type ModelRoundConditionInput = {
  netId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelRoundConditionInput | null > | null,
  or?: Array< ModelRoundConditionInput | null > | null,
  not?: ModelRoundConditionInput | null,
};

export type ModelIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
  size?: ModelSizeInput | null,
};

export type UpdateRoundInput = {
  id: string,
  netId?: string | null,
  owner?: string | null,
};

export type DeleteRoundInput = {
  id: string,
};

export type CreateContactInput = {
  id?: string | null,
  roundId: string,
  callSign: string,
  name: string,
  location: string,
  inAndOut: boolean,
  mobile: boolean,
  internet: boolean,
  recheck: boolean,
  owner?: string | null,
};

export type ModelContactConditionInput = {
  roundId?: ModelIDInput | null,
  callSign?: ModelStringInput | null,
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  inAndOut?: ModelBooleanInput | null,
  mobile?: ModelBooleanInput | null,
  internet?: ModelBooleanInput | null,
  recheck?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelContactConditionInput | null > | null,
  or?: Array< ModelContactConditionInput | null > | null,
  not?: ModelContactConditionInput | null,
};

export type ModelBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
  attributeExists?: boolean | null,
  attributeType?: ModelAttributeTypes | null,
};

export type UpdateContactInput = {
  id: string,
  roundId?: string | null,
  callSign?: string | null,
  name?: string | null,
  location?: string | null,
  inAndOut?: boolean | null,
  mobile?: boolean | null,
  internet?: boolean | null,
  recheck?: boolean | null,
  owner?: string | null,
};

export type DeleteContactInput = {
  id: string,
};

export type CreateStationInput = {
  id?: string | null,
  callsign: string,
  name: string,
  location: string,
  spouse: string,
  notes: string,
  inAndOut: boolean,
  mobile: boolean,
  internet: boolean,
  recheck: boolean,
  owner?: string | null,
};

export type ModelStationConditionInput = {
  callsign?: ModelStringInput | null,
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  spouse?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  inAndOut?: ModelBooleanInput | null,
  mobile?: ModelBooleanInput | null,
  internet?: ModelBooleanInput | null,
  recheck?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelStationConditionInput | null > | null,
  or?: Array< ModelStationConditionInput | null > | null,
  not?: ModelStationConditionInput | null,
};

export type Station = {
  __typename: "Station",
  id: string,
  callsign: string,
  name: string,
  location: string,
  spouse: string,
  notes: string,
  inAndOut: boolean,
  mobile: boolean,
  internet: boolean,
  recheck: boolean,
  owner?: string | null,
  createdAt: string,
  updatedAt: string,
};

export type UpdateStationInput = {
  id: string,
  callsign?: string | null,
  name?: string | null,
  location?: string | null,
  spouse?: string | null,
  notes?: string | null,
  inAndOut?: boolean | null,
  mobile?: boolean | null,
  internet?: boolean | null,
  recheck?: boolean | null,
  owner?: string | null,
};

export type DeleteStationInput = {
  id: string,
};

export type ModelNetFilterInput = {
  id?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelNetFilterInput | null > | null,
  or?: Array< ModelNetFilterInput | null > | null,
  not?: ModelNetFilterInput | null,
};

export type ModelNetConnection = {
  __typename: "ModelNetConnection",
  items:  Array<Net | null >,
  nextToken?: string | null,
};

export type ModelRoundFilterInput = {
  id?: ModelIDInput | null,
  netId?: ModelIDInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelRoundFilterInput | null > | null,
  or?: Array< ModelRoundFilterInput | null > | null,
  not?: ModelRoundFilterInput | null,
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}


export type ModelContactFilterInput = {
  id?: ModelIDInput | null,
  roundId?: ModelIDInput | null,
  callSign?: ModelStringInput | null,
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  inAndOut?: ModelBooleanInput | null,
  mobile?: ModelBooleanInput | null,
  internet?: ModelBooleanInput | null,
  recheck?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelContactFilterInput | null > | null,
  or?: Array< ModelContactFilterInput | null > | null,
  not?: ModelContactFilterInput | null,
};

export type ModelStationFilterInput = {
  id?: ModelIDInput | null,
  callsign?: ModelStringInput | null,
  name?: ModelStringInput | null,
  location?: ModelStringInput | null,
  spouse?: ModelStringInput | null,
  notes?: ModelStringInput | null,
  inAndOut?: ModelBooleanInput | null,
  mobile?: ModelBooleanInput | null,
  internet?: ModelBooleanInput | null,
  recheck?: ModelBooleanInput | null,
  owner?: ModelStringInput | null,
  and?: Array< ModelStationFilterInput | null > | null,
  or?: Array< ModelStationFilterInput | null > | null,
  not?: ModelStationFilterInput | null,
};

export type ModelStationConnection = {
  __typename: "ModelStationConnection",
  items:  Array<Station | null >,
  nextToken?: string | null,
};

export type ModelSubscriptionNetFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionNetFilterInput | null > | null,
  or?: Array< ModelSubscriptionNetFilterInput | null > | null,
};

export type ModelSubscriptionIDInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionRoundFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  netId?: ModelSubscriptionIDInput | null,
  and?: Array< ModelSubscriptionRoundFilterInput | null > | null,
  or?: Array< ModelSubscriptionRoundFilterInput | null > | null,
};

export type ModelSubscriptionContactFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  roundId?: ModelSubscriptionIDInput | null,
  callSign?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  inAndOut?: ModelSubscriptionBooleanInput | null,
  mobile?: ModelSubscriptionBooleanInput | null,
  internet?: ModelSubscriptionBooleanInput | null,
  recheck?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionContactFilterInput | null > | null,
  or?: Array< ModelSubscriptionContactFilterInput | null > | null,
};

export type ModelSubscriptionStringInput = {
  ne?: string | null,
  eq?: string | null,
  le?: string | null,
  lt?: string | null,
  ge?: string | null,
  gt?: string | null,
  contains?: string | null,
  notContains?: string | null,
  between?: Array< string | null > | null,
  beginsWith?: string | null,
  in?: Array< string | null > | null,
  notIn?: Array< string | null > | null,
};

export type ModelSubscriptionBooleanInput = {
  ne?: boolean | null,
  eq?: boolean | null,
};

export type ModelSubscriptionStationFilterInput = {
  id?: ModelSubscriptionIDInput | null,
  callsign?: ModelSubscriptionStringInput | null,
  name?: ModelSubscriptionStringInput | null,
  location?: ModelSubscriptionStringInput | null,
  spouse?: ModelSubscriptionStringInput | null,
  notes?: ModelSubscriptionStringInput | null,
  inAndOut?: ModelSubscriptionBooleanInput | null,
  mobile?: ModelSubscriptionBooleanInput | null,
  internet?: ModelSubscriptionBooleanInput | null,
  recheck?: ModelSubscriptionBooleanInput | null,
  and?: Array< ModelSubscriptionStationFilterInput | null > | null,
  or?: Array< ModelSubscriptionStationFilterInput | null > | null,
};

export type CreateNetMutationVariables = {
  input: CreateNetInput,
  condition?: ModelNetConditionInput | null,
};

export type CreateNetMutation = {
  createNet?:  {
    __typename: "Net",
    id: string,
    rounds?:  {
      __typename: "ModelRoundConnection",
      items:  Array< {
        __typename: "Round",
        id: string,
        netId: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateNetMutationVariables = {
  input: UpdateNetInput,
  condition?: ModelNetConditionInput | null,
};

export type UpdateNetMutation = {
  updateNet?:  {
    __typename: "Net",
    id: string,
    rounds?:  {
      __typename: "ModelRoundConnection",
      items:  Array< {
        __typename: "Round",
        id: string,
        netId: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteNetMutationVariables = {
  input: DeleteNetInput,
  condition?: ModelNetConditionInput | null,
};

export type DeleteNetMutation = {
  deleteNet?:  {
    __typename: "Net",
    id: string,
    rounds?:  {
      __typename: "ModelRoundConnection",
      items:  Array< {
        __typename: "Round",
        id: string,
        netId: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateRoundMutationVariables = {
  input: CreateRoundInput,
  condition?: ModelRoundConditionInput | null,
};

export type CreateRoundMutation = {
  createRound?:  {
    __typename: "Round",
    id: string,
    netId: string,
    contacts?:  {
      __typename: "ModelContactConnection",
      items:  Array< {
        __typename: "Contact",
        id: string,
        roundId: string,
        callSign: string,
        name: string,
        location: string,
        inAndOut: boolean,
        mobile: boolean,
        internet: boolean,
        recheck: boolean,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateRoundMutationVariables = {
  input: UpdateRoundInput,
  condition?: ModelRoundConditionInput | null,
};

export type UpdateRoundMutation = {
  updateRound?:  {
    __typename: "Round",
    id: string,
    netId: string,
    contacts?:  {
      __typename: "ModelContactConnection",
      items:  Array< {
        __typename: "Contact",
        id: string,
        roundId: string,
        callSign: string,
        name: string,
        location: string,
        inAndOut: boolean,
        mobile: boolean,
        internet: boolean,
        recheck: boolean,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteRoundMutationVariables = {
  input: DeleteRoundInput,
  condition?: ModelRoundConditionInput | null,
};

export type DeleteRoundMutation = {
  deleteRound?:  {
    __typename: "Round",
    id: string,
    netId: string,
    contacts?:  {
      __typename: "ModelContactConnection",
      items:  Array< {
        __typename: "Contact",
        id: string,
        roundId: string,
        callSign: string,
        name: string,
        location: string,
        inAndOut: boolean,
        mobile: boolean,
        internet: boolean,
        recheck: boolean,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateContactMutationVariables = {
  input: CreateContactInput,
  condition?: ModelContactConditionInput | null,
};

export type CreateContactMutation = {
  createContact?:  {
    __typename: "Contact",
    id: string,
    roundId: string,
    callSign: string,
    name: string,
    location: string,
    inAndOut: boolean,
    mobile: boolean,
    internet: boolean,
    recheck: boolean,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateContactMutationVariables = {
  input: UpdateContactInput,
  condition?: ModelContactConditionInput | null,
};

export type UpdateContactMutation = {
  updateContact?:  {
    __typename: "Contact",
    id: string,
    roundId: string,
    callSign: string,
    name: string,
    location: string,
    inAndOut: boolean,
    mobile: boolean,
    internet: boolean,
    recheck: boolean,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteContactMutationVariables = {
  input: DeleteContactInput,
  condition?: ModelContactConditionInput | null,
};

export type DeleteContactMutation = {
  deleteContact?:  {
    __typename: "Contact",
    id: string,
    roundId: string,
    callSign: string,
    name: string,
    location: string,
    inAndOut: boolean,
    mobile: boolean,
    internet: boolean,
    recheck: boolean,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type CreateStationMutationVariables = {
  input: CreateStationInput,
  condition?: ModelStationConditionInput | null,
};

export type CreateStationMutation = {
  createStation?:  {
    __typename: "Station",
    id: string,
    callsign: string,
    name: string,
    location: string,
    spouse: string,
    notes: string,
    inAndOut: boolean,
    mobile: boolean,
    internet: boolean,
    recheck: boolean,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type UpdateStationMutationVariables = {
  input: UpdateStationInput,
  condition?: ModelStationConditionInput | null,
};

export type UpdateStationMutation = {
  updateStation?:  {
    __typename: "Station",
    id: string,
    callsign: string,
    name: string,
    location: string,
    spouse: string,
    notes: string,
    inAndOut: boolean,
    mobile: boolean,
    internet: boolean,
    recheck: boolean,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type DeleteStationMutationVariables = {
  input: DeleteStationInput,
  condition?: ModelStationConditionInput | null,
};

export type DeleteStationMutation = {
  deleteStation?:  {
    __typename: "Station",
    id: string,
    callsign: string,
    name: string,
    location: string,
    spouse: string,
    notes: string,
    inAndOut: boolean,
    mobile: boolean,
    internet: boolean,
    recheck: boolean,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type GetNetQueryVariables = {
  id: string,
};

export type GetNetQuery = {
  getNet?:  {
    __typename: "Net",
    id: string,
    rounds?:  {
      __typename: "ModelRoundConnection",
      items:  Array< {
        __typename: "Round",
        id: string,
        netId: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListNetsQueryVariables = {
  filter?: ModelNetFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListNetsQuery = {
  listNets?:  {
    __typename: "ModelNetConnection",
    items:  Array< {
      __typename: "Net",
      id: string,
      rounds?:  {
        __typename: "ModelRoundConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetRoundQueryVariables = {
  id: string,
};

export type GetRoundQuery = {
  getRound?:  {
    __typename: "Round",
    id: string,
    netId: string,
    contacts?:  {
      __typename: "ModelContactConnection",
      items:  Array< {
        __typename: "Contact",
        id: string,
        roundId: string,
        callSign: string,
        name: string,
        location: string,
        inAndOut: boolean,
        mobile: boolean,
        internet: boolean,
        recheck: boolean,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListRoundsQueryVariables = {
  filter?: ModelRoundFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListRoundsQuery = {
  listRounds?:  {
    __typename: "ModelRoundConnection",
    items:  Array< {
      __typename: "Round",
      id: string,
      netId: string,
      contacts?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type RoundsByNetIdQueryVariables = {
  netId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelRoundFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type RoundsByNetIdQuery = {
  roundsByNetId?:  {
    __typename: "ModelRoundConnection",
    items:  Array< {
      __typename: "Round",
      id: string,
      netId: string,
      contacts?:  {
        __typename: "ModelContactConnection",
        nextToken?: string | null,
      } | null,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetContactQueryVariables = {
  id: string,
};

export type GetContactQuery = {
  getContact?:  {
    __typename: "Contact",
    id: string,
    roundId: string,
    callSign: string,
    name: string,
    location: string,
    inAndOut: boolean,
    mobile: boolean,
    internet: boolean,
    recheck: boolean,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListContactsQueryVariables = {
  filter?: ModelContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListContactsQuery = {
  listContacts?:  {
    __typename: "ModelContactConnection",
    items:  Array< {
      __typename: "Contact",
      id: string,
      roundId: string,
      callSign: string,
      name: string,
      location: string,
      inAndOut: boolean,
      mobile: boolean,
      internet: boolean,
      recheck: boolean,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type ContactsByRoundIdQueryVariables = {
  roundId: string,
  sortDirection?: ModelSortDirection | null,
  filter?: ModelContactFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ContactsByRoundIdQuery = {
  contactsByRoundId?:  {
    __typename: "ModelContactConnection",
    items:  Array< {
      __typename: "Contact",
      id: string,
      roundId: string,
      callSign: string,
      name: string,
      location: string,
      inAndOut: boolean,
      mobile: boolean,
      internet: boolean,
      recheck: boolean,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type GetStationQueryVariables = {
  id: string,
};

export type GetStationQuery = {
  getStation?:  {
    __typename: "Station",
    id: string,
    callsign: string,
    name: string,
    location: string,
    spouse: string,
    notes: string,
    inAndOut: boolean,
    mobile: boolean,
    internet: boolean,
    recheck: boolean,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type ListStationsQueryVariables = {
  filter?: ModelStationFilterInput | null,
  limit?: number | null,
  nextToken?: string | null,
};

export type ListStationsQuery = {
  listStations?:  {
    __typename: "ModelStationConnection",
    items:  Array< {
      __typename: "Station",
      id: string,
      callsign: string,
      name: string,
      location: string,
      spouse: string,
      notes: string,
      inAndOut: boolean,
      mobile: boolean,
      internet: boolean,
      recheck: boolean,
      owner?: string | null,
      createdAt: string,
      updatedAt: string,
    } | null >,
    nextToken?: string | null,
  } | null,
};

export type OnCreateNetSubscriptionVariables = {
  filter?: ModelSubscriptionNetFilterInput | null,
  owner?: string | null,
};

export type OnCreateNetSubscription = {
  onCreateNet?:  {
    __typename: "Net",
    id: string,
    rounds?:  {
      __typename: "ModelRoundConnection",
      items:  Array< {
        __typename: "Round",
        id: string,
        netId: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateNetSubscriptionVariables = {
  filter?: ModelSubscriptionNetFilterInput | null,
  owner?: string | null,
};

export type OnUpdateNetSubscription = {
  onUpdateNet?:  {
    __typename: "Net",
    id: string,
    rounds?:  {
      __typename: "ModelRoundConnection",
      items:  Array< {
        __typename: "Round",
        id: string,
        netId: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteNetSubscriptionVariables = {
  filter?: ModelSubscriptionNetFilterInput | null,
  owner?: string | null,
};

export type OnDeleteNetSubscription = {
  onDeleteNet?:  {
    __typename: "Net",
    id: string,
    rounds?:  {
      __typename: "ModelRoundConnection",
      items:  Array< {
        __typename: "Round",
        id: string,
        netId: string,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateRoundSubscriptionVariables = {
  filter?: ModelSubscriptionRoundFilterInput | null,
  owner?: string | null,
};

export type OnCreateRoundSubscription = {
  onCreateRound?:  {
    __typename: "Round",
    id: string,
    netId: string,
    contacts?:  {
      __typename: "ModelContactConnection",
      items:  Array< {
        __typename: "Contact",
        id: string,
        roundId: string,
        callSign: string,
        name: string,
        location: string,
        inAndOut: boolean,
        mobile: boolean,
        internet: boolean,
        recheck: boolean,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateRoundSubscriptionVariables = {
  filter?: ModelSubscriptionRoundFilterInput | null,
  owner?: string | null,
};

export type OnUpdateRoundSubscription = {
  onUpdateRound?:  {
    __typename: "Round",
    id: string,
    netId: string,
    contacts?:  {
      __typename: "ModelContactConnection",
      items:  Array< {
        __typename: "Contact",
        id: string,
        roundId: string,
        callSign: string,
        name: string,
        location: string,
        inAndOut: boolean,
        mobile: boolean,
        internet: boolean,
        recheck: boolean,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteRoundSubscriptionVariables = {
  filter?: ModelSubscriptionRoundFilterInput | null,
  owner?: string | null,
};

export type OnDeleteRoundSubscription = {
  onDeleteRound?:  {
    __typename: "Round",
    id: string,
    netId: string,
    contacts?:  {
      __typename: "ModelContactConnection",
      items:  Array< {
        __typename: "Contact",
        id: string,
        roundId: string,
        callSign: string,
        name: string,
        location: string,
        inAndOut: boolean,
        mobile: boolean,
        internet: boolean,
        recheck: boolean,
        owner?: string | null,
        createdAt: string,
        updatedAt: string,
      } | null >,
      nextToken?: string | null,
    } | null,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
  owner?: string | null,
};

export type OnCreateContactSubscription = {
  onCreateContact?:  {
    __typename: "Contact",
    id: string,
    roundId: string,
    callSign: string,
    name: string,
    location: string,
    inAndOut: boolean,
    mobile: boolean,
    internet: boolean,
    recheck: boolean,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
  owner?: string | null,
};

export type OnUpdateContactSubscription = {
  onUpdateContact?:  {
    __typename: "Contact",
    id: string,
    roundId: string,
    callSign: string,
    name: string,
    location: string,
    inAndOut: boolean,
    mobile: boolean,
    internet: boolean,
    recheck: boolean,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteContactSubscriptionVariables = {
  filter?: ModelSubscriptionContactFilterInput | null,
  owner?: string | null,
};

export type OnDeleteContactSubscription = {
  onDeleteContact?:  {
    __typename: "Contact",
    id: string,
    roundId: string,
    callSign: string,
    name: string,
    location: string,
    inAndOut: boolean,
    mobile: boolean,
    internet: boolean,
    recheck: boolean,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnCreateStationSubscriptionVariables = {
  filter?: ModelSubscriptionStationFilterInput | null,
  owner?: string | null,
};

export type OnCreateStationSubscription = {
  onCreateStation?:  {
    __typename: "Station",
    id: string,
    callsign: string,
    name: string,
    location: string,
    spouse: string,
    notes: string,
    inAndOut: boolean,
    mobile: boolean,
    internet: boolean,
    recheck: boolean,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnUpdateStationSubscriptionVariables = {
  filter?: ModelSubscriptionStationFilterInput | null,
  owner?: string | null,
};

export type OnUpdateStationSubscription = {
  onUpdateStation?:  {
    __typename: "Station",
    id: string,
    callsign: string,
    name: string,
    location: string,
    spouse: string,
    notes: string,
    inAndOut: boolean,
    mobile: boolean,
    internet: boolean,
    recheck: boolean,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};

export type OnDeleteStationSubscriptionVariables = {
  filter?: ModelSubscriptionStationFilterInput | null,
  owner?: string | null,
};

export type OnDeleteStationSubscription = {
  onDeleteStation?:  {
    __typename: "Station",
    id: string,
    callsign: string,
    name: string,
    location: string,
    spouse: string,
    notes: string,
    inAndOut: boolean,
    mobile: boolean,
    internet: boolean,
    recheck: boolean,
    owner?: string | null,
    createdAt: string,
    updatedAt: string,
  } | null,
};
