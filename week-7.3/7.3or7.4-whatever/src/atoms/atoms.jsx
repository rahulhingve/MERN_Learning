import { atom, selector } from "recoil";

export const networkAtom = atom({
    key: "networkAtom",
    default:104
})
export const jobsAtom = atom({
    key: "jobsAtom",
    default:0
})
export const messagingAtom = atom({
    key: "messagingAtom",
    default:0
})
export const notificationAtom = atom({
    key: "notificationAtom",
    default:12
})
export const countAll = selector({
    key :"countAll",
    get: ({get})=>{
        const networkAtomValue =get(networkAtom);
        const messagingAtomValue =get(messagingAtom);
        const jobsAtomValue =get(jobsAtom);
        const notificationAtomValue =get(notificationAtom);
        return networkAtomValue + messagingAtomValue +jobsAtomValue + notificationAtomValue;

    }
})