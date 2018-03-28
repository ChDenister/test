import React from 'react';
import {Modal as ModalBootstrap} from 'react-bootstrap';
import {connect} from 'react-redux';

const Modal = ({modal, children})=> {
    return (
        <div>
            <ModalBootstrap show={modal.show}>
                <ModalBootstrap.Body >
                    {children}
                </ModalBootstrap.Body>
            </ModalBootstrap>
        </div>
    );
}

const mapStateToProps = state => {
    return (
        state
    );
}

const mapDispatchToProps = dispatch =>
    ({})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Modal);

