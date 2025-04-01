/**
 * @author: Krisna Pranav
 * @file: allowed-token.ts
 * @copyright Copyright (c) 2025 Krisna Pranav
 */

interface Params {
    transactional: string[],
    reward: string[],
}

export function allowedTokens({transactional, reward}: Params) {
    return {transactional, reward,}
}