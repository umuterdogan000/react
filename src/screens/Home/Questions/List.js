// List.js
import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import Item from './Item';

const List = ({ questions }) => {
  return (
    <FlatList
      data={questions}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item, index }) => (
        <Item key={index} question={item} />
      )}
    />
  );
}

export default List;




// soru ekleme modalının hazırlanması 1'e kadar olan



// List.js
// import React from 'react';
// import { FlatList, StyleSheet } from 'react-native';
// import Item from './Item';

// const List = ({ questions }) => {
//   return (
//     <FlatList
//       data={questions}
//       keyExtractor={(item, index) => index.toString()}
//       renderItem={({ item, index }) => (
//         <Item key={index} question={item} />
//       )}
//     />
//   );
// }

// export default List;




















