import { Menu } from "lucide-react";

import {
    Sheet,
    SheetContent,
    SheetTrigger
} from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar"


//  MobileSidebar 组件的布局和样式，特别是在不同屏幕尺寸下的显示行为。例如，Menu 组件在大屏幕上隐藏，
// 在小屏幕上显示；SheetContent 则定义了一个特定的样式和位置，用于在移动设备上展示侧边栏内容。
export const MobileSidebar = () => {
    return ( 
        <Sheet>
        <SheetTrigger className="md:hidden pr-4">
            <Menu />
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-secondary pt-10 w-32">
            <Sidebar />
        </SheetContent>
    </Sheet>
     );
}
 
