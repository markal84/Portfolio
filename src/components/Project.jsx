import PropTypes from 'prop-types';
import { Card, CardContent, CardActions, CardMedia, Button, Typography, Link } from '@mui/material';

function Project(props) {
  const { name, desc, live, code, image, frontend, backend } = props;

  return (
    <Card sx={{ width: 550, minWidth: 300, marginTop: 2, marginBottom: 3, marginLeft: 1, marginRight: 1 }}>
      <CardMedia component="img" alt={name} height="240" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="subtitle1" component="div">
          Build with:
          <Typography variant="subtitle2">Frontend: {frontend}</Typography>
          <Typography variant="subtitle2">Backend: {backend}</Typography>
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-evenly' }}>
        <Button size="small">
          <Typography>
            <Link underline="none" color="inherit" href={live} alt={name}>
              live demo
            </Link>
          </Typography>
        </Button>
        <Button size="small">
          <Typography>
            <Link underline="none" color="inherit" href={code} alt={name}>
              code
            </Link>
          </Typography>
        </Button>
      </CardActions>
    </Card>
  );
}

export default Project;

Project.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  frontend: PropTypes.string,
  backend: PropTypes.string,
  desc: PropTypes.string,
  live: PropTypes.string,
  code: PropTypes.string,
};
