import { Helmet } from 'react-helmet-async';

import { UserView } from 'src/sections/user/view';

// ----------------------------------------------------------------------

export default function UserPage() {
  return (
    <>
      <Helmet>
        <title> 알바버디 | User </title>
      </Helmet>

      <UserView />
    </>
  );
}
