const Papa = require('papaparse');
const fs = require('fs');

// 读取 CSV 文件内容
fs.readFile('data/basic-components.csv', 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // 使用 Papa Parse 解析 CSV 数据
  const parsedData = Papa.parse(data, {
    delimiter: ',', // 默认分隔符为逗号，可根据需求修改
    header: false,  // 如果第一行是表头，则设为 true
    skipEmptyLines: true  // 跳过空行
  });

  // 现在 parsedData.data 是一个数组，其中的每个元素代表 CSV 文件中的一行

  const txt = parsedData.data.slice(1).map(row => row.join(' ')).join('\n\n------split------\n\n');

  // 将处理后的数据写入新文件
    fs.writeFile('data/basic-components.txt', txt, err => {
        if (err) {
        console.error('Error writing the file:', err);
        return;
        }
    
        console.log('File has been written');
    });
});