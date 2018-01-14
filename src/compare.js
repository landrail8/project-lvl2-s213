
import fs from 'fs';
import path from 'path';
import _ from 'lodash';

import parse from './getParser';

const getFormat = file => path.extname(file).replace('.', '');

const f = (file1, file2) => {
  // получим содержание файлов как текст
  // в дальнейшем можно будет вынести это в отдельный модуль,
  // чтобы алгоритм сравнения получал на вход всегда готовые объекты
  // это нужно для отработки других кейсов - например, если к сравнению придет текст, а не файлы
  const text1 = fs.readFileSync(file1, 'utf8');
  const text2 = fs.readFileSync(file2, 'utf8');

  const format1 = getFormat(file1);
  const format2 = getFormat(file2);

  const obj1 = parse(format1)(text1);
  const obj2 = parse(format2)(text2);

  const key12 = _.union(_.keys(obj1), _.keys(obj2));

  return key12.reduce((acc, currentValue) => {
    if ((obj1[currentValue] !== undefined)
      && (obj2[currentValue] !== undefined)
      && (obj1[currentValue] === obj2[currentValue])) {
      return { ...acc, [`  ${currentValue}`]: obj1[currentValue] };
    }

    if ((obj1[currentValue] !== undefined)
      && (obj2[currentValue] !== undefined)
      && (obj1[currentValue] !== obj2[currentValue])) {
      return { ...acc, [`+ ${currentValue}`]: obj2[currentValue], [`- ${currentValue}`]: obj1[currentValue] };
    }

    if ((obj1[currentValue] !== undefined)
      && (obj2[currentValue] === undefined)) {
      return { ...acc, [`- ${currentValue}`]: obj1[currentValue] };
    }

    if ((obj2[currentValue] !== undefined)
      && (obj1[currentValue] === undefined)) {
      return { ...acc, [`+ ${currentValue}`]: obj2[currentValue] };
    }

    return acc;
  }, {});
};

export default f;
