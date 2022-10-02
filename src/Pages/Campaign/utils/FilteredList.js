import { useFilterProvider } from "../../../Context/FilterContext/FilterProvider";

export const FilteredList = (campaignList) => {
  const {
    filterState: { byPlatform, byStatus, byDays },
  } = useFilterProvider();
  let ModifiedList = [...campaignList];

  if (byPlatform) {
    ModifiedList = ModifiedList.filter((item) => {
      return item.platform === byPlatform;
    });
  }

  if (byStatus) {
    if (byStatus === "Exhausted") {
      ModifiedList = ModifiedList.filter((item) => {
        return new Date().getTime() > new Date(item.endDate).getTime();
      });
    }
    if (byStatus === "Active") {
      ModifiedList = ModifiedList.filter((item) => {
        return !(new Date().getTime() > new Date(item.endDate).getTime());
      });
    }
  }

  if (byDays) {
    const now = new Date();
    ModifiedList = ModifiedList.filter((item) => {
      const then = new Date(item.startDate);
      const msBetweenDates = Math.abs(then.getTime() - now.getTime());
      const daysBetweenDates = msBetweenDates / (24 * 60 * 60 * 1000);
      return daysBetweenDates < Number(byDays);
    });
  }

  return ModifiedList;
};
