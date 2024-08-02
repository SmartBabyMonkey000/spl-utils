const dotenv = require('dotenv');
const { getAllTokens, sleep } = require('./utils')
dotenv.config();

const RPC_URL = process.env.RPC_URL;

async function main() {
    const walletAddress = 'MoM6ZYyWsDSoYCa2TiXXwsMS7vBGztxNjr9HGNoRZqM';
    while(1) {
        sleep(5000);
        await getAllTokens(RPC_URL, walletAddress);
    }
    
}

main()