const version = 'v1';
const baseUrl = `https://localhost:3000/api/${version}/`;

export const API = {
  GET_ARTICLE: `${baseUrl}/articles/\${id}`,
  GET_ARTICLES: `${baseUrl}/articles`,
  GET_ARTICLES_BY_TAG: `${baseUrl}/tags/\${id}/articles`,
};
