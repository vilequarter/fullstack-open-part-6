import { useSelector, useDispatch } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'

const AnecdoteList = () => {
  const anecdotes = useSelector(state => {
    return state.anecdotes.filter(
      anecdote => anecdote.content.toLowerCase().includes(state.filter.toLowerCase())
    )
  })

  const dispatch = useDispatch()

  const sendVote = (id) => {
    dispatch(vote(id));
  }

  const sortedAnecdotes = anecdotes.toSorted((a, b) => b.votes - a.votes)

  return (
    <div>
      {sortedAnecdotes.map((anecdote) => 
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => sendVote(anecdote.id)}>vote</button>
          </div>
        </div>
      )}
    </div>
  )
}

export default AnecdoteList