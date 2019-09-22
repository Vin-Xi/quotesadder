import { makeStyles } from '@material-ui/core/styles';
import crop from './crop.jpg'
export const useStyles=makeStyles(theme=>({
    body:{
        backgroundImage:`url(${crop})`,
        height:"690px",
        width:"100%"
    },
    root:{
        background: 'linear-gradient(100deg, #D8BFD8	 3%, #800080	 90%)',
    },
    list:{
        marginTop:theme.spacing(5),
        
    },
    search:{
       margin:theme.spacing(5)
    },
    Box:{   
       border:"solid",
       borderWidth:1,
        margin:theme.spacing(4)
    }
}))