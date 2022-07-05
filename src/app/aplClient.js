import { ApolloClient, InMemoryCache, gql } from "@apollo/client";

const client = new ApolloClient({
    uri: "http://localhost:8082/gql",
    cache: new InMemoryCache(),
});

// client.query({
//     query : gql`
//         # query문 넣을 것
//         query {
//             standard(userIdx: "1") {
//                 idx
//                 userIdx,
//                 type,
//                 prev,
//                 new,
//                 isChoosed
//             }
//         }
//     `
// }).then(data => console.log(data));

export default client;