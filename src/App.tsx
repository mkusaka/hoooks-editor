import React, { useContext, useCallback } from 'react';

import { FirebaseContext } from "./Firebase";
import { FirebaseAuth, signInWithRedirect, signOut } from "./FirebaseAuth";

const Content: React.FC = () => {
  const { userId, userName } = useContext(FirebaseContext);
  return (
    <div>
      {userName} ({userId}) is SingedIn
    </div>
  )
}

const App: React.FC = () => {
  const NotSignedIn = useCallback(() => {
    return <button onClick={() => signInWithRedirect()}>signIn</button>;
  }, []);

  const Loading = useCallback(() => {
    return <div>Loading now...</div>
  }, []);

  return (
    <FirebaseAuth NotSignedIn={NotSignedIn} Loading={Loading}>
      <Content />
      <button onClick={signOut}>sign out</button>
    </FirebaseAuth>
  );
}

export default App;
