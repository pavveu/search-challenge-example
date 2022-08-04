type ImageProps = { label: string; attributes: { height: string } };
export interface AlbumProps {
  category: {
    attributes: {
      ['im:id']: number;
      label: string;
      schema: string;
      term: string;
    };
  };
  id: {
    attributes: {
      ['im:id']: string;
    };
  };
  ['im:artist']: {
    attributes: {
      href: string;
    };
    label: string;
  };
  ['im:image']: ImageProps[];
  ['im:name']: {
    label: string;
  };
  title: {
    label: string;
  };
}

export type AlbumWrapperProps = {
  album: AlbumProps;
  handleSearch: (value: string) => void;
};
