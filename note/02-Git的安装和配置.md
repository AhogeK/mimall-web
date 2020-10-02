### Git 安装

[Git官网](https://git-scm.com/)

具体的安装跟Node一样相当的简单,官网均有保姆式教程.我使用的是Linux系统,所以这边进入官网,点击 [Downloads](https://git-scm.com/downloads),再点击[Linux](https://git-scm.com/download/linux) 就会有 **Download for Linux and Unix** 的安装教程

``which -a git`` 查看在哪安装了git

``git --version`` 查看git版本

如果要自行配置环境变量,Linux有多个可以配置的地方
* /etc/profile  ~/.bash_profile  ~/.profile

``echo $PATH`` 查看环境变量

*也可以通过软连接的方式到环境变量路径的方式*

VSCODE 可在 **settings.json** 中的 ``git.path``属性添加git地址

#### 存储密码 - SSH添加公钥
* git config --list
* git config --global `user.name` "AhogeK"
* git config --global user.email "`ahogek@gmail.com`"
* git config --global credential.helper store
  * 设置信用凭证,帮助vscode记住账号密码
* ssh-keygen -t rsa -C "`ahogek@gmail.com`"
  * 生成公钥和私钥,私钥本地,公钥配置到服务器例如github/gitlab (**项目需要通过SSH的方式克隆**)

#### VS-Code操作Git
* 代替SourceTree
* 效率更高

合并分支 选择需要合并的分支 ctrl+shift+p 选择要合并到的分支
或使用 ``git merge <branch>``

##### Git常用命令
![git常用命令](img/Screenshot%20from%202020-08-12%2009-42-30.png)

#### 团队使用Git命令开发项目

[5 个 Git 工作流，改善你的开发流程](https://mp.weixin.qq.com/s?__biz=MzA5MzYyNzQ0MQ==&mid=2247488564&idx=1&sn=6533b99efa702ccd411c644869b2f2d1&chksm=905ba16aa72c287c826dedaf3ac92ff9daa049cb1b457654c74c4451bade2b437c7074f9bc37&mpshare=1&scene=1&srcid=0824019mu4RFevUiAmqYw5Se&sharer_sharetime=1598253422091&sharer_shareid=5bd3a58bf2ace0a77a324717e26394ae&key=fdd054e9602c88a6a817cc150f7422ee16868560540c8ce61acdc226a6dced4363f320368b2c5007bf3b915cd6ffda328ff8d045a9500e4b799e96e5a990368f1f22acc94767b2b951255a8a63b1956405abe6068c6a3b1bda5f146728835297e20854115138af1e930c3c6bf0795e261a4af308072674598223ec4928b796b1&ascene=1&uin=MzA0MjMwNzM%3D&devicetype=Windows+7&version=62090529&lang=zh_CN&exportkey=Aah84P5AcCyXo8rZ9yirbgU%3D&pass_ticket=P25Dj6GiFvx1Su7Gvwt6OZHlm%2FkTS5w0d6efy2iCQR8%3D)

**[返回](https://github.com/AhogeK/mimall-web)**