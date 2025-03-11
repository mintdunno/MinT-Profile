import React, { useState, useEffect } from "react";

interface WorkflowRun {
  id: number;
  status: string;
  conclusion: string | null;
  created_at: string;
  updated_at: string;
  html_url: string;
}

const GitHubPagesDeployment: React.FC = () => {
  const [latestDeployment, setLatestDeployment] = useState<WorkflowRun | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestDeployment = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/mintdunno/MinT_Porfolio/actions/workflows/deploy.yml/runs?per_page=1"
        );
        
        if (!response.ok) {
          throw new Error("Failed to fetch deployment status");
        }

        const data = await response.json();
        if (data.workflow_runs && data.workflow_runs.length > 0) {
          setLatestDeployment(data.workflow_runs[0]);
        } else {
          setError("No deployments found");
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : "Unknown error");
      } finally {
        setLoading(false);
      }
    };

    fetchLatestDeployment();
  }, []);

  if (loading) return <div className="text-center p-4">Loading deployment status...</div>;
  
  if (error) return <div className="text-red-500 p-4">Error: {error}</div>;
  
  if (!latestDeployment) return <div className="text-center p-4">No deployment information available</div>;

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const getStatusClass = () => {
    if (latestDeployment.status === "completed") {
      return latestDeployment.conclusion === "success" ? "text-green-500" : "text-red-500";
    }
    return "text-yellow-500";
  };

  return (
    <div className="bg-gray-800 rounded-lg p-6 shadow-lg">
      <h2 className="text-2xl font-bold mb-4">GitHub Pages Deployment</h2>
      <div className="space-y-3">
        <div>
          <span className="font-semibold">Status: </span>
          <span className={getStatusClass()}>
            {latestDeployment.status === "completed"
              ? latestDeployment.conclusion
              : latestDeployment.status}
          </span>
        </div>
        <div>
          <span className="font-semibold">Started: </span>
          {formatDate(latestDeployment.created_at)}
        </div>
        <div>
          <span className="font-semibold">Last Updated: </span>
          {formatDate(latestDeployment.updated_at)}
        </div>
        <div className="pt-2">
          <a
            href={latestDeployment.html_url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-blue-300 underline"
          >
            View Deployment Details
          </a>
        </div>
      </div>
    </div>
  );
};

export default GitHubPagesDeployment;
