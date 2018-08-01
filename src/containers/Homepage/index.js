import { connect } from 'react-redux';
import Homepage from '../../components/Homepage';
import { fetchJobsRequest } from '../../store/actions/jobs';
import { fetchCurrentUser } from '../../store/actions/currentUser';

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser,
    jobs: reduxState.jobs
  };
}

export default connect(
  mapStateToProps,
  { fetchJobsRequest, fetchCurrentUser }
)(Homepage);
