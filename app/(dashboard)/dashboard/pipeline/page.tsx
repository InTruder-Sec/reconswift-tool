// // @ts-nocheck
// "use client";
// import React, { useState, useCallback, useRef } from "react";
// import ReactFlow, {
//   addEdge,
//   MiniMap,
//   Controls,
//   Background,
//   useNodesState,
//   useEdgesState,
//   Node,
//   Edge,
//   Connection,
//   NodeTypes,
//   OnNodesChange,
//   OnEdgesChange,
//   OnConnect,
//   NodeMouseHandler,
//   ReactFlowInstance,
// } from "reactflow";
// import "reactflow/dist/style.css";

// // Custom node types
// import ToolNode from "./_compoents/ToolNode";
// import ToolPanel from "./_compoents/ToolPanel";

// // Types
// export type ToolOption = {
//   id: string;
//   type: "text" | "select" | "checkbox" | "number";
//   name: string;
//   default: any;
//   options?: string[]; // For select type
// };

// export type Tool = {
//   id: string;
//   name: string;
//   category: string;
//   description: string;
//   options: ToolOption[];
// };

// export type NodeConfig = {
//   options: Record<string, any>;
// };

// export type ToolNodeData = {
//   tool: Tool;
//   nodeConfig: NodeConfig;
// };

// export type PipelineData = {
//   nodes: {
//     id: string;
//     toolId: string;
//     options: Record<string, any>;
//   }[];
//   edges: {
//     source: string;
//     target: string;
//   }[];
// };

// // Mock tool data - replace with your actual tools
// const toolsList: Tool[] = [
//   {
//     id: "nmap",
//     name: "Nmap",
//     category: "scanning",
//     description: "Network mapping tool",
//     options: [
//       { id: "ports", type: "text", name: "Ports", default: "1-1000" },
//       {
//         id: "scan-type",
//         type: "select",
//         name: "Scan Type",
//         options: ["SYN", "TCP", "UDP"],
//         default: "SYN",
//       },
//     ],
//   },
//   {
//     id: "gobuster",
//     name: "GoBuster",
//     category: "discovery",
//     description: "Directory/file enumeration tool",
//     options: [
//       {
//         id: "wordlist",
//         type: "text",
//         name: "Wordlist",
//         default: "/usr/share/wordlists/dirb/common.txt",
//       },
//       {
//         id: "extensions",
//         type: "text",
//         name: "Extensions",
//         default: "php,html,txt",
//       },
//     ],
//   },
//   {
//     id: "subfinder",
//     name: "Subfinder",
//     category: "discovery",
//     description: "Subdomain discovery tool",
//     options: [
//       { id: "recursive", type: "checkbox", name: "Recursive", default: false },
//       { id: "timeout", type: "number", name: "Timeout", default: 30 },
//     ],
//   },
// ];

// // Node types configuration
// const nodeTypes: NodeTypes = {
//   toolNode: ToolNode,
// };

// const PipelineEditor: React.FC = () => {
//   const [nodes, setNodes, onNodesChange] = useNodesState<Node<ToolNodeData>[]>(
//     []
//   );
//   const [edges, setEdges, onEdgesChange] = useEdgesState<Edge[]>([]);
//   const [selectedNode, setSelectedNode] = useState<Node<ToolNodeData> | null>(
//     null
//   );
//   const reactFlowWrapper = useRef<HTMLDivElement>(null);
//   const [reactFlowInstance, setReactFlowInstance] =
//     useState<ReactFlowInstance | null>(null);

//   // Add a new tool node to the pipeline
//   const onDragOver = useCallback((event: React.DragEvent<HTMLDivElement>) => {
//     event.preventDefault();
//     event.dataTransfer.dropEffect = "move";
//   }, []);

//   const onDrop = useCallback(
//     (event: React.DragEvent<HTMLDivElement>) => {
//       event.preventDefault();

//       if (!reactFlowWrapper.current || !reactFlowInstance) return;

//       const toolId = event.dataTransfer.getData("application/reactflow");
//       const tool = toolsList.find((t) => t.id === toolId);

//       if (!tool) return;

//       // Get position of drop
//       const reactFlowBounds = reactFlowWrapper.current.getBoundingClientRect();
//       const position = reactFlowInstance.project({
//         x: event.clientX - reactFlowBounds.left,
//         y: event.clientY - reactFlowBounds.top,
//       });

