import { useContext, useEffect, useState } from "react";
import KanbanContext from "../kanbanContext/KanbanContext";
import React from "react";
import Card from "./card";

const Main = () => {
  const { data, grouping, sort } = useContext(KanbanContext);
  const [formatedData, setFormatedData] = useState([]);

  useEffect(() => {
    updateFormattedData();
  }, [data, grouping, sort]);

  const updateFormattedData = () => {
    let formattedData = [];
    if (grouping === "userId") {
      data.users.forEach((user) => {
        const userTickets = data.tickets.filter(
          (ticket) => ticket.userId === user.id
        );
        formattedData.push({
          title: user.name,
          tickets: userTickets.sort((a, b) => {
            if (a.priority === b.priority) {
              return a.title.localeCompare(b.title);
            }
            return a.priority - b.priority;
          }),
        });
      });
    } else if (grouping === "status") {
      const statuses = [
        ...new Set(data.tickets.map((ticket) => ticket.status)),
      ];
      statuses.forEach((status) => {
        const statusTickets = data.tickets.filter(
          (ticket) => ticket.status === status
        );
        formattedData.push({
          title: status,
          tickets: statusTickets.sort((a, b) => {
            if (a.priority === b.priority) {
              return a.title.localeCompare(b.title);
            }
            return a.priority - b.priority;
          }),
        });
      });
    } else {
      const priority = [
        ...new Set(data.tickets.map((ticket) => ticket.priority)),
      ];
      priority.forEach((prior) => {
        const priorityList = data.tickets.filter(
          (ticket) => ticket.priority === prior
        );
        formattedData.push({
          title: prior,
          tickets: priorityList.sort((a, b) => {
            if (a.priority === b.priority) {
              return a.title.localeCompare(b.title);
            }
            return a.priority - b.priority;
          }),
        });
      });
    }

    if (sort === "priority") {
      formattedData.forEach((group) => {
        group.tickets.sort((a, b) => {
          if (a.priority === b.priority) {
            return a.title.localeCompare(b.title);
          }
          return a.priority - b.priority;
        });
      });
    } else if (sort === "title") {
      formattedData.forEach((group) => {
        group.tickets.sort((a, b) => a.title.localeCompare(b.title));
      });
    }

    setFormatedData(formattedData);
  };

  return (
    <div className="p-10">
      <div className="flex flex-col gap-3">
        <div className="flex gap-3">
          {formatedData.map((category, i) => (
            <div className="flex flex-col gap-1" key={i}>
              <div><span>{(grouping==="priority")?(category.title==4?"Urgent":category.title==3?"High":category.title==2?"Medium":category.title==1?"Low":"No priority"):category.title}</span></div>
              {category.tickets.map((d, i) => (
                <div key={i}>
                  <Card
                    id={d.id}
                    title={d.title}
                    tag={d.tag}
                    userid={d.userId}
                    priority={d.priority}
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
