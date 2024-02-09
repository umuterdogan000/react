import { gql } from "@apollo/client";

export const  GET_QUESTIONS_SUBSCRIPTION = gql`
subscription QuestionSubscription {
    questions{
      id
      text
    }
  }
  `

  export const ADD_NEW_QUESTION_MUTATION = gql`
  mutation AddNewQuestionMutation ($title: String!, $options: [options_insert_input!]!) {
    insert_questions_one(
      object: {
      text: $title,
      options: {
        data: $options
      }}) {
      id
      text
    }
  }
  
`;









// soru ekleme modalının hazırlanması 4'e kadar olan


// import { gql } from "@apollo/client";

// export const  GET_QUESTIONS_SUBSCRIPTION = gql`
// subscription QuestionSubscription {
//     questions{
//       id
//       text
//     }
//   }
//   `