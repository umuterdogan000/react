import { Text, View, StyleSheet} from 'react-native'
import React, { Component, useState } from 'react'
import { Box, Button, Heading, Input, Stack } from 'native-base'
import Ionicons from '@expo/vector-icons/Ionicons';
import { ADD_NEW_QUESTION_MUTATION } from './queries'; //son ekleme
import { useMutation } from '@apollo/client';


const AddNewModal = ({closeModal}) => {
    //son ekleme
    const [addNewQuestion, {loading, error}] = useMutation(
        ADD_NEW_QUESTION_MUTATION
    )

        //buraya kadar

    const[title, setTitle] = useState("");
    const[options, setOption] = useState([{ text: ""}, { text: ""}]);

 const handleOptionChange = (val, i) => {
        const data =[...options];
        data[i].text = val;
        setOption(data);
    };

const handleNewOption = () => setOption((prev) => [...prev, { text: ""}])

//önceki hali 
// const handleSubmit = () => {
//     console.log("question", question);
//     console.log("options", options);

const handleSubmit = async () => {
    await addNewQuestion({
        variables: {
            title,
            options
        },
     })
     console.log('result:', result);

     closeModal();
}

    return (
      <Box  backgroundColor="#ddd" flex={"1"}>
       <Box p={6}  flex={"1"}>

         <Heading mb="2"> Sorular </Heading>

            <Input 
            placeholder='Lütfen soruyu giriniz:'
            fontSize={20}
            borderColor="#686565"
            value={title}
            onChangeText={setTitle}
            />
            

            <Heading mt="6" mb="2">
                Seçenekler
            </Heading>
            
            {options.map((item, i) => (
                    <Input mt={2} mb="2"
                    placeholder='Lütfen cevabı giriniz:'
                    fontSize={20}
                    borderColor="#686565"
                    key={i}
                    value={item.text}
                    onChangeText={(val) => handleOptionChange(val, i)}
                    />
                 ))}
            

            <Box
            mt="2" 
            alignItems={{
                base: "flex-end"
            }}
            >
                    <Button 
                    colorScheme={"amber"} 
                    leftIcon={<Ionicons name="add-circle-outline" 
                    size={30}/>}
                    onPress={handleNewOption}
                    ></Button>
            </Box>


         </Box>
            <Box>
             <Button onPress={handleSubmit} isLoading={loading} >Kaydet</Button>
            </Box>
      </Box>
     )
  }
    const styles = StyleSheet.create({
            
        container: {
              padding: 10,
      }
  }) //rnstyle


 export default AddNewModal





