//import React from 'react';
import React, {useState} from 'react';
import image from './img/pics/81ApkoF3KZL._AC_SS350_.png'
//import  './js/jquery-3.2.1.js';
//import  './js/materialize.js';

import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';





const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
      margin:5
  },
  media: {
    height: 0,
    paddingTop: '70%', 
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
}));






const Product_all=({car})=>{
    
        const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = (e) => {
    setExpanded(!expanded);
  };

     
    
    console.log(car)
    return(
        <div>
        {car.map((cars,index)=>{
         return(
         
         <div className="col l3 m3 s6">

         
         
         
         
        <Card className={classes.root} key={cars.name}>
     
      <CardMedia
        className={classes.media}
        image={cars.image}
        title={cars.name}
      />
      
      <CardActions disableSpacing >
        <IconButton aria-label="add to favorites">
          {cars.name}
        </IconButton>
        <IconButton aria-label="share">

        </IconButton>
        <IconButton key={cars.name} 
          className={clsx(classes.expand, {
            [classes.expandOpen]: !cars.show,
          })}
           onClick={(e)=>handleExpandClick(console.log(cars), cars.show=!cars.show)}
          aria-expanded={cars.show}
       
>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={cars.show} key={cars.name} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph><hr/></Typography>
          <Typography paragraph>
             At E-mador, we have the best car air conditioning motors for the following models of {cars.name}
          </Typography>
          
          
        </CardContent>
      </Collapse>
    </Card>
         
         
         
         
         
         
        
        
        

    </div>

         
         )
        })}
        
</div>
    

    
    )
}

export default Product_all;