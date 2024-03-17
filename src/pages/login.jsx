import { Helmet } from 'react-helmet-async';

import { LoginView } from 'src/sections/login';

// ----------------------------------------------------------------------

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title> 알바버디 | Login </title>
      </Helmet>

      <LoginView />
    </>
  );
}
