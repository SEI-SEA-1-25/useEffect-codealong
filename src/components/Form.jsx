import { useState, useEffect } from 'react'

const Form = () => {
    const [search, setSearch] = useState('h64')
    const [repos, setRepos] = useState([])

    // this only runs once
    useEffect(() => {
        async function fetchData() {
            const url = `http://api.github.com/users/${search}/repos`
            const response = await fetch(url)
            if(response.status === 200) {
                const json = await response.json()
                console.log(json)
                setRepos(json)
            }
        }
        fetchData()
    }, [search])


    const divs = repos.map((repo, idx) => <div key={idx}>{repo.name}</div>)
    return (
        <div>
            <form>
                <input 
                    type="text"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />
            </form>
            {divs}
        </div>
    )
}

export default Form