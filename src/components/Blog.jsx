import { Collapse, Grid, IconButton, Paper, Typography } from "@material-ui/core";
import { ExpandLess, ExpandMore } from "@material-ui/icons";
import { useState } from "react";

function Blog({ title, content }) {
    const [expanded, setExpanded] = useState(false);

    return (
        <Grid style={{ margin: 10 }} item xs={12}>
            <Paper style={{ backgroundColor: 'rgb(124, 256, 98)', borderRadius: 5 }} elevation={8}>
                <Grid container direction="column">
                    <Grid item container>
                        <Grid
                            item xs={10}
                            container alignItems="center"
                        >
                            <Typography style={{ marginLeft: 10 }}>{title}</Typography>
                        </Grid>
                        <Grid item xs={2} container justify="space-around">
                            <IconButton onClick={() => setExpanded(!expanded)}>
                                {expanded ? <ExpandLess /> : <ExpandMore />}
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Grid className="blog-content" item>
                        <Collapse in={expanded} timeout="auto">
                            <Typography style={{ marginLeft: 10 }} className="weak-text">{content}</Typography>
                        </Collapse>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

export default Blog;
