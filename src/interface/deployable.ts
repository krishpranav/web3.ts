/**
 * @author: Krisna Pranav
 * @file: deployable.ts
 * @copyright Copyright (c) 2025 Krisna Pranav
 */

import {TransactionReceipt} from '@interfaces/web3-core';

export interface Deployable {
    deployJsonAbi(...args: any[]): Promise<TransactionReceipt>;
}