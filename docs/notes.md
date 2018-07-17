## 星期二, 10. 七月 2018 11:07下午 

今天 学习了**log4js**框架，亮点如下：

1. 可配置：日志级别等等
2. Appenders：提供了多种日志输出功能，默认为**stdout**，还提供了file及email等其它输出模块；

> NOTE: Appenders是值得学习的设计模式，高内聚低耦合，并具有高度的可扩展性；

## 星期三, 11. 七月 2018 10:12下午 

今天学习了**mustache**框架，logic-less模板引擎，可以实现简单的if-else-end的逻辑判断，使用非常简单，大体如下所示：

```
var temp = "hello, {{ name }}!";
var result = mustache.render(temp, { name: 'xiaoming' });

// result = hello, xiaoming!
```

> NOTE: 没有freemarker的ftl功能强大，但是可以满足基本需要；

## 星期二，17. 七月 2018 9:53下午

最近对`promise`又有新的认识，`Promise`是异步执行的结果，包含运行的结果（或错误原因）；

类方法：

- all: 所有的异步任务都正常执行结束（或任何一个任务出错）按运行的顺序返回运行结果（是一个数组）；
- race: 与all类似，但是任何一个异步任务结束则返回；
- resolve: 返回一个执行完成的任务；
- reject: 返回一个执行出错的任务；

原型方法：

- then: 返回一个新的异步任务，由上个任务（执行正常）的结果作为输入，够成链式编程；
- catch: 返回一个新的异步任务，由上个任务（执行错误）的结果作为输入，用于捕捉前置任务的错误原因；
- finally: 返回一个新的异步任务，无论前置任务执行正常（或错误）都会执行该block；

```
Promise.resolve('hello')
    .then( value => {
        console.log(value);
        return Promise.resolve('world');
    })
    .then( value => {
        console.log(value);
        return Promise.reject('oh, no');
    })
    .catch( reason => {
        console.log(reason);
    })
    .finally( () => {
        console.log('finish');
    });

// expected output:
// hello
// world
// oh, no
// finish
```

> NOTE: 屏蔽系统的多线程技术，保证异步任务执行结果正确的返回；类似的框架还有不少，比如RAC用于Mac OS-X/iOS平台，Rx[language]等等；
