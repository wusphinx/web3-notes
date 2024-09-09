import { PublicKey } from "@solana/web3.js";

const {
    Connection,
    LAMPORTS_PER_SOL,
    clusterApiUrl,
} = require('@solana/web3.js');


const suppliedToPubkey = process.argv[2] || null;
   
if (!suppliedToPubkey) {
  console.log(`Please provide a public key to send to`);
  process.exit(1);
}
 

const main = async () => {
    const connection = new Connection(clusterApiUrl('devnet'), 'confirmed');
    const publicKey = new PublicKey(suppliedToPubkey);

    const airdropSignature = await connection.requestAirdrop(
        publicKey,
        2 * LAMPORTS_PER_SOL 
    );

    await connection.confirmTransaction(airdropSignature);
    console.log(`Airdrop completed. New account balance: ${await connection.getBalance(suppliedToPubkey) / LAMPORTS_PER_SOL} SOL`);
};

main().catch(err => {
    console.error(err);
});
