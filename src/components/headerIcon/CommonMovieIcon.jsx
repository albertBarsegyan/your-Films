import MovieIcon from '@material-ui/icons/Movie';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';

const buttonStyles = makeStyles({
  primary: {
    color: 'white',
    fontSize: '2rem',
    background: 'green',
    borderRadius: '0',
    padding: '10px 20px',
    background: 'white',
    color: 'green',
    '&:hover': {
      background: 'green',
      color: 'white',
    },
  },
});
export default function CommonMovieIcon() {
  const classes = buttonStyles();
  return (
    <IconButton className={classes.primary}>
      <MovieIcon />
    </IconButton>
  );
}
