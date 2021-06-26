import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import styles from './card.module.scss';
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles({
    root: {
        maxWidth: 325,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function CardComponent({ title, icon }) {
    const classes = useStyles();


    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant="h5" component="h2">
                    <span className={styles.CardTitle}> {title}</span>
                </Typography>
                <Typography variant="body2" component="p">
                    <div className={styles.Flex}>
                        <CardMedia
                            component="img"
                            alt="sudo"
                            image={icon}
                            style={{
                                height: "20rem",
                                width: "30rem",
                                objectFit: "contain",
                            }}
                        />
                    </div>
                </Typography>
            </CardContent>
            <CardActions>
            </CardActions>
        </Card>
    );
}