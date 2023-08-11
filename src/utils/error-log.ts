import { ElMessage } from 'element-plus';

export default function errorLog(errorMsg: Error | string): never {
  const error = typeof errorMsg === 'string' ? new Error(errorMsg) : errorMsg;
  console.error(error.message);
  ElMessage.error(error.message);
  throw error;
}
