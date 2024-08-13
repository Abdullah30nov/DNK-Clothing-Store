import { Box, Button, Container, Typography } from "@mui/material"
import css from './Contact.module.css'
import ResponsiveAppBar from "../../SharedComponent/Header/Header"
import Footer from "../../SharedComponent/Footer/Footer"
import { Link } from "react-router-dom"
import { FaGithub } from "react-icons/fa";
const Contact=()=>{
    return (
        <>
        <Box className={css.main}>
            <ResponsiveAppBar bgcolor='#29536b6e' bxshadow='none'/>
            <Box className={css.main_text}>
            <Container>
                <Typography class={css.text_para}>
                Contact US 
                </Typography><br />
                <Box className={css.button_group}>
                <Button><Link className={css.link1} to='https://www.github.com/Abdullah30nov/E-Commerce-Clothing-Landing-Page'><FaGithub/> Source Code</Link></Button>
                <Button><Link className={css.link} to='https://www.github.com/Abdullah30nov'><FaGithub/> Github</Link></Button>
                </Box>
            </Container>
            </Box>
        </Box>
        <Footer/>
        </>
    )
}
export default Contact