
import funcCompare from '../src/compare';

const funcReport = (file1, file2) => {
  const comparedObj = funcCompare(file1, file2);
  console.log(comparedObj);
};

export default funcReport;
