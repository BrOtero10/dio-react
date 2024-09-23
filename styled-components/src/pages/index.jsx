import { useState, useEffect, useMemo, useCallback } from "react"

export default function Teste() {

    const [name, setName] = useState('Bruno Otero')
    const [age, setAge] = useState(19)

    const handleNameChange = () => {
        setName(prev => prev == 'Bruno Otero' ? 'Vinícius Otero' : 'Bruno Otero')
    }

    // -- -- -- -- -- -- USEEFFECT -- -- -- -- -- -- -- --

    // useEffect(() => {
    //     alert('Renderizei');

    //     return () => { alert('Desmontei') }
    // }, [name])



    // -- -- -- -- -- -- USEMEMO -- -- -- -- -- -- -- --

    // const calculo = 10 * 1256455.504456

    // useMemo não será re-calculado,
    // apenas re-renderizado
    // desde que não haja alteração no array de dependências

    // useMemo = referencia em variaveis (const, var, let)

    const calculo = useMemo(() => {
        console.log('Calculou')
        return age + 10 * 12555.5456
    }, [age])

    console.log('Renderizou: ', calculo);


    // -- -- -- -- -- -- USECALLBACK -- -- -- -- -- -- -- --
    // Semelhante ao useMemo, porém define uma função
    // Por exemplo, mesmo que age altere, a função continuará
    // a printar o valor antigo, a não ser que algum valor
    // de suas dependências seja alterado

    // useCallback = referencia de funções

    const handleChangeAge = useCallback((e) => {
        console.log('Age atual: ', age)
        const newAge = 10 * age;
        console.log('New Age: ', newAge)
        setAge(e.target.value)
    }, [name])

    return (
        <>
        <br/>
        <div style={{display: 'flex'}}>
            <div>{name}</div>
            <button onClick={handleNameChange}>Mudar Nome</button>
        </div>
        <br/>
        <label>Idade: </label>
        <input type='number' value={age} onChange={(e) => handleChangeAge(e)} />
        </>
    )
}
