import React, { Component } from 'react';
import Header from './components/Header';
import Container from './components/Container';
import { connect } from 'react-redux'
import * as contactsActions from './modules/contacts';
import { bindActionCreators } from 'redux';
import ViewSelectorContainer from './containers/ViewSelectorContainer';
import InputContainer from './containers/InputContainer';
import FavoriteListContainer from './containers/FavoriteListContainer';
import FloatingButtonContainer from './containers/FloatingButtonContainer';
import ContactModalContainer from './containers/ContactModalContainer';
import ContactListContainer from './containers/ContactListContainer';


class App extends Component {

    componentDidMount() {
        const contacts = localStorage.getItem('contacts');
        if(!contacts) return;
        
        const { ContactsActions } = this.props;
        ContactsActions.loadContacts(JSON.parse(contacts));
    }
    
    render() {
        // 레퍼런스 준비
        const { view } = this.props;
        
        return (
            <div>
                <Header/>
                <ViewSelectorContainer/>
                
                {/* view 값에 따라 다른 컨테이너를 보여준다 */}
                <Container visible={view==='favorite'}>
                    <FavoriteListContainer/>
                </Container>
                <Container visible={view==='list'}>
                    <InputContainer/>
                    <ContactListContainer/>
                </Container>
                
                <ContactModalContainer/>
                <FloatingButtonContainer/>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        view: state.base.get('view')
    }),
    (dispatch) => ({
        ContactsActions: bindActionCreators(contactsActions, dispatch)
    })
)(App);