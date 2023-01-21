export type GetPosts = (argument: GetPostsArguments) => Promise<unknown>;

export type GetPostsBodyLimitParameter =
  | "5"
  | "10"
  | "20"
  | "50"
  | 5
  | 10
  | 20
  | 50;

export enum GetPostsBodyOrderByParameter {
  CreatedAt = "p.createdAt",
  NumLikes = "p.numLikes",
  NumComments = "p.numComments",
  Hot = "p.hot",
  Hotness = "p.hotness",
  Rand = "rand",
}

export enum GetPostsBodyOrderDirParameter {
  Ascending = "asc",
  Descending = "desc",
}

export type GetPostsQueryParameters = {
  /**
   * Offset results
   */
  page?: number;
  limit?: GetPostsBodyLimitParameter;
  orderBy?: GetPostsBodyOrderByParameter;
  orderDir?: GetPostsBodyOrderDirParameter;
};

export type GetPostsArguments = {
  customEndpoint?: string;
  queryParameters?: GetPostsQueryParameters;
};
