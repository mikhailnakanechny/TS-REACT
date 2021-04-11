export type ColumnProps = {
    el: number,
    id: number,
};

export default function Column(props: ColumnProps) {
    const {el, id} = props
    return (
        <div className="column-value" style={{ height: el }} key={id}>
            <span className="column-text" >{el}</span>
        </div>
    );
}