# Bookstore Client

EmberJS Client. See https://github.com/ifellinaholeonce/bookstore-api for how to setup the server.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/) (with npm)
* [Ember CLI](https://ember-cli.com/)
* [Google Chrome](https://google.com/chrome/)

## Setup

* `git clone https://github.com/ifellinaholeonce/bookstore-client`
* `cd bookstore`
* `npm install`

## Running

* `ember server --proxy http://localhost:3000`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Use

The client uses data from the backend API. Follow the readme on the server repo to set it up. Once the server is running and issues have been created on Github, the client will be able to access authors and books.

### Search

I have added a search feature to the client. It queries the search controller on the server which returns relevant Books and Authors.
![alt text][search]

[search]: https://github.com/ifellinaholeonce/bookstore-client/blob/master/docs/search.png "Search Feature"
