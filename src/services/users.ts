import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Octokit } from "octokit";

export const MAGIC_RESULTS_PER_PAGE = 20;

const octokit = new Octokit({
  auth: import.meta.env.PERSONAL_ACCESS_TOKEN,
});

export type PreviewUser = {
  login: string;
  avatar_url: string;
  id: number;
  html_url: string;
};

type Response = {
  items: PreviewUser[];
  count: number;
};

export type User = PreviewUser & {
  name: string;
  followers: number;
  following: number;
  company: string;
  blog: string;
  email: string | null;
};

 // eslint-disable-next-line @typescript-eslint/ban-ts-comment
 // @ts-ignore
export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    usersList: builder.query<Response, { query: string; page: number }>({
      queryFn: async ({ query, page }) => {
        try {
          const res = await octokit.request("GET /search/users", {
            q: query,
            per_page: MAGIC_RESULTS_PER_PAGE,
            page: page,
          });
          
          return {
            data: {
              items: res.data.items,
              count: res.data.total_count,
            },
          };
        } catch (error) {
          const apiError = error as { message: string; status: number }; // todo improve TS
          return {
            status: apiError.status,
            data: api.message,
          };
        }
      },
      serializeQueryArgs: ({ queryArgs }) => {
        return queryArgs.query;
      },
      merge: (currentCache, newItems) => {
        currentCache.items.push(...newItems.items);
      },
      forceRefetch({ currentArg, previousArg }) {
        return (
          currentArg?.query !== previousArg?.query ||
          currentArg?.page !== previousArg?.page
        );
      },
    }),
    userData: builder.query<User, string>({
      queryFn: async (username) => {
        try {
          const res = await octokit.request(`GET /users/${username}`, {
            username,
            headers: {
              "X-GitHub-Api-Version": "2022-11-28",
            },
          });
          return {
            data: res.data,
          };
        } catch (error) {
          const apiError = error as { message: string; status: number }; // todo improve TS
          return {
            status: apiError.status,
            data: api.message,
          };
        }
      },
    }),
  }),
});

export const { useUsersListQuery, useUserDataQuery } = api;
