import React, { useState, useEffect } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import personService from './services/persons'
import Persons from './components/Persons'
import Notification from './components/Notification'


const App = (props) => {

    const hook = () => {
        console.log('effect')
        personService.
      getAll()
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
            setPersons(persons.concat(personObject))
            setNewName('')
            setNewNumber('')
            setMessage(
                `${newName} successfully added to phonebook!`)
            setTimeout(() => {
                setMessage(null)
            }, 5000)
        }
        else if (exists === true) {
           if( window.confirm(`${newName} is already in the phonebook, replace number with a new one?`)){
               let id = newName;
            personService
            .update(id,personObject)
            .then(hook)
            setNewName('')
            setNewNumber('')
            setMessage(`${newName}'s number successfully updated to phonebook!`)
            setTimeout(() => {
                setMessage(null)
            }, 5000)
        }
        }
        

        personService
        .create(personObject)
        .then(response => {
            setPersons(persons.concat(response.data))
        })
      
    
    }
    const deletePerson= id => {
        let name =persons.find( person => person.id === id ).name

        if( window.confirm( `Delete person "${ name }" ?` ) ) {
        personService
        .remove(id)
        .then(hook)
        .catch(error => {
            error = `${name} already deleted from server, try to refresh`
            setMessage(error)
            setTimeout(() => {
                setMessage(null)
            }, 5000)
        })
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
            <Notification message={message}></Notification>
            <Filter filterInputValue={nameToCompare} filterInputChangeFn={handleFilterInputChange} />
            <h1>Add a new</h1>
            <div>
                <PersonForm addPerson={addPerson} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange} />
            </div>
            <h1>Names  -  Numbers</h1>
            <div>
                {console.log(namesToShow)}
          <Persons name = {namesToShow} onDeleteClick={deletePerson}></Persons>
            </div>
        </div>
    )
}
export default App