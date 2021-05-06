import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },

    title: {
        fontSize: 18,
        color : 'black',
        fontWeight : 500,
        letterSpacing : '0.1rem'
    },
    article_content: {
        marginTop: 22,
    },
});

export default function MyCard({content, title}) {
    const classes = useStyles();


    return (
        <Card className={classes.root} variant="outlined">
            <CardContent>
                <Typography variant='h2' className={classes.title}  gutterBottom>
                    {title}
                </Typography>
                <Typography variant="body2" component="p" className={classes.article_content} >
                    {content}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}
