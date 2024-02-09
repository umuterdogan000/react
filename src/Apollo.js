// import { ApolloClient, InMemoryCache } from '@apollo/client';

// const client = new ApolloClient({
//     uri: 'https://valued-parrot-81.hasura.app/v1/graphql',
//     cache: new InMemoryCache(),
//   });

//   export default client;

import { split, HttpLink, InMemoryCache, ApolloClient } from '@apollo/client';
import { getMainDefinition } from '@apollo/client/utilities';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { createClient } from 'graphql-ws';

const httpLink = new HttpLink({
  uri: 'https://valued-parrot-81.hasura.app/v1/graphql'
});

const wsLink = new GraphQLWsLink(createClient({
  url: 'ws://valued-parrot-81.hasura.app/v1/graphql',
}));

const splitLink = split(
  ({ query }) => {
    const definition = getMainDefinition(query);
    return (
      definition.kind === 'OperationDefinition' &&
      definition.operation === 'subscription'
    );
  },
  wsLink,
  httpLink,
);

const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

export default client;




// soru ekleme modalının hazırlanması 1'e kadar olan



// import { split, HttpLink, InMemoryCache, ApolloClient } from '@apollo/client';
// import { getMainDefinition } from '@apollo/client/utilities';
// import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
// import { createClient } from 'graphql-ws';

// const httpLink = new HttpLink({
//   uri: 'https://valued-parrot-81.hasura.app/v1/graphql'
// });

// const wsLink = new GraphQLWsLink(createClient({
//   url: 'ws://valued-parrot-81.hasura.app/v1/graphql',
// }));

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   httpLink,
// );

// const client = new ApolloClient({
//   link: splitLink,
//   cache: new InMemoryCache(),
// });

// export default client;