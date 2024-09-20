import "./styles.css"

export default function ItemList({title, description, href}) {

    const handleOnClick = () => {
        window.open(href, '_blank')
    }

    return (
        <div className="item-list">
            <strong onClick={handleOnClick}>{title}</strong>
            <p>{description}</p>
            <hr/>
        </div>
    )
}
