import PropTypes from 'prop-types';
import { Card, CardContent, CardActions, CardMedia, Button, Typography, Link, Box } from '@mui/material';

function Project(props) {
  const { name, desc, live, code, image, frontend, backend, features } = props;

  return (
    <Card sx={{ width: 375, minWidth: 300, marginTop: 2, marginBottom: 3, marginLeft: 1, marginRight: 1 }}>
      <CardMedia component="img" alt={name} height="297" src={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography mb={2} variant="subtitle1" component="div">
          Build with:
          <Typography variant="subtitle2">Frontend: {frontend}</Typography>
          <Typography variant="subtitle2">Backend: {backend}</Typography>
        </Typography>
        <Typography variant="body2" color="text.secondary" mb={2}>
          {desc}
        </Typography>
        <Box>
          <Typography variant="body2" color="text.secondary" gutterBottom>
            Key Features:
          </Typography>
          <Typography component="ul" variant="body2" color="text.secondary">
            {features.map((feature, idx) => {
              return <li key={idx}>{feature}</li>;
            })}
          </Typography>
        </Box>
      </CardContent>
      <CardActions sx={{ justifyContent: 'space-evenly' }}>
        <Button size="small">
          <Typography>
            <Link underline="none" color="inherit" href={live} alt={name} target="_blank">
              live demo
            </Link>
          </Typography>
        </Button>
        <Button size="small">
          <Typography>
            <Link underline="none" color="inherit" href={code} alt={name} target="_blank">
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
