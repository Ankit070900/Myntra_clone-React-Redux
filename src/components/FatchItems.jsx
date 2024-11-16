import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { itemsActions } from "./store/ItemsSlice";
import { fatchStatusActions } from "./store/fatchStatusSlice";

const FatchItems = () => {
  const factchStatus = useSelector((store) => store.fatchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (factchStatus.fatchDone) return;
    const controller = new AbortController();
    const signal = controller.signal;
    // dispatch(fatchStatusActions.markfatchingStarting());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        // dispatch(fatchStatusActions.markfatchDone());
        // dispatch(fatchStatusActions.markfatchingFinished());
        dispatch(itemsActions.addInitialItems(items[0]));
      });

    return () => {
      controller.abort();
    };
  }, [factchStatus]);

  return <></>;
};
export default FatchItems;
