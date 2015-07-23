Package.describe({
  name: "eehah5ru:q",
  summary: "A wrapper for the Q promise library from kris kowal",
  version: "1.0.3",
  git: "https://github.com/eehah5ru/q-meteor.git"
});

Package.onUse(function (api) {
  Npm.depends(
    {
      "q": "1.4.1"
    }
  );

  api.versionsFrom('METEOR@1.0');

  // api.use('aramk:requirejs', 'server');  
  // api.use('meteorhacks:npm', 'server');
  
  // EXPORT
  api.export('Q');
  

  // FILES
  api.addFiles('q_meteor.js', ['server']);
});
