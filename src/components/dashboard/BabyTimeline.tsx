import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Clock, CalendarDays, Stethoscope, Baby, Syringe } from "lucide-react";

interface TimelineEvent {
  id: string;
  time: string;
  date: string;
  type: "medical" | "feeding" | "checkup" | "medication" | "general";
  description: string;
}

interface BabyTimelineProps {
  events?: TimelineEvent[];
}

const defaultEvents: TimelineEvent[] = [
  {
    id: "1",
    time: "09:00 AM",
    date: "Today",
    type: "medical",
    description: "Vital signs checked - all normal",
  },
  {
    id: "2",
    time: "10:30 AM",
    date: "Today",
    type: "feeding",
    description: "60ml formula feeding completed",
  },
  {
    id: "3",
    time: "12:00 PM",
    date: "Today",
    type: "checkup",
    description: "Routine checkup by Dr. Smith",
  },
  {
    id: "4",
    time: "02:00 PM",
    date: "Today",
    type: "medication",
    description: "Administered prescribed medication",
  },
];

const getEventIcon = (type: TimelineEvent["type"]) => {
  switch (type) {
    case "medical":
      return <Stethoscope className="h-4 w-4" />;
    case "feeding":
      return <Baby className="h-4 w-4" />;
    case "checkup":
      return <CalendarDays className="h-4 w-4" />;
    case "medication":
      return <Syringe className="h-4 w-4" />;
    default:
      return <Clock className="h-4 w-4" />;
  }
};

const getEventColor = (type: TimelineEvent["type"]) => {
  switch (type) {
    case "medical":
      return "bg-blue-100 text-blue-800";
    case "feeding":
      return "bg-green-100 text-green-800";
    case "checkup":
      return "bg-purple-100 text-purple-800";
    case "medication":
      return "bg-orange-100 text-orange-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

const BabyTimeline = ({ events = defaultEvents }: BabyTimelineProps) => {
  return (
    <Card className="w-full h-full bg-white">
      <CardHeader>
        <CardTitle className="text-xl font-semibold text-gray-800">
          Baby Timeline
        </CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[800px] pr-4">
          <div className="space-y-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="relative pl-6 border-l-2 border-gray-200"
              >
                <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-white border-2 border-gray-200" />
                <div className="mb-1 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-medium text-gray-600">
                      {event.time}
                    </span>
                    <span className="text-sm text-gray-400">{event.date}</span>
                  </div>
                  <Badge
                    variant="secondary"
                    className={`flex items-center gap-1 ${getEventColor(
                      event.type,
                    )}`}
                  >
                    {getEventIcon(event.type)}
                    <span className="capitalize">{event.type}</span>
                  </Badge>
                </div>
                <p className="text-gray-700">{event.description}</p>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  );
};

export default BabyTimeline;
