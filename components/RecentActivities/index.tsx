import { avatars } from "data/avatars";
import Image from "next/image";
import { FC } from "react";
import { Activity } from "types";
import { random } from "utils/number";

interface RecentActivitiesProps {
  recentActivities: Activity[];
}

const RecentActivities: FC<RecentActivitiesProps> = ({ recentActivities }) => {
  return (
    <div className="min-w-[333px] w-full p-5 bg-secondary-black rounded-[20px] flex flex-col">
      <h1 className="text-[20px] font-semibold mb-5">Recent Activity</h1>

      <section className="flex flex-col gap-3">
        {recentActivities.map((activity) => (
          <section key={activity.id} className="activity-tile">
            <Image
              src={avatars[random()].url}
              width={40}
              height={40}
              alt="Person"
              className="rounded-full object-cover object-center"
            />

            <section className="h-full flex flex-col justify-between ml-2">
              <p className="text-base font-medium">{activity.name}</p>
              <p className="text-xs text-primary-gray">{activity.message}</p>
            </section>
          </section>
        ))}

        {/* Active */}
        {/* <section className="w-full h-[67px] bg-opacity-5 rounded-xl flex p-3 items-center activity-gradient">
          <Image
            src={avatars[random()].url}
            width={40}
            height={40}
            alt="Person"
            className="rounded-full object-cover object-center"
          />

          <section className="h-full flex flex-col justify-between ml-2 ">
            <p className="text-base font-medium flex items-center gap-2">
              Sabili Maulana{" "}
              <span className="w-2 h-2 rounded-full flex bg-secondary-purple" />
            </p>
            <p className="text-xs text-primary-gray">
              Purchased by you for 0,5 ETH
            </p>
          </section>
        </section> */}
      </section>
    </div>
  );
};

export default RecentActivities;
