import { Box, Button, Container, Grid, TextField, Typography } from "@mui/material"
import css from './Footer.module.css'
import image from '../../assets/Images/dnklogo.jpeg'
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer=()=>{
    return(
        <>
        <Box className={css.main}>
            <Container>
                <Typography class={css.footer_heading}>
                SALE UP TO 70% OFF FOR ALL CLOTHES & FASHION ITEMS, ON ALL BRANDS.
                </Typography><hr />
                <Grid container className={css.footer_boxes}>
                    <Grid item xs={11} sm={3} md={3} lg={3} xl={3} className={css.grid}>
                        <img src={image} alt="" /><br />
                        The best look anytime, anywhere.
                    </Grid>
                    <Grid item xs={11} sm={3} md={3} lg={3} xl={3} className={css.grid}>
                        <ul>
                            <li>For Her</li>
                            <li>Women Jeans</li>
                            <li>Tops and Shirts</li>
                            <li>Women Jackets</li>
                            <li>Heels and Flats</li>
                            <li>Women Accessories</li>
                        </ul>
                    </Grid>
                    <Grid item xs={11} sm={3} md={3} lg={3} xl={3} className={css.grid}>
                    <ul>
                            <li>For Him</li>
                            <li>Men Jeans</li>
                            <li>Men Shirts</li>
                            <li>Men Jackets</li>
                            <li>Men Shoes</li>
                            <li>Men Accessories</li>
                        </ul>
                    </Grid>
                    <Grid item xs={11} sm={3} md={3} lg={3} xl={3} className={css.grid}>
                        Subscribe <br />
                        <TextField label="Enter Email Address..." className={css.TextField} variant="outlined"/><br />
                        <Button variant="contained">Subscribe</Button>
                    </Grid>
                </Grid><hr />
                <Box className={css.copyright_sec}>
                    <Box>Copyright © 2024. Created by Abdullah Bin Aslam</Box>
                    <Box sx={{fontSize:'30px',color:'black' }}><Link to='https://github.com/Abdullah30nov'><FaGithub/></Link></Box>
                </Box>
            </Container>
        </Box>
        </>
    )
}
export default Footer