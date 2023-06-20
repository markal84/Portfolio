import SectionContainer from '../components/SectionContainer';
import { Typography } from '@mui/material';

const blogStyle = {
  marginTop: '65px',
};

function Blog() {
  return (
    <SectionContainer sectionId="blog" sectionStyle={blogStyle}>
      <Typography variant="h5">Coming soon...</Typography>
    </SectionContainer>
  );
}

export default Blog;
