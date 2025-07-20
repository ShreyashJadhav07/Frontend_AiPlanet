import React from 'react';

const  Sidebar = () => {
    const ondragstart = (event, nodeType) => {
        event.dataTransfer.setData("application/reactflow", nodeType);

        event.dataTransfer.effectAllowed = "move";
    }
  return (
      <aside className='w-1/4 p-4 bg-gray-100 border-r h-screen'>
        <h3 className='text-lg font-bold mb-4'>Drag a block:</h3>
        <div className='p-2 mb-2 bg-white border rounded shadow cursor-move'
            onDragStart={(e) => ondragstart(e, "pdf")}
            draggable
    >
            PDF Reader


        </div>
        <div className='p-2 mb-2 bg-white border rounded shadow cursor-move'
            onDragStart={(e) => ondragstart(e, "llm")}
            draggable
            >
                 LLM (OpenAI/Gemini)

        </div>
        <div className='p-2 mb-2 bg-white border rounded shadow cursor-move'
            onDragStart={(e) => ondragstart(e, "search")}
            draggable
            >
                   Web Search (SerpAPI)

        </div>
        </aside>
      
    
  )
}

export default Sidebar
