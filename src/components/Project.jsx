import PropTypes from 'prop-types';
import { Card, CardContent, CardActions, CardMedia, Button, Typography } from '@mui/material';

function Project(props) {
  const { name, stack, desc, live, code, image } = props;

  return (
    <Card sx={{ maxWidth: 450, marginTop: 2, marginBottom: 3, marginLeft: 1, marginRight: 1 }}>
      <CardMedia component="img" alt={name} height="240" image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="subtitle2" component="div">
          {stack}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {desc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{live} (github)</Button>
        <Button size="small">{code} (github)</Button>
      </CardActions>
    </Card>
  );
}

export default Project;

Project.propTypes = {
  id: PropTypes.number,
  image: PropTypes.string,
  name: PropTypes.string,
  stack: PropTypes.string,
  desc: PropTypes.string,
  live: PropTypes.string,
  code: PropTypes.string,
};
