# Goerli
>当您将智能合约部署到区块链时，风险非常高。由于区块链上的交易无法逆转，错误的智能合约可能导致资金永久损失。这就是测试网无价的原因——开发人员可以使用它们彻底测试他们的智能合约、钱包和其他软件，而无需冒任何实际资金风险。

在学习 web3 之前，最疑惑的就是如何测试了，还好有测试网，它的确配的上**无价**二字  

## 水龙头

由于测试网旨在模拟主网条件，因此您需要一些代币来支付交易费用。幸运的是，测试网代币没有经济价值，您可以通过称为“水龙头”的服务免费获得它们。

## 获取 sepolia 

- https://www.alchemy.com/faucets/ethereum-sepolia
- https://faucets.chain.link/
- https://sepolia-faucet.pk910.de/  在线挖矿

每天限领取 0.1 个 sepolia eth, 前提是你得有一个 eth 的钱包，余额至少是 0.001 个。

提现网络，选择 **ETH-ERC20**，注意别选错了....这个是 ETH 主网对应的协议。

## 合约开发部署基本步骤
1. 本地使用 anvil 
2. 测试链使用 Sepolia
3. 发布到主网

---
参考：
- https://www.binance.com/zh-CN/square/post/834297
- https://x.com/seek_web3/status/1805224967937966300