// 利用Wallet类发送ETH
// 由于playcode不支持ethers.Wallet.createRandom()函数，我们只能用VScode运行这一讲代码
import { ethers } from "ethers";
require('dotenv').config();

const AlchemyAPIKey = process.env.AlchemyAPIKey
// 利用Alchemy的rpc节点连接以太坊测试网络
// 准备 alchemy API 可以参考https://github.com/AmazingAng/WTFSolidity/blob/main/Topics/Tools/TOOL04_Alchemy/readme.md 
const ALCHEMY_SEPOLIA_URL = `https://eth-sepolia.g.alchemy.com/v2/${AlchemyAPIKey}`;
const provider = new ethers.JsonRpcProvider(ALCHEMY_SEPOLIA_URL);

// 创建随机的wallet对象
const wallet1 = ethers.Wallet.createRandom()
const wallet1WithProvider = wallet1.connect(provider)
const mnemonic = wallet1.mnemonic // 获取助记词

// 利用私钥和provider创建wallet对象
const privateKey = '0x227dbb8586117d55284e26620bc76534dfbd2394be34cf4a09cb775d593b6f2b'
const wallet2 = new ethers.Wallet(privateKey, provider)

// 从助记词创建wallet对象
const wallet3 = ethers.Wallet.fromPhrase(mnemonic.phrase)

const address1 = await wallet1.getAddress()
const address2 = await wallet2.getAddress() 
const address3 = await wallet3.getAddress() // 获取地址
console.log(`1. 获取钱包地址`);
console.log(`钱包1地址: ${address1}`);
console.log(`钱包2地址: ${address2}`);
console.log(`钱包3地址: ${address3}`);
console.log(`钱包1和钱包3的地址是否相同: ${address1 === address3}`);


console.log(`钱包1助记词: ${wallet1.mnemonic.phrase}`)

console.log(`钱包2私钥: ${wallet2.privateKey}`)

const txCount1 = await provider.getTransactionCount(wallet1WithProvider)
const txCount2 = await provider.getTransactionCount(wallet2)
console.log(`钱包1发送交易次数: ${txCount1}`)
console.log(`钱包2发送交易次数: ${txCount2}`)