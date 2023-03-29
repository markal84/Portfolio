import PropTypes from 'prop-types';

function Project(props) {
  const { name, stack, desc, live, code } = props;

  return (
    <div className="ProjectCard">
      <p>Screenshots of project(img src link/path)</p>
      <div className="ProjectCard--details">
        <p>{name}</p>
        <p>{stack}</p>
        <p>{desc}</p>
      </div>
      <div className="ProjectCard--links">
        <p>Live (link){live}</p>
        <p>Github (link){code}</p>
      </div>
    </div>
  );
}

export default Project;

Project.propTypes = {
  id: PropTypes.number,
  screen: PropTypes.string,
  name: PropTypes.string,
  stack: PropTypes.string,
  desc: PropTypes.string,
  live: PropTypes.string,
  code: PropTypes.string,
};
