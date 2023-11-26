"use client"

import { cn } from "@/lib/utils";
import { UserButton } from "@clerk/nextjs";
import { Menu, Sparkles } from "lucide-react";
import { Poppins } from "next/font/google";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/ui/mode.toggle";
import { MobileSidebar } from "@/components/mobile-sidebar";

const font = Poppins({
    weight:"600",
    subsets: ["latin"]
})


export const Navbar = () => {
    return ( 
        // 下面这段使页面出现最上端一条灰色的线，这条线从左到右占据整个页面，像一个头帘
       <div className="fixed w-full z-50 flex justify-between
        items-center py-2 px-4border-b border-primary/10 bg-secondary h-16">
            <div className="flex items-center">
                {/* 下面一行的解释： md:hidden: 当屏幕尺寸达到Tailwind CSS定义的中等尺寸md或更大时。这个元素会被隐藏。 */}
                <MobileSidebar/>


                <Link href="/">
                    {/* md:block: 当屏幕尺寸达到中等尺寸（md）或更大时，这个元素会以块级元素的形式显示。 */}
                    <h1 className={cn("hidden md:block text-xl md:text-3xl font-bold text-primary",
                    font.className
                    )}>
                        companion.ai
                    </h1>
                </Link>
            </div>
            {/* 在头帘的最后端加上一个userButton这个组件 */}
            <div className="flex items-center gap-x-3">
                {/* 下面这一行仅仅只是一个黑色的丑陋的按钮 */}
                <Button variant="premium" size="sm">
                    Upgrade
                    <Sparkles className="h-4 w-4 fill-while text-white ml-2" />
                </Button>
                <ModeToggle />
                <UserButton />
            </div>
       </div>
     );
};
 