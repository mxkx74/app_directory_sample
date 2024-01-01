import { albumsRepository } from '@/domain/album/albumsRepository';
import { artistsRepository } from '@/domain/artists/artistRepository';
import { albumsInfoInteractor as interactor } from './interactor';

export const albumsInfoInteractor = interactor(albumsRepository, artistsRepository);
