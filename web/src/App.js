import React, {Fragment} from 'react';

// Components
import FileGenerationForm from "./components/FileGeneration/FileGenerationForm";
import FileContentReportForm from "./components/FileGeneration/FileContentReportForm";

const App = () => {
  return (
    // Register your redux Provider here
      <Fragment>
        <FileGenerationForm />
        <FileContentReportForm />
    </Fragment>
  )
};

export default App;
