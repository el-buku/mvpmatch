import { derive, proxyWithHistory } from "valtio/utils";
import { proxy } from "valtio";
const storeFactory = ({
  apiMethod,
  resourceName,
  idKey,
  loadOnRender,
  ...extraProperties
}) => {
  const baseStore = proxy({
    data: null,
    loading: false,
    error: null,
    selected: [],
    apiMethod,
    resourceName,
    idKey,
    loadOnRender,
    load: async (params) => {
      baseStore.loading = true;
      const r = await baseStore.apiMethod(params).catch((e) => {
        console.error(`Failed to load ${baseStore.resourceName}`, e);
        baseStore.error = true;
      });
      baseStore.data =
        r?.data?.map((item) => ({ ...item, appId: item[baseStore.idKey] })) ||
        null;
      baseStore.loading = false;
    },
    select: (selectedIds) => {
      baseStore.selected = baseStore.data?.find((item) =>
        selectedIds?.includes(item[baseStore.idKey])
      );
    },
    selectAll: () => {
      baseStore.selected = baseStore.data;
    },
    ...extraProperties,
  });
  if (baseStore.loadOnRender) baseStore.load();
  return baseStore;
};

export default storeFactory;
