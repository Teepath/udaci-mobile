import AsyncStorage from "@react-native-async-storage/async-storage";
import { CALENDAR_STORAGE_KEY, formatCalendarResults } from "./_calendar";


export function fetchCalendarResults() {
  return AsyncStorage.getItem(CALENDAR_STORAGE_KEY)
  .then(formatCalendarResults)
}

export function submitEntry({ entry, key }) {
  try {
    return AsyncStorage.mergeItem(
      CALENDAR_STORAGE_KEY,
      JSON.stringify({
        [key]: entry,
      })
    );
  } catch (e) {}
}

export function removeEntry(key) {
  try {
    return AsyncStorage.getItem(CALENDAR_STORAGE_KEY).then((results) => {
      const data = JSON.parse(results);
      data[key] = undefined;
      delete data[key];
      AsyncStorage.setitem(CALENDAR_STORAGE_KEY, JSON.stringify(data));
    });
  } catch (e) {}
}


