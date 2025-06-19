import { humanize } from "@/lib/utils/textConverter";
import * as Icon from "react-feather";

const HomapageFeature = ({ feature_list }) => {
  return (
    <div className="key-feature-grid mt-10 grid grid-cols-1 sm:grid-cols-2 gap-7 md:grid-cols-3 xl:grid-cols-4">
      {feature_list.map((item, i) => {
        const FeatherIcon = Icon[humanize(item.icon)];
        return (
          <div
            key={i}
            className="flex flex-col justify-between rounded-3xl bg-black/30 p-5 shadow-lg backdrop-blur-md border border-white/10 text-white"
          >
            <div>
              <h3 className="h4 text-xl lg:text-2xl text-white">{item.title}</h3>
              <p className="text-white font-extralight">{item.content}</p>
            </div>
            <span className="icon mt-4">
              <FeatherIcon />
            </span>
          </div>
        );
      })}
    </div>
  );
};

export default HomapageFeature;
