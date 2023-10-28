const feedbackAdapter = (data) => {
  const adaptado = {};
  data?.forEach((item) => {
    item?.Improve?.forEach((imp) => {
      if (adaptado[imp]) {
        // eslint-disable-next-line no-plusplus
        adaptado[imp]++;
      } else {
        adaptado[imp] = 1;
      }
    });
  });
  const formattedData = Object.keys(adaptado).map((key) => ({ value: adaptado[key], name: key }));

  return formattedData;
};

module.exports = {
  feedbackAdapter,
};
