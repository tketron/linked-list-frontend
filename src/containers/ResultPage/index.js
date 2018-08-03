import { connect } from 'react-redux';
import ResultPage from '../../components/ResultPage';

function mapStateToProps(reduxState) {
  return {
    searchType: reduxState.search.type,
    searchResults: reduxState.search.results
  };
}

export default connect(mapStateToProps)(ResultPage);
