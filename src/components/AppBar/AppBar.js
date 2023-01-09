import { Navigation } from "components/Navigation/Navigation";
// import { UserMenu } from '../UserMenu/UserMenu';
// import { AuthNav } from '../AuthNav/AuthNav';
// import { useAuth } from 'hooks';

export const AppBar = () => {

  return (
    <header >
      <Navigation />
      {/* {isLoggedIn ? <UserMenu /> : <AuthNav />} */}
    </header>
  );
};
