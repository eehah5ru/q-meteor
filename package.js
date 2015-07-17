Package.describe({
	name: "eehah5ru:q",
    summary: "A wrapper for the Q promise library from kris kowal",
  	version: "1.0.3",
    git: "https://github.com/eehah5ru/q-meteor.git"
});

Package.onUse(function (api) {
    api.versionsFrom('METEOR@1.0');

    // EXPORT
    api.export('Q');

    // FILES
  api.addFiles('lib/q-1/q.js', ['client', 'server']);
});
