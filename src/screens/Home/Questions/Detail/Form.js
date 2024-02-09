import { View, Text } from 'react-native'
import React from 'react'
import {Radio} from "native-base"

return (
    <View>
      {options.map((option) => (
        <TouchableOpacity
          key={option.id}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: 5,
          }}
          onPress={() => handleSelect(option)}
        >
          <View
            style={{
              width: 20,
              height: 20,
              borderRadius: 10,
              borderWidth: 2,
              borderColor: selectedOption === option ? 'blue' : 'gray',
              marginRight: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {selectedOption === option && (
              <View
                style={{
                  width: 12,
                  height: 12,
                  borderRadius: 6,
                  backgroundColor: 'blue',
                }}
              />
            )}
          </View>
          <Text>{option.text}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );

export default Form;