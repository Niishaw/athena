import { alpha } from '@mui/material/styles';
import { makeStyles } from '@mui/material/styles';
import { Theme } from '@mui/material/styles'

const drawerWidth = 240;

const newStyle = {
    appBar: (theme) => ({
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leaningScreen
        })
    })
}

const barStyles = makeStyles((theme:Theme) => ({
    appBarSpacing: {
        ...theme.mixins.toolbar
    },

    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen
        })
 },

 appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen
    })
 },

 menuButton: {
    marginRight: 36
 },

 hide: {
    display: 'none'
 },

 title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
        display: 'block'
    }
 },

 search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
backgroundColor: alpha(theme.palette.common.white, 0.15),
'&:hover': {
  backgroundColor: alpha(theme.palette.common.white, 0.25),
 },
 marginLeft: 0,
 width: '100%',
 [theme.breakpoints.up('sm')]: {
   marginLeft: theme.spacing(1),
   width: 'auto',
 },
},

searchIcon: {
padding: theme.spacing(0, 2),
height: '100%',
position: 'absolute',
pointerEvents: 'none',
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
},
inputRoot: {
color: 'inherit',
},
inputInput: {
padding: theme.spacing(1, 1, 1, 0),
// vertical padding + font size from searchIcon
paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
transition: theme.transitions.create('width'),
width: '100%',
[theme.breakpoints.up('sm')]: {
  width: '12ch',
  '&:focus': {
    width: '20ch',
  },
},
},
avatar: {
    marginLeft: theme.spacing(1)
},
avatarName: {
    textTransform: "none"
}
}))

export default barStyles
export {barStyles,  newStyle}