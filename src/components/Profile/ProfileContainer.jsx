import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import { getUserProfile, getStatus, updateStatus, savePhoto, saveProfile} from "../../Redux/profileReducer";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import withRouter from "../withRouter";

class ProfileContainer extends React.Component {

    refreshProfile() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = this.props.authorizedUserId;
            if (!userId) {
                this.props.history.push("/login")
            }
        }
        this.props.getUserProfile(userId);
        this.props.getStatus(userId);
    }

    componentDidMount() {
        this.refreshProfile()
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.router.params.userId != prevProps.router.params.userId) {
            this.refreshProfile()
        }

    }

    render() {
        return (
            <Profile {...this.props} 
            isOwner={!this.props.router.params.userId}
            profile={this.props.profile} 
            status={this.props.status} 
            updateStatus={this.props.updateStatus} 
            savePhoto={this.props.savePhoto}/>
        )
    }
}

let mapStateToProps = (state) => {
    return ({
        profile: state.profilePage.profile,
        status: state.profilePage.status,
        isAuth: state.auth.isAuth,
        authorizedUserId: state.auth.userId,
    });
}

export default compose(
    connect(mapStateToProps, { getUserProfile, saveProfile, getStatus, updateStatus, savePhoto }),
    withRouter,
    withAuthRedirect,
)(ProfileContainer);