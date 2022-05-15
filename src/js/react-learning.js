import React from "react";

const link = React.createElement(
    "a",
    {
        href: "https://interia.pl",
        target: "_blank",
        rel: "noreferrer noopener",

    },
    "Go to interia.pl"
);
document.querySelector("body").append(link);