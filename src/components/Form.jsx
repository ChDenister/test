import React from 'react';
import {connect} from 'react-redux';
import {hideModal, fetchForm} from '../actions/index';

const Form = ({handleExit=f=>f, handleEnter=f=>f})=> {
    let email, password;

    return (
        <form class="form-horizontal">
            <fieldset>
                <div class="form-group">
                    <label for="inputEmail" class="control-label col-xs-2">Email</label>
                    <div class="col-xs-10">
                        <input type="email" ref={(ref) => { email = ref; }}
                               class="form-control" id="inputEmail" placeholder="Email"/>
                    </div>
                </div>
                <div class="form-group">
                    <label for="inputPassword" class="control-label col-xs-2">Пароль</label>
                    <div class="col-xs-10">
                        <input type="password" ref={(ref) => { password = ref; }}
                               class="form-control" id="inputPassword" placeholder="Пароль"/>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-6 col-lg-6 text-right">
                        <button class="btn btn-default" onClick={(e)=>handleExit(e)}>Отмена</button>
                    </div>
                    <div class="col-md-6 col-lg-6">
                        <button type="submit" class="btn btn-primary"
                                onClick={(e)=>handleEnter(e,email.value,password.value)}>Войти
                        </button>
                    </div>
                </div>
            </fieldset>
        </form>
    )
}
const mapStateToProps = state => {
    return (
        state
    );
}

const mapDispatchToProps = dispatch =>
    ({
        handleExit(e){
            e.preventDefault();
            dispatch(hideModal());
        },
        handleEnter(e, email, pass){
            e.preventDefault();
            if (email.length > 5 && pass.length > 5) {
                store.dispatch(
                    fetchForm(email, pass)
                ).then(() => {
                    if (store.getState().form.result===true) {
                        store.dispatch(hideModal());
                    }else {}
                });
            }
        }
    })

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Form);


