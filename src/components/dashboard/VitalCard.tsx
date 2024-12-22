import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlertCircle, Activity, Thermometer, Baby } from "lucide-react";
import { cn } from "@/lib/utils";

interface VitalCardProps {
  title?: string;
  value?: string | number;
  unit?: string;
  type?: "heart-rate" | "oxygen" | "temperature" | "feeding";
  status?: "normal" | "warning" | "critical";
  lastUpdated?: string;
}

const VitalCard = ({
  title = "Heart Rate",
  value = 120,
  unit = "bpm",
  type = "heart-rate",
  status = "normal",
  lastUpdated = "1 min ago",
}: VitalCardProps) => {
  const getIcon = () => {
    switch (type) {
      case "heart-rate":
        return <Activity className="h-6 w-6" />;
      case "oxygen":
        return <AlertCircle className="h-6 w-6" />;
      case "temperature":
        return <Thermometer className="h-6 w-6" />;
      case "feeding":
        return <Baby className="h-6 w-6" />;
      default:
        return <Activity className="h-6 w-6" />;
    }
  };

  const getStatusColor = () => {
    switch (status) {
      case "normal":
        return "text-green-500";
      case "warning":
        return "text-yellow-500";
      case "critical":
        return "text-red-500";
      default:
        return "text-green-500";
    }
  };

  return (
    <Card className="w-[340px] h-[200px] bg-white hover:shadow-lg transition-shadow duration-200">
      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <CardTitle className="text-lg font-medium text-gray-700 flex items-center gap-2">
            {getIcon()}
            {title}
          </CardTitle>
          <span className="text-xs text-gray-500">{lastUpdated}</span>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col items-center justify-center h-[120px]">
          <div className={cn("text-4xl font-bold", getStatusColor())}>
            {value}
            <span className="text-xl ml-1">{unit}</span>
          </div>
          <div className={cn("mt-2 text-sm font-medium", getStatusColor())}>
            {status.charAt(0).toUpperCase() + status.slice(1)}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default VitalCard;
