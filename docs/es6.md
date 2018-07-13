## ES6 知识点

#### 1.1 ES6的不定参数函数

如下代码所示进行：

```
function sum (...numbers) {
    // 所有的参数都装进numbers数组
    // 若没有传递参数，numbers数组为空，并不是undefined
    return numbers.reduce($0+$1);
}

sum(1, 2, 3);

```

再看一下，可变参数如何展开：

```
function sum2(...numbers) {
    // ...在定义函数时不同
    // ...在这里是展开操作，与Array.join(',')效果类似，并不同
    return sum(...numbers);
}
```