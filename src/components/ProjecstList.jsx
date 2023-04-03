import Project from './Project';
import PropTypes from 'prop-types';
import { Unstable_Grid2 } from '@mui/material';

function ProjectsList(props) {
  return (
    <Unstable_Grid2 xs={12} md={6} spacing={2} direction="row">
      {props.cards.map((card) => {
        const { id, name, stack, desc, image } = card;
        const { live, code } = card.links;
        return <Project key={id} name={name} stack={stack} desc={desc} live={live} code={code} image={image} />;
      })}
    </Unstable_Grid2>
  );
}

export default ProjectsList;

ProjectsList.propTypes = {
  cards: PropTypes.array,
};
