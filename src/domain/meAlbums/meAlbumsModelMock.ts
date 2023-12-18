import { type MeAlbumsModel } from './meAlbumsModel';

export const mockData = {
  href: 'https://example.com',
  limit: 10,
  next: 'https://example.com/next',
  offset: 0,
  previous: null,
  total: 50,
  items: [
    {
      added_at: '2022-01-01T00:00:00Z',
      album: {
        album_type: 'album',
        total_tracks: 10,
        available_markets: ['JP', 'US'],
        external_urls: {
          spotify: 'https://spotify.com',
        },
        href: 'https://example.com/album',
        id: 'album1',
        images: [
          {
            url: 'https://example.com/image.jpg',
            height: null,
            width: null,
          },
        ],
        name: 'Album 1',
        release_date: '2022-01-01',
        release_date_precision: 'day',
        restrictions: {
          reason: 'explicit',
        },
        type: 'album',
        uri: 'spotify:album:1',
        artists: [
          {
            external_urls: {
              spotify: 'https://spotify.com',
            },
            href: 'https://example.com/artist',
            id: 'artist1',
            name: 'Artist 1',
            type: 'artist',
            uri: 'spotify:artist:1',
          },
        ],
        tracks: {
          href: 'https://example.com/tracks',
          limit: 10,
          next: 'https://example.com/tracks/next',
          offset: 0,
          previous: null,
          total: 50,
          items: [
            {
              artists: [
                {
                  external_urls: {
                    spotify: 'https://spotify.com',
                  },
                  href: 'https://example.com/artist',
                  id: 'artist1',
                  name: 'Artist 1',
                  type: 'artist',
                  uri: 'spotify:artist:1',
                },
              ],
              available_markets: ['JP', 'US'],
              disc_number: 1,
              duration_ms: 200000,
              explicit: false,
              external_urls: {
                spotify: 'https://spotify.com',
              },
              href: 'https://example.com/track',
              id: 'track1',
              is_playable: true,
              linked_from: {
                external_urls: {
                  spotify: 'https://spotify.com',
                },
                href: 'https://example.com/track',
                id: 'track1',
                type: 'track',
                uri: 'spotify:track:1',
              },
              restrictions: {
                reason: 'market',
              },
              name: 'Track 1',
              preview_url: 'https://example.com/preview.mp3',
              track_number: 1,
              type: 'track',
              uri: 'spotify:track:1',
              is_local: false,
            },
          ],
        },
        copyrights: [
          {
            text: '2022 Example',
            type: 'C',
          },
        ],
        external_ids: {
          isrc: 'JP1234567890',
          ean: '1234567890123',
          upc: '123456789012',
        },
        genres: ['Pop', 'Rock'],
        label: 'Example Label',
        popularity: 80,
      },
    },
  ],
} satisfies MeAlbumsModel;
