// import React from "react";
// import { Tool } from "../../page";

// interface ToolPanelProps {
//   toolsList: Tool[];
// }

// const ToolPanel: React.FC<ToolPanelProps> = ({ toolsList }) => {
//   // Group tools by category
//   const toolsByCategory = toolsList.reduce<Record<string, Tool[]>>(
//     (acc, tool) => {
//       if (!acc[tool.category]) {
//         acc[tool.category] = [];
//       }
//       acc[tool.category].push(tool);
//       return acc;
//     },
//     {}
//   );

//   const onDragStart = (
//     event: React.DragEvent<HTMLDivElement>,
//     toolId: string
//   ) => {
//     event.dataTransfer.setData("application/reactflow", toolId);
//     event.dataTransfer.effectAllowed = "move";
//   };

//   return (
//     <div className="space-y-4">
//       {Object.entries(toolsByCategory).map(([category, tools]) => (
//         <div key={category}>
//           <h4 className="text-sm font-semibold uppercase text-gray-600 mb-2">
//             {category}
//           </h4>
//           <div className="space-y-2">
//             {tools.map((tool) => (
//               <div
//                 key={tool.id}
//                 className="p-2 bg-white rounded border border-gray-300 shadow-sm cursor-grab hover:bg-blue-50 hover:border-blue-300 transition-colors"
//                 draggable
//                 onDragStart={(event) => onDragStart(event, tool.id)}
//               >
//                 <div className="font-medium">{tool.name}</div>
//                 <div className="text-xs text-gray-500 truncate">
//                   {tool.description}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default ToolPanel;
