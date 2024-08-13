import { Box, Button, Container, Typography } from "@mui/material"
import css from './Display.module.css'
import ResponsiveAppBar from "../../SharedComponent/Header/Header"
const Display=()=>{
    return (
        <>
        <Box className={css.main}>
            <ResponsiveAppBar bgcolor='#29536b6e' bxshadow='none'/>
            <Box className={css.main_text}>
            <Container>
                <Typography class={css.text_para}>
                Raining Offers For <br/>Hot Summer! <br /><span className={css.para_off}>25% Off On All Products</span>
                </Typography><br />
                <Box className={css.button_group}>
                <Button>Shop Now</Button>
                <Button>Find More</Button>
                </Box>
            </Container>
            </Box>
        </Box>
        </>
    )
}
export default Display