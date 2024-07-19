# Solidity 101 入门笔记 
## 11. 构造函数和修饰器
1. 以 onlyOwner 来限制只有拥有者才能调用，这明明是一个权限检查，类似只有你拥有的东西才能调用，别人无权调用。
2. 以登录验证为例，在 python 中确实适合用装饰器来完成，但在 solidity 中却用 modifier 这个颇有些迷惑的关键字。
3. 好在有 openzeppelin 这类第三方库实现，来简化权限检查，甚好。

---
参考：
- https://www.wtf.academy/docs/solidity-101/
- https://github.com/OpenZeppelin/openzeppelin-contracts/blob/master/contracts/access/Ownable.sol