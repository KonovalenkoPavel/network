import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    statusChange: "",
    status: this.props.status,
  };
  handleSetStatus = () => {
    console.log("handleSetStatus");
    this.setState({
      ...this.state,
      editMode: !this.state.editMode,
      status: this.state.statusChange
        ? this.state.statusChange
        : "Hello my friends!!!!!!",
      statusChange: "",
    });
    this.props.updateStatus(this.state.statusChange);
  };
  handleStatusChange = (event) => {
    this.setState({ ...this.state, statusChange: event.target.value });
  };
  handleToggleStausChange = () => {
    this.setState({
      ...this.state,
      editMode: !this.state.editMode,
      statusChange: this.state.status,
    });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.status !== this.props.status) {
      this.setState({ state: this.props.status });
    }
  }

  render() {
    return (
      <>
        <div>
          {this.state.editMode ? (
            <div>
              <input
                autoFocus={true}
                onBlur={this.handleSetStatus}
                value={this.state.statusChange}
                onChange={(event) => this.handleStatusChange(event)}
              />
            </div>
          ) : (
            <div>
              <span onDoubleClick={this.handleToggleStausChange}>
                {this.state.status ? this.state.status : "----------"}
              </span>
            </div>
          )}
        </div>
      </>
    );
  }
}

export default ProfileStatus;
