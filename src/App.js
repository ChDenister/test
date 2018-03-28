import React from 'react';
import Modal from './components/Modal.jsx';
import Form from './components/Form.jsx';
import {connect} from 'react-redux';
import {showModal} from './actions/index';

const App = ({handleClick=f=>f})=> {
    return (<div>
        <Modal>
            <Form></Form>
        </Modal>
        <button onClick={(e)=>handleClick(e)}>Стартуем</button>
    </div>)
}

const mapStateToProps = state => {
    return (
        state
    );
}

const mapDispatchToProps = dispatch =>
    ({
        handleClick(e){
            e.preventDefault();
            dispatch(showModal());
        }
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);


