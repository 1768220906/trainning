function chunkArray(array, size = 12) {
  const result = [];
  let group = [];

  array.forEach((item, index) => {
    const newItem = { ...item, order: index + 1 };

    group.push(newItem);

    if (group.length === size) {
      result.push(group);
      group = [];
    }
  });

  // 如果最后一组不足 size，也加入结果
  if (group.length) {
    result.push(group);
  }
  return result;
}
