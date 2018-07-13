## 工程备注

### 一、模块备注


### 二、NodeJS备注

#### 2.1 Modules

##### 2.1.1 module wrapper

在代码执行之前，Node.JS会把module代码包装以下形式：

```
(function(exports, require, module, __filename, __dirname) {
// Module code actually lives in here
});
```

优点：

- 将模块内的顶层的全局变量作用域限制在模块内部，不干扰模块外的代码；
- 提供了快捷常量，如：module, export, __filename, __dirname等等；

> NOTE: 这也就明白了，每个JS文件内require, module, exports并不是关键字，而对象；

##### 2.1.2 require方法伪代码

```
function require(/* ... */) {
  const module = { exports: {} };
  ((module, exports) => {
    // Module code here. In this example, define a function.
    function someFunc() {}
    exports = someFunc;
    // At this point, exports is no longer a shortcut to module.exports, and
    // this module will still export an empty default object.
    module.exports = someFunc;
    // At this point, the module will now export someFunc, instead of the
    // default object.
  })(module, module.exports);
  return module.exports;
}
```

### 三、语法糖备注

#### 3.1 ES6的不定参数函数

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
