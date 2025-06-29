import fs from 'fs';
import { parse } from 'csv-parse/sync';

export function getAllTestData(filePath) {
  const records = parse(fs.readFileSync(filePath), {
    columns: true,
    skip_empty_lines: true,
  });
  return records;
}