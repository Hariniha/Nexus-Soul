'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';

export default function AuthCallback() {
  const router = useRouter();
  const [status, setStatus] = useState('Processing authentication...');

  useEffect(() => {
    const processZkLogin = async () => {
      try {
        // Get the ID token from URL hash
        const hash = window.location.hash;
        const params = new URLSearchParams(hash.substring(1));
        const idToken = params.get('id_token');

        if (!idToken) {
          throw new Error('No ID token received');
        }

        // Get the nonce from session storage
        const nonce = sessionStorage.getItem('zklogin_nonce');
        if (!nonce) {
          throw new Error('No nonce found');
        }

        // Here you would:
        // 1. Verify the JWT token
        // 2. Generate zkLogin proof
        // 3. Create Sui address from zkLogin
        // 4. Store the ephemeral key pair

        setStatus('Authentication successful! Redirecting...');
        
        // Clean up
        sessionStorage.removeItem('zklogin_nonce');
        
        // Redirect to dashboard
        setTimeout(() => {
          router.push('/dashboard');
        }, 1000);

      } catch (error) {
        console.error('zkLogin callback error:', error);
        setStatus('Authentication failed. Redirecting...');
        setTimeout(() => {
          router.push('/');
        }, 2000);
      }
    };

    processZkLogin();
  }, [router]);

  return (
    <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="w-12 h-12 text-[#D97706] animate-spin mx-auto mb-4" />
        <p className="text-[#F5F5F5] text-lg">{status}</p>
      </div>
    </div>
  );
}
