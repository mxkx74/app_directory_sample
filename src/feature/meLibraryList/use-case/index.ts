import { meAlbumsRepository } from '@/domain/meAlbums/meAlbumsRepository';
import { mePlaylistRepository } from '@/domain/mePlaylists/mePlaylistsRepository';
import { meLibraryListInteractor as interactor } from './interactor';

export const meLibraryInteractor = interactor(meAlbumsRepository(), mePlaylistRepository());
export { type MeLibraryViewModel } from './boundary';
