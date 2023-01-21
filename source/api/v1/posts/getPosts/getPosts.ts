import generalEndpoint, { Endpoints } from "~api/source/constants/api/api";
import { GetPosts, GetPostsArguments } from "./getPosts.types";
import queryString from "query-string";

const { stringify } = queryString;

const getPosts: GetPosts = ({
  customEndpoint = generalEndpoint,
  queryParameters = {},
}: GetPostsArguments) => {
  const stringifiedQueryParameters: string = stringify(queryParameters);
  return fetch(
    `${customEndpoint}${Endpoints.Posts}${stringifiedQueryParameters}`,
  );
};

export default getPosts;
