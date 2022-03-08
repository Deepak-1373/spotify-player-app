import { gql } from "@apollo/client";

export const PLAYLIST_QUERY = gql`
  query ExampleQuery($playlistId: Int!, $type: String) {
    getSongs(playlistId: $playlistId) {
      _id
      title
      photo
      url
      duration
      artist
    }

    getCategories(type: $type)
    getPlaylists {
      id
      title
    }
  }
`;
