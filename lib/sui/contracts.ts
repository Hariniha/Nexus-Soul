import { Transaction } from '@mysten/sui/transactions';

// Contract addresses (will be set from environment variables)
export const CONTRACTS = {
  PATENT_NFT: process.env.NEXT_PUBLIC_PATENT_CONTRACT_ADDRESS || '',
  MARKETPLACE: process.env.NEXT_PUBLIC_MARKETPLACE_CONTRACT_ADDRESS || '',
};

/**
 * Mint a Patent NFT
 * @param packageId - Your deployed package ID
 * @param blobId - Walrus storage blob ID
 * @param suinsName - SuiNS name (e.g., "inventor.sui")
 * @param metadata - Additional metadata object
 */
export function mintPatentNFT(
  packageId: string,
  blobId: string,
  suinsName: string,
  metadata: {
    title: string;
    description: string;
    inventor: string;
  }
) {
  const tx = new Transaction();
  
  tx.moveCall({
    target: `${packageId}::patent_nft::mint`,
    arguments: [
      tx.pure.string(blobId),
      tx.pure.string(suinsName),
      tx.pure.string(metadata.title),
      tx.pure.string(metadata.description),
      tx.pure.string(metadata.inventor),
    ],
  });
  
  return tx;
}

/**
 * Transfer NFT to another address
 */
export function transferNFT(
  packageId: string,
  nftId: string,
  recipientAddress: string
) {
  const tx = new Transaction();
  
  tx.moveCall({
    target: `${packageId}::patent_nft::transfer`,
    arguments: [
      tx.object(nftId),
      tx.pure.address(recipientAddress),
    ],
  });
  
  return tx;
}

/**
 * List NFT on marketplace
 */
export function listOnMarketplace(
  packageId: string,
  nftId: string,
  price: number
) {
  const tx = new Transaction();
  
  tx.moveCall({
    target: `${packageId}::marketplace::list`,
    arguments: [
      tx.object(nftId),
      tx.pure.u64(price),
    ],
  });
  
  return tx;
}

/**
 * Buy NFT from marketplace
 */
export function buyFromMarketplace(
  packageId: string,
  listingId: string,
  payment: string // Coin object ID
) {
  const tx = new Transaction();
  
  tx.moveCall({
    target: `${packageId}::marketplace::buy`,
    arguments: [
      tx.object(listingId),
      tx.object(payment),
    ],
  });
  
  return tx;
}

/**
 * Add address to whitelist
 */
export function addToWhitelist(
  packageId: string,
  nftId: string,
  address: string
) {
  const tx = new Transaction();
  
  tx.moveCall({
    target: `${packageId}::patent_nft::add_to_whitelist`,
    arguments: [
      tx.object(nftId),
      tx.pure.address(address),
    ],
  });
  
  return tx;
}

/**
 * Remove address from whitelist
 */
export function removeFromWhitelist(
  packageId: string,
  nftId: string,
  address: string
) {
  const tx = new Transaction();
  
  tx.moveCall({
    target: `${packageId}::patent_nft::remove_from_whitelist`,
    arguments: [
      tx.object(nftId),
      tx.pure.address(address),
    ],
  });
  
  return tx;
}

/**
 * Update NFT metadata
 */
export function updateMetadata(
  packageId: string,
  nftId: string,
  newTitle: string,
  newDescription: string
) {
  const tx = new Transaction();
  
  tx.moveCall({
    target: `${packageId}::patent_nft::update_metadata`,
    arguments: [
      tx.object(nftId),
      tx.pure.string(newTitle),
      tx.pure.string(newDescription),
    ],
  });
  
  return tx;
}

// Example usage in a component:
/*
import { useSuiWallet } from '@/lib/sui/useSuiWallet';
import { mintPatentNFT } from '@/lib/sui/contracts';

function MintComponent() {
  const { executeTransaction } = useSuiWallet();
  
  const handleMint = async () => {
    const tx = mintPatentNFT(
      '0xPACKAGE_ID',
      'blob_123',
      'inventor.sui',
      {
        title: 'My Patent',
        description: 'Patent description',
        inventor: 'John Doe'
      }
    );
    
    const result = await executeTransaction(tx);
    console.log('Minted NFT:', result);
  };
  
  return <button onClick={handleMint}>Mint Patent NFT</button>;
}
*/
