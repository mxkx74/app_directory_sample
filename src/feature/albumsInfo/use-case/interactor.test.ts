import { albumsListModelMock, albumsModelMock } from '@/domain/album/albumsMock';
import { type AlbumsRepository } from '@/domain/album/albumsRepository';
import { type ArtistsRepository } from '@/domain/artists/artistRepository';
import { artistsListModelMock, artistsModelMock } from '@/domain/artists/artistsModelMock';
import { albumsInfoInteractor } from './interactor';

// モックリポジトリを作成
const mockAlbumsRepository: AlbumsRepository = {
  findByID: jest.fn().mockResolvedValueOnce({
    payload: albumsModelMock,
    error: undefined,
    status: 200,
  }),
  findList: jest.fn().mockResolvedValueOnce({
    payload: albumsListModelMock,
    error: undefined,
    status: 200,
  }),
};

const mockArtistsRepository: ArtistsRepository = {
  findByID: jest.fn().mockResolvedValueOnce({
    payload: artistsModelMock,
    error: undefined,
    status: 200,
  }),
  findList: jest.fn().mockResolvedValueOnce({
    payload: artistsListModelMock,
    error: undefined,
    status: 200,
  }),
};

// テスト対象のインスタンスを作成
const interactor = albumsInfoInteractor(mockAlbumsRepository, mockArtistsRepository);

describe('albumsInfoInteractor', () => {
  it('AlbumsRepositoryとArtistsRepositoryからの結合されたペイロード、エラー、ステータスをAlbumsInfoViewModelを返す', async () => {
    const result = await interactor.getAlbumsInfo(
      {
        id: '4aawyAB9vmqN3uQ7FjRGTy',
      },
      {
        isThrowError: false,
        token: 'token',
      },
    );

    expect(result.payload).toEqual({
      artists: [
        {
          artistId: '0TnOYISbd1XYRBk9myaseg',
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
        },
        {
          artistId: '0TnOYISbd1XYRBk9myaseg',
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
        },
      ],
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
      name: 'Global Warming',
      release_date: '2012-11-16',
      total_duration: {
        hours: 1,
        minutes: 6,
        seconds: 48,
      },
      total_tracks: 18,
      type: 'album',
    });
  });
});
