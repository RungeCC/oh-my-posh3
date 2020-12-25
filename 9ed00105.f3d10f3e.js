(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{82:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return s}));var o=n(2),r=n(6),a=(n(0),n(99)),i={id:"configure",title:"Configuration",sidebar_label:"\u2699\ufe0f Configuration"},l={unversionedId:"configure",id:"configure",isDocsHomePage:!1,title:"Configuration",description:"Oh my Posh renders your prompt based on the definition of blocks (like Lego) which contain or more segments.",source:"@site/docs/configuration.md",slug:"/configure",permalink:"/docs/configure",editUrl:"https://github.com/jandedobbeleer/oh-my-posh3/edit/main/docs/docs/configuration.md",version:"current",sidebar_label:"\u2699\ufe0f Configuration",sidebar:"docs",previous:{title:"Installation",permalink:"/docs/installation"},next:{title:"Themes",permalink:"/docs/themes"}},b=[{value:"General Settings",id:"general-settings",children:[{value:"Console Title Style",id:"console-title-style",children:[]}]},{value:"Block",id:"block",children:[{value:"Type",id:"type",children:[]},{value:"Alignment",id:"alignment",children:[]},{value:"Vertical offset",id:"vertical-offset",children:[]},{value:"Horizontal offset",id:"horizontal-offset",children:[]},{value:"Segments",id:"segments",children:[]}]},{value:"Segment",id:"segment",children:[{value:"Type",id:"type-1",children:[]},{value:"Style",id:"style",children:[]},{value:"Powerline symbol",id:"powerline-symbol",children:[]},{value:"Invert Powerline",id:"invert-powerline",children:[]},{value:"Leading diamond",id:"leading-diamond",children:[]},{value:"Trailing diamond",id:"trailing-diamond",children:[]},{value:"Foreground",id:"foreground",children:[]},{value:"Background",id:"background",children:[]},{value:"Properties",id:"properties",children:[]}]},{value:"Full Sample",id:"full-sample",children:[]}],c={rightToc:b};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(o.a)({},c,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Oh my Posh renders your prompt based on the definition of ",Object(a.b)("em",{parentName:"p"},"blocks")," (like Lego) which contain or more ",Object(a.b)("em",{parentName:"p"},"segments"),".\nA really simple configuration could look like this."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "final_space": true,\n  "blocks": [\n    {\n      "type": "prompt",\n      "alignment": "left",\n      "segments": [\n        {\n          "type": "path",\n          "style": "powerline",\n          "powerline_symbol": "\\uE0B0",\n          "foreground": "#ffffff",\n          "background": "#61AFEF",\n          "properties": {\n            "prefix": " \\uE5FF ",\n            "style": "folder"\n          }\n        }\n      ]\n    }\n  ]\n}\n')),Object(a.b)("p",null,"With this configuration, a single powerline segment is rendered that shows the name of the folder you're currently in.\nTo set this configuration in combination with a Oh my Posh ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://github.com/JanDeDobbeleer/oh-my-posh3/releases/latest"}),"executable"),", use the ",Object(a.b)("inlineCode",{parentName:"p"},"-config")," flag to\nset a path to a json file containing the above code. The ",Object(a.b)("inlineCode",{parentName:"p"},"-shell universal")," flag is used to print the prompt without\nescape characters to see the prompt as it would be shown inside a prompt function for your shell."),Object(a.b)("div",{className:"admonition admonition-info alert alert--info"},Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(a.b)("h5",{parentName:"div"},Object(a.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(a.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(a.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"})))),"info")),Object(a.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(a.b)("p",{parentName:"div"},"The command below will not persist the configuration for your shell but print the prompt in your terminal.\nIf you want to use your own configuration permanently, adjust the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/installation#4-replace-your-existing-prompt"}),"prompt configuration")," to use your custom\ntheme."))),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"oh-my-posh -config sample.json -shell universal\n")),Object(a.b)("p",null,"If all goes according to plan, you should see the prompt being printed out on the line below. In case you see a lot of\nboxes with question marks, ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/installation#1-setup-your-terminal"}),"set up your terminal")," to use a supported font before continuing."),Object(a.b)("h2",{id:"general-settings"},"General Settings"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"final_space: ",Object(a.b)("inlineCode",{parentName:"li"},"boolean")," - when true adds a space at the end of the prompt"),Object(a.b)("li",{parentName:"ul"},"console_title: ",Object(a.b)("inlineCode",{parentName:"li"},"boolean")," - when true sets the current location as the console title"),Object(a.b)("li",{parentName:"ul"},"console_title_style: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," - the title to set in the console - defaults to ",Object(a.b)("inlineCode",{parentName:"li"},"folder"))),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},'"I Like The Way You Speak Words" - Gary Goodspeed')),Object(a.b)("h3",{id:"console-title-style"},"Console Title Style"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"folder"),": show the current folder name"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"path"),": show the current path")),Object(a.b)("h2",{id:"block"},"Block"),Object(a.b)("p",null,"Let's take a closer look at what defines a block."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"type: ",Object(a.b)("inlineCode",{parentName:"li"},"prompt")," | ",Object(a.b)("inlineCode",{parentName:"li"},"rprompt")," | ",Object(a.b)("inlineCode",{parentName:"li"},"newline")),Object(a.b)("li",{parentName:"ul"},"alignment: ",Object(a.b)("inlineCode",{parentName:"li"},"left")," | ",Object(a.b)("inlineCode",{parentName:"li"},"right")),Object(a.b)("li",{parentName:"ul"},"vertical_offset: ",Object(a.b)("inlineCode",{parentName:"li"},"int")),Object(a.b)("li",{parentName:"ul"},"horizontal_offset: ",Object(a.b)("inlineCode",{parentName:"li"},"int")),Object(a.b)("li",{parentName:"ul"},"segments: ",Object(a.b)("inlineCode",{parentName:"li"},"array")," of one or more ",Object(a.b)("inlineCode",{parentName:"li"},"segments"))),Object(a.b)("h3",{id:"type"},"Type"),Object(a.b)("p",null,"Tells the engine what to do with the block. There are three options:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"prompt")," renders one or more segments"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"rprompt")," renders one or more segments aligned to the right of the cursor. Only one ",Object(a.b)("inlineCode",{parentName:"li"},"rprompt")," block is permitted.\nSupported on ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"https://scriptingosx.com/2019/07/moving-to-zsh-06-customizing-the-zsh-prompt/"}),"ZSH")," and Powershell."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"newline")," inserts a new line to start the next block on a new line. ",Object(a.b)("inlineCode",{parentName:"li"},"newline")," blocks require no additional\nconfiguration other than the ",Object(a.b)("inlineCode",{parentName:"li"},"type"),".")),Object(a.b)("h3",{id:"alignment"},"Alignment"),Object(a.b)("p",null,"Tell the engine if the block should be left or right aligned."),Object(a.b)("h3",{id:"vertical-offset"},"Vertical offset"),Object(a.b)("p",null,"Move the block up or down x lines. For example ",Object(a.b)("inlineCode",{parentName:"p"},"vertical_offset: 1")," moves the prompt down one line, ",Object(a.b)("inlineCode",{parentName:"p"},"vertical_offset: -1"),"\nmoves it up one line."),Object(a.b)("h3",{id:"horizontal-offset"},"Horizontal offset"),Object(a.b)("p",null,"Moves the segment to the left or the right to have it exactly where you want it to be. Works like ",Object(a.b)("inlineCode",{parentName:"p"},"vertical_offset"),"\nbut on a horizontal level where a negative number moves the block left and a positive number right."),Object(a.b)("h3",{id:"segments"},"Segments"),Object(a.b)("p",null,"Array of one or more segments."),Object(a.b)("h2",{id:"segment"},"Segment"),Object(a.b)("p",null,"A segments is a part of the prompt with a certain context. There are different types available out of the box, if you're\nlooking for what's included, feel free to skip this part and browse through the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/battery"}),"segments"),". Keep reading to\nunderstand how to configure a segment."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"type: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," any of the included ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/battery"}),"segments")),Object(a.b)("li",{parentName:"ul"},"style: ",Object(a.b)("inlineCode",{parentName:"li"},"powerline")," | ",Object(a.b)("inlineCode",{parentName:"li"},"plain")," | ",Object(a.b)("inlineCode",{parentName:"li"},"diamond")),Object(a.b)("li",{parentName:"ul"},"powerline_symbol: ",Object(a.b)("inlineCode",{parentName:"li"},"string")),Object(a.b)("li",{parentName:"ul"},"invert_powerline: ",Object(a.b)("inlineCode",{parentName:"li"},"boolean")),Object(a.b)("li",{parentName:"ul"},"leading_diamond: ",Object(a.b)("inlineCode",{parentName:"li"},"string")),Object(a.b)("li",{parentName:"ul"},"trailing_diamond: ",Object(a.b)("inlineCode",{parentName:"li"},"string")),Object(a.b)("li",{parentName:"ul"},"foreground: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"#colors"}),"color")),Object(a.b)("li",{parentName:"ul"},"background: ",Object(a.b)("inlineCode",{parentName:"li"},"string")," ",Object(a.b)("a",Object(o.a)({parentName:"li"},{href:"#colors"}),"color")),Object(a.b)("li",{parentName:"ul"},"properties: ",Object(a.b)("inlineCode",{parentName:"li"},"array")," of ",Object(a.b)("inlineCode",{parentName:"li"},"Property"),": ",Object(a.b)("inlineCode",{parentName:"li"},"string"))),Object(a.b)("h3",{id:"type-1"},"Type"),Object(a.b)("p",null,"Takes the ",Object(a.b)("inlineCode",{parentName:"p"},"string")," value referencing which segment logic it needs to run (see ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/battery"}),"segments")," for possible values)."),Object(a.b)("h3",{id:"style"},"Style"),Object(a.b)("p",null,"Oh Hi! You made it to a really interesting part, great! Style defines how a prompt is rendered. Looking at most prompt\nthemes out there, we identified 3 types. All of these require a different configuration and depending on the look\nyou want to achieve you might need to understand/use them all."),Object(a.b)("h4",{id:"powerline"},"Powerline"),Object(a.b)("p",null,"What started it all for us. Makes use of a single symbol (",Object(a.b)("inlineCode",{parentName:"p"},"powerline_symbol"),") to separate the segments. It takes the\nbackground color of the previous segment (or transparent if none) and the foreground of the current one (or transparent\nif we're at the last segment). Expects segments to have a colored background, else there little use for this one."),Object(a.b)("h4",{id:"plain"},"Plain"),Object(a.b)("p",null,"Simple. Colored text on a transparent background. Make sure to set ",Object(a.b)("inlineCode",{parentName:"p"},"foreground")," for maximum enjoyment."),Object(a.b)("h4",{id:"diamond"},"Diamond"),Object(a.b)("p",null,"While Powerline works great with as single symbol, sometimes you want a segment to have a different start and end symbol.\nJust like a diamond: ",Object(a.b)("inlineCode",{parentName:"p"},"< my segment text >"),". The difference between this and plain is that the diamond symbols take the\nsegment background as their foreground color."),Object(a.b)("h3",{id:"powerline-symbol"},"Powerline symbol"),Object(a.b)("p",null,"Text character to use when ",Object(a.b)("inlineCode",{parentName:"p"},'"style": "powerline"'),"."),Object(a.b)("h3",{id:"invert-powerline"},"Invert Powerline"),Object(a.b)("p",null,"If ",Object(a.b)("inlineCode",{parentName:"p"},"true")," this swaps the foreground and background colors. Can be useful when the character you want does not exist\nin the perfectly mirrored variant for example."),Object(a.b)("h3",{id:"leading-diamond"},"Leading diamond"),Object(a.b)("p",null,"Text character to use at the start of the segment. Will take the background color of the segment as\nits foreground color."),Object(a.b)("h3",{id:"trailing-diamond"},"Trailing diamond"),Object(a.b)("p",null,"Text character to use at the end of the segment. Will take the background color of the segment as its foreground color."),Object(a.b)("h3",{id:"foreground"},"Foreground"),Object(a.b)("p",null,"Hex ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#colors"}),"color")," to use as the segment text foreground color. Also supports transparency using the ",Object(a.b)("inlineCode",{parentName:"p"},"transparent")," keyword."),Object(a.b)("h3",{id:"background"},"Background"),Object(a.b)("p",null,"Hex ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"#colors"}),"color")," to use as the segment text background color. Also supports transparency using the ",Object(a.b)("inlineCode",{parentName:"p"},"transparent")," keyword."),Object(a.b)("h3",{id:"properties"},"Properties"),Object(a.b)("p",null,"An array of ",Object(a.b)("strong",{parentName:"p"},"Properties")," with a value. This is used inside of the segment logic to tweak what the output of the segment\nwill be. Segments have the ability to define their own Properties, but there are some general ones being used by the\nengine which allow you to customize the output even more."),Object(a.b)("h4",{id:"general-purpose-properties"},"General purpose properties"),Object(a.b)("p",null,"You can use these on any segment, the engine is responsible for adding them correctly."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"prefix: ",Object(a.b)("inlineCode",{parentName:"li"},"string")),Object(a.b)("li",{parentName:"ul"},"postfix: ",Object(a.b)("inlineCode",{parentName:"li"},"string")),Object(a.b)("li",{parentName:"ul"},"ignore_folders: ",Object(a.b)("inlineCode",{parentName:"li"},"[]string"))),Object(a.b)("h5",{id:"prefix"},"Prefix"),Object(a.b)("p",null,"The string content will be put in front of the segment's output text. Useful for symbols, text or other customizations."),Object(a.b)("h5",{id:"postfix"},"Postfix"),Object(a.b)("p",null,"The string content will be put after the segment's output text. Useful for symbols, text or other customizations."),Object(a.b)("h5",{id:"ignore-folders"},"Ignore Folders"),Object(a.b)("p",null,"Sometimes you want might want to not have a segment rendered at a certain location. If so, adding the path to the\nsegment's configuration will not render it when in that location. The engine will simply skip it."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'"ignore_folders": [\n  "/super/secret/project"\n]\n')),Object(a.b)("p",null,"You can also specify a ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.regular-expressions.info/tutorial.html"}),"regular expression")," to create wildcards to exclude certain folders.\nIn the sample below, folders inside the ",Object(a.b)("inlineCode",{parentName:"p"},"/Users/posh/Projects")," path will not show the segment."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'"ignore_folders": [\n  "/Users/posh/Projects/.*"\n]\n')),Object(a.b)("p",null,"Want to only show the segment inside certain folders? Use the ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://www.regular-expressions.info/lookaround.html"}),"negative lookahead")," to only match folders\nin a certain path. Everything else will be ignored. In the sample below, only folders inside the\n",Object(a.b)("inlineCode",{parentName:"p"},"/Users/posh/Projects/")," path will show the segment."),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'"ignore_folders": [\n  "(?!/Users/posh/Projects/).*"\n]\n')),Object(a.b)("h4",{id:"colors"},"Colors"),Object(a.b)("p",null,"You have the ability to override the foreground and/or background color for text in any property that accepts it.\nThe syntax is custom but should be rather straighforward:\n",Object(a.b)("inlineCode",{parentName:"p"},"<#ffffff,#000000>this is white with black background</> <#FF479C>but this is pink</>"),". Anything between the color start\n",Object(a.b)("inlineCode",{parentName:"p"},"<#FF479C>")," and end ",Object(a.b)("inlineCode",{parentName:"p"},"</>")," will be colored accordingly."),Object(a.b)("p",null,"For example, if you want ",Object(a.b)("inlineCode",{parentName:"p"},"prefix")," to print a colored bracket which isn't the same as the segment's ",Object(a.b)("inlineCode",{parentName:"p"},"foreground"),", you can\ndo so like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'"prefix": "<#CB4B16>\u250f[</>",\n')),Object(a.b)("p",null,"If you also wanted to change the background color in the previous command, you would do so like this:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'"prefix": "<#CB4B16,#FFFFFF>\u250f[</>",\n')),Object(a.b)("p",null,"To change ",Object(a.b)("em",{parentName:"p"},"only")," the background color, just omit the first color from the above string:"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'"prefix": "<,#FFFFFF>\u250f[</>",\n')),Object(a.b)("p",null,"Oh my Posh mainly supports three different color types being"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Typical ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://htmlcolorcodes.com/color-chart/material-design-color-chart/"}),"hex colors")," (for example ",Object(a.b)("inlineCode",{parentName:"p"},"#CB4B16"),").")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"The ",Object(a.b)("inlineCode",{parentName:"p"},"transparent")," keyword which can be used to create either a transparent foreground override\nor transparent background color using the segement's foreground property.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"16 ",Object(a.b)("a",Object(o.a)({parentName:"p"},{href:"https://htmlcolorcodes.com/color-chart/material-design-color-chart/"}),"ANSI color names"),"."),Object(a.b)("p",{parentName:"li"},"These include 8 basic ANSI colors and ",Object(a.b)("inlineCode",{parentName:"p"},"default"),":"),Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"black")," ",Object(a.b)("inlineCode",{parentName:"p"},"red")," ",Object(a.b)("inlineCode",{parentName:"p"},"green")," ",Object(a.b)("inlineCode",{parentName:"p"},"yellow")," ",Object(a.b)("inlineCode",{parentName:"p"},"blue")," ",Object(a.b)("inlineCode",{parentName:"p"},"magenta")," ",Object(a.b)("inlineCode",{parentName:"p"},"cyan")," ",Object(a.b)("inlineCode",{parentName:"p"},"white")," ",Object(a.b)("inlineCode",{parentName:"p"},"default")),Object(a.b)("p",{parentName:"li"},"as well as 8 extended ANSI colors:"),Object(a.b)("p",{parentName:"li"},Object(a.b)("inlineCode",{parentName:"p"},"darkGray")," ",Object(a.b)("inlineCode",{parentName:"p"},"lightRed")," ",Object(a.b)("inlineCode",{parentName:"p"},"lightGreen")," ",Object(a.b)("inlineCode",{parentName:"p"},"lightYellow")," ",Object(a.b)("inlineCode",{parentName:"p"},"lightBlue")," ",Object(a.b)("inlineCode",{parentName:"p"},"lightMagenta")," ",Object(a.b)("inlineCode",{parentName:"p"},"lightCyan")," ",Object(a.b)("inlineCode",{parentName:"p"},"lightWhite")))),Object(a.b)("h2",{id:"full-sample"},"Full Sample"),Object(a.b)("pre",null,Object(a.b)("code",Object(o.a)({parentName:"pre"},{className:"language-json"}),'{\n  "final_space": true,\n  "blocks": [\n    {\n      "type": "prompt",\n      "alignment": "right",\n      "vertical_offset": -1,\n      "segments": [\n        {\n          "type": "time",\n          "style": "plain",\n          "foreground": "#007ACC",\n          "properties": {\n            "time_format": "15:04:05"\n          }\n        }\n      ]\n    },\n    {\n      "type": "newline"\n    },\n    {\n      "type": "prompt",\n      "alignment": "left",\n      "segments": [\n        {\n          "type": "session",\n          "style": "diamond",\n          "foreground": "#ffffff",\n          "background": "#ffb300",\n          "leading_diamond": "\\uE0B6",\n          "trailing_diamond": "\\uE0B0",\n          "properties": {\n            "postfix": " "\n          }\n        },\n        {\n          "type": "path",\n          "style": "powerline",\n          "powerline_symbol": "\\uE0B0",\n          "foreground": "#ffffff",\n          "background": "#61AFEF",\n          "properties": {\n            "prefix": " \\uE5FF ",\n            "style": "folder",\n            "ignore_folders": [\n              "/super/secret/project"\n            ]\n          }\n        },\n        {\n          "type": "git",\n          "style": "powerline",\n          "powerline_symbol": "\\uE0B0",\n          "foreground": "#193549",\n          "background": "#ffeb3b"\n        },\n        {\n          "type": "exit",\n          "style": "diamond",\n          "foreground": "#ffffff",\n          "background": "#00897b",\n          "leading_diamond": "",\n          "trailing_diamond": "\\uE0B4",\n          "properties": {\n            "display_exit_code": false,\n            "always_enabled": true,\n            "error_color": "#e91e63",\n            "color_background": true,\n            "prefix": "<#193549>\\uE0B0 \\uE23A</>"\n          }\n        }\n      ]\n    }\n  ]\n}\n')))}s.isMDXComponent=!0},99:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return u}));var o=n(0),r=n.n(o);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=r.a.createContext({}),s=function(e){var t=r.a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,u=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?r.a.createElement(u,l(l({ref:t},c),{},{components:n})):r.a.createElement(u,l({ref:t},c))}));function u(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=n[c];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);