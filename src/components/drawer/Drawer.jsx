import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
// import { Link } from "react-router-dom";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";

import styles from "./drawer.module.scss";
import { IconButton } from "@material-ui/core";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: "auto",
    },
});


export default function Drawer() {
    const links = [
        {
            title: "Home",
            Path: "/",
            cName: "route-link",

        },
        {
            title: "Contact",
            Path: "/contact",
            cName: "route-link",

        },
        {
            title: "About",
            Path: "/about",
            cName: "route-link",

        },
        {
            title: "Our Team",
            Path: "/team",
            cName: "route-link",

        },
    ];
    const classes = useStyles();

    const [state, setState] = React.useState({
        left: false,
    });

    const toggleDrawer = (anchor, open) => (event) => {
        if (
            event &&
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === "top" || anchor === "bottom",
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <div className={styles.mainMenu}>
                    <span className={styles.menuText}>&nbsp;&nbsp;MENU</span>
                    <button onClick={toggleDrawer("left", true)} className="close-btn">
                        <i className="fa fa-times"></i>
                    </button>
                </div>


                <div className={styles.drawerNavContainer}>
                    <ul className={styles.linkContainer}>
                        {links.map((items, index) => (
                            <div>
                                <li className={items.cName}>
                                    <div className={styles.linkStyle}>

                                        <div className={styles.texts}>
                                            <span>{items.title}</span>
                                        </div>
                                    </div>
                                </li>

                            </div>
                        ))}
                    </ul>
                </div>
            </List>
        </div>
    );

    return (
        <div>
            {
                <React.Fragment>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="menu"
                        onClick={toggleDrawer("left", true)}
                    >
                        <span className={styles.bars}>
                            <i className="fa fa-bars"></i>
                        </span>
                    </IconButton>

                    <SwipeableDrawer
                        anchor="left"
                        open={state["left"]}
                        onClose={toggleDrawer("left", false)}
                        onOpen={toggleDrawer("left", true)}
                    >
                        {list("left")}
                    </SwipeableDrawer>
                </React.Fragment>
            }
        </div>
    );

}