/**
 * @author: Krisna Pranav
 * @file: proposal.ts
 * @copyright Copyright (c) 2025 Krisna Pranav
 */

import { ProposalDetail } from "@interfaces/proposal-detail";

export interface Proposal {
    id: number;
    creationDate: number;
    oracles: string | number;
    disputeWeight: string | number;
    prId: number;
    refusedByBountyOwner: boolean;
    creator: string;

    details: ProposalDetail[]
}