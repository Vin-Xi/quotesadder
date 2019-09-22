import { withStyles, TextField } from '@material-ui/core'

export const CssTextField=withStyles({
    root:{
        '& input.MuiInputBase-input':{
            backgroundColor:"white",
        },

        
          '& label.Mui-focused': {
    
      color: 'green',
    },
    '& .MuiInput-underline:after': {
      borderBottomColor: 'green',
    },
    backgroundColor:'white'
    }
})(TextField)

export const CssText=withStyles({

})