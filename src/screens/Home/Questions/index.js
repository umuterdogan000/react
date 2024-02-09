// Questions.js
import React from 'react';
import { useSubscription } from '@apollo/client';
import { Text } from 'react-native';
import { GET_QUESTIONS_SUBSCRIPTION } from './queries';
import List from './List';

function Questions() {
  const { loading, data, error } = useSubscription(GET_QUESTIONS_SUBSCRIPTION);

  if (loading) {
    return <Text>Loading...</Text>
  }

  if (error) {
    return <Text>{JSON.stringify(error)}</Text>
  }

  return <List questions={data.questions} />;
}

export default Questions;



// soru ekleme modalının hazırlanması 1'e kadar olan



// // Questions.js
// import React from 'react';
// import { useSubscription } from '@apollo/client';
// import { Text } from 'react-native';
// import { GET_QUESTIONS_SUBSCRIPTION } from './queries';
// import List from './List';

// function Questions() {
//   const { loading, data, error } = useSubscription(GET_QUESTIONS_SUBSCRIPTION);

//   if (loading) {
//     return <Text>Loading...</Text>
//   }

//   if (error) {
//     return <Text>{JSON.stringify(error)}</Text>
//   }

//   return <List questions={data.questions} />;
// }

// export default Questions;