import BlogArticle from './BlogArticle';
import { Grid } from '@mui/material';

export default function BlogList(props) {
  return (
    <Grid
      id="blogs"
      component="section"
      container
      spacing={4}
      justifyContent="center"
      direction="row"
      sx={{ mt: 2, mb: 1 }}
    >
      {props.articles.map((article) => {
        const { id, date, title, desc, fullDesc, project, summary } = article;
        return (
          <BlogArticle
            key={id}
            title={title}
            date={date}
            desc={desc}
            fullDesc={fullDesc}
            project={project}
            summary={summary}
          />
        );
      })}
    </Grid>
  );
}
