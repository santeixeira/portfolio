import { TypeNotification } from "@/interface/INotification";
import { store } from "@/store";
import { TO_NOTIFY } from "@/store/typeMutations";

const notifyMixin = {
  toNotify(
    type: TypeNotification,
    title: string,
    text: string,
    icon: string
  ): void {
    store.commit(TO_NOTIFY, {
      title,
      text,
      type,
      icon
    });
  }
};

export default notifyMixin;
