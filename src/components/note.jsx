import React, { Component } from "react";

class Note extends Component {
  state = {
    note: {
      title: "",
      body: "",
    },
  };

  onChange = (e) => {
    const note = { ...this.state.note };
    note[e.currentTarget.name] = e.currentTarget.value;
    this.setState({ note });
  };

  render() {
    const { uuid, onClick } = this.props;
    return (
      <form>
        <div className="form-group">
          <label htmlFor="title">Add a note:</label>
          <input
            onChange={this.onChange}
            name="title"
            type="text"
            className="form-control"
            id="title"
            placeholder="Title"
          />
        </div>
        <div className="form-group">
          <textarea
            onChange={this.onChange}
            className="form-control"
            name="body"
            id=""
            cols="30"
            rows="10"
          ></textarea>
        </div>
        <div className="d-flex justify-content-end">
          <button
            onClick={() => onClick(uuid, this.state.note)}
            className="btn btn-outline-info"
            type="button"
          >
            Submit
          </button>
        </div>
      </form>
    );
  }
}

export default Note;
