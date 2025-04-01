/**
 * @author: Krisna Pranav
 * @file: eip4361.ts
 * @copyright Copyright (c) 2025 Krisna Pranav
 */

export interface Eip4361Message {
    domain: string;
    address: string;
    statement: string;
    uri: string;
    version: string;
    chainId: number;
    nonce: string;
    issuedAt: string;
    expirationTime: string;
    notBefore: string;
    requestedId: string;
    resources: string[];
    contractName: string;
}