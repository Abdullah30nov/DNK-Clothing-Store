import { Box, Button, Container, Grid, Typography } from "@mui/material"
import css from './Content4.module.css'
import global from '../../assets/Images/global.jpeg'
import lock from '../../assets/Images/lock.jpeg'
import best from '../../assets/Images/tag.jpeg'
import quality from '../../assets/Images/quality.jpeg'
const Content4=()=>{
    return(
        <>
            <Container className={css.container}>
        <Box className={css.main}>
                <Box className={css.text_box}>
                    <Typography className={css.text}>
                    <h3>Limited Time Offer</h3>
                    <h1 style={{fontSize:'50px'}}>Special Edition</h1><br />
                    <p>
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, <br /> luctus nec ullamcorper mattis, pulvinar dapibus leo. </p><br /><h3> Buy This T-shirt At 20% Discount, Use Code OFF20</h3><br />
                    <Button class={css.btn}>SHop Now</Button>
                    </Typography>
                </Box>
        </Box>
            <Grid container className={css.Grid}>
                <Grid className={css.Gird_child} itemxs={11} sm={5} md={5} lg={2.9} xl={2.9}>
                    <img src={global} alt="" />
                    <h4><b>Worldwide Shipping</b></h4><br />
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </Grid>
                <Grid className={css.Gird_child} itemxs={11} sm={5} md={5} lg={2.9} xl={2.9}>
                    <img src={quality} alt="" />
                    <h4><b>Best Quality</b></h4><br />
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </Grid>
                <Grid className={css.Gird_child} itemxs={11} sm={5} md={5} lg={2.9} xl={2.9}>
                    <img src={best} alt="" />
                    <h4><b>Best Offers</b></h4><br />
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </Grid>
                <Grid className={css.Gird_child} itemxs={11} sm={5} md={5} lg={2.9} xl={2.9}>
                    <img src={lock} alt="" />
                    <h4><b>Secure Payments</b></h4><br />
                    <p>It elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.</p>
                </Grid>
            </Grid>
            </Container>
        </>
    )
}
export default Content4