'use client';

import { useCurrentAccount, useSignAndExecuteTransaction } from '@mysten/dapp-kit';
import { Transaction } from '@mysten/sui/transactions';
import { useState } from 'react';

export function useSuiWallet() {
  const account = useCurrentAccount();
  const { mutate: signAndExecute } = useSignAndExecuteTransaction();
  const [isLoading, setIsLoading] = useState(false);

  const executeTransaction = async (transaction: Transaction) => {
    setIsLoading(true);
    return new Promise((resolve, reject) => {
      signAndExecute(
        {
          transaction,
        },
        {
          onSuccess: (result) => {
            setIsLoading(false);
            resolve(result);
          },
          onError: (error) => {
            setIsLoading(false);
            reject(error);
          },
        }
      );
    });
  };

  return {
    account,
    address: account?.address,
    isConnected: !!account,
    executeTransaction,
    isLoading,
  };
}
