import { Box, Button, Container, Typography } from "@mui/material"
import css from './About.module.css'
import ResponsiveAppBar from "../../SharedComponent/Header/Header"
import Footer from "../../SharedComponent/Footer/Footer"
import { Link } from "react-router-dom"
import { FaGithub} from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import FacebookIcon from '@mui/icons-material/Facebook';
import LanguageIcon from '@mui/icons-material/Language';
const About=()=>{
    return (
        <>
        <Box className={css.main}>
            <ResponsiveAppBar bgcolor='#29536b6e' bxshadow='none'/>
            <Box className={css.main_text}>
            <Container>
                <Typography class={css.text_para}>
                About US 
                </Typography><br />
                <Box className={css.button_group}>
                <Button>Follow Us</Button>
                <Button>
                    <Link className={css.link} to='https://www.github.com/Abdullah30nov'><FaGithub/></Link>
                    <Link className={css.link} to='https://www.github.com/Abdullah30nov'><FacebookIcon/></Link>
                    <Link className={css.link} to='https://websitedemos.net/brandstore-02/'><LanguageIcon/></Link>
                    <Link className={css.link} to='https://www.github.com/Abdullah30nov'><FaLinkedin/></Link>
                </Button>
                </Box>
            </Container>
            </Box>
        </Box>
        <Footer/>
        </>
    )
}
export default About