import ProjectsList from '../components/ProjecstList';
import { projects } from '../db/globals';

function Home() {
  return <ProjectsList cards={projects} />;
}

export default Home;
