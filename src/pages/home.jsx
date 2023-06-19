import ProjectsList from '../components/ProjecstList';
import { projects } from '../db/globals';
import About from '../components/About';

function Home() {
  return (
    <>
      <About />
      <ProjectsList cards={projects} />
    </>
  );
}

export default Home;
