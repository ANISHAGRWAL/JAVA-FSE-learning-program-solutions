import React from "react";

import CohortDetails from "./CohortDetails";

function App() {
  return (
    <div>
      <CohortDetails
        name="React Bootcamp"
        trainer="John Doe"
        status="ongoing"
      />

      <CohortDetails
        name="Java Spring Batch"
        trainer="Jane Smith"
        status="completed"
      />
    </div>
  );
}

export default App;
