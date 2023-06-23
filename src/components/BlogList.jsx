import { useState } from 'react';
import BlogArticle from './BlogArticle';
import { Grid, Pagination, PaginationItem, Link } from '@mui/material';

export default function BlogList(props) {
  const { articles } = props;
  const articlesPerPage = 4;
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(articles.length / articlesPerPage);
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const displayedArticles = articles.slice(startIndex, endIndex);

  function handlePageChange(event, page) {
    setCurrentPage(page);
  }

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
      {displayedArticles.map((article) => {
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
      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        renderItem={(item) => <PaginationItem component={Link} to={`/blogs?page=${item.page}`} {...item} />}
      />
    </Grid>
  );
}
