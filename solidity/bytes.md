# 字节
## 字节**数组**

- bytes1: 这种类型表示一个长度为 1 字节的定长字节数组
- 依此类推，bytes2， bytes3， ...， bytes32
- **byte** 是 bytes1 的别名。

## 示例
```solidity
    bytes1 a = 0xb5; //  [10110101] 单字节
    bytes3 example1 = 0x123456; // 3个字节
```

## 参考
- https://solidity-cn.readthedocs.io/zh/develop/types.html
- https://solidity-by-example.org/primitives/