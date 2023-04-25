import { Provider } from "react-redux";
import { BrowserRouter, useLocation, useNavigate, useParams } from "react-router-dom";

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

export default withRouter;