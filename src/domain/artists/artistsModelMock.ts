import { type ArtistsListModel, type ArtistsModel } from './artistsModel';

export const artistsModelMock = {
  external_urls: {
    spotify: 'https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
  },
  followers: {
    href: null,
    total: 10228647,
  },
  genres: ['dance pop', 'miami hip hop', 'pop'],
  href: 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
  id: '0TnOYISbd1XYRBk9myaseg',
  images: [
    {
      height: 640,
      url: 'https://i.scdn.co/image/ab6761610000e5ebee07b5820dd91d15d397e29c',
      width: 640,
    },
    {
      height: 320,
      url: 'https://i.scdn.co/image/ab67616100005174ee07b5820dd91d15d397e29c',
      width: 320,
    },
    {
      height: 160,
      url: 'https://i.scdn.co/image/ab6761610000f178ee07b5820dd91d15d397e29c',
      width: 160,
    },
  ],
  name: 'ピットブル',
  popularity: 81,
  type: 'artist',
  uri: 'spotify:artist:0TnOYISbd1XYRBk9myaseg',
} satisfies ArtistsModel;

export const artistsListModelMock = {
  artists: [artistsModelMock, artistsModelMock],
} satisfies ArtistsListModel;
