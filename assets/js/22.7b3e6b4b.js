(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{368:function(t,a,n){"use strict";n.r(a);var s=n(42),e=Object(s.a)({},(function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h1",{attrs:{id:"python-programming"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#python-programming"}},[t._v("#")]),t._v(" Python Programming")]),t._v(" "),n("h2",{attrs:{id:"datetime-on-multi-timezone-servers"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#datetime-on-multi-timezone-servers"}},[t._v("#")]),t._v(" Datetime On Multi-timezone Servers")]),t._v(" "),n("p",[t._v("For portable timestamp, use:")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" datetime "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datetime\n\nts "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("now"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[n("code",[t._v("ts")]),t._v(" will be same for every computer regardless of their timezone setting.")]),t._v(" "),n("p",[t._v("For portable MariaDb data with type DATETIME, use Python naive datetime:")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" datetime "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datetime\n\ndt "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" datetime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utcnow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("isoformat"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sep"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("' '")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[n("code",[t._v("dt")]),t._v(" will same for every computer regardless of their timezone setting.\nIt is in UTC timezone.")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" datetime "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" datetime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" timezone\n\ndatetime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("now"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" will result correct UTC timestamp regardless of timezone"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("\n\ndatetime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("now"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" datetime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utcnow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndatetime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("now"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" datetime"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utcnow"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("replace"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("tzinfo"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("timezone"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("utc"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timestamp"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("p",[n("code",[t._v("datetime.now()")]),t._v(" is naive  local date and time")]),t._v(" "),n("p",[n("code",[t._v("datetime.utcnow()")]),t._v(" is naive utc date and time")]),t._v(" "),n("div",{staticClass:"custom-block tip"},[n("p",{staticClass:"custom-block-title"},[t._v("NOTE")]),t._v(" "),n("p",[t._v("naive means without timezone information.")])]),t._v(" "),n("h2",{attrs:{id:"generate-random-string"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#generate-random-string"}},[t._v("#")]),t._v(" Generate Random String")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" random\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" string\n\nSALT_LENGTH "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v("\n\nsalt "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("join"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("random"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("choices"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("string"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ascii_letters"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" k"),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("SALT_LENGTH"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),n("h2",{attrs:{id:"socket-server-example"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#socket-server-example"}},[t._v("#")]),t._v(" Socket Server Example")]),t._v(" "),n("div",{staticClass:"language-python extra-class"},[n("pre",{pre:!0,attrs:{class:"language-python"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#!/usr/bin/env python3")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" socket\n\nserver "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" socket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("socket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nserver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("bind"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("4321")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nserver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("listen"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nserver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("settimeout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\ndone "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("False")]),t._v("\n\n"),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" done"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("try")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        conn "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Waiting client...'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        conn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" addr "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" server"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("accept"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Connected by'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" addr"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        conn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("settimeout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n            data "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" conn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("recv"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token number"}},[t._v("1024")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Client disconnected!'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("data"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n            "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" data "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("b'q\\n'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n                done "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n                conn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("shutdown"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("socket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("SHUT_RDWR"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n                "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" KeyboardInterrupt"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Keyboard interrupt.'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        done "),n("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("True")]),t._v("\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("except")]),t._v(" socket"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("timeout"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("print")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token string"}},[t._v("'Time out.'")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n    "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" conn "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("is")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("not")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("None")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" conn"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\nserver"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("close"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n")])])]),n("h2",{attrs:{id:"references"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#references"}},[t._v("#")]),t._v(" References")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://stackoverflow.com/questions/8641463/how-to-set-password-on-first-call-for-command-from-paramiko",target:"_blank",rel:"noopener noreferrer"}},[t._v("Paramiko Change Password"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("Sourceless python script distributions:\n"),n("ul",[n("li",[t._v("https://stackoverflow.com/questions/25172773/running-without-python-source-files-in-python-3-4")]),t._v(" "),n("li",[t._v("http://www.pyinstaller.org/")])])]),t._v(" "),n("li",[n("a",{attrs:{href:"https://docs.python-guide.org/writing/structure/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python Project Directory Structure"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/serverlesspub/ffmpeg-aws-lambda-layer",target:"_blank",rel:"noopener noreferrer"}},[t._v("FFMPEG AWS Lambda Layer"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://realpython.com/token-based-authentication-with-flask/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Token-Based Authentication With Flask"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("Flask JWT References\n"),n("ul",[n("li",[n("a",{attrs:{href:"https://codeburst.io/jwt-authorization-in-flask-c63c1acf4eeb",target:"_blank",rel:"noopener noreferrer"}},[t._v("JWT authorization in Flask"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://medium.com/@riken.mehta/full-stack-tutorial-3-flask-jwt-e759d2ee5727",target:"_blank",rel:"noopener noreferrer"}},[t._v("Full-stack tutorial — 3: Flask + jwt"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://realpython.com/token-based-authentication-with-flask/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Token-Based Authentication With Flask"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://stackabuse.com/single-page-apps-with-vue-js-and-flask-jwt-authentication/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Single Page Apps with Vue.js and Flask: JWT Authentication"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://blog.tecladocode.com/jwt-authentication-and-token-refreshing-in-rest-apis/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Token Authentication and Refreshing using Flask-JWT-Extended"),n("OutboundLink")],1)])])]),t._v(" "),n("li",[n("a",{attrs:{href:"http://pyalsaaudio.sourceforge.net/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Python Alsa"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://chase-seibert.github.io/blog/2014/03/21/python-multilevel-argparse.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Multi-level argparse in Python (parsing commands like git)"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://tech.preferred.jp/en/blog/working-with-configuration-in-python/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Best Practices for Working with Configuration in Python Applications"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://www.willmcgugan.com/tag/rich/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Rich - A Python library for rich text and beautiful formatting in the terminal."),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://build-system.fman.io/pyqt5-tutorial",target:"_blank",rel:"noopener noreferrer"}},[t._v("PyQt Tutorial"),n("OutboundLink")],1)]),t._v(" "),n("li",[t._v("https://pythonhosted.org/Flask-Security/")]),t._v(" "),n("li",[t._v("https://realpython.com/token-based-authentication-with-flask/")]),t._v(" "),n("li",[t._v("https://github.com/rene00/flask-restful-user-management-example")]),t._v(" "),n("li",[n("a",{attrs:{href:"https://github.com/instagram/MonkeyType",target:"_blank",rel:"noopener noreferrer"}},[t._v("MonkeyType: A system for Python that generates static type annotations by collecting runtime types"),n("OutboundLink")],1)]),t._v(" "),n("li",[n("a",{attrs:{href:"https://medium.com/@laurentmeyer/background-worker-flask-b179a7925d1e",target:"_blank",rel:"noopener noreferrer"}},[t._v("Create a Background Worker on a Flask App (on Heroku) without Redis"),n("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);