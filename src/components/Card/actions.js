export const fetchAndSetCard = ({ id }) => async (dispatch) => {
  const searchTerm = "art";
  const fetchUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&limit=50&api_key=9XVJXMWpaIfCbPWQYsrSiTWl5jUWi0op`;

  const response = await fetch(fetchUrl);
  const incomingData = await response.json();
  const { data } = incomingData;

  const randomIndex = Math.floor(Math.random() * data.length);
  const result = data[randomIndex];

  dispatch({
    type: "CARD_CONTENT_SELECTED",
    payload: { id, url: result.images.fixed_width.url },
  });
};
