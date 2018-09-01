var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Quote = function (_React$Component) {
    _inherits(Quote, _React$Component);

    function Quote(props) {
        _classCallCheck(this, Quote);

        return _possibleConstructorReturn(this, (Quote.__proto__ || Object.getPrototypeOf(Quote)).call(this, props));
    }

    _createClass(Quote, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'p',
                null,
                'Quote text goes here ...'
            );
        }
    }]);

    return Quote;
}(React.Component);

var Author = function (_React$Component2) {
    _inherits(Author, _React$Component2);

    function Author(props) {
        _classCallCheck(this, Author);

        return _possibleConstructorReturn(this, (Author.__proto__ || Object.getPrototypeOf(Author)).call(this, props));
    }

    _createClass(Author, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'p',
                null,
                'Author name goes here...'
            );
        }
    }]);

    return Author;
}(React.Component);

ReactDOM.render(React.createElement(Quote, null), document.getElementById('quote-div'));
ReactDOM.render(React.createElement(Author, null), document.getElementById('author-div'));