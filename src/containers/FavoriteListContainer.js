import FavoriteList from '../components/FavoriteList';
import { connect } from 'react-redux';

export default connect(
    (state) => ({
        contacts: state.contacts
    })
)(FavoriteList);