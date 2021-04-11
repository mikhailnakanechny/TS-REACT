export type ButtonProps = {
    className: string;
    message: string;
    onClick: () => void;
};

export default function Button(props: ButtonProps) {
    return <button className="btn-main" onClick={props.onClick}>{props.message}</button>;
}