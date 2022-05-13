const Course = (props) => {
    return (
        <>
            <Header name={props.name} />
            <Content parts={props.parts} />
            <Total parts={props.parts} />
        </>
    )
}

const Header = (props) => {
    return <h2>{props.name}</h2>
}

const Content = ({parts}) => {
    return (
        <>
            {parts.map(part => <Part key={part.id} name={part.name} exercises={part.exercises} />)}
        </>
    )
}

const Part = (props) => {
    return <p>{props.name} {props.exercises}</p>
}

const Total = ({parts}) => {
    const numExercises = parts.map(part => part.exercises)
    return <p><b>total of {numExercises.reduce((sum, num) => sum + num, 0)} exercises</b></p>
}

export default Course
