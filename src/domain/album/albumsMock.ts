import { type AlbumsListModel, type AlbumsModel } from './albumsModel';

export const albumsMock = {
  album_type: 'album',
  artists: [
    {
      external_urls: {
        spotify: 'https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
      },
      href: 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
      id: '0TnOYISbd1XYRBk9myaseg',
      name: 'ピットブル',
      type: 'artist',
      uri: 'spotify:artist:0TnOYISbd1XYRBk9myaseg',
    },
  ],
  available_markets: ['AT', 'BE', 'BG'],
  copyrights: [
    {
      text: '(P) 2012 RCA Records, a division of Sony Music Entertainment',
      type: 'P',
    },
  ],
  external_ids: {
    upc: '886443671584',
  },
  external_urls: {
    spotify: 'https://open.spotify.com/album/4aawyAB9vmqN3uQ7FjRGTy',
  },
  genres: [],
  href: 'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy',
  id: '4aawyAB9vmqN3uQ7FjRGTy',
  images: [
    {
      height: 640,
      url: 'https://i.scdn.co/image/ab67616d0000b2732c5b24ecfa39523a75c993c4',
      width: 640,
    },
    {
      height: 300,
      url: 'https://i.scdn.co/image/ab67616d00001e022c5b24ecfa39523a75c993c4',
      width: 300,
    },
    {
      height: 64,
      url: 'https://i.scdn.co/image/ab67616d000048512c5b24ecfa39523a75c993c4',
      width: 64,
    },
  ],
  label: 'Mr.305/Polo Grounds Music/RCA Records',
  name: 'Global Warming',
  popularity: 57,
  release_date: '2012-11-16',
  release_date_precision: 'day',
  total_tracks: 18,
  tracks: {
    href: 'https://api.spotify.com/v1/albums/4aawyAB9vmqN3uQ7FjRGTy/tracks?offset=0&limit=50&locale=ja,en-US;q=0.9,en;q=0.8',
    items: [
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
            },
            href: 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'ピットブル',
            type: 'artist',
            uri: 'spotify:artist:0TnOYISbd1XYRBk9myaseg',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/7iJrDbKM5fEkGdm5kpjFzS',
            },
            href: 'https://api.spotify.com/v1/artists/7iJrDbKM5fEkGdm5kpjFzS',
            id: '7iJrDbKM5fEkGdm5kpjFzS',
            name: 'Sensato',
            type: 'artist',
            uri: 'spotify:artist:7iJrDbKM5fEkGdm5kpjFzS',
          },
        ],
        available_markets: ['AT', 'BE', 'BG'],
        disc_number: 1,
        duration_ms: 85400,
        explicit: true,
        external_urls: {
          spotify: 'https://open.spotify.com/track/6OmhkSOpvYBokMKQxpIGx2',
        },
        href: 'https://api.spotify.com/v1/tracks/6OmhkSOpvYBokMKQxpIGx2',
        id: '6OmhkSOpvYBokMKQxpIGx2',
        is_local: false,
        name: 'Global Warming (feat. Sensato)',
        preview_url:
          'https://p.scdn.co/mp3-preview/0ce51df079155a323b91642b9f7a19bdebfc6bc1?cid=b9bfe20f04d84858b16d94e20c3a5bc8',
        track_number: 1,
        type: 'track',
        uri: 'spotify:track:6OmhkSOpvYBokMKQxpIGx2',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
            },
            href: 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'ピットブル',
            type: 'artist',
            uri: 'spotify:artist:0TnOYISbd1XYRBk9myaseg',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/2L8yW8GIoirHEdeW4bWQXq',
            },
            href: 'https://api.spotify.com/v1/artists/2L8yW8GIoirHEdeW4bWQXq',
            id: '2L8yW8GIoirHEdeW4bWQXq',
            name: 'TJR',
            type: 'artist',
            uri: 'spotify:artist:2L8yW8GIoirHEdeW4bWQXq',
          },
        ],
        available_markets: ['AT', 'BE', 'BG'],
        disc_number: 1,
        duration_ms: 206120,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/2iblMMIgSznA464mNov7A8',
        },
        href: 'https://api.spotify.com/v1/tracks/2iblMMIgSznA464mNov7A8',
        id: '2iblMMIgSznA464mNov7A8',
        is_local: false,
        name: "Don't Stop the Party (feat. TJR)",
        preview_url:
          'https://p.scdn.co/mp3-preview/72d6b312e4cbd1fd8219427fe1e6d1f5dfd4c85f?cid=b9bfe20f04d84858b16d94e20c3a5bc8',
        track_number: 2,
        type: 'track',
        uri: 'spotify:track:2iblMMIgSznA464mNov7A8',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
            },
            href: 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'ピットブル',
            type: 'artist',
            uri: 'spotify:artist:0TnOYISbd1XYRBk9myaseg',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1l7ZsJRRS8wlW3WfJfPfNS',
            },
            href: 'https://api.spotify.com/v1/artists/1l7ZsJRRS8wlW3WfJfPfNS',
            id: '1l7ZsJRRS8wlW3WfJfPfNS',
            name: 'クリスティーナ・アギレラ',
            type: 'artist',
            uri: 'spotify:artist:1l7ZsJRRS8wlW3WfJfPfNS',
          },
        ],
        available_markets: ['AT', 'BE', 'BG'],
        disc_number: 1,
        duration_ms: 229506,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/4yOn1TEcfsKHUJCL2h1r8I',
        },
        href: 'https://api.spotify.com/v1/tracks/4yOn1TEcfsKHUJCL2h1r8I',
        id: '4yOn1TEcfsKHUJCL2h1r8I',
        is_local: false,
        name: 'Feel This Moment (feat. Christina Aguilera)',
        preview_url:
          'https://p.scdn.co/mp3-preview/deb34682637ed436b1d85841d7ac385541a1225c?cid=b9bfe20f04d84858b16d94e20c3a5bc8',
        track_number: 3,
        type: 'track',
        uri: 'spotify:track:4yOn1TEcfsKHUJCL2h1r8I',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
            },
            href: 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'ピットブル',
            type: 'artist',
            uri: 'spotify:artist:0TnOYISbd1XYRBk9myaseg',
          },
        ],
        available_markets: ['AT', 'BE', 'BG'],
        disc_number: 1,
        duration_ms: 207440,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/7fmpKF0rLGPnP7kcQ5ZMm7',
        },
        href: 'https://api.spotify.com/v1/tracks/7fmpKF0rLGPnP7kcQ5ZMm7',
        id: '7fmpKF0rLGPnP7kcQ5ZMm7',
        is_local: false,
        name: 'Back in Time - featured in "Men In Black 3"',
        preview_url:
          'https://p.scdn.co/mp3-preview/f8f0f2ab406a1443d0543e7639d72cf330282a15?cid=b9bfe20f04d84858b16d94e20c3a5bc8',
        track_number: 4,
        type: 'track',
        uri: 'spotify:track:7fmpKF0rLGPnP7kcQ5ZMm7',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
            },
            href: 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'ピットブル',
            type: 'artist',
            uri: 'spotify:artist:0TnOYISbd1XYRBk9myaseg',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/7bXgB6jMjp9ATFy66eO08Z',
            },
            href: 'https://api.spotify.com/v1/artists/7bXgB6jMjp9ATFy66eO08Z',
            id: '7bXgB6jMjp9ATFy66eO08Z',
            name: 'クリス・ブラウン',
            type: 'artist',
            uri: 'spotify:artist:7bXgB6jMjp9ATFy66eO08Z',
          },
        ],
        available_markets: ['AT', 'BE', 'BG'],
        disc_number: 1,
        duration_ms: 221133,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/3jStb2imKd6oUoBT1zq5lp',
        },
        href: 'https://api.spotify.com/v1/tracks/3jStb2imKd6oUoBT1zq5lp',
        id: '3jStb2imKd6oUoBT1zq5lp',
        is_local: false,
        name: 'Hope We Meet Again (feat. Chris Brown)',
        preview_url:
          'https://p.scdn.co/mp3-preview/8479c4cfe4bfa2ae1f449ebe4c92186a106ca315?cid=b9bfe20f04d84858b16d94e20c3a5bc8',
        track_number: 5,
        type: 'track',
        uri: 'spotify:track:3jStb2imKd6oUoBT1zq5lp',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
            },
            href: 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'ピットブル',
            type: 'artist',
            uri: 'spotify:artist:0TnOYISbd1XYRBk9myaseg',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/23zg3TcAtWQy7J6upgbUnj',
            },
            href: 'https://api.spotify.com/v1/artists/23zg3TcAtWQy7J6upgbUnj',
            id: '23zg3TcAtWQy7J6upgbUnj',
            name: 'アッシャー',
            type: 'artist',
            uri: 'spotify:artist:23zg3TcAtWQy7J6upgbUnj',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4D75GcNG95ebPtNvoNVXhz',
            },
            href: 'https://api.spotify.com/v1/artists/4D75GcNG95ebPtNvoNVXhz',
            id: '4D75GcNG95ebPtNvoNVXhz',
            name: 'アフロジャック',
            type: 'artist',
            uri: 'spotify:artist:4D75GcNG95ebPtNvoNVXhz',
          },
        ],
        available_markets: ['AT', 'BE', 'BG'],
        disc_number: 1,
        duration_ms: 243160,
        explicit: true,
        external_urls: {
          spotify: 'https://open.spotify.com/track/6Q4PYJtrq8CBx7YCY5IyRN',
        },
        href: 'https://api.spotify.com/v1/tracks/6Q4PYJtrq8CBx7YCY5IyRN',
        id: '6Q4PYJtrq8CBx7YCY5IyRN',
        is_local: false,
        name: "Party Ain't Over (feat. Usher & Afrojack)",
        preview_url:
          'https://p.scdn.co/mp3-preview/0a4f7628940c07132eee1b0b946c795ac412cabc?cid=b9bfe20f04d84858b16d94e20c3a5bc8',
        track_number: 6,
        type: 'track',
        uri: 'spotify:track:6Q4PYJtrq8CBx7YCY5IyRN',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
            },
            href: 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'ピットブル',
            type: 'artist',
            uri: 'spotify:artist:0TnOYISbd1XYRBk9myaseg',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/2DlGxzQSjYe5N6G9nkYghR',
            },
            href: 'https://api.spotify.com/v1/artists/2DlGxzQSjYe5N6G9nkYghR',
            id: '2DlGxzQSjYe5N6G9nkYghR',
            name: 'ジェニファー・ロペス',
            type: 'artist',
            uri: 'spotify:artist:2DlGxzQSjYe5N6G9nkYghR',
          },
        ],
        available_markets: ['AT', 'BE', 'BG'],
        disc_number: 1,
        duration_ms: 196920,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/0QTVwqcOsYd73AOkYkk0Hg',
        },
        href: 'https://api.spotify.com/v1/tracks/0QTVwqcOsYd73AOkYkk0Hg',
        id: '0QTVwqcOsYd73AOkYkk0Hg',
        is_local: false,
        name: 'Drinks for You (Ladies Anthem) (feat. J. Lo)',
        preview_url:
          'https://p.scdn.co/mp3-preview/056bc84b4e910ce724e8d057ef3511d2febfe988?cid=b9bfe20f04d84858b16d94e20c3a5bc8',
        track_number: 7,
        type: 'track',
        uri: 'spotify:track:0QTVwqcOsYd73AOkYkk0Hg',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
            },
            href: 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'ピットブル',
            type: 'artist',
            uri: 'spotify:artist:0TnOYISbd1XYRBk9myaseg',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/2NhdGz9EDv2FeUw6udu2g1',
            },
            href: 'https://api.spotify.com/v1/artists/2NhdGz9EDv2FeUw6udu2g1',
            id: '2NhdGz9EDv2FeUw6udu2g1',
            name: 'ザ・ウォンテッド',
            type: 'artist',
            uri: 'spotify:artist:2NhdGz9EDv2FeUw6udu2g1',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4D75GcNG95ebPtNvoNVXhz',
            },
            href: 'https://api.spotify.com/v1/artists/4D75GcNG95ebPtNvoNVXhz',
            id: '4D75GcNG95ebPtNvoNVXhz',
            name: 'アフロジャック',
            type: 'artist',
            uri: 'spotify:artist:4D75GcNG95ebPtNvoNVXhz',
          },
        ],
        available_markets: ['AT', 'BE', 'BG'],
        disc_number: 1,
        duration_ms: 244920,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/10Sydb6AAFPdgCzCKOSZuI',
        },
        href: 'https://api.spotify.com/v1/tracks/10Sydb6AAFPdgCzCKOSZuI',
        id: '10Sydb6AAFPdgCzCKOSZuI',
        is_local: false,
        name: 'Have Some Fun (feat. The Wanted & Afrojack)',
        preview_url:
          'https://p.scdn.co/mp3-preview/527c22bd2cbd173f63efef3393ecc7dffd3933fd?cid=b9bfe20f04d84858b16d94e20c3a5bc8',
        track_number: 8,
        type: 'track',
        uri: 'spotify:track:10Sydb6AAFPdgCzCKOSZuI',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
            },
            href: 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'ピットブル',
            type: 'artist',
            uri: 'spotify:artist:0TnOYISbd1XYRBk9myaseg',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0e9P96siQmxphVXAwTy2pa',
            },
            href: 'https://api.spotify.com/v1/artists/0e9P96siQmxphVXAwTy2pa',
            id: '0e9P96siQmxphVXAwTy2pa',
            name: 'Danny Mercer',
            type: 'artist',
            uri: 'spotify:artist:0e9P96siQmxphVXAwTy2pa',
          },
        ],
        available_markets: ['AT', 'BE', 'BG'],
        disc_number: 1,
        duration_ms: 206800,
        explicit: true,
        external_urls: {
          spotify: 'https://open.spotify.com/track/4k61iDqmtX9nI7RfLmp9aq',
        },
        href: 'https://api.spotify.com/v1/tracks/4k61iDqmtX9nI7RfLmp9aq',
        id: '4k61iDqmtX9nI7RfLmp9aq',
        is_local: false,
        name: 'Outta Nowhere (feat. Danny Mercer)',
        preview_url:
          'https://p.scdn.co/mp3-preview/0ba3a69f53d525b50000492bf548279415ced1be?cid=b9bfe20f04d84858b16d94e20c3a5bc8',
        track_number: 9,
        type: 'track',
        uri: 'spotify:track:4k61iDqmtX9nI7RfLmp9aq',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
            },
            href: 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'ピットブル',
            type: 'artist',
            uri: 'spotify:artist:0TnOYISbd1XYRBk9myaseg',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/7qG3b048QCHVRO5Pv1T5lw',
            },
            href: 'https://api.spotify.com/v1/artists/7qG3b048QCHVRO5Pv1T5lw',
            id: '7qG3b048QCHVRO5Pv1T5lw',
            name: 'エンリケ・イグレイシアス',
            type: 'artist',
            uri: 'spotify:artist:7qG3b048QCHVRO5Pv1T5lw',
          },
        ],
        available_markets: ['AT', 'BE', 'BG'],
        disc_number: 1,
        duration_ms: 205800,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/7oGRkL31ElVMcevQDceT99',
        },
        href: 'https://api.spotify.com/v1/tracks/7oGRkL31ElVMcevQDceT99',
        id: '7oGRkL31ElVMcevQDceT99',
        is_local: false,
        name: 'Tchu Tchu Tcha (feat. Enrique Iglesias)',
        preview_url:
          'https://p.scdn.co/mp3-preview/8f60c656676f160400a2eb1dca657c19a5c89c52?cid=b9bfe20f04d84858b16d94e20c3a5bc8',
        track_number: 10,
        type: 'track',
        uri: 'spotify:track:7oGRkL31ElVMcevQDceT99',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
            },
            href: 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'ピットブル',
            type: 'artist',
            uri: 'spotify:artist:0TnOYISbd1XYRBk9myaseg',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4D75GcNG95ebPtNvoNVXhz',
            },
            href: 'https://api.spotify.com/v1/artists/4D75GcNG95ebPtNvoNVXhz',
            id: '4D75GcNG95ebPtNvoNVXhz',
            name: 'アフロジャック',
            type: 'artist',
            uri: 'spotify:artist:4D75GcNG95ebPtNvoNVXhz',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/1EVWYRr2obCRDoSoD6KSuM',
            },
            href: 'https://api.spotify.com/v1/artists/1EVWYRr2obCRDoSoD6KSuM',
            id: '1EVWYRr2obCRDoSoD6KSuM',
            name: 'ハヴァナ・ブラウン',
            type: 'artist',
            uri: 'spotify:artist:1EVWYRr2obCRDoSoD6KSuM',
          },
        ],
        available_markets: ['AT', 'BE', 'BG'],
        disc_number: 1,
        duration_ms: 219600,
        explicit: true,
        external_urls: {
          spotify: 'https://open.spotify.com/track/60xPqMqnHZl7Jfiu6E9q8X',
        },
        href: 'https://api.spotify.com/v1/tracks/60xPqMqnHZl7Jfiu6E9q8X',
        id: '60xPqMqnHZl7Jfiu6E9q8X',
        is_local: false,
        name: 'Last Night (feat. Afrojack & Havana Brown)',
        preview_url:
          'https://p.scdn.co/mp3-preview/e103927bcb039d322dfaf303da1418b609e28004?cid=b9bfe20f04d84858b16d94e20c3a5bc8',
        track_number: 11,
        type: 'track',
        uri: 'spotify:track:60xPqMqnHZl7Jfiu6E9q8X',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
            },
            href: 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'ピットブル',
            type: 'artist',
            uri: 'spotify:artist:0TnOYISbd1XYRBk9myaseg',
          },
        ],
        available_markets: ['AT', 'BE', 'BG'],
        disc_number: 1,
        duration_ms: 197520,
        explicit: true,
        external_urls: {
          spotify: 'https://open.spotify.com/track/1jAdXqOSICyXYLaW9ioSur',
        },
        href: 'https://api.spotify.com/v1/tracks/1jAdXqOSICyXYLaW9ioSur',
        id: '1jAdXqOSICyXYLaW9ioSur',
        is_local: false,
        name: "I'm Off That",
        preview_url:
          'https://p.scdn.co/mp3-preview/076f7573e914fc26ddf3ea536cb80800e54d6edc?cid=b9bfe20f04d84858b16d94e20c3a5bc8',
        track_number: 12,
        type: 'track',
        uri: 'spotify:track:1jAdXqOSICyXYLaW9ioSur',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
            },
            href: 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'ピットブル',
            type: 'artist',
            uri: 'spotify:artist:0TnOYISbd1XYRBk9myaseg',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5F2Bwl7Is7KVwTbNbMclIS',
            },
            href: 'https://api.spotify.com/v1/artists/5F2Bwl7Is7KVwTbNbMclIS',
            id: '5F2Bwl7Is7KVwTbNbMclIS',
            name: 'Papayo',
            type: 'artist',
            uri: 'spotify:artist:5F2Bwl7Is7KVwTbNbMclIS',
          },
        ],
        available_markets: ['AT', 'BE', 'BG'],
        disc_number: 1,
        duration_ms: 196440,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/0fjRYHFz9ealui1lfnN8it',
        },
        href: 'https://api.spotify.com/v1/tracks/0fjRYHFz9ealui1lfnN8it',
        id: '0fjRYHFz9ealui1lfnN8it',
        is_local: false,
        name: "Echa Pa'lla (Manos Pa'rriba) (feat. Papayo)",
        preview_url:
          'https://p.scdn.co/mp3-preview/8ae1ca3eae6289fc8f40035a8100dd34a351a872?cid=b9bfe20f04d84858b16d94e20c3a5bc8',
        track_number: 13,
        type: 'track',
        uri: 'spotify:track:0fjRYHFz9ealui1lfnN8it',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
            },
            href: 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'ピットブル',
            type: 'artist',
            uri: 'spotify:artist:0TnOYISbd1XYRBk9myaseg',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0z4gvV4rjIZ9wHck67ucSV',
            },
            href: 'https://api.spotify.com/v1/artists/0z4gvV4rjIZ9wHck67ucSV',
            id: '0z4gvV4rjIZ9wHck67ucSV',
            name: 'エイコン',
            type: 'artist',
            uri: 'spotify:artist:0z4gvV4rjIZ9wHck67ucSV',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5IqWDVLGThjmkm22e3oBU3',
            },
            href: 'https://api.spotify.com/v1/artists/5IqWDVLGThjmkm22e3oBU3',
            id: '5IqWDVLGThjmkm22e3oBU3',
            name: 'David Rush',
            type: 'artist',
            uri: 'spotify:artist:5IqWDVLGThjmkm22e3oBU3',
          },
        ],
        available_markets: ['AT', 'BE', 'BG'],
        disc_number: 1,
        duration_ms: 257613,
        explicit: true,
        external_urls: {
          spotify: 'https://open.spotify.com/track/7of35ktwTbL906Z1i3mT4K',
        },
        href: 'https://api.spotify.com/v1/tracks/7of35ktwTbL906Z1i3mT4K',
        id: '7of35ktwTbL906Z1i3mT4K',
        is_local: false,
        name: 'Everybody Fucks (feat. Akon & David Rush)',
        preview_url:
          'https://p.scdn.co/mp3-preview/a2c2c6ad931dab7a51df3ba25c6f18ddd10170d1?cid=b9bfe20f04d84858b16d94e20c3a5bc8',
        track_number: 14,
        type: 'track',
        uri: 'spotify:track:7of35ktwTbL906Z1i3mT4K',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
            },
            href: 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'ピットブル',
            type: 'artist',
            uri: 'spotify:artist:0TnOYISbd1XYRBk9myaseg',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0EmeFodog0BfCgMzAIvKQp',
            },
            href: 'https://api.spotify.com/v1/artists/0EmeFodog0BfCgMzAIvKQp',
            id: '0EmeFodog0BfCgMzAIvKQp',
            name: 'シャキーラ',
            type: 'artist',
            uri: 'spotify:artist:0EmeFodog0BfCgMzAIvKQp',
          },
        ],
        available_markets: ['AT', 'BE', 'BG'],
        disc_number: 1,
        duration_ms: 245920,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/2JA6A6Y5f4m7PawM58U2Op',
        },
        href: 'https://api.spotify.com/v1/tracks/2JA6A6Y5f4m7PawM58U2Op',
        id: '2JA6A6Y5f4m7PawM58U2Op',
        is_local: false,
        name: 'Get It Started (feat. Shakira)',
        preview_url:
          'https://p.scdn.co/mp3-preview/d6f33dcb1f5d117ae266248996db879a5aba9fec?cid=b9bfe20f04d84858b16d94e20c3a5bc8',
        track_number: 15,
        type: 'track',
        uri: 'spotify:track:2JA6A6Y5f4m7PawM58U2Op',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
            },
            href: 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'ピットブル',
            type: 'artist',
            uri: 'spotify:artist:0TnOYISbd1XYRBk9myaseg',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/3BnF35ARlp8mMeyXTjUZsr',
            },
            href: 'https://api.spotify.com/v1/artists/3BnF35ARlp8mMeyXTjUZsr',
            id: '3BnF35ARlp8mMeyXTjUZsr',
            name: 'Vein',
            type: 'artist',
            uri: 'spotify:artist:3BnF35ARlp8mMeyXTjUZsr',
          },
        ],
        available_markets: ['AT', 'BE', 'BG'],
        disc_number: 1,
        duration_ms: 217680,
        explicit: true,
        external_urls: {
          spotify: 'https://open.spotify.com/track/726qZxwhP0jVyIA0ujnnhb',
        },
        href: 'https://api.spotify.com/v1/tracks/726qZxwhP0jVyIA0ujnnhb',
        id: '726qZxwhP0jVyIA0ujnnhb',
        is_local: false,
        name: '11:59 (feat. Vein)',
        preview_url:
          'https://p.scdn.co/mp3-preview/2b3b9bf5c1c8b7192e4b535f7af11301d1f521af?cid=b9bfe20f04d84858b16d94e20c3a5bc8',
        track_number: 16,
        type: 'track',
        uri: 'spotify:track:726qZxwhP0jVyIA0ujnnhb',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
            },
            href: 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'ピットブル',
            type: 'artist',
            uri: 'spotify:artist:0TnOYISbd1XYRBk9myaseg',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4wLXwxDeWQ8mtUIRPxGiD6',
            },
            href: 'https://api.spotify.com/v1/artists/4wLXwxDeWQ8mtUIRPxGiD6',
            id: '4wLXwxDeWQ8mtUIRPxGiD6',
            name: 'Marc Anthony',
            type: 'artist',
            uri: 'spotify:artist:4wLXwxDeWQ8mtUIRPxGiD6',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4MHssKddnziCghmwBHRiEY',
            },
            href: 'https://api.spotify.com/v1/artists/4MHssKddnziCghmwBHRiEY',
            id: '4MHssKddnziCghmwBHRiEY',
            name: 'Alle',
            type: 'artist',
            uri: 'spotify:artist:4MHssKddnziCghmwBHRiEY',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/4Ws2otunReOa6BbwxxpCt6',
            },
            href: 'https://api.spotify.com/v1/artists/4Ws2otunReOa6BbwxxpCt6',
            id: '4Ws2otunReOa6BbwxxpCt6',
            name: 'Benny Benassi',
            type: 'artist',
            uri: 'spotify:artist:4Ws2otunReOa6BbwxxpCt6',
          },
        ],
        available_markets: ['AT', 'BE', 'BG'],
        disc_number: 1,
        duration_ms: 316480,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/6GPER1Sx8MrBiwWxdulg5Q',
        },
        href: 'https://api.spotify.com/v1/tracks/6GPER1Sx8MrBiwWxdulg5Q',
        id: '6GPER1Sx8MrBiwWxdulg5Q',
        is_local: false,
        name: 'Rain Over Me (feat. Marc Anthony) - Benny Benassi Remix',
        preview_url: null,
        track_number: 17,
        type: 'track',
        uri: 'spotify:track:6GPER1Sx8MrBiwWxdulg5Q',
      },
      {
        artists: [
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/0TnOYISbd1XYRBk9myaseg',
            },
            href: 'https://api.spotify.com/v1/artists/0TnOYISbd1XYRBk9myaseg',
            id: '0TnOYISbd1XYRBk9myaseg',
            name: 'ピットブル',
            type: 'artist',
            uri: 'spotify:artist:0TnOYISbd1XYRBk9myaseg',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/7bXgB6jMjp9ATFy66eO08Z',
            },
            href: 'https://api.spotify.com/v1/artists/7bXgB6jMjp9ATFy66eO08Z',
            id: '7bXgB6jMjp9ATFy66eO08Z',
            name: 'クリス・ブラウン',
            type: 'artist',
            uri: 'spotify:artist:7bXgB6jMjp9ATFy66eO08Z',
          },
          {
            external_urls: {
              spotify: 'https://open.spotify.com/artist/5I7l0lSOyusetwCv1aQPMf',
            },
            href: 'https://api.spotify.com/v1/artists/5I7l0lSOyusetwCv1aQPMf',
            id: '5I7l0lSOyusetwCv1aQPMf',
            name: 'Jump Smokers',
            type: 'artist',
            uri: 'spotify:artist:5I7l0lSOyusetwCv1aQPMf',
          },
        ],
        available_markets: ['AT', 'BE', 'BG'],
        disc_number: 1,
        duration_ms: 309626,
        explicit: false,
        external_urls: {
          spotify: 'https://open.spotify.com/track/4TWgcICXXfGty8MHGWJ4Ne',
        },
        href: 'https://api.spotify.com/v1/tracks/4TWgcICXXfGty8MHGWJ4Ne',
        id: '4TWgcICXXfGty8MHGWJ4Ne',
        is_local: false,
        name: 'International Love (feat. Chris Brown) - Jump Smokers Extended Mix',
        preview_url: null,
        track_number: 18,
        type: 'track',
        uri: 'spotify:track:4TWgcICXXfGty8MHGWJ4Ne',
      },
    ],
    limit: 50,
    next: null,
    offset: 0,
    previous: null,
    total: 18,
  },
  type: 'album',
  uri: 'spotify:album:4aawyAB9vmqN3uQ7FjRGTy',
} satisfies AlbumsModel;

export const albumsListMock = {
  albums: [albumsMock],
} satisfies AlbumsListModel;
