import React, { useState, useEffect } from 'react';
import { Auth as SupabaseAuth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import { supabase } from '../lib/supabase';
import { Dog } from 'lucide-react';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

export function Auth() {
  const [message, setMessage] = useState('');
  const location = useLocation();

  useEffect(() => {
    if (location.state?.message) {
      setMessage(location.state.message);
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-sand-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <Dog className="mx-auto h-12 w-12 text-forest-600" />
        <h2 className="mt-6 text-center text-3xl font-bold text-pine-800">
          Welcome to Pack Command
        </h2>
        <p className="mt-2 text-center text-sm text-stone-600">
          Sign in to start training your dog
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        {message && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 p-4 bg-forest-50 text-forest-700 rounded-md text-sm text-center"
          >
            {message}
          </motion.div>
        )}
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          <SupabaseAuth
            supabaseClient={supabase}
            appearance={{
              theme: ThemeSupa,
              variables: {
                default: {
                  colors: {
                    brand: '#2E7D32',
                    brandAccent: '#1B5E20',
                    inputBackground: 'white',
                    inputBorder: '#D1D5DB',
                    inputBorderHover: '#2E7D32',
                    inputBorderFocus: '#2E7D32',
                  },
                },
              },
              style: {
                button: {
                  borderRadius: '0.375rem',
                  padding: '0.5rem 1rem',
                  fontSize: '0.875rem',
                  fontWeight: '500',
                },
                input: {
                  borderRadius: '0.375rem',
                },
                anchor: {
                  color: '#2E7D32',
                },
                divider: {
                  background: '#D1D5DB',
                },
                message: {
                  color: '#2E7D32',
                },
              },
            }}
            providers={['google', 'apple', 'facebook']}
            redirectTo={`${window.location.origin}/auth/callback`}
            view="sign_in"
            showLinks={false}
            socialLayout="horizontal"
            socialButtonSize="large"
          />
        </div>
      </div>
    </div>
  );
}