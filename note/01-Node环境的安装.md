### Node 环境安装

[下载地址](https://nodejs.org/en/) 官网有相应的安装教程

这里使用的是Ubuntu进行 12.x 版本的安装

```
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_12.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Node 环境的升降级

下载 n 模块

* ``npm i -g n``
* 稳定版本 ``n stable``
* 最新LTS版本 ``n lts``
* 最新版本 ``n latest``
* 某一个版本 ``n 10.0.0``
* 更换版本 ``n``

[npm官方文档](https://docs.npmjs.com/)

**[返回](../README.md)**