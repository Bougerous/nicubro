import React from "react";
import VitalSignsPanel from "./dashboard/VitalSignsPanel";
import BabyTimeline from "./dashboard/BabyTimeline";
import AlertNotification from "./dashboard/AlertNotification";

interface HomeProps {
  patientName?: string;
  patientId?: string;
  alerts?: Array<{
    title: string;
    description: string;
    type: "warning" | "critical" | "info";
  }>;
}

const Home = ({
  patientName = "Baby Smith",
  patientId = "NICU-2024-001",
  alerts = [
    {
      title: "Temperature Alert",
      description: "Temperature slightly above normal range",
      type: "warning",
    },
  ],
}: HomeProps) => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow-sm p-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">
                {patientName}
              </h1>
              <p className="text-sm text-gray-500">Patient ID: {patientId}</p>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-6 h-[calc(100vh-120px)]">
          {/* Left Panel - Vital Signs */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg shadow">
            <VitalSignsPanel />
          </div>

          {/* Right Panel - Timeline */}
          <div className="w-full lg:w-1/2 bg-white rounded-lg shadow">
            <BabyTimeline />
          </div>
        </div>

        {/* Alerts */}
        {alerts.map((alert, index) => (
          <AlertNotification
            key={index}
            title={alert.title}
            description={alert.description}
            type={alert.type}
          />
        ))}
      </main>
    </div>
  );
};

export default Home;
