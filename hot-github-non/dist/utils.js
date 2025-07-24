function generateUUID() {
  // RFC4122 版本 4 的 UUID 格式
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    const r = (Math.random() * 16) | 0;
    const v = c === "x" ? r : (r & 0x3) | 0x8; // 'y' 位确保是 8、9、a 或 b
    return v.toString(16);
  });
}

function chunkArray(array, size = 12, page = 1) {
  const result = [];
  const group = [];

  array.forEach((item, index) => {
    const newItem = { ...item, order: (page - 1) * size * 2 + index + 1 };

    group.push(newItem);

    if (group.length === size) {
      const page = {
        key: generateUUID(),
        data: [...group],
      };
      result.push(page);
      group.length = 0;
    }
  });

  // 如果最后一组不足 size，也加入结果
  if (group.length) {
    const page = {
      key: generateUUID(),
      data: group,
    };
    result.push(page);
  }
  console.log(result);

  return result;
}
