import { GraphQLObjectType, GraphQLNonNull, GraphQLID, GraphQLString } from 'graphql';
import EventType from './types/EventType';
import ParticipantType from './types/ParticipantType';

const query = new GraphQLObjectType({
  name: 'Query',
  fields: {
    participant: {
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString }
      },
      resolve: (root, args) => args,
      type: ParticipantType,
    },
    event: {
      args: {
        id: { type: new GraphQLNonNull(GraphQLID) },
        name: { type: GraphQLString }
      },
      resolve: (root, args) => args,
      type: EventType,
    }
  }
});

export default query;
