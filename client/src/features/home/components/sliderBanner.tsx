import { ImageBanner } from 'components/organisms';
import { HOME_PAGE_BANNER } from 'constants/metaData';

// #TODO - Make this as a Banner carousel
function SliderBanner() {
  return <ImageBanner banner={HOME_PAGE_BANNER} />;
}

export default SliderBanner;
