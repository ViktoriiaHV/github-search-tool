import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Octokit } from "octokit";

const octokit = new Octokit({
  auth: import.meta.env.PERSONAL_ACCESS_TOKEN,
});

type User = {
  name: string;
  login: string;
  followers: number;
  following: number;
}

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "/" }),
  endpoints: (builder) => ({
    usersList: builder.query<
      { login: string; id: number }[],
      { query: string; page: number }
    >({
      queryFn: async ({ query, page }) => {
        try {
          const res = await octokit.request("GET /search/users", {
            q: query,
            per_page: 10,
            page: page,
          });
          return {
            data: res.data.items,
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
