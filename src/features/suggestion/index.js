import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  fetchSuggestion,
  selectError,
  selectLoading, selectSuggestion,
} from './suggestion.slice';
import './suggestion.css';
  // Task 18: Import the `selectSuggestion()` selector from the suggestion slice


  export default function Suggestion() {
    const {imageUrl, caption} = useSelector(selectSuggestion);
    const loading = useSelector(selectLoading);
    const error = useSelector(selectError);
    const dispatch = useDispatch();
  // Task 19: Call useSelector() with the selectSuggestion() selector
  // The component needs to access the `imageUrl` and `caption` properties of the suggestion object.


  useEffect(() => {
    async function loadSuggestion() {
      await dispatch(fetchSuggestion())
    }
    loadSuggestion();
  }, [dispatch]);
      // Task 20: Dispatch the fetchSuggestion() action creator
  

      let render;
      if (loading) {
        render = <h3>Loading...</h3>;
      } else if (error) {
        render = <h3>Sorry, we're having trouble loading the suggestion.</h3>;
      } else {
        render = (
          <>
            <img alt={caption} src={imageUrl} />
            <p>{imageUrl}</p>
          </>
        );
      }
    // Task 21: Enable the two JSX lines below needed to display the suggestion on the page

    

  return (
    <section className="suggestion-container">
      <h2>Suggestion of the Day</h2>
      {render}
    </section>
  );
}
