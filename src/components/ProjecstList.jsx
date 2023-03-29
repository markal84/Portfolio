import Project from './Project';
import PropTypes from 'prop-types';

function ProjectsList(props) {
  return (
    <div className="ProjectsContainer">
      {props.cards.map((card) => {
        const { id, name, stack, desc } = card;
        const { live, code } = card.links;
        return <Project key={id} name={name} stack={stack} desc={desc} live={live} code={code} />;
      })}
    </div>
  );
}

export default ProjectsList;

ProjectsList.propTypes = {
  cards: PropTypes.array,
};
