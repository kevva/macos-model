# macos-model [![Build Status](https://travis-ci.org/kevva/macos-model.svg?branch=master)](https://travis-ci.org/kevva/macos-model)

> Get your Mac model


## Install

```
$ npm install --save macos-model
```


## Usage

```js
const macosModel = require('macos-model');

macosModel().then(model => {
	console.log(model);
	//=> 'MacBook Pro (Retina, 15-inch, Mid 2014)'
});
```


## CLI

```
$ npm install --global macos-model
```

```
$ macos-model --help

  Example
    $ macos-model
    MacBook Pro (Retina, 15-inch, Mid 2014)
```


## Related

* [osx-info](https://github.com/gillstrom/osx-info) - Get info about your Mac


## License

MIT © [Kevin Martensson](http://github.com/kevva)
