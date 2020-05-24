console.log('App.js is running!');

// only render the subtitle (and p tag) if subtitle exist - logical and operator
// render new p tag - if options.length > 0 "here are your options" "No Options"

const article = {
    title: "To Kill a Mockingbird",
    subtitle: "The Modern Prometheus",
    options: ['One', 'Two']
}

const {title, subtitle, options} = article;

const template = (
    <div>
        <h1>{title}</h1>
        {subtitle && <p>{subtitle}</p>}
        <p>{options.length > 0 ? 'here are your options' : 'No Options'}</p>
    </div>
);


const user = {
    name: 'Elias',
    age: 24,
    userLocation: 'Rochester'
};

const { name, age, userLocation } = user;

const getLocation = () => {
    if (userLocation) {
        return <p>Location: {userLocation}</p>;
    }
}

const templateElias = (
    <div>
        <h1>{name ? name : 'undefined'}</h1>
        {(user.age && user.age >= 18) && <p>Age: {age}</p>}
        {getLocation(user.location)}
    </div>
)

const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);