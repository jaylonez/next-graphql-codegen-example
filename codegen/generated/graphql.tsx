import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: any;
};


export type Mutation = {
  __typename?: 'Mutation';
  signUpUser: Array<User>;
};


export type MutationSignUpUserArgs = {
  data: UserCreateInput;
};

export type Query = {
  __typename?: 'Query';
  allUsers: Array<User>;
  userById?: Maybe<User>;
};


export type QueryUserByIdArgs = {
  id: Scalars['ID'];
};

export type User = {
  __typename?: 'User';
  id: Scalars['Int'];
  email: Scalars['String'];
};

export type UserCreateInput = {
  email: Scalars['String'];
};

export type SignUpUserMutationVariables = Exact<{
  data: UserCreateInput;
}>;


export type SignUpUserMutation = (
  { __typename?: 'Mutation' }
  & { signUpUser: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  )> }
);

export type AllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type AllUsersQuery = (
  { __typename?: 'Query' }
  & { allUsers: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  )> }
);

export type UserByIdQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type UserByIdQuery = (
  { __typename?: 'Query' }
  & { userById?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'email'>
  )> }
);


export const SignUpUserDocument = gql`
    mutation signUpUser($data: UserCreateInput!) {
  signUpUser(data: $data) {
    id
    email
  }
}
    `;
export type SignUpUserMutationFn = Apollo.MutationFunction<SignUpUserMutation, SignUpUserMutationVariables>;

/**
 * __useSignUpUserMutation__
 *
 * To run a mutation, you first call `useSignUpUserMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignUpUserMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signUpUserMutation, { data, loading, error }] = useSignUpUserMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useSignUpUserMutation(baseOptions?: Apollo.MutationHookOptions<SignUpUserMutation, SignUpUserMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignUpUserMutation, SignUpUserMutationVariables>(SignUpUserDocument, options);
      }
export type SignUpUserMutationHookResult = ReturnType<typeof useSignUpUserMutation>;
export type SignUpUserMutationResult = Apollo.MutationResult<SignUpUserMutation>;
export type SignUpUserMutationOptions = Apollo.BaseMutationOptions<SignUpUserMutation, SignUpUserMutationVariables>;
export const AllUsersDocument = gql`
    query allUsers {
  allUsers {
    id
    email
  }
}
    `;

/**
 * __useAllUsersQuery__
 *
 * To run a query within a React component, call `useAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
      }
export function useAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AllUsersQuery, AllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AllUsersQuery, AllUsersQueryVariables>(AllUsersDocument, options);
        }
export type AllUsersQueryHookResult = ReturnType<typeof useAllUsersQuery>;
export type AllUsersLazyQueryHookResult = ReturnType<typeof useAllUsersLazyQuery>;
export type AllUsersQueryResult = Apollo.QueryResult<AllUsersQuery, AllUsersQueryVariables>;
export const UserByIdDocument = gql`
    query userById($id: ID!) {
  userById(id: $id) {
    id
    email
  }
}
    `;

/**
 * __useUserByIdQuery__
 *
 * To run a query within a React component, call `useUserByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useUserByIdQuery(baseOptions: Apollo.QueryHookOptions<UserByIdQuery, UserByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserByIdQuery, UserByIdQueryVariables>(UserByIdDocument, options);
      }
export function useUserByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserByIdQuery, UserByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserByIdQuery, UserByIdQueryVariables>(UserByIdDocument, options);
        }
export type UserByIdQueryHookResult = ReturnType<typeof useUserByIdQuery>;
export type UserByIdLazyQueryHookResult = ReturnType<typeof useUserByIdLazyQuery>;
export type UserByIdQueryResult = Apollo.QueryResult<UserByIdQuery, UserByIdQueryVariables>;