import queryString from "query-string";
import generalEndpoint, { Endpoints } from "~api/source/constants/api/api";
import { GetPosts, GetPostsArguments } from "./getPosts.types";

const { stringify } = queryString;

const getPosts: GetPosts = (argument?: GetPostsArguments) => {
  const {
    customEndpoint = generalEndpoint,
    queryParameters = {},
  }: GetPostsArguments = Object(argument);
  const stringifiedQueryParameters: string = stringify(queryParameters);
  return fetch(
    `${customEndpoint}${Endpoints.Posts}${stringifiedQueryParameters}`,
  );
};

export default getPosts;
