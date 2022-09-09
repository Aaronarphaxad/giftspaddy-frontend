import React, { useContext, useState, useEffect } from "react";
import { supabase } from "../superbaseClient";

const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check active sessions and sets the user
    const session = supabase.auth.session();

    setUser(session?.user ?? null);
    setLoading(false);

    // Listen for changes on auth state (logged in, signed out, etc.)
    const { data: listener } = supabase.auth.onAuthStateChange(
      async (event, session) => {
        setUser(session?.user ?? null);
        setLoading(false);
      }
    );

    return () => {
      listener?.unsubscribe();
    };
  }, []);

  // Will be passed down to Signup, Login and Dashboard components
  const value = {
    signUp: (data) => supabase.auth.signUp(data),
    signIn: (data) => supabase.auth.signIn(data),
    signInGoogle: () =>
      supabase.auth.signIn({
        provider: "google",
      }),
    signOut: () => supabase.auth.signOut(),
    resetPassword: (email) =>
      supabase.auth.api.resetPasswordForEmail(email, {
        redirectTo: "http://giftspaddy.com/password-reset", //// this will redirect to us at password-reset page,
        //// you can also set your own page for it.
      }),
    user,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

// Function to access context inside the children component
export function useAuth() {
  return useContext(AuthContext);
}

export async function updateProfile(id, name, email, avatar_url) {
  try {
    const updates = {
      id: id,
      full_name: name,
      email: email,
      avatar_url: avatar_url ? avatar_url : "",
    };

    let { error } = await supabase.from("profiles").upsert(updates);
    if (error) {
      throw error;
    }
  } catch (error) {
    alert(error.message);
  }
}
