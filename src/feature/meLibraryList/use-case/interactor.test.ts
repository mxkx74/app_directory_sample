import { meAlbumsModelMock } from '@/domain/meAlbums/meAlbumsModelMock';
import { type MeAlbumsRepository } from '@/domain/meAlbums/meAlbumsRepository';
import { mePlaylistModelMock } from '@/domain/mePlaylists/mePlaylistModelMock';
import { type MePlaylistRepository } from '@/domain/mePlaylists/mePlaylistsRepository';
import { meLibraryListInteractor } from './interactor';

describe('meLibraryListInteractor', () => {
  let mockMeAlbumsRepository: MeAlbumsRepository;
  let mockMePlaylistRepository: MePlaylistRepository;
  let interactor: ReturnType<typeof meLibraryListInteractor>;

  beforeEach(() => {
    mockMeAlbumsRepository = {
      find: jest.fn().mockResolvedValueOnce({
        payload: meAlbumsModelMock,
        error: undefined,
        status: 200,
      }),
    };

    mockMePlaylistRepository = {
      find: jest.fn().mockResolvedValueOnce({
        payload: mePlaylistModelMock,
        error: undefined,
        status: 200,
      }),
    };

    interactor = meLibraryListInteractor(mockMeAlbumsRepository, mockMePlaylistRepository);
  });

  it('should return the translated MeLibraryViewModel with the combined payload, error, and status from meAlbumsRepository and mePlaylistRepository', async () => {
    const token = 'test-token';
    const limit = 20;
    const offset = 0;

    const result = await interactor.findAllLibrary(token, limit, offset);

    expect(result.payload).toEqual({
      nextAlbum: 'https://example.com/next',
      previousAlbum: null,
      items: [
        {
          type: 'album',
          id: 'album1',
          name: 'Album 1',
          images: [
            {
              url: 'https://example.com/image.jpg',
              height: null,
              width: null,
            },
          ],
        },
        {
          type: 'playlist',
          id: '37i9dQZF1DXcBWIGoYBM5M',
          name: "Today's Top Hits",
          owner: 'Spotify',
          images: [
            {
              url: 'https://i.scdn.co/image/ab67706f00000003b3b1efcae9a5a944d3c1bb84',
              height: null,
              width: null,
            },
          ],
        },
      ],
      nextPlayList: null,
      previousPlayList: null,
    });
  });
});
