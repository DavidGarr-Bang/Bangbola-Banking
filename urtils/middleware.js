export const shortData = (dataSource) => {
  let firstSort = dataSource.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  const newdata = firstSort.reduce(function (sections, item) {
    let section = sections.find(
      (s) => s.name[0].toUpperCase() === item.name[0].toUpperCase(),
    );

    if (!section) {
      section = { name: item.name[0].toUpperCase(), data: [] };
      sections.push(section);
    }
    section.data.push(item);
    return sections;
  }, []);

  let alphabetically_sort = newdata.sort(function (a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return 0;
  });

  return alphabetically_sort;
};
