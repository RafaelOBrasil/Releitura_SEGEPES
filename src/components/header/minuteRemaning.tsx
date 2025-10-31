 "use client";

 import { useTokenExpiration } from "@/app/api/hook/hook_time";

 export default function MinuteRemaining() {
  const minutesRemaining = useTokenExpiration();

  return <>
   <div className=" text-[1rem] text-black dark:text-white">
      {minutesRemaining !== null ? (
        <p>Tempo restante: {minutesRemaining} min</p>
        
      ):("")}
    </div>
  </>


    }