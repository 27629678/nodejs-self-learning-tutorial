### 一、准备知识

略


### 二、NodeJS Documentation

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

#### 2.2 Cluster集群

充分利用CPU多核心（多CPU）架构，集群模块的fork()方法可以创建多个进程，与主进程共享端口资源，但进程间不共享进程状态及数据，可根据各进程的运行状态分配任务，但与Nginx的负载均衡不是一回事；

#### 2.2 Child-Process子进程

这里不要与集群创建的多进程混淆，这里的子进程是Node.js服务启动的子进程，与`popen()`的功能类似，可以调用系统资源，比如执行shell后把结果返回给调用的地方；

> NOTE:相关有用的模块，发挥想象的地方；
