import { AlbumProps } from '../album/types';

export type AlbumListProps = {
  searchResults: AlbumProps[];
  handleSearch: (value: string) => void;
};
