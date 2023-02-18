interface Props {
    digit: number;
    className?: string;
    extraStyle?: string;
}

function Digit({ digit, extraStyle, className }: Props) {
    return (
        <div className={`w-full h-full flex flex-col p-2 bg-neutral rounded-2xl 
        text-neutral-content ${extraStyle}`}>
            <div className={` font-bold ${className}`}>
                {digit.toLocaleString('en-US', {
                    minimumIntegerDigits: 2,
                    useGrouping: false
                })}
            </div>
        </div>
    )
}

export default Digit;