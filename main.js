const dotenv = require('dotenv');
const { getAllTokens } = require('./utils')
dotenv.config();

const RPC_URL = process.env.RPC_URL;

async function main() {
    const walletAddress = '9EVexPCR29L9s4edQgkBEcsaQp7gyc4ueZcYMuKzUqk3';
    while(1) {
        await getAllTokens(RPC_URL, walletAddress);
    }
    
}

main()