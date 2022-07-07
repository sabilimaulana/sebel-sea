import { avatars } from 'data/avatars';
import Image from 'next/image';
import { Activity } from 'types';
import { random } from 'utils/number';

interface RecentActivitiesProps {
  recentActivities: Activity[];
}

const RecentActivities = ({ recentActivities }: RecentActivitiesProps) => {
  return (
    <div className="flex w-full flex-col rounded-[20px] bg-secondary-black p-5 sm:w-[333px]">
      <h1 className="mb-5 text-[20px] font-semibold">Recent Activity</h1>

      <section className="flex flex-col gap-3">
        {recentActivities.map(activity => (
          <section key={activity.id} className="activity-tile">
            <Image
              src={avatars[random()].url}
              width={40}
              height={40}
              alt="Person"
              className="rounded-full object-cover object-center"
            />

            <section className="ml-2 flex h-full flex-col justify-between">
              <p className="text-base font-medium">{activity.name}</p>
              <p className="text-xs text-primary-gray">{activity.message}</p>
            </section>
          </section>
        ))}
      </section>
    </div>
  );
};

export default RecentActivities;
