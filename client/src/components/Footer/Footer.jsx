import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    footer: {
        fontSize: "0.75rem",
        color: "#7a7a7a",
        textAlign: "center",
    },
}));

function Footer() {

    const classes = useStyles();

    const year = new Date().getFullYear();

    return (
        <footer className={classes.footer}>
            <p>Copyright {year} by AskIT. All Rights Reserved.</p>
        </footer>
    );
}

export default Footer;