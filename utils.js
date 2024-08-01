const { Connection, PublicKey } = require('@solana/web3.js');
const { TOKEN_PROGRAM_ID, AccountLayout } = require('@solana/spl-token');

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function getAllTokens(rpcUrl, walletAddress) {
    const connection = new Connection(rpcUrl, 'confirmed');

    const WalletPublicKey = new PublicKey(walletAddress);

    const tokenAccounts = await connection.getTokenAccountsByOwner(WalletPublicKey, {
        programId: TOKEN_PROGRAM_ID
    });

    console.log('Token Accounts:', tokenAccounts.value.length);

    for (const tokenAccount of tokenAccounts.value) {
        const accountData = AccountLayout.decode(tokenAccount.account.data);
        const tokenPublicKey = new PublicKey(accountData.mint);
        const tokenBalance = await connection.getTokenAccountBalance(tokenAccount.pubkey);
        console.log(`Token: ${tokenPublicKey.toString()}, Balance: ${tokenBalance.value.uiAmount}`);
    }

}

module.exports = { getAllTokens, sleep }