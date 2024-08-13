import { Box, Container, Grid } from "@mui/material"
import css from './Content2.module.css'
import Content2Card from "../../SharedComponent/Content2Card/Content2Card"
import img1 from '../../../src/assets/Images/card2women.jpeg'
import img2 from '../../../src/assets/Images/card2men.jpeg'
import img3 from '../../../src/assets/Images/card2accesories.jpeg'
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
                        <Grid item xs={12} sm={12} md={3.9} lg={3.9} xl={3.9} className={css.Grid_card}><Content2Card ImgSrc={img1} title='20% Off On Tank Tops' btn='Shop Now'/></Grid>
                        <Grid item xs={12} sm={12} md={3.9} lg={3.9} xl={3.9} className={css.Grid_card}><Content2Card ImgSrc={img2} title='Latest Eyewear For You' btn='Shop Now'/></Grid>
                        <Grid item xs={12} sm={12} md={3.9} lg={3.9} xl={3.9} className={css.Grid_card}><Content2Card ImgSrc={img3} title="Let's Lorem Suit Up!" btn='Check Out'/></Grid>
                    </Grid>
            </Container>
        </Box>
        </>
    )
}
export default Content2