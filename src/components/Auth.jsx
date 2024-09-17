import React, { useState, useEffect } from "react";

// Auth Component
export default function Auth() {
  const [isRegistering, setIsRegistering] = useState(false);
  const [error, setError] = useState("");

  //   // In your component...
  //   const handleRegister = async () => {
  //     const result = await registerWithPasskey();
  //     if (result.success) {
  //       // Handle successful registration
  //     } else {
  //       // Handle error
  //     }
  //   };

  //   const handleLogin = async () => {
  //     const result = await loginWithPasskey();
  //     if (result.success) {
  //       // Handle successful login
  //     } else {
  //       // Handle error
  //     }
  //   };

  const handleAuth = async (e) => {
    e.preventDefault();
    setError("");
    try {
      const result = isRegistering
        ? await registerWithPasskey()
        : await loginWithPasskey();
      if (result.success) {
      } else {
        setError(result.error);
      }
    } catch (error) {
      setError("Authentication failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
            {isRegistering ? "Register" : "Sign in"} to your account
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleAuth}>
          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              {isRegistering ? "Register with Passkey" : "Sign in with Passkey"}
            </button>
          </div>
        </form>
        <div className="text-center">
          <button
            onClick={() => setIsRegistering(!isRegistering)}
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            {isRegistering
              ? "Already have an account? Sign in"
              : "Don't have an account? Register"}
          </button>
        </div>
        {error && (
          <p className="mt-2 text-center text-sm text-red-600">{error}</p>
        )}
      </div>
    </div>
  );
}
