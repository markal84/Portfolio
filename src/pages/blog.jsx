import SectionContainer from '../components/SectionContainer';
import { blogArticles } from '../db/blogArticles';
import BlogList from '../components/BlogList';

const blogStyle = {
  marginTop: '65px',
};

function Blog() {
  return (
    <SectionContainer sectionId="blog" sectionStyle={blogStyle}>
      <BlogList articles={blogArticles} />
    </SectionContainer>
  );
}

export default Blog;
