import { TypeNotification } from "@/interface/INotification";
import { store } from "@/store";
import { TO_NOTIFY } from "@/store/typeMutations";

type Notifier = {
  toNotify: (
    type: TypeNotification,
    title: string,
    text: string,
    icon: string
  ) => void;
};

export default (): Notifier => {
  const toNotify = (
    type: TypeNotification,
    title: string,
    text: string,
    icon: string
  ): void => {
    store.commit(TO_NOTIFY, {
      title,
      text,
      type,
      icon
    });
  };
  return {
    toNotify
  };
};
