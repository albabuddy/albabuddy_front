import { Helmet } from 'react-helmet-async';

import { AppView } from 'src/sections/overview/view';

// ----------------------------------------------------------------------

export default function AppPage() {
  return (
    <>
      <Helmet>
        <title> 알바버디 | Dashboard </title>
      </Helmet>

      <AppView />
    </>
  );
}
