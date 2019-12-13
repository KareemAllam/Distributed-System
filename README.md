# Distribtued System
an Exploration to Distributed Systems using RabbitMQ, RethinkDB & NodeJs.

## Idea of The Project
1. There main idea is to partition a specific task (e.g. counting task) taken form a user into 3 smaller sub-tasks. 
2. Each sub-task will then be allocated to a remote server with respect to each server's performance , which will handle the task separately. 
3. Eventually, Each server return the result of its task back to the server, where it will be collected and sent back to the user.



## Getting Started
To get the Slaves running, type the following in your Command Prompt:
```bash
npm node rethink
```
To get the Slaves running, type the following in **3 different Command Prompts**:
```
node rethink
node rethink2
node rethink3
```


### Prerequisites
Before you start, make sure you have the following installed:
* [NodeJs](https://nodejs.org/en/download/)
* [RabbitMQ](https://www.rabbitmq.com/download.html) 
* [Erlang](https://www.erlang.org/downloads)
* [RethinkDb](https://rethinkdb.com/docs/install/)

### Installation
Use the Node package manager [npm](https://www.npmjs.com/) to install the required packages.
```
npm install 
```


### How To Use
###### Slaves/Database Servers
these files simulates the main database servers. (e.g. other computers):
-rethink.js
-rethink2.js 
-rethink3.js
###### Master/Gateway Servers
this file simulates the main server
-server.js
###### RabbitMQ 
Once RabbitMQ is installed on any server, you can use it directly by addressing its IP Address. 

**Note:** head over to *AppData\Roaming\RabbitMQ* and make sure your config file (e.g. advanced.config) has the following:
```
[{rabbit, [{loopback_users, []}]}].
```
### Authors
- [Kareem Allam](https://github.com/KareemAllam)
- [Omar Atallah](https://github.com/ertomar)
