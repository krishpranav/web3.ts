/**
 * @author: Krisna Pranav
 * @file: bounty.ts
 * @copyright Copyright (c) 2025 Krisna Pranav
 */

import { Proposal } from "@interfaces/proposal";
import { Benefactor } from "@interfaces/benefactor";
import { PullRequest } from "@interfaces/pull-request";

export interface Bounty {
    id: number;
    creationDate: number;
    tokenAmount: string | number;

    creator: string;
    transactional: string;
    rewardToken: string;
    rewardAmount: string | number;
    fundingAmount: string | number;

    closed: boolean;
    cancelled: boolean;
    funded: boolean;

    title: string;
    repoPath: string;
    branch: string;
    cid: string;
    githubUser: string;
}