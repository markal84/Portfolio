import Project from './Project';
import PropTypes from 'prop-types';
import { Grid } from '@mui/material';

function ProjectsList(props) {
  return (
    <Grid id="projects" component="section" container justifyContent="center" direction="row" sx={{ mt: 2, mb: 1 }}>
      {props.cards.map((card) => {
        const { id, name, desc, image, fullDesc } = card;
        const { live, code } = card.links;
        const { frontend, backend } = card.stack;
        return (
          <Project
            key={id}
            name={name}
            frontend={frontend}
            backend={backend}
            desc={desc}
            fullDesc={fullDesc}
            live={live}
            code={code}
            image={image}
          />
        );
      })}
    </Grid>
  );
}

export default ProjectsList;

ProjectsList.propTypes = {
  cards: PropTypes.array,
};
