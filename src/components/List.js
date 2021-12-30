import React from "react";

class List extends React.Component {
  render() {
    let i = 0;
    let data = this.props.data;
    let lists = [];
    while (i < data.length) {
      lists.push(
        <li key={data[i].id}>
          <a
            onClick={function (id, e) {
              e.preventDefault();
              this.props.onChangePage(id);
            }.bind(this, data[i].id)}
            href={"/" + data[i].title}
          >
            {data[i].title}
          </a>
        </li>
      );
      i = i + 1;
    }
    return <ul>{lists}</ul>;
  }
}

export default List;
