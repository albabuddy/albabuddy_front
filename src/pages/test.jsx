import { Helmet } from 'react-helmet-async';

import { TestView } from 'src/sections/test';

// ----------------------------------------------------------------------

export default function TestPage() {
  return (
    <>
      <Helmet>
        <title> Test | Minimal UI </title>
      </Helmet>

      <TestView />
    </>
  );
}
