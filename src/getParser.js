
import yaml from 'js-yaml';
import ini from 'ini';

const parserJSON = text => JSON.parse(text);
const parserYAML = text => yaml.safeLoad(text);
const parserINI = text => ini.parse(text);

const obParsers = {
  json: parserJSON,
  yaml: parserYAML,
  ini: parserINI,
};

export default format => obParsers[format];
