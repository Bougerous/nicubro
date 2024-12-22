import React from "react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { AlertCircle, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface AlertNotificationProps {
  title?: string;
  description?: string;
  type?: "warning" | "critical" | "info";
  onClose?: () => void;
  onAcknowledge?: () => void;
  isVisible?: boolean;
}

const AlertNotification = ({
  title = "Vital Sign Alert",
  description = "Heart rate has exceeded normal range",
  type = "warning",
  onClose = () => {},
  onAcknowledge = () => {},
  isVisible = true,
}: AlertNotificationProps) => {
  if (!isVisible) return null;

  const getAlertStyles = () => {
    switch (type) {
      case "critical":
        return "border-red-500 bg-red-50";
      case "warning":
        return "border-yellow-500 bg-yellow-50";
      case "info":
        return "border-blue-500 bg-blue-50";
      default:
        return "border-yellow-500 bg-yellow-50";
    }
  };

  const getIconColor = () => {
    switch (type) {
      case "critical":
        return "text-red-500";
      case "warning":
        return "text-yellow-500";
      case "info":
        return "text-blue-500";
      default:
        return "text-yellow-500";
    }
  };

  return (
    <div className="fixed top-4 right-4 w-[400px] z-50 bg-white">
      <Alert className={cn("relative border-l-4", getAlertStyles())}>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 right-2 h-6 w-6"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
        </Button>
        <AlertCircle className={cn("h-5 w-5", getIconColor())} />
        <AlertTitle className="ml-2 text-lg font-semibold">{title}</AlertTitle>
        <AlertDescription className="ml-2 mt-1">{description}</AlertDescription>
        <div className="mt-4 flex justify-end">
          <Button
            variant="outline"
            className={cn(
              "text-sm",
              type === "critical"
                ? "text-red-500 hover:text-red-600"
                : type === "warning"
                  ? "text-yellow-500 hover:text-yellow-600"
                  : "text-blue-500 hover:text-blue-600",
            )}
            onClick={onAcknowledge}
          >
            Acknowledge
          </Button>
        </div>
      </Alert>
    </div>
  );
};

export default AlertNotification;
