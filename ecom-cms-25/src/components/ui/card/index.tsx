export interface ICardComponentProps{
    data: string,
    classname?:string
}
export const CardComponent =(props: Readonly<ICardComponentProps>)=>{
    return (
        <>
        <div className={`flex w-full bg-black text-amber-500 p-5 ${props.classname}`}>{props.data}</div>
        </>
    )
}