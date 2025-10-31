import { OrbitProgress } from "react-loading-indicators"

export default function Loading() {
    return (
        <div className="w-full h-[90vh] flex flex-col items-center justify-center">
            <OrbitProgress
                variant="track-disc"
                color="#0062ff"
                size="medium"
                text=""
                textColor="" />
        </div>
    )

}