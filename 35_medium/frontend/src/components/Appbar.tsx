import { Avatar } from "./BlogCard"

export const Appbar = () => {
    return <div className="border-b flex items-center justify-between p-2 px-4 ">
        <div>
        Pen & Pulse
        </div>
        <div>
            <Avatar name="Xyrix" /> 
        </div>
    </div>
}