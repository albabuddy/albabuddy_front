import { Helmet } from 'react-helmet-async';

import { ProfileView } from 'src/sections/profile/view';

// ----------------------------------------------------------------------

export default function ProfilePage() {
  return (
    <>
      <Helmet>
        <title> 알바버디 | Profile </title>
      </Helmet>

      <ProfileView />
    </>
  );
}
