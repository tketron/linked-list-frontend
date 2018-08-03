import { connect } from 'react-redux';
import JobCard from '../../components/JobCard';
import { applytojob } from '../../store/actions/jobs';

function mapStateToProps(reduxState) {
  return {
    appliedto: reduxState.jobsapplied
  };
}

export default connect(
  mapStateToProps,
  { applytojob }
)(JobCard);