//       // Create new node
//       const newNode: Node<ToolNodeData> = {
//         id: `${tool.id}-${Date.now()}`,
//         type: "toolNode",
//         position,
//         data: {
//           tool: { ...tool },
//           nodeConfig: {
//             // Convert tool options to config with current values
//             options: tool.options.reduce<Record<string, any>>((acc, opt) => {
//               acc[opt.id] = opt.default;
//               return acc;
//             }, {}),
//           },
//         },
//       };

//       setNodes((nds: Node<Node<ToolNodeData>[], string | undefined>[]) => {
//         const updatedNodes = [...nds, newNode] as Node<
//           Node<ToolNodeData>[],
//           string | undefined
//         >[];
//         return updatedNodes;
//       });
//     },
//     [reactFlowInstance, setNodes]
//   );

//   // Handle connections between nodes
//   const onConnect = useCallback<OnConnect>(
//     (params) => setEdges((eds) => addEdge({ ...params, animated: true }, eds)),
//     [setEdges]
//   );

//   // Handle node selection for configuration
//   const onNodeClick = useCallback<NodeMouseHandler>((event, node) => {
//     setSelectedNode(node as Node<ToolNodeData>);
//   }, []);

//   // Update node configuration
//   const updateNodeConfig = useCallback(
//     (nodeId: string, newConfig: NodeConfig) => {
//       setNodes((nds) =>
//         nds.map((node) => {
//           if (node.id === nodeId) {
//             return {
//               ...node,
//               data: {
//                 ...node.data,
//                 nodeConfig: newConfig,
//               },
//             };
//           }
//           return node;
//         })
//       );
//     },
//     [setNodes]
//   );

//   // Execute the pipeline
//   const executePipeline = useCallback(() => {
//     // Validate pipeline
//     if (nodes.length === 0) {
//       alert("Please add at least one tool to the pipeline");
//       return;
//     }

//     // Collect pipeline data
//     const pipelineData: PipelineData = {
//       nodes: nodes.map((node) => ({
//         id: node.id,
//         toolId: node.data.tool.id,
//         options: node.data.nodeConfig.options,
//       })),
//       edges: edges.map((edge) => ({
//         source: edge.source,
//         target: edge.target,
//       })),
//     };

//     // TODO: Send to backend
//     console.log("Executing pipeline:", pipelineData);

//     // Here you would send this to your backend
//     // fetch('/api/pipeline/execute', {
//     //   method: 'POST',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify(pipelineData)
//     // })
//     // .then(response => response.json())
//     // .then(data => console.log('Pipeline execution started:', data));
//   }, [nodes, edges]);

//   // Save the pipeline for later use
//   const savePipeline = useCallback(() => {
//     const pipelineName = prompt("Enter a name for this pipeline:");
//     if (!pipelineName) return;

//     const pipelineData = {
//       name: pipelineName,
//       nodes,
//       edges,
//     };

//     // TODO: Send to backend
//     console.log("Saving pipeline:", pipelineData);

//     // Here you would send this to your backend
//     // fetch('/api/pipeline/save', {
//     //   method: 'POST',
//     //   headers: { 'Content-Type': 'application/json' },
//     //   body: JSON.stringify(pipelineData)
//     // })
//     // .then(response => response.json())
//     // .then(data => console.log('Pipeline saved:', data));
//   }, [nodes, edges]);

//   const onInit = (reactFlowInstance: ReactFlowInstance) => {
//     setReactFlowInstance(reactFlowInstance);
//   };

//   return (
//     <div className="flex h-[calc(100vh-7rem)] w-full bg-white m-4 rounded-md shadow-md border border-gray-200">
//       {/* Tools Panel */}
//       <div className="w-3/12 bg-gray-100 p-4 border-r border-gray-300">
//         <h3 className="text-lg font-medium mb-4">Tools</h3>
//         <ToolPanel toolsList={toolsList} />
//       </div>

