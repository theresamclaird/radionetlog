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
interface UserContextType {
  user: CognitoUser | null;
}

const UserContext = createContext<UserContextType>({
  user: null,
} satisfies UserContextType);

interface Props {
  children: React.ReactElement;
}

export default function AuthContext({ children }: Props): ReactElement {
  const [user, setUser] = useState<CognitoUser | null>(null);

  const checkUser = useCallback(async () => {
    try {
      const amplifyUser = await Auth.currentAuthenticatedUser();
      if (amplifyUser !== null) {
        setUser(amplifyUser);
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
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
}

export const useUser = (): UserContextType => useContext(UserContext);
