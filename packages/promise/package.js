Package.describe({
  name: "promise",
  version: "0.11.1",
  summary: "ECMAScript 2015 Promise polyfill with Fiber support",
  git: "https://github.com/meteor/promise",
  documentation: "README.md"
});

Npm.depends({
  "meteor-promise": "https://github.com/ExentriqLtd/promise#bbe4f0d20b70417950381aea112993c4cc8c1168",
  "promise": "8.0.1"
});

Package.onUse(function(api) {
  api.use("modules");
  api.use("modern-browsers");
  api.addFiles("modern.js");
  api.addFiles("legacy.js", "legacy");
  api.mainModule("client.js", "client");
  api.mainModule("server.js", "server");
  api.export("Promise");
});

Package.onTest(function(api) {
  api.use("modules");
  api.use("tinytest");
  api.use("promise");
  api.addFiles("promise-tests.js");
});
