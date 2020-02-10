import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'


const AccomodationNotice = () => {
    return (
        <div style={{ overflow: "hidden" }}>
            <Grid justify="center" container spacing={8}>
                <Grid xs={8} lg={4} item>
                    <Card style={{ width: "100%" }}>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                Contact for Accomodation
                                </Typography>
                            <Typography secondary component="p">
                                Get accomodation in GEC Hostels, contact no.
                                </Typography>
                        </CardContent>
                    </Card>
                </Grid >
            </Grid>
        </div>
    )
}


export default AccomodationNotice



