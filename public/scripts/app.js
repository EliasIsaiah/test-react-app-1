"use strict";

console.log('App.js is running!');

// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "here are your options" "No Options"

var article = {
    title: "To Kill a Mockingbird",
    subtitle: "The Modern Prometheus",
    options: ['One', 'Two']
};

var title = article.title,
    subtitle = article.subtitle,
    options = article.options;


var template = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        title
    ),
    subtitle && React.createElement(
        "p",
        null,
        subtitle
    ),
    React.createElement(
        "p",
        null,
        options.length > 0 ? 'here are your options' : 'No Options'
    )
);

var user = {
    name: 'Elias',
    age: 24,
    userLocation: 'Rochester'
};

var name = user.name,
    age = user.age,
    userLocation = user.userLocation;


var getLocation = function getLocation() {
    if (userLocation) {
        return React.createElement(
            "p",
            null,
            "Location: ",
            userLocation
        );
    }
};

var templateElias = React.createElement(
    "div",
    null,
    React.createElement(
        "h1",
        null,
        name ? name : 'undefined'
    ),
    user.age && user.age >= 18 && React.createElement(
        "p",
        null,
        "Age: ",
        age
    ),
    getLocation(user.location)
);

var appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);
