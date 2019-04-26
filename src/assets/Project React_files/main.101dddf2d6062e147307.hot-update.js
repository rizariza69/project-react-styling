webpackHotUpdate("main",{

/***/ "./src/components/card.js":
/*!********************************!*\
  !*** ./src/components/card.js ***!
  \********************************/
/*! exports provided: DataCard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataCard", function() { return DataCard; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! semantic-ui-react */ "./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/muhammadriza/Documents/impactByte/projects/project-react-styling-semantic/src/components/card.js";


class DataCard extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const center2 = {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      flexDirection: "column"
    };
    const center = {
      diplay: "flex",
      alignContent: "center",
      flexDirection: "column",
      marginTop: "50px",
      marginRight: "0"
    };
    const cardStyle = {
      display: "flex",
      flexDirection: "column",
      width: "1000px",
      height: "450px" // paddingRight: "20px"

    };
    const cardContent = {
      display: "flex",
      flexDirection: "column",
      marginLeft: "20px"
    };
    const cardHeader = {
      marginBottom: "20px",
      marginTop: "20px",
      fontSize: "20px",
      fontWeight: "bold"
    };
    const cardDescription = {
      textAlign: "justify",
      paddingRight: "20px"
    };
    const date = {
      marginTop: "10px",
      justifyContent: "end"
    };
    const cardData = [{
      image: "http://placekitten.com/1000/200",
      title: "Vacation Hongkong",
      description: "Hong Kong is the first place abroad that I have traveled to; but\n      in that particular trip, what I mainly did was just eating and\n      shopping as I accompanied a friend of mine back in university. So\n      when I was able to finally come back again this year to do a more\n      proper \u2018tour\u2019 of the city, I did my best to cover as many\n      activities and attractions possible! And today, I am sharing with\n      you my 5-day itinerary to Hong Kong (which includes a day trip to\n      the nearby city of Macau; it also includes an array of other\n      must-dos that you can consider doing if in case you have more days\n      to spare or if you have a different travel style). But before I go\n      on, I think it\u2019s best that I give you a bit of some background\n      about the geographical area of Hong Kong because a lot of people\n      actually have this misconception that there\u2019s not much to do\n      there, or that there\u2019s not much green at all \u2014 two things that are\n      absolutely NOT true. First things first, there\u2019s more to the\n      well-known urbanised center because 2/3 of the country is actually\n      made up of the countryside which is full of countless small\n      mountains and several islands.",
      date: "June 2017"
    }, {
      image: "http://placekitten.com/1000/200",
      title: "Vacation Hongkong",
      description: "Hong Kong is the first place abroad that I have traveled to; but\n      in that particular trip, what I mainly did was just eating and\n      shopping as I accompanied a friend of mine back in university. So\n      when I was able to finally come back again this year to do a more\n      proper \u2018tour\u2019 of the city, I did my best to cover as many\n      activities and attractions possible! And today, I am sharing with\n      you my 5-day itinerary to Hong Kong (which includes a day trip to\n      the nearby city of Macau; it also includes an array of other\n      must-dos that you can consider doing if in case you have more days\n      to spare or if you have a different travel style). But before I go\n      on, I think it\u2019s best that I give you a bit of some background\n      about the geographical area of Hong Kong because a lot of people\n      actually have this misconception that there\u2019s not much to do\n      there, or that there\u2019s not much green at all \u2014 two things that are\n      absolutely NOT true. First things first, there\u2019s more to the\n      well-known urbanised center because 2/3 of the country is actually\n      made up of the countryside which is full of countless small\n      mountains and several islands.",
      date: "June 2017"
    }];
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: center2,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 100
      },
      __self: this
    }, cardData.map((data, index) => {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: center,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"], {
        style: cardStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Image"], {
        src: data.image,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: cardContent,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Content, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 108
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Header, {
        style: cardHeader,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 109
        },
        __self: this
      }, data.title)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Description, {
        style: cardDescription,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 111
        },
        __self: this
      }, data.description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(semantic_ui_react__WEBPACK_IMPORTED_MODULE_1__["Card"].Meta, {
        style: date,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
        className: "date",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 115
        },
        __self: this
      }, data.date)))));
    }));
  }

}

/***/ })

})
//# sourceMappingURL=main.101dddf2d6062e147307.hot-update.js.map