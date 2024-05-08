import axios from "axios";
import { atom, selector } from "recoil";

export const allNetworkAtom = atom({
    key: "allNetworkAtom",
    default: selector({
        key: "notificationCount",
        get: async () => {
            const res = await axios.get("https://sum-server.100xdevs.com/notifications")
            return res.data;
        }
    })
})

export const totalNoti = selector({
    key: "totaoNoti",
    get: ({ get }) => {
        const allNotifications = get(allNetworkAtom);

        return allNotifications.network + allNotifications.jobs + allNotifications.notifications + allNotifications.messaging
    }
})