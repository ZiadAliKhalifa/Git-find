import { Octokit } from "@octokit/rest"
export const octokit = new Octokit({
    auth: process.env.REACT_APP_GH_KEY
});

/**
 * Search repositories by name
 * @param searchTerm The term to search GitHub for
 */
export async function getReposWithName(searchTerm) {
    await octokit.search.repos({ q: `${searchTerm} in:name` })
        .then(res => console.log(res))
        .catch(err => console.log(err))
}

/**
 * Get repository for authenticated user
 */
export async function GetReposForAuthenticatedUser() {
    await octokit.repos.listForAuthenticatedUser()
        .then(res => console.log(res))
        .catch(err => console.log(err));
}