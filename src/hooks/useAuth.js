import { useState, useEffect } from 'react';
import { getSession, onAuthStateChange, signIn, signOut } from '../services/authService';

export function useAuth() {
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getSession().then(({ data }) => {
      setSession(data?.session || null);
      setUser(data?.session?.user || null);
      setLoading(false);
    });

    const unsubscribe = onAuthStateChange((_event, session) => {
      setSession(session);
      setUser(session?.user || null);
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const login = async (email, password) => {
    const { data, error } = await signIn(email, password);
    if (!error && data?.session) {
      setSession(data.session);
      setUser(data.session.user);
    }
    return { data, error };
  };

  const logout = async () => {
    const { error } = await signOut();
    setSession(null);
    setUser(null);
    return { error };
  };

  return {
    session,
    user,
    loading,
    isAuthenticated: !!session,
    login,
    logout,
  };
}

export default useAuth;
