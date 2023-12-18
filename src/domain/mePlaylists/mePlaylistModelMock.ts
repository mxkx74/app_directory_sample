import { type MePlaylistModel } from './mePlaylistsModel';

export const mePlaylistModelMock: MePlaylistModel = {
  href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M',
  limit: 20,
  next: null,
  offset: 0,
  previous: null,
  total: 50,
  items: [
    {
      collaborative: false,
      description: 'Your daily update of the most played tracks right now.',
      external_urls: {
        spotify: 'https://open.spotify.com/playlist/37i9dQZF1DXcBWIGoYBM5M',
      },
      id: '37i9dQZF1DXcBWIGoYBM5M',
      images: [
        {
          url: 'https://i.scdn.co/image/ab67706f00000003b3b1efcae9a5a944d3c1bb84',
          height: null,
          width: null,
        },
      ],
      name: "Today's Top Hits",
      owner: {
        display_name: 'Spotify',
        external_urls: {
          spotify: 'https://open.spotify.com/user/spotify',
        },
        followers: {
          href: null,
          total: 31635687,
        },
        href: 'https://api.spotify.com/v1/users/spotify',
        id: 'spotify',
        type: 'user',
        uri: 'spotify:user:spotify',
      },
      public: true,
      snapshot_id: 'MTYzMDM2NjQwMCwwMDAwMDAwMGQ0MWQ4ZjQ5OWYwMGIyMDRlOTgwMDk5OGVjZjg0Zjdl',
      tracks: {
        href: 'https://api.spotify.com/v1/playlists/37i9dQZF1DXcBWIGoYBM5M/tracks',
        total: 50,
      },
      type: 'playlist',
      uri: 'spotify:playlist:37i9dQZF1DXcBWIGoYBM5M',
    },
  ],
};
