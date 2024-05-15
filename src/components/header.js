
import React, { useContext } from "react";
import KanbanContext from "../kanbanContext/KanbanContext";

const Header = () => {
  const {grouping,sort,setGrouping,setSort}=useContext(KanbanContext);
  return (
    <div className="p-10 border-b-2 text-white">
      <div className="flex gap-10">
        <div className="flex gap-3 items-center justify-center">
        <label htmlFor="Grouping">Grouping</label>
          <select className="rounded-md p-0.5 bg-black border border-white" name="Grouping" id="Grouping" defaultValue={grouping} onChange={(e)=>{
            setGrouping(e.target.value);
            localStorage.setItem("grouping",e.target.value)
          }}>
            <option className="bg-white text-black" value="status">Status</option>
            <option className="bg-white text-black" value="userId">User</option>
            <option className="bg-white text-black" value="priority">Priority</option>
          </select>
        </div>
        <div className="flex gap-3 items-center justify-center">
          <label htmlFor="Sort">Sort</label>
          <select className="rounded-md p-0.5 bg-black border border-white" name="Sort" id="Sort" defaultValue={sort}onChange={(e)=>{
            setSort(e.target.value);
            localStorage.setItem("sort",e.target.value)
          }}>
            <option className="bg-white text-black" value="priority">Priority</option>
            <option className="bg-white text-black" value="title">Title</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default Header;
