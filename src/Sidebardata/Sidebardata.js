import React from "react";
import "./Sidebardata.css";

class Sidebardata extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}
  render() {
    var data = this.props.data;

    return (
      <div>
        <div
          className="SideBar-newscontainer"
          style={{
            backgroundImage:
              "url(" +
              (data["multimedia"] ? data["multimedia"][0]["url"] : "") +
              ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <a href={data["url"]} target="_blank" className="newstitle">
            <h3 style={{ color: "rgb(68, 84, 110)" }}> {data["title"]} </h3>
          </a>
        </div>
      </div>
    );
  }
}

export default Sidebardata;
