import React, { useState } from 'react'
import ReactFlow,{ Background, Controls, MiniMap, ReactFlowProvider } from 'reactflow';

const FlowCanvas = () => {

    const [nodes, setNodes] =useState([]);
    const [edges, setEdges] = useState([]);
  return (
    <div className='w-3/4 h-screen'>
        <ReactFlowProvider>
            <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={setNodes}
                onEdgesChange={setEdges}
                onConnect={(params) => setEdges((eds) => addEdge(params, eds))}
                onDrop={onDrop}
                onDragOver={onDragOver}
                fitView
                >
                    <MiniMap/>
                    <Controls/>
                    <Background />
                    
            </ReactFlow>
            </ReactFlowProvider>
      
    </div>
  );
};

export default FlowCanvas
