

function Card({id,title,tag,userid,priority}) {
  return (
    <div className="flex flex-col w-[280px] p-1 bg-slate-500 rounded-md">
        <div className="flex justify-between items-center"><div>{id}</div> <div>{userid}</div></div>
        <div className="line-clamp-2 truncate">
            {title}
        </div>
        {priority==4?"Urgent":priority==3?"High":priority==2?"Medium":priority==1?"Low":"No priority"}
        <div>{tag}</div>
    </div>
  )
}

export default Card