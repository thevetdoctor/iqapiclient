/* Generated by restful-react */

import React from "react";
import { Mutate, MutateProps, useMutate, UseMutateProps } from "restful-react";
export const SPEC_VERSION = "1.0.0"; 
/**
 * User Schema
 */
export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  mobile: string;
  uid: string;
  address: string;
  status: string;
  birthday: string;
  profileImage: string;
  products: Product[];
  orders?: Order[];
  posts?: Post[];
}

/**
 * Product Schema
 */
export interface Product {
  id: string;
  name: string;
  description: string;
  status: string;
  userId: string;
  price: string;
  likes: string;
  imageCollection: Image[];
}

/**
 * Image Schema
 */
export interface Image {
  id: string;
  name: string;
  description: string;
  status: string;
  productId: string;
  url: string;
  likes: string;
}

/**
 * Post Schema
 */
export interface Post {
  id: string;
  title: string;
  message: string;
  status: string;
  userId: string;
  likes: string;
}

/**
 * Order Schema
 */
export interface Order {
  id: string;
  userId: string;
  totalValue: string;
  status: string;
  orderproducts: Product[];
}

export interface AccessesTheGraphQLServerQueryParams {
  /**
   * query parameter for products
   */
  query?: string;
}

export type AccessesTheGraphQLServerProps = Omit<MutateProps<User[], void, AccessesTheGraphQLServerQueryParams, void, void>, "path" | "verb">;

/**
 * graphQL endpoint
 * 
 * graphQL Endpoint
 */
export const AccessesTheGraphQLServer = (props: AccessesTheGraphQLServerProps) => (
  <Mutate<User[], void, AccessesTheGraphQLServerQueryParams, void, void>
    verb="POST"
    path={`/graphql`}
    
    {...props}
  />
);

export type UseAccessesTheGraphQLServerProps = Omit<UseMutateProps<User[], void, AccessesTheGraphQLServerQueryParams, void, void>, "path" | "verb">;

/**
 * graphQL endpoint
 * 
 * graphQL Endpoint
 */
export const useAccessesTheGraphQLServer = (props: UseAccessesTheGraphQLServerProps) => useMutate<User[], void, AccessesTheGraphQLServerQueryParams, void, void>("POST", `/graphql`, props);