//       {/* Flow Editor */}
//       <div className="w-9/12 flex flex-col">
//         <div
//           className="flex-1"
//           style={{ height: "calc(100% - 60px)" }}
//           ref={reactFlowWrapper}
//         >
//           <ReactFlow
//             nodes={nodes}
//             edges={edges}
//             onNodesChange={onNodesChange as OnNodesChange}
//             onEdgesChange={onEdgesChange as OnEdgesChange}
//             onConnect={onConnect}
//             onNodeClick={onNodeClick}
//             nodeTypes={nodeTypes}
//             onDrop={onDrop}
//             onDragOver={onDragOver}
//             onInit={onInit}
//             fitView
//           >
//             <Controls />
//             <MiniMap />
//             <Background variant="dots" gap={12} size={1} />
//           </ReactFlow>
//         </div>

//         {/* Action Buttons */}
//         <div className="h-16 border-t border-gray-300 p-3 flex justify-end">
//           <button
//             className="px-4 py-2 bg-blue-500 text-white rounded-md mr-3 hover:bg-blue-600"
//             onClick={savePipeline}
//           >
//             Save Pipeline
//           </button>
//           <button
//             className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
//             onClick={executePipeline}
//           >
//             Execute Pipeline
//           </button>
//         </div>
//       </div>

//       {/* Configuration Panel */}
//       {selectedNode && (
//         <div className="w-72 bg-gray-100 p-4 border-l border-gray-300">
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-lg font-medium">Configure Tool</h3>
//             <button
//               className="text-gray-500 hover:text-gray-700"
//               onClick={() => setSelectedNode(null)}
//             >
//               ✕
//             </button>
//           </div>
//           <div className="space-y-4">
//             <h4 className="font-medium">{selectedNode.data.tool.name}</h4>
//             <p className="text-sm text-gray-600">
//               {selectedNode.data.tool.description}
//             </p>

//             {selectedNode.data.tool.options.map((option) => (
//               <div key={option.id} className="mb-3">
//                 <label className="block text-sm font-medium mb-1">
//                   {option.name}
//                 </label>
//                 {option.type === "text" && (
//                   <input
//                     type="text"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                     value={
//                       selectedNode.data.nodeConfig.options[option.id] || ""
//                     }
//                     onChange={(e) => {
//                       const newConfig = {
//                         ...selectedNode.data.nodeConfig,
//                         options: {
//                           ...selectedNode.data.nodeConfig.options,
//                           [option.id]: e.target.value,
//                         },
//                       };
//                       updateNodeConfig(selectedNode.id, newConfig);
//                     }}
//                   />
//                 )}
//                 {option.type === "select" && option.options && (
//                   <select
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                     value={
//                       selectedNode.data.nodeConfig.options[option.id] ||
//                       option.default
//                     }
//                     onChange={(e) => {
//                       const newConfig = {
//                         ...selectedNode.data.nodeConfig,
//                         options: {
//                           ...selectedNode.data.nodeConfig.options,
//                           [option.id]: e.target.value,
//                         },
//                       };
//                       updateNodeConfig(selectedNode.id, newConfig);
//                     }}
//                   >
//                     {option.options.map((opt) => (
//                       <option key={opt} value={opt}>
//                         {opt}
//                       </option>
//                     ))}
//                   </select>
//                 )}
//                 {option.type === "checkbox" && (
//                   <input
//                     type="checkbox"
//                     className="h-4 w-4 border border-gray-300 rounded"
//                     checked={
//                       selectedNode.data.nodeConfig.options[option.id] || false
//                     }
//                     onChange={(e) => {
//                       const newConfig = {
//                         ...selectedNode.data.nodeConfig,
//                         options: {
//                           ...selectedNode.data.nodeConfig.options,
//                           [option.id]: e.target.checked,
//                         },
//                       };
//                       updateNodeConfig(selectedNode.id, newConfig);
//                     }}
//                   />
//                 )}
//                 {option.type === "number" && (
//                   <input
//                     type="number"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-md"
//                     value={selectedNode.data.nodeConfig.options[option.id] || 0}
//                     onChange={(e) => {
//                       const newConfig = {
//                         ...selectedNode.data.nodeConfig,
//                         options: {
//                           ...selectedNode.data.nodeConfig.options,
//                           [option.id]: parseInt(e.target.value),
//                         },
//                       };
//                       updateNodeConfig(selectedNode.id, newConfig);
//                     }}
//                   />
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default PipelineEditor;


// render comming soon

const PipelineEditor = () => {
    return (
      <div>
        <h1>Coming Soon</h1>
      </div>
    )
  }
  
  export default PipelineEditor