import SectionContainer from '../components/SectionContainer';
import { Typography } from '@mui/material';

const cvStyle = {
  marginTop: '65px',
};

function Cv() {
  return (
    <SectionContainer sectionId="cv" sectionStyle={cvStyle}>
      <Typography variant="h5">Dowonload CV</Typography>
    </SectionContainer>
  );
}

export default Cv;
