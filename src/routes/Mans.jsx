import { useSelector } from "react-redux";
import Man from "../components/Man";

const Mans = () => {
  const items = useSelector((store) => store.items);
  return (
    <main>
      <div className="items-container">
        {items.map((item) => (
          <Man key={item.id} item={item} />
        ))}
      </div>
    </main>
  );
};
export default Mans;
