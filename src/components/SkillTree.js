import React from "react";
import Tree from "react-tree-graph";
import "react-tree-graph/dist/style.css";

// Expression React structure with react-tree-graph

let data = {
  name: "React",
  children: [
    {
      name: "Component",
      children: [
        {
          name: "Props",
        },
        {
          name: "State",
        },
      ],
    },
    {
      name: "Todo",
      children: [
        {
          name: "CRUD",
        },
        {
          name: "NodeJs",
        },
      ],
    },
  ],
};

class SkillTree extends React.Component {
  render() {
    return (
      <div>
        <h1>SkillTree</h1>
        <Tree
          data={data}
          nodeRadius={15}
          margins={{ top: 20, bottom: 10, left: 20, right: 200 }}
          height={500}
          width={500}
        />
      </div>
    );
  }
}

export default SkillTree;
