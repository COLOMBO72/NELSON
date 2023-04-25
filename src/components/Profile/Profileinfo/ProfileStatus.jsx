import React from "react";

class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        });
    }
    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value
        });
    }

    componentDidUpdate(prevProps,prevState) {
        if (prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
        console.log('changed');
    }
    /*локальный стейт инициализируется при первом рендере 
    и дальше живет своей жизнью. Да, после того, как пришел статус, 
    происходит новый рендер, но локальный стейт остается тем же, 
    он не обновляет данные и сохраняет значение, которые были ему 
    переданы при первом рендере. Для этого нам надо дать указание, 
    при каких условиях он должен обновить данные в локальном стейте, 
    поэтому мы и вводим метод componentDidUpdate где вручную сравниваем 
    старые данные локального стейта с новыми пропсами и если 
    они отличаются, то обновляем локальный стейт*/
    

    render() {
        return (
            <div>
                {!this.state.editMode ?
                    <div onDoubleClick={this.activateEditMode}>{this.props.status || '----'}</div>
                    :
                    <div><input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} value={this.state.status} /></div>}
            </div>
        )
    }
}

export default ProfileStatus;