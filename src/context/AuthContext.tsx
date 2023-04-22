import React, {
  type ReactElement,
  useContext,
  useCallback,
  createContext,
  useState,
  useEffect,
} from "react";
import { type CognitoUser } from "@aws-amplify/auth";
import { Auth, Hub } from "aws-amplify";

/*
Exports { AuthContext, useUser }
AuthContext provides { user }, and listens for auth events and executes setUser() after successful currentAuthenticatedUser().
useUser() returns { user } (Must be within AuthContext.)
*/

export interface UserContextType {
  user: CognitoUser | null;
  username: string | null;
  email: string | null;
  isLoggedIn: boolean;
}

const UserContext = createContext<UserContextType>({
  user: null,
  username: null,
  email: null,
  isLoggedIn: false,
} satisfies UserContextType);

interface Props {
  children: React.ReactElement;
}

export default function AuthContext({ children }: Props): ReactElement {
  const [user, setUser] = useState<any>(null);
  const username =
    user?.getUsername() !== undefined ? user.getUsername() : null;
  const email = user?.attributes?.email;

  const checkUser = useCallback(async () => {
    try {
      const cognitoUser = await Auth.currentAuthenticatedUser();
      if (cognitoUser !== null) {
        setUser(cognitoUser);
      }
    } catch (err) {
      setUser(null);
    }
  }, []);

  useEffect(() => {
    checkUser().catch(console.error);
  }, []);

  useEffect(() => {
    Hub.listen("auth", () => {
      checkUser().catch(console.error);
    });
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        username,
        email,
        isLoggedIn: username !== null,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = (): UserContextType => useContext(UserContext);
