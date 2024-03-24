import { TimeAgo } from "@/components/TimeAgo";

export default function Home() {
  return (
    <div className="text-gray-200 text-sm flex flex-col gap-[24px] p-[12px]">
      <div className="flex flex-col">
        <span className="text-gray-200">2023-02-27</span>
        <TimeAgo day="2023-02-27" />
      </div>
      <div className="flex flex-col">
        <span className="text-gray-200">Sun Mar 24 2024 12:42:30 GMT+0330 (Iran Standard Time)</span> 
        <TimeAgo day="Sun Mar 24 2024 12:42:30 GMT+0330 (Iran Standard Time)" />
      </div>

      <div className="flex flex-col">
        <span className="text-gray-200">2024-03-24T09:14:41.302Z</span> 
        <TimeAgo day="2024-03-24T09:14:41.302Z" />
      </div>
    </div>
  );
}
