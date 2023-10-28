(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 9094:
/***/ ((module) => {

// Exports
module.exports = {
	"item": "MeetupItem_item__pvgsv",
	"image": "MeetupItem_image__0jYm_",
	"content": "MeetupItem_content__fvTRB",
	"actions": "MeetupItem_actions__IeeH4"
};


/***/ }),

/***/ 2302:
/***/ ((module) => {

// Exports
module.exports = {
	"list": "MeetupList_list__C2D8b"
};


/***/ }),

/***/ 4424:
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__73YTa"
};


/***/ }),

/***/ 2281:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4424);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);


function Card(props) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
        children: props.children
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);


/***/ }),

/***/ 7021:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages),
  "getStaticProps": () => (/* binding */ getStaticProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "mongodb"
var external_mongodb_ = __webpack_require__(8013);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./components/ui/Card.js
var Card = __webpack_require__(2281);
// EXTERNAL MODULE: ./components/meetups/MeetupItem.module.css
var MeetupItem_module = __webpack_require__(9094);
var MeetupItem_module_default = /*#__PURE__*/__webpack_require__.n(MeetupItem_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupItem.js




function MeetupItem(props) {
    const router = (0,router_.useRouter)();
    function showDetailsHandler() {
        router.push("/" + props.id); // router.push() is equavalant of using the Link component
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("li", {
        className: (MeetupItem_module_default()).item,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Card/* default */.Z, {
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (MeetupItem_module_default()).image,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("img", {
                        src: props.image,
                        alt: props.title
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (MeetupItem_module_default()).content,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h3", {
                            children: props.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("address", {
                            children: props.address
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: (MeetupItem_module_default()).actions,
                    children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
                        onClick: showDetailsHandler,
                        children: "Show Details"
                    })
                })
            ]
        })
    });
}
/* harmony default export */ const meetups_MeetupItem = (MeetupItem);

// EXTERNAL MODULE: ./components/meetups/MeetupList.module.css
var MeetupList_module = __webpack_require__(2302);
var MeetupList_module_default = /*#__PURE__*/__webpack_require__.n(MeetupList_module);
;// CONCATENATED MODULE: ./components/meetups/MeetupList.js



function MeetupList(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("ul", {
        className: (MeetupList_module_default()).list,
        children: props.meetups.map((meetup)=>/*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupItem, {
                id: meetup.id,
                image: meetup.image,
                title: meetup.title,
                address: meetup.address
            }, meetup.id))
    });
}
/* harmony default export */ const meetups_MeetupList = (MeetupList);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
;// CONCATENATED MODULE: ./pages/index.js


// nextJs will only include this in the server-side as it is being used there only

// import { useEffect, useState } from 'react';


// const DUMMY_MEETUPS = [
//   {
//     id: 'm1',
//     title: 'A First Meetup',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Some address 5, 12345 Some City',
//     description: 'This is a first meetup!',
//   },
//   {
//     id: 'm2',
//     title: 'A First Meetup',
//     image: 'https://upload.wikimedia.org/wikipedia/commons/d/d3/Stadtbild_M%C3%BCnchen.jpg',
//     address: 'Some address 10, 12345 Some City',
//     description: 'This is a first meetup!',
//   },
// ];
function HomePage(props) {
    /*
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  // useEffect executes the callback function AFTER the component function was executed
  // nextJS returns the result of the first component render cycle (which is an empty page), rather than the fully rendered page
  // pre-render data
  useEffect(() => {
    // send a http request and fetch data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);
  */ return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_react_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "React Meetups"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Brose a huge list of highly active React meetups!"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(meetups_MeetupList, {
                meetups: props.meetups
            })
        ]
    });
}
/*
// Runs for every incoming request (creates pre-generate of the page dynamically)
export async function getServerSideProps(context) {
  const req = context.req; //access to the request and response objs similar to nodeJS and Express
  const res = context.res;

  // Fetch data from an API

  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}
*/ // Cached and reused unlike getServerSideProps()
// Code will never end up on the client side, runs before the HomePage component\
//data fetching is now on the server-side
async function getStaticProps() {
    // Fetch data from an API
    const client = await external_mongodb_.MongoClient.connect("mongodb+srv://Sam:Q0tqIcdQL6tMw3dS@cluster0.lmjhspc.mongodb.net/meetups?retryWrites=true&w=majority");
    const db = client.db();
    const meetupsCollection = db.collection("meetups");
    const meetups = await meetupsCollection.find().toArray();
    client.close();
    // must return a props obj
    return {
        props: {
            meetups: meetups.map((meetup)=>({
                    title: meetup.title,
                    address: meetup.address,
                    image: meetup.image,
                    id: meetup._id.toString()
                }))
        },
        revalidate: 10
    };
}
/* harmony default export */ const pages = (HomePage);


/***/ }),

/***/ 8013:
/***/ ((module) => {

"use strict";
module.exports = require("mongodb");

/***/ }),

/***/ 968:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(7021));
module.exports = __webpack_exports__;

})();