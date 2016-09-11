# StopWatch

A simple stopwatch that helps you keep score while playing games or any other purpose where you might need to keep track of 
who took how much time.

## Usage
Pretty Self Explanatory
1. Click on the timer to start or stop it.
2. Add a new user and use the dropdown to select existing users.

## Directory Layout

```
app/                    --> all of the source files for the application
  app.css               --> default stylesheet
  components/           --> all app specific modules
    version/              --> version related components
      version.js                 --> version module declaration and basic "version" value service
      version_test.js            --> "version" value service tests
      version-directive.js       --> custom directive that returns the current app version
      version-directive_test.js  --> version directive tests
      interpolate-filter.js      --> custom interpolation filter
      interpolate-filter_test.js --> interpolate filter tests
  app.js                --> main application module
  index.html            --> app layout file (the main html template file of the app)
  index-async.html      --> just like index.html, but loads js files asynchronously
karma.conf.js         --> config file for running unit tests with Karma
e2e-tests/            --> end-to-end tests
  protractor-conf.js    --> Protractor config file
```


## Contact

For more information on AngularJS please check out http://angularjs.org/

[bower]: http://bower.io
[git]: http://git-scm.com/
[http-server]: https://github.com/nodeapps/http-server
[jasmine]: https://jasmine.github.io
[jdk]: https://en.wikipedia.org/wiki/Java_Development_Kit
[jdk-download]: http://www.oracle.com/technetwork/java/javase/downloads/index.html
[karma]: https://karma-runner.github.io
[node]: https://nodejs.org
[npm]: https://www.npmjs.org/
[protractor]: https://github.com/angular/protractor
[selenium]: http://docs.seleniumhq.org/
[travis]: https://travis-ci.org/
