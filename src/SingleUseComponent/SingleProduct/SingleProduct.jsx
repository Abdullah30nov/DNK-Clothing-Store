import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ResponsiveAppBar from "../../SharedComponent/Header/Header"
import Footer from "../../SharedComponent/Footer/Footer"
import { Box, Button, Container, Grid, Typography } from "@mui/material"
import css from './SingleProduct.module.css'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import ChatIcon from '@mui/icons-material/Chat';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CircularIndeterminate from "../../SharedComponent/Progress/Progress"
const SingleProducts = () => {
    const { id } = useParams()
    let [Products, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const ApiData = async () => {
        try {
            const data = await axios.get(`https://fakestoreapi.com/products/${id}`);
            setProduct([data.data]);
        } catch (error) {
            console.error("Error fetching data: ", error);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        ApiData();
    }, []);
    return (
        <>
            <ResponsiveAppBar />
            <br /><br /><br /><br /><br />
            <Container className={css.main}>
                <Grid container className={css.main1}>
                    {loading ? <>
                        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                            <CircularIndeterminate />
                        </Box>
                    </>
                    :
                       Products.map((e, i) =>  (
                                <>
                                    <Grid item xs={12} sm={7} md={5.9} lg={6} xl={6} key={i} className={css.grid_box}>
                                        <img src={e.image} alt="" />
                                    </Grid>
                                    <Grid item xs={12} sm={11} md={5.9} lg={6} xl={6} className={css.grid_box}>
                                        <Typography>
                                            <h1>{e.title}</h1>
                                        </Typography>
                                        <Typography>
                                            <h5>{e.description.slice(0, 250)}</h5>
                                        </Typography>
                                        <Box className={css.eprice}>
                                            <Box>
                                            <Button disableRipple className={css.price}>{'$' + e.price}</Button>
                                            <Button disableRipple className={css.price}>{'rating ' + e.rating.rate}</Button>
                                                </Box><Box className={css.heart}>
                                            <Button disableRipple className={css.price}><FavoriteBorderIcon/></Button>
                                                </Box>
                                        </Box>
                                        <Box className={css.elinks}>
                                            <Button className={css.Links}><LocalPhoneIcon /> Show Phone number</Button>
                                            <Button className={css.Links}><ChatIcon /> Chat</Button>
                                            <Button className={css.Links}><AddShoppingCartIcon /> Add to Cart</Button>
                                        </Box>
                                    </Grid>
                                </>
                            ))
                        }
                </Grid>
            </Container>
            <Footer />
        </>
    )
}

export default SingleProducts