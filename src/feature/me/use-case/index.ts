import { meRepository } from '@/domain/me/meRepository';
import { mePlaylistRepository } from '@/domain/mePlaylists/mePlaylistsRepository';
import { meInteractor as interactor } from './interactor';

export { type MeViewModel, type MePlaylistViewModel } from './boundary';
export const meInteractor = interactor(meRepository(), mePlaylistRepository());
