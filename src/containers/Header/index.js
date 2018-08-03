import { connect } from 'react-redux';
import Header from '../../components/Header';
import { search } from '../../store/actions/search';
import { logout } from '../../store/actions/auth';

function mapStateToProps(reduxState) {
  return {
    currentUser: reduxState.currentUser
  };
}

export default connect(
  mapStateToProps,
  { logout, search }
)(Header);
