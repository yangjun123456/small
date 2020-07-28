export const predictionPipe = (value: any, ...args: any[]) => {
  console.log(value, args);
  switch (value) {
    case 'keProjecyType_Manual':
      return '人工预测';

    case 'keProjecyType_AI':
      return 'AI 预测';
    default:
      return '全部';
  }
};
