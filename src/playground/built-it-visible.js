console.log('App.js is running!');

let visibility = false;

const toggleVisibility = () => {

    visibility = !visibility;
    renderApp();

};

const renderApp = () => {

const visible = {

titulo: "Visibility Toggle",
details: "Hi! Here are the details",
};

const appRoot = document.getElementById('app');

const plantilla = (

<div>

<h1>{visible.titulo}</h1>
<button 
onClick={toggleVisibility}>{visibility ? "Hide Details" : "Show Details"}
</button>
{visibility && (
<div>
    <p>{visible.details}</p>
</div>

)}
</div>

);

ReactDOM.render(plantilla, appRoot);

};

renderApp();