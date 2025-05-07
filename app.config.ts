import defaultNavs from '~/assets/json/navigations/default.json';
import pages from '~/assets/json/pages/pages.json';

export default defineAppConfig({
 usebootstrap: {
  navigations: {
   default: defaultNavs,
  },
  pages
 },
});
