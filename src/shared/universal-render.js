
import App from '../app/components/App';
import render from 'react-dom';
import Iso from 'iso';
import {device} from '../server/utils';

const bootstrap = () => 
    new Promise((resolve) => Iso.bootstrap((initialState, container) =>
        resolve({initialState, container})));

export default async function(ctx) {
    await setTimeout(() => {}, 1000);

    if (device(ctx).isBrowser()) {
        return {body: `
<!DOCHTML>
<html>
<head>
    <script src="https://unpkg.com/react@latest/dist/react.js"></script>
    <script src="https://unpkg.com/react-dom@latest/dist/react-dom.js"></script>
    <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
</head>
<body>
<div>
    <h2>Frankly Platform (CLIENT)</h2>
    <div id='app'></div>
</div>
<script type="text/babel">
    const App = (props) => <h3>An App component</h3>;
    ReactDOM.render(<App/>, document.getElementById('app'));
</script>
</body>
</html>
        `};
    } else {
        return {body: `Frankly Platform (SERVER)\n`};
    }
}