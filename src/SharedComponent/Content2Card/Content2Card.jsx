import { Box, Button, Typography } from "@mui/material"
import css from './Content2Card.module.css'
const Content2Card = ({ ImgSrc, btn, title }) => {
    return (
        <>
            <Box sx={{
                backgroundImage: `url(${ImgSrc})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                width: '100%',
                height: '500px',
                fontFamily: 'sans-serif',
                textAlign: 'center'
            }}>
            <Box class={css.center_box}>
                <Typography class={css.text}>
                    {title}
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error, in.</p><br />
                    <Button class={css.btn}>{btn}</Button>
                </Typography>
            </Box>
        </Box >
        </>
    )
}
export default Content2Card