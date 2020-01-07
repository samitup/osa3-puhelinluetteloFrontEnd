import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Persons from './components/Persons'
import Notification from './components/Notification'


const App = () => {

    const hook = () => {
        console.log('effect')
        personService.getAll()
            .then(response => {
                console.log('promise fulfilled')
                setPersons(response.data)
            })

    }
    useEffect(hook, [])

    const [persons, setPersons] = useState([
        {
            name: 'Arto Hellas',
            number: '045-050192',
        }
    ])

    const [newName, setNewName] = useState('')
    const [newNumber, setNewNumber] = useState('')
    const [nameToCompare, setNameToCompare] = useState('')
    const [message, setMessage] = useState(null)
    const [messageColor, setMessageColor] = useState('')

    const handleFilterInputChange = (event) => {
        setNameToCompare(event.target.value)
    }

    const handleNameChange = (event) => {
        setNewName(event.target.value)
    }

    const handleNumberChange = (event) => {
        console.log(event.target.value)
        setNewNumber(event.target.value)
    }

    const addPerson = (event) => {
        event.preventDefault()
        const exists = persons.some(person => (person.name === newName));
        const personObject = {
            name: newName,
            number: newNumber,
            id: newName
        }

        if (exists === false) {
            personService
                .create(personObject)
                .then(createdPerson => {
                    setPersons(persons.concat(createdPerson.data))
                })
                .catch(error => {
                    console.log(error.response.data)
                    setMessageColor("red")
                    setMessage(`${error.response.data.error}`)
                    setTimeout(() => {
                        setMessage(null)
                    }, 5000)
                })
            setNewName('')
            setNewNumber('')
            setMessageColor("green")
            setMessage(
                `${newName} successfully added to phonebook!`)
            setTimeout(() => {
                setMessage(null)
            }, 5000)

        }

        const personUpdate = persons.find(person => person.name === newName)

        if (exists === true) {
            if (window.confirm(`${newName} is already in the phonebook, would you like to update the number?`)) {
                const updatedPerson = { ...personUpdate, number: newNumber }

                personService
                    .update(updatedPerson.id, updatedPerson)
                    .then(result => {
                        setPersons(persons.map(person => person.id !== updatedPerson.id ? person : updatedPerson))
                    }).then(response => response.data)
            }
            setNewName('')
            setNewNumber('')
            setMessageColor("green")
            setMessage(
                `${newName} successfully updated to phonebook!`)
            setTimeout(() => {
                setMessage(null)
            }, 5000)
        }

    }
    const deletePerson = id => {
        let name = persons.find(person => person.id === id).name

        if (window.confirm(`Delete person "${name}" ?`)) {
            personService
                .remove(id)
                .then(hook)
                .catch(error => {
                    error = `${name} already deleted from server, try to refresh`
                    setMessageColor("red")
                    setMessage(error)
                    setTimeout(() => {
                        setMessage(null)
                    }, 5000)
                })
            setMessageColor("green")
            setMessage(`${name} successfully deleted from phonebook! `)
            setTimeout(() => {
                setMessage(null)
            }, 5000)
        }

    }

    const namesToShow = nameToCompare ? persons.filter(person => person.name.toUpperCase().includes(nameToCompare.toUpperCase()) === true) : persons;

    return (
        <div>
            <h1>Phonebook</h1>
            <Notification message={message} messageColor={messageColor}></Notification>
            <Filter filterInputValue={nameToCompare} filterInputChangeFn={handleFilterInputChange} />
            <h1>Add a new</h1>
            <div>
                <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
            </div>
            <h1>Names  -  Numbers</h1>
            <div>
                {console.log(namesToShow)}
                <Persons name={namesToShow} onDeleteClick={deletePerson}></Persons>
            </div>
        </div>
    )
}
export default App