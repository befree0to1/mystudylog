import React from "react";
import SkillTree from "./components/SkillTree";
import List from "./components/List";
import Desc from "./components/Desc";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected_id: 3,
      contents: contents,
    };
  }
  render() {
    let _title,
      _desc = null;
    let i = 0;
    while (i < this.state.contents.length) {
      if (this.state.contents[i].id === this.state.selected_id) {
        _title = this.state.contents[i].title;
        _desc = this.state.contents[i].desc;
        break;
      }
      i = i + 1;
    }
    return (
      <div>
        <SkillTree />
        <List
          data={this.state.contents}
          onChangePage={function (_id) {
            this.setState({ selected_id: _id });
          }.bind(this)}
        />
        <Desc title={_title} desc={_desc} />
      </div>
    );
  }
}

const hi = "React";

const contents = [
  { id: 1, title: "Nodejs", desc: "JavaScript 상위 서버 언어" },
  { id: 2, title: "Redux", desc: "react store 개념" },
  { id: 3, title: "ReactRouterDOM", desc: `hellow ${hi}` },
];

export default App;
