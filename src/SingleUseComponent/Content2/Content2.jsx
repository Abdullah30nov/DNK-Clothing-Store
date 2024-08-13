import { Box, Container, Grid } from "@mui/material"
import css from './Content2.module.css'
import Content2Card from "../../SharedComponent/Content2Card/Content2Card"
const Content2=()=>{
    return(
        <>
        <Box class={css.main} >
            <Container>
                <Box className={css.logos}>
                <Box className={css.Box}><img src="../../../src/assets/Images/client1.jpeg" alt="" /></Box>
                <Box className={css.Box}><img src="../../../src/assets/Images/client2.jpeg" alt="" /></Box>
                <Box className={css.Box}><img src="../../../src/assets/Images/client3.jpeg" alt="" /></Box>
                <Box className={css.Box}><img src="../../../src/assets/Images/client4.jpeg" alt="" /></Box>
                </Box><br />
                    <Grid container className={css.Grid_box} >
                        <Grid item xs={12} sm={12} md={3.9} lg={3.9} xl={3.9} className={css.Grid_card}><Content2Card ImgSrc='../../../src/assets/Images/card2women.jpeg' title='20% Off On Tank Tops' btn='Shop Now'/></Grid>
                        <Grid item xs={12} sm={12} md={3.9} lg={3.9} xl={3.9} className={css.Grid_card}><Content2Card ImgSrc='../../../src/assets/Images/card2men.jpeg' title='Latest Eyewear For You' btn='Shop Now'/></Grid>
                        <Grid item xs={12} sm={12} md={3.9} lg={3.9} xl={3.9} className={css.Grid_card}><Content2Card ImgSrc='../../../src/assets/Images/card2accesories.jpeg' title="Let's Lorem Suit Up!" btn='Check Out'/></Grid>
                    </Grid>
            </Container>
        </Box>
        </>
    )
}
export default Content2