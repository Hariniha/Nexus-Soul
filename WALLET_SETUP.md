# Sui Wallet Integration Guide

## Overview
This app integrates Sui wallet connection with zkLogin for seamless authentication and blockchain interactions.

## Features Implemented

### 1. **Standard Wallet Connection**
- Connect via Sui Wallet, Suiet, Ethos, or any Sui-compatible wallet
- Auto-connect on return visits
- Display wallet address with copy functionality
- Disconnect option

### 2. **zkLogin (Google OAuth)**
- Passwordless authentication using Google account
- No seed phrases or private keys needed
- Perfect for unbanked users
- Generates Sui address from OAuth credentials

### 3. **Wallet Management**
- `WalletConnect` component in navigation
- Shows connected wallet address (truncated)
- Copy address functionality
- Disconnect button
- Responsive design for mobile

## Setup Instructions

### 1. Install Dependencies
```bash
npm install @mysten/sui.js @mysten/dapp-kit @mysten/wallet-standard @tanstack/react-query
```

### 2. Configure Environment Variables
Create `.env.local` file:
```bash
NEXT_PUBLIC_SUI_NETWORK=testnet
NEXT_PUBLIC_GOOGLE_CLIENT_ID=your-client-id.apps.googleusercontent.com
```

### 3. Get Google OAuth Credentials (for zkLogin)

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google+ API
4. Go to Credentials → Create Credentials → OAuth 2.0 Client ID
5. Configure OAuth consent screen
6. Add authorized redirect URIs:
   - `http://localhost:3000/auth/callback` (development)
   - `https://yourdomain.com/auth/callback` (production)
7. Copy the Client ID to `.env.local`

### 4. Install Sui Wallet (for users)
Users need a Sui wallet extension:
- **Sui Wallet**: [Chrome Extension](https://chrome.google.com/webstore/detail/sui-wallet)
- **Suiet**: [Chrome Extension](https://suiet.app/)
- **Ethos Wallet**: [Website](https://ethoswallet.xyz/)

## Usage

### In Components
```tsx
import { useSuiWallet } from '@/lib/sui/useSuiWallet';

function MyComponent() {
  const { account, address, isConnected, executeTransaction } = useSuiWallet();
  
  if (!isConnected) {
    return <p>Please connect your wallet</p>;
  }
  
  return <p>Connected: {address}</p>;
}
```

### Execute Transactions
```tsx
import { Transaction } from '@mysten/sui/transactions';

const tx = new Transaction();
tx.moveCall({
  target: `${packageId}::module::function`,
  arguments: [/* ... */],
});

await executeTransaction(tx);
```

## File Structure

```
lib/sui/
  ├── config.ts              # Network configuration
  ├── SuiWalletProvider.tsx  # Wallet context provider
  └── useSuiWallet.ts        # Wallet hook

components/wallet/
  ├── WalletConnect.tsx      # Wallet connection UI
  └── ZkLoginButton.tsx      # Google OAuth zkLogin

app/auth/callback/
  └── page.tsx              # OAuth callback handler
```

## Wallet Features in Navigation

The `Navigation` component now includes:
- **Desktop**: Wallet connect button + Get Started CTA
- **Mobile**: Wallet connect, zkLogin, and Get Started in mobile menu
- **Connected State**: Shows wallet address, copy button, disconnect button

## zkLogin Flow

1. User clicks "Login with Google (zkLogin)"
2. Redirects to Google OAuth
3. User authorizes
4. Callback receives ID token
5. Generate zkLogin proof
6. Create Sui address
7. User authenticated without seed phrase

## Network Configuration

Switch between networks in `lib/sui/config.ts`:
- **Testnet** (default): For development
- **Mainnet**: For production
- **Devnet**: For testing latest features

## Troubleshooting

### Wallet Not Connecting
1. Make sure you have a Sui wallet extension installed
2. Check if wallet is unlocked
3. Try refreshing the page
4. Clear browser cache and try again

### zkLogin Issues
1. Verify Google Client ID is correct in `.env.local`
2. Check redirect URI matches in Google Console
3. Make sure you're using HTTPS in production
4. Check browser console for errors

### Transaction Failures
1. Check wallet has sufficient SUI for gas
2. Verify contract addresses are correct
3. Check transaction arguments match contract expectations
4. Review error message in console

## Next Steps

1. **Deploy Smart Contracts**: Deploy your Sui Move contracts
2. **Update Contract Addresses**: Add addresses to `.env.local`
3. **Implement Contract Interactions**: Use `executeTransaction` hook
4. **Test on Testnet**: Use testnet SUI from [faucet](https://discord.com/invite/sui)
5. **Production Setup**: Configure for mainnet when ready

## Resources

- [Sui Documentation](https://docs.sui.io/)
- [Sui TypeScript SDK](https://sdk.mystenlabs.com/typescript)
- [zkLogin Guide](https://docs.sui.io/concepts/cryptography/zklogin)
- [Sui Wallet Kit](https://github.com/MystenLabs/sui/tree/main/sdk/dapp-kit)
