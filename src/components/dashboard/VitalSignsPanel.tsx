import React from "react";
import VitalCard from "./VitalCard";
import { ScrollArea } from "@/components/ui/scroll-area";

interface VitalSignsPanelProps {
  vitals?: Array<{
    title: string;
    value: string | number;
    unit: string;
    type: "heart-rate" | "oxygen" | "temperature" | "feeding";
    status: "normal" | "warning" | "critical";
    lastUpdated: string;
  }>;
}

const VitalSignsPanel = ({
  vitals = [
    {
      title: "Heart Rate",
      value: 120,
      unit: "bpm",
      type: "heart-rate",
      status: "normal",
      lastUpdated: "1 min ago",
    },
    {
      title: "Oxygen Saturation",
      value: 98,
      unit: "%",
      type: "oxygen",
      status: "normal",
      lastUpdated: "1 min ago",
    },
    {
      title: "Temperature",
      value: 36.8,
      unit: "°C",
      type: "temperature",
      status: "normal",
      lastUpdated: "2 mins ago",
    },
    {
      title: "Last Feeding",
      value: "60",
      unit: "ml",
      type: "feeding",
      status: "normal",
      lastUpdated: "30 mins ago",
    },
  ],
}: VitalSignsPanelProps) => {
  return (
    <div className="h-full w-full bg-gray-50 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">
          Vital Signs Monitor
        </h2>
        <p className="text-gray-600">Real-time health metrics</p>
      </div>

      <ScrollArea className="h-[calc(100%-100px)]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {vitals.map((vital, index) => (
            <VitalCard
              key={index}
              title={vital.title}
              value={vital.value}
              unit={vital.unit}
              type={vital.type}
              status={vital.status}
              lastUpdated={vital.lastUpdated}
            />
          ))}
        </div>
      </ScrollArea>
    </div>
  );
};

export default VitalSignsPanel;
