// 这段代码定义了一个自定义的React钩子 useDebounce，它用于实现防抖功能。
// 防抖（debouncing）是一种在前端开发中常用的技术，用于限制函数在短时间内被频繁调用的次数。
// 这在处理例如输入框内容变化、窗口大小调整、API调用等情况时非常有用。
//  可以确保只有在用户停止键入一段时间后，才会进行搜索查询，从而减少不必要的API调用和渲染。

import { useEffect, useState} from "react";

export function useDebounce<T>(value:T,delay?: number): T{
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(value), delay || 500);
        return () => {
            clearTimeout(timer);
        }
    }, [value,delay]);
    return debouncedValue;
}