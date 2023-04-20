export default function Square({ value, onSquareClick }) {
    return <button onClick={onSquareClick}>{value}</button>;
}