// Item.js
import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Item = ({ question }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity style={styles.item} 
    onPress={() => navigation.navigate('Detail', {id: question.id})}>
      <Text style={styles.text}>{question.text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    borderBottomWidth: 1,
    borderColor: "#DDD",
    padding: 10,
  },
  text: {
    fontSize: 18,
  },
});

export default Item;





// soru ekleme modalının hazırlanması 1'e kadar olan



// // Item.js
// import React from 'react';
// import { StyleSheet, Text, TouchableOpacity } from 'react-native';

// const Item = ({ question }) => {
//   return (
//     <TouchableOpacity style={styles.item}>
//       <Text style={styles.text}>{question.text}</Text>
//     </TouchableOpacity>
//   );
// }

// const styles = StyleSheet.create({
//   item: {
//     borderBottomWidth: 1,
//     borderColor: "#DDD",
//     padding: 10,
//   },
//   text: {
//     fontSize: 18,
//   },
// });

// export default Item;






