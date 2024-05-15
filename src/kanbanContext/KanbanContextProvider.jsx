import React from "react";
import { useState } from "react";
import KanbanContext from './KanbanContext'
import Data from '../db/db'

const KanbanContextProvider = ({children})=>{
    const data=Data;
    const group = localStorage.getItem("grouping");
    const sorting = localStorage.getItem("sort");
    const [grouping,setGrouping] = useState(group||"Status");
    const [sort,setSort] = useState(sorting||"Priority");
    return(
        <KanbanContext.Provider value={{data,grouping,setGrouping,sort,setSort}}>
            {children}
        </KanbanContext.Provider>
    )
}

export default KanbanContextProvider;