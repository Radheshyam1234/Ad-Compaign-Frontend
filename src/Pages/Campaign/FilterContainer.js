import { useFilterProvider } from "../../Context/FilterContext/FilterProvider";

export const FilterContainer = () => {
  const { filterDispatch } = useFilterProvider();
  return (
    <div className="flex filter-container space-evenly">
      <div className="flex align-center mr-5">
        <span className="secondary-header mr-5">Platform: </span>

        <select
          name="platform"
          className="select-input"
          onChange={(e) => {
            filterDispatch({
              type: "FILTER_BY_PLATFORM",
              payload: e.target.value,
            });
          }}
        >
          <option value="">All Platform</option>
          <option value="Youtube">Youtube</option>
          <option value="FB">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Google">Google</option>
        </select>
      </div>

      <div className="flex align-center mr-5">
        <span className="secondary-header mr-10">Status: </span>

        <select
          name="platform"
          className="select-input"
          onChange={(e) => {
            filterDispatch({
              type: "FILTER_BY_STATUS",
              payload: e.target.value,
            });
          }}
        >
          <option value="">All Status</option>
          <option value="Active">Active</option>
          <option value="Exhausted">Exhausted</option>
        </select>
      </div>

      <div className="flex align-center">
        <select
          name="platform"
          className="select-input"
          onChange={(e) => {
            filterDispatch({
              type: "FILTER_BY_DAYS",
              payload: e.target.value,
            });
          }}
        >
          <option value="">All days</option>
          <option value="30">Last 30 days</option>
        </select>
      </div>
    </div>
  );
};
