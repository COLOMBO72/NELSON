import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {useLocation,useNavigate,useParams} from "react-router-dom";
import { getUserProfile } from "../../../Redux/profileReducer";

function withRouter(Component) {
    function WithRouter(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }

    return WithRouter;
}

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        if (!userId) {
            userId = 2;
        }
        this.props.getUserProfile(userId)
    }


    render() {
        return (
            <Profile {...this.props} profile={this.props.profile} />
        )
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

let withUrlDataContainerComponent = withRouter(ProfileContainer)

export default connect(mapStateToProps, { getUserProfile })(withUrlDataContainerComponent);