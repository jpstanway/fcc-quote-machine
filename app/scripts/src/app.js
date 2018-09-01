
class Quote extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>Quote text goes here ...</p>
        );
    }
}

class Author extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <p>Author name goes here...</p>
        );
    }
}

ReactDOM.render(<Quote />, document.getElementById('quote-div'));
ReactDOM.render(<Author />, document.getElementById('author-div'));