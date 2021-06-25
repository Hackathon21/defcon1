import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import styles from "./navbar.module.scss";
import Drawer from "../drawer/Drawer.jsx";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(4.5),
    },
    title: {
        flexGrow: 1,
    },
}));

export default function Navbar() {
    const classes = useStyles();
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);

    return (
        <div>
            <div className={classes.root}>
                <AppBar
                    position="static"
                    style={{ background: "#393e46", width: "100vw" }}
                >
                    <Toolbar>
                        <Drawer onClick={showSidebar} />

                        <Typography variant="h6" className={classes.title}>

                            <div className={styles.navCsi}>
                                <img
                                    src="https://seeklogo.com/images/D/defqon-1-logo-8DE9EDE080-seeklogo.com.png"
                                    width="40rem"
                                    height="30rem"
                                    alt="defcon"
                                ></img>

                                <h5 className={styles.navCsiText}>DEFCON</h5>
                            </div>

                        </Typography>

                    </Toolbar>
                </AppBar>
            </div>
            <div className="navbar-filler"></div>
        </div>
    );
}
