import SettingsComponentsComponent from "./SettingsComponentsComponent";
import { useSettingsComponentsContext } from "./SettingsComponentsContext";

interface ISettingsComponentsCategories {
  category: string;
}

function SettingsComponentsCategories({ category }: ISettingsComponentsCategories) {
  const { componentsPc } = useSettingsComponentsContext();

  return (
    <div>
      <h3 className="border-b-2 border-sky-800 text-center font-bold text-orange-700">{category}</h3>
      <ul>
        {Object.values(componentsPc[category]).map((component) => (
          <SettingsComponentsComponent key={component.name} component={component} category={category} />
        ))}
      </ul>
    </div>
  );
}

export default SettingsComponentsCategories;
