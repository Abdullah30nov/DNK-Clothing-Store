import { Box, Container, Grid, Typography } from "@mui/material";
import css from './Content3.module.css';
import { useEffect, useState } from "react";
import axios from "axios";
import Content3Card from "../../SharedComponent/Content3Card/Content3Card";
import CircularIndeterminate from "../../SharedComponent/Progress/Progress";

const Content3 = () => {
    const [Product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    const ApiData = async () => {
        try {
            const data = await axios.get('https://fakestoreapi.com/products/');
            setProduct(data.data);
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
        <Box className={css.main}>
            <Container>
                <Typography class={css.text}>Featured Products</Typography>
                {loading ? (<>
                    <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <CircularIndeterminate />
                    </Box>
                </>
                ) : (
                    <Grid container className={css.Grid}>
                        {Product.map((e, i) => (
                            <Grid item className={css.Grid_Card} xs={11} sm={5.9} md={2.9} lg={2.9} xl={2.9} key={i}>
                                <Content3Card ImgSrc={e.image} title={e.title} price={e.price} id={e.id} />
                            </Grid>
                        ))}
                    </Grid>
                )}
            </Container>
        </Box>
    );
};

export default Content3;
