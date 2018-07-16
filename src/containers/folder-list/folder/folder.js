import React, { Component } from "react";
import FolderCount from "./folder-count/folder-count";
import LeftRightLayout from "components/layout/left-right-layout/left-right-layout";

export default ({label, count, hasUnread, selectedItem, id, onClick}) => (
  <LeftRightLayout
    className={`folder ${selectedItem == id ? 'selected' : ''}`}
    children={() => [
      <span key={1} id={id} className="folder-title" onClick={onClick}> {label} </span>,
      <FolderCount key={2} hasUnread={hasUnread} count={count}/>
    ]}
  />
)

// {`dropdown ${this.state.isHidden ? 'show' : 'hide'}`}
//export default class Folder extends Component {
//  constructor(props) {
//    super(props);
//  }


// render() {
 //   return (
      
//      <div >
 //     <LeftRightLayout
 //       className={`folder ${this.props.isSelected ? "selected" : ""}`}
 //       children={() => [
  //        <span key={this.props.key} className="folder-title">
  //          {" "}
 //           {this.props.label}{" "}
 //         </span>,
 //         <FolderCount key={this.props.key} hasUnread={this.props.hasUnread} count={this.props.count} />
 //       ]}
 //     />
//      </div>
      
//    );
//  }
//}
