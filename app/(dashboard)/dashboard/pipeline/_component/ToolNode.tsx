import React, { memo } from "react";
import { Handle, Position, NodeProps } from "reactflow";
import { ToolNodeData } from "../page";

const ToolNode: React.FC<NodeProps<ToolNodeData>> = ({
  data,
  isConnectable,
}) => {
  const { tool } = data;

  return (
    <div className="p-3 bg-white rounded-lg border-2 border-gray-200 shadow-md w-48">
      <Handle
        type="target"
        position={Position.Top}
        isConnectable={isConnectable}
      />
      <div className="text-center">
        <div className="font-bold text-lg text-gray-800">{tool.name}</div>
        <div className="text-xs mb-2 text-gray-500">{tool.category}</div>
      </div>
      <div className="text-xs text-gray-600 truncate">{tool.description}</div>
      <div className="mt-2 text-xs text-gray-500">
        {Object.entries(data.nodeConfig.options).length > 0 && (
          <div className="border-t pt-1 mt-1">
            <div className="font-semibold">Configuration:</div>
            {Object.entries(data.nodeConfig.options).map(([key, value]) => {
              // Find the matching tool option for better display
              const optionMeta = tool.options.find((opt) => opt.id === key);
              if (!optionMeta) return null;

              return (
                <div key={key} className="flex justify-between">
                  <span>{optionMeta.name}:</span>
                  <span className="font-mono">
                    {typeof value === "boolean"
                      ? value
                        ? "Yes"
                        : "No"
                      : String(value).substring(0, 15)}
                  </span>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Handle
        type="source"
        position={Position.Bottom}
        isConnectable={isConnectable}
      />
    </div>
  );
};

export default memo(ToolNode);
