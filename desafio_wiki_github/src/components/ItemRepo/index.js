import { ItemContainer } from './styles'

export default function ItemRepo({ repo, handleRemove }) {
    return (
        <ItemContainer>
            <h3>{repo.name}</h3>
            <p>{repo.full_name}</p>
            <a href={repo.html_url} target='_blank'>Ver repositório</a><br/>
            <a onClick={() => handleRemove(repo.id)} className='remover'>Remover</a>
            <hr/>
        </ItemContainer>
    )
}