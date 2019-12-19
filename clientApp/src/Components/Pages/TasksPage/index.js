import React from "react";
import Board from "@lourenci/react-kanban";

const board = {
  lanes: [
    {
      id: 1,
      title: "Todo",
      cards: [
        {
          id: 1,
          title: "Dialogs",
          description: "Add dialogs for addmenu"
        },
        {
          id: 2,
          title: "Sidebar",
          description: "Add sidebar functionality"
        }
      ]
    },
    {
      id: 2,
      title: "On going",
      cards: [
        {
          id: 3,
          title: "Search bar",
          description: "Add search funtionality"
        }
      ]
    },
    {
      id: 3,
      title: "Completed",
      cards: [
        {
          id: 4,
          title: "Login page",
          description: "needs google authentication"
        },
        {
          id: 5,
          title: "Home page header",
          description: "needs to have all the buttons(same as asana)"
        },
        {
          id: 6,
          title: "Landing page header",
          description: "needs to have buttons with trailing icons"
        },
        {
          id: 7,
          title: "Landing page content",
          description: "needs main-heading, sub-headings and icons"
        }
      ]
    }
  ]
};

const style = {
  marginLeft: "250px",
  marginTop: "200px"
};

function TasksPage() {
  return (
    <div style={{ marginLeft: "110px" ,marginTop : "40px"}}>
      <Board
        style={style}
        allowRemoveLane
        allowRenameLane
        allowRemoveCard
        allowAddLane
        disableLaneDrag
        onLaneRemove={console.log}
        onCardRemove={console.log}
        onLaneRename={console.log}
        initialBoard={board}
      />
    </div>
  );
}

export default TasksPage;
