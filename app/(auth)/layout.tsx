


const AuthLayout = ({
    children
    // 在React中，children 是一个特殊的prop（属性），它用来表示组件标签内部传递的任何内容。在你的 AuthLayout 组件中，children 是用来传递该组件内部的React元素或组件的。
}:{
    children:React.ReactNode
}) => {
    return ( 
        <div className="flex items-center justify-center h-full">
            {children}
        </div>
     );
}
 
export default AuthLayout;