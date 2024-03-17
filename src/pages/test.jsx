import { Helmet } from 'react-helmet-async';

import { TestView } from 'src/sections/test/view';

// ----------------------------------------------------------------------

export default function TestPage() {
  return (
    <>
      <Helmet>
        <title> 알바버디 | Test </title>
      </Helmet>

      <TestView />
    </>
  );
}
