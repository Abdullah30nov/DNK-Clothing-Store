import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import css from './Content3Card.module.css'
import { useNavigate } from 'react-router-dom';
import { Box } from '@mui/material';
export default function Content3Card({ImgSrc,title,price,id}) {
  const navigate = useNavigate()
  return (
    <Card sx={{ maxWidth: '100%' ,height:'auto',textAlign:'center'}}>
      <Box sx={{
        backgroundImage: `url(${ImgSrc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height:'350px',
        display: 'flex',
    alignItems: 'flex-end',
      }} className={css.card}>

      {/* <CardMedia
        sx={{ height: 350 ,width:'100%'}}
        image={ImgSrc}
        title="green iguana"
        /> */}
      <Box className={css.main}>
      <CardContent>
        <Typography gutterBottom variant="p" component="div" sx={{fontFamily:'sans-serif',fontWeight:'bolder'}}>
          {title.slice(0,26)}
        </Typography>
        <Typography variant="body2" color="white">
          {'$'+price}
        </Typography>
      </CardContent>
      <CardActions>
      <Button class={css.btn} onClick={()=>navigate(`/Products/${id}`)}>SHop Now</Button>
      </CardActions>
      </Box>
        </Box>

      {/* <CardContent>
        <Typography gutterBottom variant="p" component="div" sx={{fontFamily:'sans-serif',fontWeight:'bolder'}}>
          {title.slice(0,26)}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {'$'+price}
        </Typography>
      </CardContent>
      <CardActions>
      <Button class={css.btn} onClick={()=>navigate(`/product/${id}`)}>SHop Now</Button>
      </CardActions> */}
    </Card>
  );
}
