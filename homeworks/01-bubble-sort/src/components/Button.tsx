export type ButtonProps = {
    elemClass: string;
    message: string;
    onClick: () => void;
};

export default function Button(props: ButtonProps) {
    const {elemClass, message, onClick} = props;
    return <button className={elemClass} onClick={onClick}>{message}</button>;
}