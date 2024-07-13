const StartQuestion = ({ startQuestion }: { startQuestion: () => void }) => {
    return <button onClick={startQuestion}
        content='go to start question'
        className='w-[80%] aspect-[11/1] btn bg-primary text-lg'
    >
        go to start question
    </button>

}

export default StartQuestion