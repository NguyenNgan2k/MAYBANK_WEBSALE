export const storages = {
  loadState: (key: string) => {
    const name = "MAYBANK";
    const _name = key + "_" + name;
    try {
      const serializedState = localStorage.getItem(_name);
      if (serializedState === null) {
        return undefined;
      }
      return JSON.parse(serializedState);
    } catch (err) {
      return undefined;
    }
  },
  saveState: (key: string, state: any) => {
    const name = "MAYBANK";
    const _name = key + "_" + name;
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem(_name, serializedState);
    } catch (err: any) {
      // ...
    }
  },
  // getSetting: (dispatch: any) => {
  //   const storedSetting = storages.loadState("setting");

  //   if (storedSetting) {
  //     dispatch(
  //       clientSettingSet({
  //         ...storedSetting,
  //         theme: storedSetting?.theme || "dark",
  //       })
  //     );
  //     dispatch(clientTypeNavSet(+(storedSetting?.typeNav || 2)));
  //   } else {
  //     // chưa có category
  //     dispatch(clientSettingSet(setting));
  //     storages.saveState("setting", setting);
  //   }

  //   return true;
  // },
  removeState: (key: string): void => {
    const name = "MAYBANK";
    localStorage.removeItem(key + "_" + name);
  },
};
