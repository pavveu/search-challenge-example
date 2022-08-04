import { lazy, Suspense } from 'react';
import Loader from '../../components/loader';

const MusicCatalog = lazy(() => import('./music-catalog'));

function MusicCatalogWrapper() {
  return (
    <Suspense fallback={<Loader />}>
      <MusicCatalog />
    </Suspense>
  );
}

export default MusicCatalogWrapper;
