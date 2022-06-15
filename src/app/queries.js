import { gql } from "@apollo/client";

export const GET_STANDARD = gql`
    query getStandard($userIdx: ID!) {
        standard(userIdx: $userIdx) {
            idx,
            userIdx,
            type
        }
    }
`