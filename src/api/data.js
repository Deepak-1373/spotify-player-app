import { gql } from "@apollo/client";

export const PLAYLIST_QUERY = gql`
  query ExampleQuery($playlistId: Int!) {
    getSongs(playlistId: $playlistId) {
      _id
      title
      photo
      url
      duration
      artist
    }
  }
`;
