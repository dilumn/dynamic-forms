# dynamic-forms

Angular implementation of Dynamic Forms using a JSON file.

`dynamic-forms` makes your life easier to create thousands of Forms for your web application by handeling all of them with a simple json object.

Here is a sample json object you have to pass through the `form-generator` directive.

```javascript
[
	{
		"type": "text",
		"question":"What is your name?"
	},
	{
		"type": "textarea",
		"question":"About Yourself"
	},
	{
		"type": "checkbox",
		"question":"Agree on terms and conditions"
	},
	{
		"type": "datefield",
		"question":"Date of Birth"
	},
	{
		"type": "numberfield",
		"question":"Age"
	}
]
```

Installation
------------
### Bower ###
The easy way.

1. `bower install angulardynamic-forms` (add `--save` if you want to add the dependency to your own
    project - HIGHLY RECOMMENDED)

### Git ###
The old way.

1. Clone the project from [GitHub](https://github.com/dilumn/dynamic-forms)
2. Copy `formgenerator.js` into your project wherever your other assets reside.

Use
---
As with any other [AngularJS][] module:

* include the script into your page anywhere after [AngularJS][] itself, using whichever mechanism
    you use for including scripts in your project:

```html
    <script src="bower_components/angulardynamic-forms/formgenerator.js"></script>
```

* inject `dynamicgenerator` as a dependency of your project.

```javascript
    appModule = angular.module('app', ['dynamicgenerator']);
```

* create a [form-generator](#the-directive) element anywhere in your page.

```html
    <form-generator layout="layout"></form-generator>
```

`layout` is the `$scope.layout` you define in your controller.


Uses the MIT License. See `LICENSE` file for details.

## Contributing

1. Fork it ( https://github.com/dilumn/dynamic-forms/fork )
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create a new Pull Request
