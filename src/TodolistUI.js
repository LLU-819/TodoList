import React, { Component } from "react";
import { Input, Button, List } from "antd";

const TodolistUI = (props) => {
  return (
    <>
      <div
        style={{
          margin: "10px",
        }}
      >
        <Input
          placeholder="todolist"
          style={{ width: "300px" }}
          value={props.inputValue}
          onChange={props.handleInputChange}
        />
        <Button
          type="primary"
          style={{ marginLeft: "10px" }}
          onClick={props.handleBtnClick}
        >
          提交
        </Button>
      </div>
      <List
        style={{ width: "300px" }}
        bordered
        dataSource={props.list}
        renderItem={(item, index) => (
          <List.Item onClick={(index) => props.handleDeleteItem(index)}>
            {item}
          </List.Item>
        )}
      />
    </>
  );
};
// class TodolistUI extends Component {
//   render() {
//     return (
//       <>
//         <div
//           style={{
//             margin: "10px",
//           }}
//         >
//           <Input
//             placeholder="todolist"
//             style={{ width: "300px" }}
//             value={this.props.inputValue}
//             onChange={this.props.handleInputChange}
//           />
//           <Button
//             type="primary"
//             style={{ marginLeft: "10px" }}
//             onClick={this.props.handleBtnClick}
//           >
//             提交
//           </Button>
//         </div>
//         <List
//           style={{ width: "300px" }}
//           bordered
//           dataSource={this.props.list}
//           renderItem={(item, index) => (
//             <List.Item onClick={(index) => this.props.handleDeleteItem(index)}>
//               {item}
//             </List.Item>
//           )}
//         />
//       </>
//     );
//   }
// }

export default TodolistUI;
