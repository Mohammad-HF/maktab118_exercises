const storageAlarms = "alarms-storage";

export const setStorage = (list: IAllValues[] | []) => {
  localStorage.setItem(storageAlarms, JSON.stringify(list));
};

export const getStorage = () : IAllValues[] | undefined => {
  if (!Object.keys(localStorage).includes("alarms-storage")) return;
  return JSON.parse(localStorage.getItem(storageAlarms) as string)
};
